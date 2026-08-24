import { create } from "zustand";
import {
  SONGS,
  findLineIndex,
  findWordIndex,
  type SongId,
  type ViewMode,
  type CompiledSong,
} from "@/lib/anthem";
import * as engine from "@/lib/audio-engine";

type Theme = "dark" | "light";

function loadTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem("wct-theme") === "light" ? "light" : "dark";
}

type PlayerState = {
  songId: SongId;
  mode: ViewMode;
  theme: Theme;
  playing: boolean;
  currentMs: number;
  lineIndex: number;
  wordIndex: number;
  setSong: (id: SongId) => void;
  setMode: (mode: ViewMode) => void;
  toggleTheme: () => void;
  play: () => Promise<void>;
  pause: () => void;
  seek: (ms: number) => void;
  seekLine: (index: number) => void;
  seekSection: (sectionId: string) => void;
  tick: () => void;
};

let raf = 0;

function startClock(get: () => PlayerState) {
  cancelAnimationFrame(raf);
  const loop = () => {
    get().tick();
    if (get().playing) raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
}

export const usePlayer = create<PlayerState>((set, get) => ({
  songId: "en",
  mode: "karaoke",
  theme: loadTheme(),
  playing: false,
  currentMs: 0,
  lineIndex: 0,
  wordIndex: 0,

  setSong: (id) => {
    const song = SONGS[id];
    engine.pause();
    engine.setTrack(song.audioSrc, song.durationMs);
    set({
      songId: id,
      playing: false,
      currentMs: 0,
      lineIndex: 0,
      wordIndex: 0,
    });
  },

  setMode: (mode) => set({ mode }),

  toggleTheme: () =>
    set((s) => {
      const theme: Theme = s.theme === "dark" ? "light" : "dark";
      window.localStorage.setItem("wct-theme", theme);
      return { theme };
    }),

  play: async () => {
    const song = SONGS[get().songId];
    engine.setTrack(song.audioSrc, song.durationMs);
    engine.onEnded(() => {
      set({ playing: false });
      cancelAnimationFrame(raf);
    });
    await engine.play();
    set({ playing: true });
    startClock(get);
  },

  pause: () => {
    engine.pause();
    set({ playing: false });
    cancelAnimationFrame(raf);
  },

  seek: (ms) => {
    const song = SONGS[get().songId];
    const clamped = Math.max(0, Math.min(ms, song.durationMs));
    engine.seek(clamped);
    const lineIndex = findLineIndex(song.lines, clamped);
    const line = song.lines[lineIndex];
    const wordIndex = line ? findWordIndex(line, clamped) : 0;
    set({ currentMs: clamped, lineIndex, wordIndex });
  },

  seekLine: (index) => {
    const song = SONGS[get().songId];
    const line = song.lines[index];
    if (!line) return;
    get().seek(line.startMs);
  },

  seekSection: (sectionId) => {
    const song = SONGS[get().songId];
    const sec = song.sections.find((s) => s.id === sectionId);
    if (!sec) return;
    get().seek(sec.startMs);
  },

  tick: () => {
    const song = SONGS[get().songId];
    const ms = engine.nowMs();
    const lineIndex = findLineIndex(song.lines, ms);
    const line = song.lines[lineIndex];
    const wordIndex = line ? findWordIndex(line, ms) : 0;
    set({ currentMs: ms, lineIndex, wordIndex });
  },
}));

export function useSong(): CompiledSong {
  const id = usePlayer((s) => s.songId);
  return SONGS[id];
}

import type { SongId } from "@/lib/anthem";

export const UI_STRINGS = {
  en: {
    play: "Play",
    pause: "Pause",
    restart: "Back to start",
    progress: "Progress",
    interlude: "Interlude",
    songTabsLabel: "Select song",
    viewModeLabel: "View mode",
    lyricsTab: "Lyrics",
    sheetTab: "Sheet",
    sectionsLabel: "Song sections",
    toLightTheme: "Switch to light theme",
    toDarkTheme: "Switch to dark theme",
  },
  vi: {
    play: "Phát",
    pause: "Tạm dừng",
    restart: "Về đầu",
    progress: "Tiến độ",
    interlude: "Dạo nhạc",
    songTabsLabel: "Chọn bài hát",
    viewModeLabel: "Chế độ xem",
    lyricsTab: "Lời",
    sheetTab: "Nốt",
    sectionsLabel: "Phần bài hát",
    toLightTheme: "Chuyển sang giao diện sáng",
    toDarkTheme: "Chuyển sang giao diện tối",
  },
} as const;

export function uiStrings(songId: SongId) {
  return UI_STRINGS[songId];
}

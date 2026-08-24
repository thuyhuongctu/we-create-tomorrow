import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { usePlayer, useSong } from "@/lib/player-store";
import {
  BrandDuo,
  BrandStamp,
  BrandStampFallback,
  BrandWordmark,
} from "@/components/brand";
import { uiStrings } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function KaraokeStage() {
  const song = useSong();
  const songId = usePlayer((s) => s.songId);
  const lineIndex = usePlayer((s) => s.lineIndex);
  const wordIndex = usePlayer((s) => s.wordIndex);
  const playing = usePlayer((s) => s.playing);
  const currentMs = usePlayer((s) => s.currentMs);
  const play = usePlayer((s) => s.play);
  const seekLine = usePlayer((s) => s.seekLine);
  const scroller = useRef<HTMLDivElement>(null);
  const t = uiStrings(songId);
  const started = playing || currentMs > 80;
  const lines = song.lines;
  const sections = song.sections;
  const vocalOn = currentMs >= (lines[0]?.startMs ?? 0);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const el = root.querySelector<HTMLElement>(`[data-line="${lineIndex}"]`);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      block: "center",
      behavior: reduce ? "auto" : "smooth",
    });
  }, [lineIndex, song.id]);

  return (
    <div className="relative flex min-h-[28rem] flex-1 flex-col overflow-hidden">
      {!started ? (
        <div className="hero-glow relative flex flex-1 flex-col justify-end gap-4 overflow-hidden px-4 pb-6 pt-4 sm:justify-center sm:gap-0 sm:pb-8 sm:pt-6 lg:flex-row lg:items-end lg:justify-center lg:gap-8 lg:px-10">
          <img
            src="brand/scenery.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-luminosity"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/40" />
          <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center text-center lg:mx-0">
            <BrandStamp className="size-20 sm:size-24" />
            <BrandStampFallback className="size-20 sm:size-24" />
            <p className="mt-4 font-sans text-xs font-medium tracking-[0.22em] text-coral-bright uppercase">
              School of Economics · Cần Thơ University
            </p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
              {song.title}
            </h1>
            <p className="mt-2 max-w-md font-sans text-sm text-fg-muted">
              {song.subtitle}
            </p>
            <BrandWordmark className="mt-3 h-16 w-auto max-w-[min(100%,22rem)] sm:h-20" />
            <button
              type="button"
              onClick={() => void play()}
              className="mt-5 inline-flex h-12 items-center gap-2 rounded-xl bg-fg px-5 font-sans text-base font-medium text-ink transition-opacity hover:opacity-90 active:scale-[0.96]"
            >
              <Play className="size-4 fill-current" />
              {t.play}
            </button>
          </div>
          <BrandDuo className="relative z-10 order-first mx-auto h-40 w-auto sm:h-48 lg:order-none lg:h-[min(22rem,58vh)] lg:self-end" />
        </div>
      ) : (
        <div
          ref={scroller}
          className="lyric-stage min-h-0 flex-1 overflow-y-auto px-4 py-16 sm:px-8"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:gap-8">
            {!vocalOn ? (
              <p className="text-center font-sans text-xs font-medium tracking-[0.2em] text-coral-bright uppercase">
                {t.interlude}
              </p>
            ) : null}
            {lines.map((line, i) => {
              const dist = i - lineIndex;
              const active = i === lineIndex && vocalOn;
              const past = i < lineIndex;
              const sec = sections.find((s) => s.id === line.sectionId);
              const showLabel =
                i === 0 || lines[i - 1]?.sectionId !== line.sectionId;
              return (
                <div key={line.id} data-line={i} className="scroll-mt-24">
                  {line.cue ? (
                    <p className="mb-1 font-sans text-xs italic text-fg-muted">{line.cue}</p>
                  ) : null}
                  {showLabel && sec ? (
                    <p className="mb-3 font-sans text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
                      {sec.labelVi}
                      <span className="mx-2 text-fg-subtle/50">/</span>
                      {sec.labelEn}
                    </p>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => seekLine(i)}
                    className={cn(
                      "w-full text-left font-display transition-[color,opacity,transform] duration-300 ease-out",
                      line.role === "title"
                        ? "text-2xl font-medium sm:text-3xl"
                        : "text-lg sm:text-2xl",
                      line.role === "whisper" && "italic",
                      active && "text-fg",
                      past && "text-fg-subtle",
                      !active && !past && dist <= 2 && "text-fg-muted",
                      !active && !past && dist > 2 && "text-fg-subtle",
                    )}
                  >
                    {line.words.map((w, wi) => {
                      const on = active && wi === wordIndex && started;
                      const sung = active && wi < wordIndex && started;
                      return (
                        <span
                          key={`${line.id}-w${wi}`}
                          className={cn(
                            "mr-[0.28em] inline-block transition-colors duration-150",
                            on && "text-coral-bright",
                            sung && "text-fg",
                          )}
                        >
                          {w.text}
                        </span>
                      );
                    })}
                  </button>
                </div>
              );
            })}
            <div className="h-32" />
          </div>
        </div>
      )}
    </div>
  );
}

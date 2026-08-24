import { usePlayer, useSong } from "@/lib/player-store";
import { uiStrings } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SectionNav({ paper }: { paper: boolean }) {
  const song = useSong();
  const songId = usePlayer((s) => s.songId);
  const currentMs = usePlayer((s) => s.currentMs);
  const seekSection = usePlayer((s) => s.seekSection);
  const t = uiStrings(songId);

  return (
    <nav
      className={cn(
        "flex shrink-0 gap-2 overflow-x-auto border-b px-4 py-2 sm:px-6",
        paper ? "border-edge-paper bg-paper" : "border-edge bg-ink",
      )}
      aria-label={t.sectionsLabel}
    >
      {song.sections.map((sec) => {
        const active =
          currentMs >= sec.startMs &&
          (song.sections.find((s) => s.startMs > sec.startMs)?.startMs ??
            song.durationMs) > currentMs;
        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => seekSection(sec.id)}
            className={cn(
              "h-9 shrink-0 rounded-full px-3 font-sans text-xs font-medium transition-colors",
              active && paper && "bg-ink-fg text-paper",
              active && !paper && "bg-coral text-ink",
              !active && paper && "bg-paper-2 text-ink-muted hover:text-ink-fg",
              !active && !paper && "bg-ink-3 text-fg-muted hover:text-fg",
            )}
          >
            {songId === "en" ? sec.labelEn : sec.labelVi}
          </button>
        );
      })}
    </nav>
  );
}

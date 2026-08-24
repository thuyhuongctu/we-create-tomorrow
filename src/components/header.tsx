import { Music2, AlignLeft } from "lucide-react";
import { SONG_LIST, type SongId, type ViewMode } from "@/lib/anthem";
import { BrandStamp, BrandStampFallback } from "@/components/brand";
import { usePlayer, useSong } from "@/lib/player-store";
import { cn } from "@/lib/utils";

export function AppHeader({ paper }: { paper: boolean }) {
  const mode = usePlayer((s) => s.mode);
  const setMode = usePlayer((s) => s.setMode);
  const songId = usePlayer((s) => s.songId);
  const setSong = usePlayer((s) => s.setSong);
  const song = useSong();

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-6",
        paper ? "border-edge-paper bg-paper" : "border-edge bg-ink/90",
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        <BrandStamp className="size-11" />
        <BrandStampFallback className="size-11" />
        <div className="min-w-0">
          <p
            className={cn(
              "truncate font-display text-base font-medium leading-tight",
              paper ? "text-ink-fg" : "text-fg",
            )}
          >
            {song.title}
          </p>
          <p
            className={cn(
              "truncate font-sans text-xs",
              paper ? "text-ink-muted" : "text-fg-muted",
            )}
          >
            {song.subtitle}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div
          className={cn("flex rounded-lg p-1", paper ? "bg-paper-2" : "bg-ink-3")}
          role="tablist"
          aria-label="Chọn bài hát"
        >
          {SONG_LIST.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={songId === s.id}
              onClick={() => setSong(s.id as SongId)}
              className={cn(
                "h-11 min-w-11 rounded-md px-3 font-sans text-xs font-medium tracking-wide transition-colors duration-150 sm:text-sm",
                songId === s.id && paper && "bg-paper text-ink-fg shadow-sm",
                songId === s.id && !paper && "bg-ink-2 text-fg",
                songId !== s.id && paper && "text-ink-muted hover:text-ink-fg",
                songId !== s.id && !paper && "text-fg-muted hover:text-fg",
              )}
            >
              {s.langLabel}
            </button>
          ))}
        </div>

        <div
          className={cn("flex rounded-lg p-1", paper ? "bg-paper-2" : "bg-ink-3")}
          role="tablist"
          aria-label="Chế độ xem"
        >
          <ModeTab
            id="karaoke"
            label="Lời"
            icon={AlignLeft}
            active={mode === "karaoke"}
            paper={paper}
            onClick={() => setMode("karaoke")}
          />
          <ModeTab
            id="sheet"
            label="Nốt"
            icon={Music2}
            active={mode === "sheet"}
            paper={paper}
            onClick={() => setMode("sheet")}
          />
        </div>
      </div>
    </header>
  );
}

function ModeTab({
  id,
  label,
  icon: Icon,
  active,
  paper,
  onClick,
}: {
  id: ViewMode;
  label: string;
  icon: typeof Music2;
  active: boolean;
  paper: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      id={`tab-${id}`}
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "flex h-11 items-center gap-1.5 rounded-md px-3 font-sans text-sm font-medium transition-colors duration-150",
        active && paper && "bg-paper text-ink-fg shadow-sm",
        active && !paper && "bg-ink-2 text-fg",
        !active && paper && "text-ink-muted hover:text-ink-fg",
        !active && !paper && "text-fg-muted hover:text-fg",
      )}
    >
      <Icon className="size-3.5" />
      {label}
    </button>
  );
}

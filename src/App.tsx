import { AppHeader } from "@/components/header";
import { KaraokeStage } from "@/components/karaoke-stage";
import { PlayerBar } from "@/components/player-bar";
import { ScrollingStaff } from "@/components/staff";
import { SectionNav } from "@/components/section-nav";
import { SheetView } from "@/components/sheet-view";
import { Footer } from "@/components/footer";
import { usePlayer } from "@/lib/player-store";
import { cn } from "@/lib/utils";

export default function App() {
  const mode = usePlayer((s) => s.mode);
  const theme = usePlayer((s) => s.theme);
  const paper = theme === "light" || mode === "sheet";

  return (
    <div
      data-mode={mode}
      data-theme={theme}
      className={cn(
        "flex min-h-full min-h-dvh w-full flex-col font-sans",
        paper ? "bg-paper text-ink-fg" : "bg-ink text-fg",
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <AppHeader paper={paper} />
        <SectionNav paper={paper} />
        {mode === "karaoke" ? <ScrollingStaff /> : null}
        {mode === "karaoke" ? <KaraokeStage /> : <SheetView />}
        <PlayerBar paper={paper} />
      </div>
      <Footer paper={paper} />
    </div>
  );
}

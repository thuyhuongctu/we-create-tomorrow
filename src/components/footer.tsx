import { usePlayer } from "@/lib/player-store";
import { cn } from "@/lib/utils";

export function Footer({ paper }: { paper: boolean }) {
  const songId = usePlayer((s) => s.songId);
  const credit =
    songId === "en"
      ? "Anthem software for Trường Kinh tế, Đại học Cần Thơ (School of Economics, Cần Thơ University)"
      : "Phần mềm karaoke ca khúc nhận diện Trường Kinh tế, Đại học Cần Thơ";

  return (
    <footer
      className={cn(
        "shrink-0 border-t px-4 py-3 text-center font-sans text-[11px]",
        paper ? "border-edge-paper bg-paper text-ink-muted" : "border-edge bg-ink text-fg-subtle",
      )}
    >
      <p className="mx-auto max-w-2xl leading-relaxed">
        {credit}
        <span className="mx-2 opacity-50">·</span>© 2026 Phan Anh Tú, Đỗ Thùy Hương
        <span className="mx-2 opacity-50">·</span>
        <a
          href="https://doi.org/10.5281/zenodo.22080061"
          target="_blank"
          rel="noreferrer"
          className={cn("underline underline-offset-2", paper ? "hover:text-ink-fg" : "hover:text-fg")}
        >
          DOI 10.5281/zenodo.22080061
        </a>
      </p>
    </footer>
  );
}

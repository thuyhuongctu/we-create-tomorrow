import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrailerModal({
  open,
  onClose,
  closeLabel,
}: {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className={cn(
            "absolute right-2 top-2 z-10 flex size-9 items-center justify-center rounded-full",
            "bg-black/50 text-white hover:bg-black/70",
          )}
        >
          <X className="size-4" />
        </button>
        <video
          src="trailer.mp4"
          controls
          autoPlay
          playsInline
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

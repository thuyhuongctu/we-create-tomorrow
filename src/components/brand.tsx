import { cn } from "@/lib/utils";

export function BrandStamp({
  className,
  alt = "We Create Tomorrow",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src="brand/stamp.png"
      alt={alt}
      width={128}
      height={128}
      className={cn("size-10 shrink-0 rounded-full object-cover", className)}
      onError={(e) => {
        // Fallback circle if logo file missing
        const el = e.currentTarget;
        el.style.display = "none";
        const fallback = el.nextElementSibling as HTMLElement | null;
        if (fallback) fallback.style.display = "flex";
      }}
    />
  );
}

export function BrandStampFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "hidden size-10 shrink-0 items-center justify-center rounded-full bg-coral font-display text-sm italic text-paper",
        className,
      )}
      aria-hidden
    >
      WCT
    </div>
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <img
      src="brand/wordmark.png"
      alt="We Create Tomorrow"
      className={cn("h-16 w-auto max-w-full object-contain object-center", className)}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

export function BrandDuo({ className }: { className?: string }) {
  return (
    <img
      src="brand/duo.png"
      alt=""
      className={cn("pointer-events-none select-none object-contain", className)}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

export function BrandCredit({ paper = false }: { paper?: boolean }) {
  return (
    <p
      className={cn(
        "font-sans text-xs tracking-[0.16em] uppercase",
        paper ? "text-ink-muted" : "text-fg-subtle",
      )}
    >
      Je m'appelle Hương · Lecturer & Researcher
    </p>
  );
}

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const timeFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Ho_Chi_Minh",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function VietnamClock({
  paper,
  label,
  className,
}: {
  paper: boolean;
  label: string;
  className?: string;
}) {
  const [now, setNow] = useState(() => timeFmt.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setNow(timeFmt.format(new Date())), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-sans text-xs tabular-nums",
        paper ? "bg-paper-2 text-ink-muted" : "bg-ink-3 text-fg-muted",
        className,
      )}
      title={label}
    >
      <Clock className="size-3.5" />
      <span className="font-medium">{now}</span>
      <span className="opacity-70">GMT+7</span>
    </div>
  );
}

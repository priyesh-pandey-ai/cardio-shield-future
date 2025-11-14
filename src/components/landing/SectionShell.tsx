import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  tint?: "teal" | "rose" | "amber" | "slate";
  className?: string;
  contentClassName?: string;
};

const gradientMap: Record<NonNullable<SectionShellProps["tint"]>, string> = {
  teal: "from-teal-400/40 via-emerald-300/30 to-transparent",
  rose: "from-rose-400/40 via-pink-300/30 to-transparent",
  amber: "from-amber-300/40 via-orange-200/30 to-transparent",
  slate: "from-slate-400/30 via-slate-200/20 to-transparent",
};

const SectionShell = ({
  id,
  tint = "teal",
  children,
  className,
  contentClassName,
}: SectionShellProps) => {
  return (
    <section id={id} className={cn("relative py-10 sm:py-14", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-12 flex justify-center">
        <div
          className={cn(
            "w-[80%] max-w-5xl h-36 rounded-[30px] blur-[85px] opacity-55 pointer-events-none",
            `bg-gradient-to-br ${gradientMap[tint]}`
          )}
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div
          className={cn(
            "rounded-[24px] border border-white/70 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.07)] backdrop-blur-sm p-5 sm:p-6 lg:p-8",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionShell;

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-semibold tracking-wider uppercase px-3 py-1 border",
  {
    variants: {
      variant: {
        gold: "border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] bg-[rgba(201,161,90,0.08)]",
        steel: "border-[var(--color-brand-border)] text-[var(--color-brand-muted)] bg-[var(--color-brand-steel)]",
        green: "border-green-700 text-green-400 bg-green-950/40",
        outline: "border-[var(--color-brand-border)] text-[var(--color-brand-body)] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

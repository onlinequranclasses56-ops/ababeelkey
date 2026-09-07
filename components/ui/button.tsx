"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-black)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "gradient-gold text-[#0A0A0B] shadow-[0_2px_12px_rgba(201,161,90,0.4)] hover:shadow-[0_4px_20px_rgba(201,161,90,0.6)] hover:brightness-110 active:scale-[0.98]",
        secondary:
          "border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] bg-transparent hover:bg-[rgba(201,161,90,0.08)] active:scale-[0.98]",
        ghost:
          "text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)]",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_2px_12px_rgba(37,211,102,0.35)] hover:bg-[#22bf5b] hover:shadow-[0_4px_20px_rgba(37,211,102,0.5)] active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

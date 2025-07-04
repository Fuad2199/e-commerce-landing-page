import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "text-slate-50 shadow dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
      },
      size: {
        default: "h-9 px-4 py-2",
      },
      icon: {
        none: "none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      icon: "none",
    },
  }
)

function Button({
  className,
  variant,
  size,
  icon,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, icon, className }))}
      {...props}
    />
  )
}
Button.displayName = "RectangleButton"

export { Button as RectangleButton, buttonVariants }

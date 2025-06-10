import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center text-xs font-semibold w-fit capitalize cursor-pointer",
  {
    variants: {
     variant: {
        // colors of badge
         primary:"",
         secondary:"",
         success:"",
         danger:"",
         warning:"bg-warning-500 border border-warning-500 hover:bg-warning-600 disabled:bg-warning-200 dark:text-black dark:hover:bg-warning-700 dark:border-warning-500 dark:disabled:bg-danger-200 dark:disabled:border-danger-200 px-2.5 py-0.5",
         outline:"",
         gray:""
      },

      //active
      active:{
        true: "",
        false:""
      },
      size: {
        rounded: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      active: false
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

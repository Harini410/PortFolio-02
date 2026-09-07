import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#0f2b5c] text-white shadow-xs hover:bg-[#0a1c38] active:bg-[#08152b]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[#0f2b5c]/30 bg-white text-[#0f2b5c] shadow-xs hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white dark:bg-card dark:border-[#0f2b5c]/40 dark:text-sky-300 dark:hover:bg-[#0f2b5c]/20 dark:active:bg-[#0f2b5c]",
        secondary:
          "bg-[#0f2b5c]/10 text-[#0f2b5c] shadow-xs hover:bg-[#0f2b5c]/20 active:bg-[#0f2b5c] active:text-white dark:bg-slate-800 dark:text-sky-300",
        ghost:
          "hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white dark:hover:bg-[#0f2b5c]/20 dark:hover:text-sky-300",
        link: "text-[#0f2b5c] underline-offset-4 hover:underline dark:text-sky-400",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

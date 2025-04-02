import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type ButtonProps = { 
  variant?: 'primary' | 'secondary' | 'tertiary'
  block?: boolean
} & HTMLAttributes<HTMLButtonElement>
 
const classes = cva("text-sm tracking-widest uppercase font-bold h-10 px-6 rounded-lg cursor-pointer", {
  variants: {
    block: {
      true: "w-full"
    },

    variant: {
      primary: "border-2 border-transparent [background:linear-gradient(#030712,#030712)_padding-box,conic-gradient(from_45deg,#8b5cf6,#e879f9,#fbbf24,#2dd4bf,#8b5cf6)_border-box]",
      secondary: '',
      tertiary: "bg-gray-800 text-gray-200"
    },

    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },

  defaultVariants: {
    variant: "primary",
    block: false,
  },
});

export default function Button(props: ButtonProps){
    const { className = "", children, ...rest } = props

    return(
        <button
            className={classes({ ...rest, className })}
        >
          {children}
        </button>
    )
}
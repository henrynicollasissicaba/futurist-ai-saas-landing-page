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
      primary: "border-gradient",
      secondary: "bg-gray-100 text-gray-950 ",
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
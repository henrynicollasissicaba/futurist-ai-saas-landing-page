"use client"

import { cva } from "class-variance-authority";
import { HTMLAttributes, useEffect, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

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
    const [isHovered, setIsHovered] = useState(false)
    const angle = useMotionValue(45)
    const background = useMotionTemplate `linear-gradient(#030712,#030712) padding-box, conic-gradient(from ${angle}deg,#8b5cf6,#e879f9,#fbbf24,#2dd4bf,#8b5cf6) border-box`

    useEffect(() => {
      if(isHovered){
        animate(angle, angle.get() + 360, {
          duration: 1,
          ease: "linear",
          repeat: Infinity
        })
      } else {
        animate(angle, 45, { duration: 0.5 })
      }
    }, [isHovered, angle])

    return(
        <motion.button
            className={classes({ ...rest, className })}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={props.variant === "primary" ? { background } : undefined}
        >
          {children}
        </motion.button>
    )
}
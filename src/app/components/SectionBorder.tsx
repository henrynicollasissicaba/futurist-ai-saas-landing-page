import { HTMLAttributes } from "react";  
import { twMerge } from "tailwind-merge";

export default function SectionBorder(props: HTMLAttributes<HTMLDivElement>){
    return(
        <div className={twMerge("border-l border-r border-color-border", props.className)}>
            {props.children}
        </div>
    )
}
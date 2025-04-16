import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

function Orbit(props: HTMLAttributes<HTMLDivElement>){
    return(
        <div
            className={twMerge("border border-gray-200/30 rounded-full absolute-center -z-10 isolate", props.className)}
        ></div>
    )
}

interface OrbitsSystemProps {
    count: number
    baseSize: number
}

export default function OrbitsSystem({ count, baseSize }: OrbitsSystemProps){
    return(
        <>
            {Array.from({ length: count }).map((_, i) => {
                const size = baseSize + (i * 150)

                return(
                    <Orbit 
                        key={i}
                        className={`size-[${size}px]`}
                    />
                )
            })}
        </>
    )
}
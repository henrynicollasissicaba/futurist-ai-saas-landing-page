import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface OrbitProps extends HTMLAttributes<HTMLDivElement>{
    size?: number
    className?: string
}

function Orbit({ size, className }: OrbitProps){
    return(
        <div
            className={twMerge(`border border-gray-200/30 rounded-full size-[${size}px]`, className)}
        ></div>
    )
}

interface OrbitsSystemProps {
    count: number
    baseSize?: number
    step?: number
}

function OrbitsSystem({ count, baseSize = 200, step = 150 }: OrbitsSystemProps){
    return(
        <>
            {Array.from({ length: count }).map((_, i) => {
                const size = baseSize + (i * step)

                return(
                    <div className="absolute-center isolate -z-10" key={i}>
                        <Orbit 
                            size={size}
                        />
                    </div>
                )
            })}
        </>
    )
}

export { Orbit, OrbitsSystem }
function Orbit({ size }: { size: number }){
    return(
        <div
            className="border border-gray-200/30 rounded-full"
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
        ></div>
    )
}

interface OrbitsSystemProps {
    count: number
    baseSize?: number
    step?: number
}

export default function OrbitsSystem({ count, baseSize = 200, step = 150 }: OrbitsSystemProps){
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
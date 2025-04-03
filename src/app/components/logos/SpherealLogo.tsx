import imageLogo from "@/assets/sphereal-logo.svg"
import { cva } from "class-variance-authority"
import { HTMLAttributes } from "react"

type SpherealLogoProps = {
    size: "sm" | "lg"

} & HTMLAttributes<HTMLDivElement>

const classes = cva("bg-gray-200 bg-[conic-gradient(from_45deg,#8b5cf6,#e879f9,#fbbf24,#2dd4bf,#8b5cf6)]", {
    variants: {
        size: {
            sm: "size-10",
            lg: "size-24"
        }
    }
})

export default function SpherealLogo(props: SpherealLogoProps){
    return(
        <div 
            className={classes({ size: props.size })}
            style={{
                maskImage: `url(${imageLogo.src})`,
                maskSize: "contain"
            }}
        ></div>
    )
}
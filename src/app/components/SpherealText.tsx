import underlineImage from "@/assets/underline.svg"

export default function SpherealText(){
    return(
        <>
            <span>Sphereal</span>
            <span 
                className="bg-[linear-gradient(to_right,#fbbf24,#2dd4bf,#8b5cf6,#e879f9)]
                absolute top-full left-0 w-full h-4 -translate-y-1/2"
                style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat"
                }}
            ></span>
        </>
    )
}
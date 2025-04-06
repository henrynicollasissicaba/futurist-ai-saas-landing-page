"use client"

import Button from "../Button";
import Orbit from "../Orbit";
import Planet from "../Planet";
import SectionBorder from "../SectionBorder";
import SectionContent from "../SectionContent";
import underlineImage from "@/assets/underline.svg"
import { useMousePosition } from "./Hero";
import { motion, useSpring, useTransform } from "framer-motion";

export default function CallToAction(){
    const { xProgress, yProgress } = useMousePosition()

    const springX = useSpring(xProgress)
    const springY = useSpring(yProgress)

    const translateX = useTransform(springX, [0, 1], ['-25%', '25%'])
    const translateY = useTransform(springY, [0, 1], ['-25%', '25%'])

    return(
        <section>
            <div className="container">
                <SectionBorder borderTop>
                    <SectionContent className="relative isolate">
                        <div 
                            className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,#721378_50%,#312c85_75%,transparent)]
                            [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10" 
                        />
                        <div className="absolute inset-0 -z-10">
                            <Orbit className="size-[200px] absolute-center"/>
                            <Orbit className="size-[350px] absolute-center"/>
                            <Orbit className="size-[500px] absolute-center"/>
                            <Orbit className="size-[650px] absolute-center"/>
                            <Orbit className="size-[800px] absolute-center"/>
                        </div>
                        <motion.div 
                            className="absolute-center -z-10"
                            style={{
                                x: translateX,
                                y: translateY
                            }}
                        >
                            <Planet 
                                size="lg" 
                                color="violet"
                                className="translate-y-[200px] -translate-x-[200px] rotate-45"
                            />
                            <Planet 
                                size="lg" 
                                color="violet"
                                className="-translate-y-[200px] translate-x-[200px] -rotate-135"
                            />
                            <Planet 
                                size="md" 
                                color="teal"
                                className="-translate-x-[500px] rotate-90"
                            />
                            <Planet 
                                size="md" 
                                color="teal"
                                className="translate-x-[500px] -translate-y-[100px] -rotate-135"
                            />
                            <Planet 
                                size="sm" 
                                color="fuchsia"
                                className="-translate-x-[400px] -translate-y-[250px] rotate-135"
                            />
                            <Planet 
                                size="sm" 
                                color="fuchsia"
                                className="translate-x-[400px] translate-y-[150px] -rotate-45"
                            />
                        </motion.div>
                        <h2 
                            className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl text-center leading-tight
                            max-w-3xl mx-auto"
                        >
                            Join the AI Revolution with{" "} 
                            <span className="relative isolate">
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
                            </span>
                        </h2>
                        <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
                            Experience the transformative power of AI with Sphereal. Boost your productivity and strealine
                            your workflow with our innovate Ai chat platform.
                        </p>
                        <div className="flex justify-center mt-10">
                            <Button variant="secondary">Get started</Button>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
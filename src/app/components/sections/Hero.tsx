"use client"

import robotImage from "@/assets/robot.jpg"
import Image from "next/image"
import Button from "../Button"
import underlineImage from "@/assets/underline.svg"
import Planet from "../Planet"
import SectionBorder from "../SectionBorder"
import SectionContent from "../SectionContent"
import LoaderAnimated from "../LoaderAnimated"
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { OrbitsSystem } from "../Orbit"
import HeroPlanets from "../planets/HeroPlanets"

export const useMousePosition = () => {
    const [innerWidth, setInnerWidth] = useState(1)
    const [innerHeight, setInnerHeight] = useState(1)
    const clientX = useMotionValue(0)
    const clientY = useMotionValue(0)
    const xProgress = useTransform(clientX, [0, innerWidth], [0, 1])
    const yProgress = useTransform(clientY, [0, innerHeight], [0, 1])

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)

        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
            setInnerHeight(window.innerHeight)
        })
    }, [])

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            clientX.set(e.clientX)
            clientY.set(e.clientY)
        })
    }, [])

    return { xProgress, yProgress }
}

export default function Hero(){
    const { xProgress, yProgress } = useMousePosition()
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['end start', 'start end']
    })

    const springX = useSpring(xProgress)
    const springY = useSpring(yProgress)

    const translateX = useTransform(springX, [0, 1], ['-25%', '25%'])
    const translateY = useTransform(springY, [0, 1], ['-25%', '25%'])
    
    const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200])

    return(
        <section ref={sectionRef}>
            <div className="container">
                <SectionBorder>
                    <SectionContent 
                        className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
                    >
                        <div 
                            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,#721378_50%,#312c85_75%,transparent)]
                            [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"
                        ></div>

                        <OrbitsSystem 
                            count={5}
                            baseSize={350}
                            step={250}
                        />

                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-100 leading-tight
                            max-w-4xl mx-auto"
                        >
                            Unlock the Future of AI Conversations with{" "}
                            <span className="relative">
                                <span>Sphereal</span>
                                <span 
                                    className="absolute top-full left-0 w-full h-4 -translate-y-1/2 bg-[linear-gradient(to_right,#fbbf24,#2dd4bf,#8b5cf6,#e879f9)]"
                                    style={{
                                        maskImage: `url(${underlineImage.src})`,
                                        maskSize: "contain",
                                        maskPosition: "center",
                                        maskRepeat: "no-repeat"
                                    }}
                                ></span>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-center mt-8 max-w-3xl mx-auto">
                            Harness the power of AI with Sphereal. Elevate your productivity and streamline your workflow with 
                            our cutting-edge AI chat platform.
                        </p>
                        <div className="flex justify-center">
                            <Button 
                                variant="secondary"
                                className="mt-10"
                            >
                                Start Chatting
                            </Button>
                        </div>
                        <div className="relative isolate max-w-5xl mx-auto">
                            <motion.div 
                                className="absolute left-1/2 top-0" 
                                style={{
                                    x: translateX,
                                    y: translateY
                                }}
                            >
                                <HeroPlanets />
                            </motion.div>
                            <div className="absolute top-[30%] left-0 z-10 -translate-x-10 hidden lg:block">
                                <motion.div 
                                    className="bg-gray-800/70 backdrop-blur-md rounded-xl border border-gray-700 p-4 w-72"
                                    style={{
                                        y: transformedY
                                    }}
                                >
                                    <div>Can you generate an incredible frontend dev video tutorial?</div>
                                    <div className="text-right text-gray-400 text-sm font-semibold">1m ago</div>
                                </motion.div>
                            </div>
                            <div className="absolute top-[50%] right-0 z-10 translate-x-10 hidden lg:block">
                                <motion.div 
                                    className="bg-gray-800/70 backdrop-blur-md rounded-xl border border-gray-700 p-4 w-72"
                                    style={{
                                        y: transformedY
                                    }}
                                >
                                    <div>
                                        <strong>Brainwave: </strong>I created one based on videos for Frontend Tribe!
                                    </div>
                                    <div className="text-right text-gray-400 text-sm font-semibold">Just now</div>
                                </motion.div>
                            </div>
                            <div className="mt-20 rounded-2xl overflow-hidden border-gradient relative flex">
                                <Image 
                                    src={robotImage}
                                    alt="robot img"
                                />
                                <div 
                                    className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full 
                                    max-w-xs px-4"
                                >
                                    <div 
                                        className="bg-gray-950/80 flex items-center w-[320px] max-w-full px-4 py-2 rounded-2xl gap-4"
                                    >
                                        <LoaderAnimated className="text-violet-400" />
                                        <div className="font-semibold text-sm md:text-lg lg:text-xl text-gray-100">
                                            AI is generating<span className="animate-cursor-blink">|</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
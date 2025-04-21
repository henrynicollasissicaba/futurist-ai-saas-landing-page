"use client"

import Button from "../Button";
import SectionBorder from "../SectionBorder";
import SectionContent from "../SectionContent";
import useMousePosition from "@/app/hooks/useMousePosition";
import { motion, useSpring, useTransform } from "framer-motion";
import CallToActionPlanets from "../planets/CallToActionPlanets";
import SpherealText from "../SpherealText";
import OrbitsCallToAction from "../orbits/OrbitsCallToAction";

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

                        <OrbitsCallToAction />

                        <motion.div 
                            className="absolute-center -z-10"
                            style={{
                                x: translateX,
                                y: translateY
                            }}
                        >
                            <CallToActionPlanets />
                        </motion.div>

                        <h2 
                            className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl text-center leading-tight
                            max-w-3xl mx-auto"
                        >
                            Join the AI Revolution with{" "} 
                            <span className="relative isolate">
                                <SpherealText />
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
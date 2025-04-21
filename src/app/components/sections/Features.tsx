"use client"

import SectionBorder from "../SectionBorder"
import SectionContent from "../SectionContent"
import Button from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import Orbit from "../Orbit"
import SpherealLogo from "../logos/SpherealLogo"
import Image from "next/image"
import { motion } from "framer-motion"
import { features, logos } from "@/app/utils/featuresLogos"

export default function Features(){
    return(
        <section id="features">
            <div className="container">
                <SectionBorder borderTop>
                    <SectionContent className="md:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200">Your AI-powered collaboration companion</h2>
                                <ul className="mt-12 flex flex-col gap-8">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-4">
                                            <FontAwesomeIcon icon={faCircleCheck} className="!size-6 text-violet-400" />
                                            <span className="font-medium text-xl">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="primary" className="mt-16">
                                    Try it now
                                </Button>
                            </div>
                            <div className="flex justify-center">
                                <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0">
                                    <div className="absolute inset-0">
                                        <Orbit className="size-full"/>
                                    </div>
                                    <div className="absolute-center">
                                        <Orbit className="size-[180px] md:size-[300px]"/>
                                    </div>
                                    <div className="absolute-center">
                                        <SpherealLogo size="lg"/>
                                    </div>
                                    {logos.map(({ src, alt, rotate }) => (
                                        <motion.div 
                                            className="absolute inset-0"
                                            initial={{ rotate }}
                                            transition={{
                                                duration: 15,
                                                repeat: Infinity
                                            }}
                                            animate={{
                                                rotate: [
                                                    rotate,
                                                    rotate + 45,
                                                    rotate + 45,
                                                    rotate + 90,
                                                    rotate + 90,
                                                    rotate + 135,
                                                    rotate + 135,
                                                    rotate + 180, 
                                                    rotate + 180,
                                                    rotate + 225,
                                                    rotate + 225,
                                                    rotate + 270,
                                                    rotate + 270,
                                                    rotate + 315,
                                                    rotate + 315,
                                                    rotate + 360,
                                                    rotate + 360
                                                ]
                                            }}
                                            key={alt}
                                        >
                                            <motion.div 
                                                className="inline-flex size-10 md:size-14 items-center justify-center border 
                                                bg-gray-950 border-color-border rounded-lg absolute left-0 top-1/2 
                                                -translate-x-1/2 -translate-y-1/2"
                                                initial={{ 
                                                    translate: `-50%, -50%`,
                                                    rotate: -rotate
                                                }}
                                                transition={{
                                                    duration: 15,
                                                    repeat: Infinity
                                                }}
                                                animate={{
                                                    rotate: [
                                                        -rotate,
                                                        -rotate - 45,
                                                        -rotate - 45,
                                                        -rotate - 90,
                                                        -rotate - 90,
                                                        -rotate - 135,
                                                        -rotate - 135,
                                                        -rotate - 180, 
                                                        -rotate - 180,
                                                        -rotate - 225,
                                                        -rotate - 225,
                                                        -rotate - 270,
                                                        -rotate - 270,
                                                        -rotate - 315,
                                                        -rotate - 315,
                                                        -rotate - 360,
                                                        -rotate - 360
                                                    ]
                                                }}
                                            >
                                                <Image src={src} alt={alt} className="size-6 md:size-9" />
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
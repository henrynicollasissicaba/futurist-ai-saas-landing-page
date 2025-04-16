"use client"

import SectionBorder from "../SectionBorder";
import SectionContent from "../SectionContent";
import React, { useState } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { testimonials } from "@/app/utils/testimonials";

export default function Testimonials(){
    const [testimonialIndex, setTestimonialIndex] = useState(0)


    return(
        <section id="testimonials">
            <div className="container">
                <SectionBorder borderTop>
                    <SectionContent>
                        <LayoutGroup>
                            <motion.div 
                                className="border-gradient rounded-3xl px-6 md:px-10 py-16 relative flex flex-col gap-12 md:mx-10
                                md:flex-row lg:px-16 lg:py-24 lg:mx-20"
                                layout
                            >
                                <FontAwesomeIcon 
                                    icon={faQuoteLeft}
                                    className="absolute !size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"
                                />
                                <AnimatePresence mode="wait" initial={false}>
                                    {testimonials.map((testimonial, index) => (
                                        testimonialIndex === index && (
                                            <motion.blockquote
                                                key={testimonial.name}
                                                className="flex flex-col lg:flex-row gap-12"
                                                initial={{ opacity: 0, y: 25 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 25 }}
                                                transition={{ duration: 0.5 }}
                                                layout
                                            >
                                                <p className="text-xl md:text-2xl font-medium">
                                                    {testimonial.quote}
                                                </p>
                                                <cite className="not-italic lg:text-right">
                                                    <Image 
                                                        src={testimonial.image} 
                                                        alt={testimonial.name}
                                                        className="rounded-xl size-28 max-w-none"
                                                    />
                                                    <div className="font-bold mt-4">{testimonial.name}</div>
                                                    <div className="text-sm text-gray-400 mt-2">{testimonial.title}</div>
                                                </cite>
                                            </motion.blockquote>
                                        )
                                    ))}
                                </AnimatePresence>
                                <motion.div className="flex gap-2 md:flex-col justify-center md:justify-normal" layout="position">
                                    {testimonials.map((testimonial, index) => (
                                        <div 
                                            key={testimonial.name} 
                                            className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer"
                                            onClick={() => setTestimonialIndex(index)}
                                        >
                                            {testimonialIndex === index && (
                                                <motion.div 
                                                    className="absolute border-gradient size-full rounded-full -z-10"
                                                    layoutId="testimonial-dot"
                                                />
                                            )}
                                            <div className="size-1.5 bg-gray-200 rounded-full"></div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </LayoutGroup>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
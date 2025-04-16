"use client"

import { companies } from "@/app/utils/companies"
import SectionBorder from "../SectionBorder"
import SectionContent from "../SectionContent"
import { motion } from "framer-motion"

export default function Companies(){
    return(
        <section>
            <div className="container">
                <SectionBorder>
                    <SectionContent className="!pt-0">
                        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-500">
                            Empowering creators at leading companies
                        </h2>
                        <div className="flex mt-20 overflow-x-clip -mx-4">
                            <motion.div 
                                className="flex flex-none gap-18 md:gap-36 px-9 md:px-18"
                                initial={{ x:0 }}
                                animate={{ x: "-50%" }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...companies, ...companies].map(({ logo: Logo }, index) => (
                                    <div key={index}>
                                        <Logo className="h-8" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
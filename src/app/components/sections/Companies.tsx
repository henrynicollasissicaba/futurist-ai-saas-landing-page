"use client"

import AcmeLogo from "../logos/AcmeLogo"
import ApexLogo from "../logos/ApexLogo"
import CelestialLogo from "../logos/CelestialLogo"
import EchoValleyLogo from "../logos/EchoValleyLogo"
import OutsideLogo from "../logos/OutsideLogo"
import PulseLogo from "../logos/PulseLogo"
import QuantumLogo from "../logos/QuantumLogo"
import SectionBorder from "../SectionBorder"
import SectionContent from "../SectionContent"
import { motion } from "framer-motion"

const companies = [
    {
        name: "Acme",
        logo: AcmeLogo
    },
    {
        name: "Apex",
        logo: ApexLogo
    },
    {
        name: "Celestial",
        logo: CelestialLogo
    },
    {
        name: "Echo Valley",
        logo: EchoValleyLogo
    },
    {
        name: "Outside",
        logo: OutsideLogo
    },
    {
        name: "Pulse",
        logo: PulseLogo
    },
    {
        name: "Quantum",
        logo: QuantumLogo
    },
]

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
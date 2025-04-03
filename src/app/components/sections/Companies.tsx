import AcmeLogo from "../logos/AcmeLogo"
import ApexLogo from "../logos/ApexLogo"
import CelestialLogo from "../logos/CelestialLogo"
import EchoValleyLogo from "../logos/EchoValleyLogo"
import OutsideLogo from "../logos/OutsideLogo"
import PulseLogo from "../logos/PulseLogo"
import QuantumLogo from "../logos/QuantumLogo"
import SectionBorder from "../SectionBorder"
import SectionContent from "../SectionContent"

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
                            <div className="flex flex-none gap-18 md:gap-36 px-12">
                                {companies.map(({ name, logo: Logo }) => (
                                    <div key={name}>
                                        <Logo className="h-8" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
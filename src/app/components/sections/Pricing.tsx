import { twMerge } from "tailwind-merge";
import Button from "../Button";
import SectionBorder from "../SectionBorder";
import SectionContent from "../SectionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { pricingTiers } from "@/app/utils/pricing";

export default function Pricing(){
    return(
        <section id="pricing">
            <div className="container">
                <SectionBorder borderTop>
                    <SectionContent>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-200 font-semibold leading-tight">
                            Flexible plans for every need
                        </h2>
                        <div className="mt-12 flex flex-col lg:flex-row lg:items-start gap-8 lg:px-4">
                            {pricingTiers.map((tier) => (
                                <div 
                                    key={tier.title}
                                    className={twMerge("border border-color-border rounded-3xl px-6 py-12 max-w-sm w-full mx-auto flex-1",
                                        tier.className
                                    )}
                                >
                                    <h3 
                                        className={twMerge("font-semibold text-4xl",
                                            tier.color === "violet" && "text-violet-400",
                                            tier.color === "amber" && "text-amber-300",
                                            tier.color === "teal" && "text-teal-300",
                                        )}
                                    >
                                        {tier.title}
                                    </h3>
                                    <p className="mt-4 text-gray-400">{tier.description}</p>
                                    <div className="mt-8">
                                        {typeof tier.price === "number" && (
                                            <span className="text-2xl font-semibold text-gray-200 align-top">
                                                $
                                            </span>
                                        )}
                                        <span className="text-7xl font-semibold text-gray-200">
                                            {tier.price ? tier.price : <>&nbsp;</>}
                                        </span>
                                    </div>
                                    <Button 
                                        className="mt-8"
                                        variant={tier.buttonVariant || "secondary"}
                                        block
                                    >
                                        {tier.buttonText}
                                    </Button>
                                    <ul className="flex flex-col gap-4 mt-8">
                                        {tier.features.map((feature) => (
                                            <li 
                                                key={feature}
                                                className="border-t border-color-border pt-4 flex gap-4"
                                            >
                                                <FontAwesomeIcon 
                                                    icon={faCheckCircle} 
                                                    className="!size-6 text-violet-400 flex-shrink-0"
                                                />
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    )
}
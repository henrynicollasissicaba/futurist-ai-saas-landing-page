"use client"

import imageLogo from "@/assets/sphereal-logo.svg"
import Button, { ButtonProps } from "../Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Orbit from "../Orbit";
import SpherealLogo from "../logos/SpherealLogo";

export const navItems = [
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "Testimonials",
        href: "#testimonials",
    },
];

export const loginItems = [
    {
        buttonVariant: "tertiary",
        name: "Login",
        href: "#login",
    },
    {
        buttonVariant: "primary",
        name: "Sign Up",
        href: "#sign-up",
    },
] satisfies {
    name: string
    href: string
    buttonVariant: ButtonProps['variant']
}[];

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    return(
        <>
            <header className="border-b border-gray-200/20 relative z-40">
                <div className="container">
                    <div className="h-18 lg:h-20 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <SpherealLogo size="sm" />
                            <span className="font-extrabold text-2xl">sphereal.ai</span>
                        </div>

                        <div className="h-full hidden lg:block">
                            <nav className="h-full">
                                {navItems.map(({ name, href }) => (
                                    <a 
                                        href={href} 
                                        key={href}
                                        className="h-full px-10 uppercase text-bold text-sm tracking-widest text-gray-400 inline-flex items-center"
                                    >
                                        {name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="hidden lg:flex gap-4">
                            {loginItems.map(({ buttonVariant, name, href }) => (
                                <a 
                                    href={href}
                                    key={name}
                                >
                                    <Button variant={buttonVariant}>
                                        {name}
                                    </Button>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center lg:hidden">
                            <button 
                                className="size-10 border-2 border-transparent rounded-lg relative 
                                [background:linear-gradient(#030712,#030712)_content-box,conic-gradient(from_45deg,#8b5cf6,#e879f9,#fbbf24,#2dd4bf,#8b5cf6)_border-box]"
                                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                            >
                                <div className="absolute-center">
                                    <div className={twMerge("w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                                        isMobileNavOpen && "translate-y-0 rotate-45"
                                    )}></div>
                                </div>
                                <div className="absolute-center">
                                    <div className={twMerge("w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                                        isMobileNavOpen && "translate-y-0 -rotate-45"
                                    )}></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {isMobileNavOpen && (
                <div className="fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
                    <div className="absolute-center isolate -z-10">
                        <Orbit />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[350px]" />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[500px]" />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[650px]" />
                    </div>
                    <div className="container h-full">
                        <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
                            {navItems.map(({ name, href }) => (
                                <a 
                                    href={href}
                                    key={name}
                                    className="text-gray-400 uppercase tracking-widest font-bold text-sm h-10"
                                >
                                    {name}
                                </a>
                            ))}
                            {loginItems.map(({ buttonVariant, name, href }) => (
                                <a 
                                    href={href}
                                    key={name}
                                    className="w-full max-w-56"
                                >
                                    <Button block variant={buttonVariant}>
                                        {name}
                                    </Button>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}
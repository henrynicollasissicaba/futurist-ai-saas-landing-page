"use client"

import Button from "../Button";
import { useState } from "react";
import SpherealLogo from "../logos/SpherealLogo";
import MobileNav from "../MobileNav";
import { loginItems, navItems } from "@/app/utils";
import MobileMenuButton from "../MobileMenuButton";

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    return(
        <>
            <header className="border-b border-gray-200/20 z-40 sticky top-0 backdrop-blur-md">
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
                            <MobileMenuButton 
                                isOpen={isMobileNavOpen} 
                                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                            />
                        </div>
                    </div>
                </div>
            </header>
            {isMobileNavOpen && (
                <MobileNav 
                    isOpen={isMobileNavOpen} 
                    onClose={() => setIsMobileNavOpen(!isMobileNavOpen)} 
                />
            )}
        </>
    )
}
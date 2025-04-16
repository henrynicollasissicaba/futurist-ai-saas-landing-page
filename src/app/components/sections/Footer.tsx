import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navItems, socialLinks } from "@/app/utils";

export default function Footer(){
    return(
        <footer className="border-t border-color-border">
            <div className="container py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
                    <div className="font-extrabold text-2xl">sphereal.ai</div>
                    <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        {navItems.map((item) => (
                            <a 
                                href={item.href}
                                key={item.href}
                                className="uppercase text-xm tracking-widest font-bold text-gray-400"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={link.icon} className="!size-4"/>
                            </a>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">&copy; Frontend Tribe, All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
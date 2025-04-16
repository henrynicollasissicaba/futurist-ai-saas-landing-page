import { loginItems, navItems } from "../utils";
import Button from "./Button";
import OrbitsSystem from "./Orbit";

interface MobileNavProps {
    isOpen: boolean
    onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps){
    if(!isOpen) return null
    
    return(
        <div className="md:hidden fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
            <OrbitsSystem count={4} />
            
            <div className="container h-full">
                <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
                    {navItems.map(({ name, href }) => (
                        <a 
                            href={href}
                            key={name}
                            className="text-gray-400 uppercase tracking-widest font-bold text-sm h-10"
                            onClick={onClose}
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
    )
}
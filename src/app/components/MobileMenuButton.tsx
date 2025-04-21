import { twMerge } from "tailwind-merge"

interface MobileMenuButtonProps {
    isOpen: boolean
    onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps){
    return(
        <button 
            className="size-10 border-2 border-transparent rounded-lg relative cursor-pointer
            [background:linear-gradient(#030712,#030712)_content-box,conic-gradient(from_45deg,#8b5cf6,#e879f9,#fbbf24,#2dd4bf,#8b5cf6)_border-box]"
            onClick={onClick}
            aria-label="Acionar menu de navegação"
        >
            <div className="absolute-center">
                <div className={twMerge("w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                    isOpen && "translate-y-0 rotate-45"
                )}></div>
            </div>
            <div className="absolute-center">
                <div className={twMerge("w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                    isOpen && "translate-y-0 -rotate-45"
                )}></div>
            </div>
        </button>
    )
}
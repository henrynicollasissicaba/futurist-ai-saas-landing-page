import { HTMLAttributes } from "react";  
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function SectionBorder(props: { borderTop?: boolean } & HTMLAttributes<HTMLDivElement>){
    return(
        <div className={twMerge("border-l border-r border-color-border relative",
            props.borderTop && "border-t",
            props.className)}
        >
            {props.borderTop && (
                <>
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                        <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200"/>
                    </div>
                    <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                        <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200"/>
                    </div>
                </>
            )}
            {props.children}
        </div>
    )
}
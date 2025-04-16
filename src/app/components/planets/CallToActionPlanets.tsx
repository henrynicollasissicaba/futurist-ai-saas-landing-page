import Planet from "../Planet";

export default function CallToActionPlanets(){
    return(
        <>
            <Planet 
                size="lg" 
                color="violet"
                className="translate-y-[200px] -translate-x-[200px] rotate-45"
            />
            <Planet 
                size="lg" 
                color="violet"
                className="-translate-y-[200px] translate-x-[200px] -rotate-135"
            />
            <Planet 
                size="md" 
                color="teal"
                className="-translate-x-[500px] rotate-90"
            />
            <Planet 
                size="md" 
                color="teal"
                className="translate-x-[500px] -translate-y-[100px] -rotate-135"
            />
            <Planet 
                size="sm" 
                color="fuchsia"
                className="-translate-x-[400px] -translate-y-[250px] rotate-135"
            />
            <Planet 
                size="sm" 
                color="fuchsia"
                className="translate-x-[400px] translate-y-[150px] -rotate-45"
            />
        </>
    )
}
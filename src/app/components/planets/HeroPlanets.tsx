import Planet from "../Planet"

export default function HeroPlanets(){
    return(
        <>
            <Planet 
                size="lg" 
                color="violet" 
                className="-translate-x-[312px] -translate-y-[80px] rotate-135"
            />
            <Planet 
                size="lg" 
                color="violet" 
                className="translate-x-[335px] -translate-y-[190px] -rotate-135"
            />
            <Planet 
                size="sm" 
                color="fuchsia" 
                className="-translate-x-[510px] -translate-y-[370px] rotate-135"
            />
            <Planet 
                size="md" 
                color="teal" 
                className="translate-x-[490px] -translate-y-[340px] -rotate-135"
            />
        </>
    )
}
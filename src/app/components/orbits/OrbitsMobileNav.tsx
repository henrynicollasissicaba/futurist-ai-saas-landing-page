import Orbit from "../Orbit";

export default function OrbitsMobileNav(){
    return(
        <>
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
        </>
    )
}
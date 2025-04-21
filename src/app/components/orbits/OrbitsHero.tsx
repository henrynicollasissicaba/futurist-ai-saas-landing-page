import Orbit from "../Orbit";

export default function OrbitsHero(){
    return(
        <>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[350px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[600px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[850px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[1100px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[1350px]"/>
            </div>
        </>
    )
}
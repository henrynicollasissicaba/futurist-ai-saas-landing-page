import Orbit from "../Orbit";

export default function OrbitsCallToAction(){
    return(
        <>
            <div className="absolute-center isolate -z-10">
                <Orbit />
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[350px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[500px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[650px]"/>
            </div>
            <div className="absolute-center isolate -z-10">
                <Orbit className="size-[800px]"/>
            </div>
        </>
    )
}
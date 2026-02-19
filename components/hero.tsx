import Image from "next/image";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Button from "./ui/button";
import { Location } from "@/lib/interface";

export default function Hero({ location } : { location: Location }){
    return (
        <div className="relative w-full h-125">
            <Image src="/homepage/hero-img.png" fill alt="Hero Image" className="object-cover" />
            <div className="w-full h-full absolute text-white flex flex-col items-center justify-center gap-3">
                <p className="text-4xl font-semibold">Find the best local <span className="text-theme">Dentist</span> for you</p>
                <p className="text-lg">Book a free consultation with a licensed provider today</p>
                <div className="bg-white p-5 rounded-full text-gray-600 h-15 flex items-center justify-center gap-10 *:flex *:items-center *:justify-center *:gap-2">
                    <div>
                        <CiSearch />
                        <input className="outline-0 w-36" placeholder="Search offices" />
                    </div>
                    <div className="border-l flex items-center pl-2">
                        <CiLocationOn />
                        <p>{location?.city}, {location?.country}</p>
                    </div>
                    <Button 
                        fill 
                        text={<div className="flex items-center justify-center text-sm gap-2">
                            <CiSearch />
                            <p>Find Dentist</p>
                        </div>} 
                    />
                </div>
            </div>
        </div>
    )
}

import Image from "next/image";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Button from "./ui/button";
import { Location } from "@/lib/interface";
import Link from "next/link";
import { TOP_OFFICES_URL } from "@/lib/routes";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hero({ location } : { location: Location }){
    const isMobile = useIsMobile()
    return (
        <div className="relative w-full h-64 sm:h-96 lg:h-125">
            <Image src="/homepage/hero-img.png" fill alt="Hero Image" className="object-cover" />
            <div className="w-full h-full absolute text-white flex flex-col items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center leading-tight">
                    Find the best local <span className="text-theme">Dentist</span> for you
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-center">Book a free consultation with a licensed provider today</div>
                
                {/* Desktop Search Bar */}
                <div className="hidden sm:flex bg-white p-3 sm:p-4 rounded-full text-gray-600 flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-2xl *:flex *:items-center *:justify-center *:gap-2">
                    <div className="flex-1 sm:flex-none">
                        <CiSearch className="shrink-0" />
                        <input className="outline-0 w-24 sm:w-32 lg:w-40 text-sm" placeholder="Search offices" />
                    </div>
                    <div className="hidden sm:flex border-l pl-2 text-sm">
                        <CiLocationOn className="shrink-0" />
                        <div className="hidden lg:inline">{location?.city}, {location?.country}</div>
                    </div>
                    <Link href={TOP_OFFICES_URL}>
                        <Button 
                            fill 
                            text={<div className="flex items-center justify-center text-xs sm:text-sm gap-2 whitespace-nowrap">
                                <CiSearch />
                                <div>Find Dentist</div>
                            </div>} 
                        />
                    </Link>
                </div>

                {/* Mobile Search Bar */}
                {/* <div className="sm:hidden bg-white p-3 rounded-lg text-gray-600 flex flex-col gap-3 w-full max-w-xs">
                    <div className="flex items-center gap-2 border-b pb-2">
                        <CiSearch className="text-lg shrink-0" />
                        <input className="outline-0 flex-1 text-sm" placeholder="Search offices" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <CiLocationOn className="shrink-0" />
                        <div className="flex-1">{location?.city}, {location?.country}</div>
                    </div>
                    <Link href={TOP_OFFICES_URL} className="w-full">
                        <Button 
                            fill 
                            text={<div className="flex items-center justify-center text-xs gap-2">
                                <CiSearch />
                                <div>Search</div>
                            </div>} 
                        />
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

"use client"
import Image from "next/image";
import Button from "./ui/button";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import Link from "next/link";
import { HOME_PAGE_URL, TOP_OFFICES_URL } from "@/lib/routes";
import { Location } from "@/lib/interface";

export default function HomeHeader({ notHomePage, location }:{ notHomePage?: boolean, location?: Location }){
    return(
        <div className="bg-white px-5 py-3 flex justify-between items-center">
            <Link href={HOME_PAGE_URL}><Image src="/dentistfind-logo.png" width={100} height={100} alt="DentistFind Logo" /></Link>
            {notHomePage && 
                <div className="shadow border border-gray-200 bg-white p-2 rounded-full text-gray-600 h-15 flex items-center justify-center gap-10 *:flex *:items-center *:justify-center *:gap-2">
                    <div>
                        <CiSearch className="text-xl" />
                        <input className="outline-0 w-36" placeholder="Search offices" />
                    </div>
                    <div className="border-l flex items-center pl-2">
                        <CiLocationOn />
                        <p>{location?.city}, {location?.country}</p>
                    </div>
                    <Link href={TOP_OFFICES_URL}>
                        <Button 
                            fill 
                            text={<div className="flex items-center justify-center text-sm gap-2">
                                <CiSearch />
                                <p>Find Dentist</p>
                            </div>} 
                        />
                    </Link>
                </div>
            }
            <div className="text-sm flex items-center gap-3 *:cursor-pointer">
                <p className="hover:text-gray-500 text-black">Register as Office</p>
                <Button text="Log In" />
            </div>
        </div>
    )
}
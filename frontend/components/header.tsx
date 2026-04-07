"use client"
import Image from "next/image";
import Button from "./ui/button";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import Link from "next/link";
import { HOME_PAGE_URL, LOGIN_PAGE_URL, REGISTER_PAGE_URL, TOP_OFFICES_URL } from "@/lib/routes";
import { Location } from "@/lib/interface";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ notHomePage, location, authPage }:{ notHomePage?: boolean, location?: Location, authPage?: boolean }){
    const isMobile = useIsMobile()

    const [showSearch, setShowSearch] = useState(false);
    const [ showLogin, setShowLogin ] = useState(false)

    return(
        <div className="bg-white px-3 sm:px-5 py-2 sm:py-3 flex justify-between items-center border border-b flex-wrap gap-2">
            <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                <Link href={HOME_PAGE_URL} className="shrink-0">
                    <Image src="/dentistfind-logo.png" width={80} height={80} alt="DentistFind Logo" className="" />
                </Link>
                {(!authPage && !isMobile) && (
                    <button 
                        onClick={() => setShowSearch(!showSearch)} 
                        className="sm:hidden text-xl text-gray-600"
                    >
                        <CiSearch />
                    </button>
                )}
                {(!authPage && isMobile) && <RxHamburgerMenu onClick={() => setShowLogin(prev => !prev)} />}
            </div>
            {showLogin && <div className="flex *:flex-1 my-2 space-y-2 sm:hidden text-xs gap-1 *:cursor-pointer order-3 w-full">
                <Link href={REGISTER_PAGE_URL} className="text-center"><Button text="Register" /></Link>
                <Link href={LOGIN_PAGE_URL} className="text-center"><Button text="Log In" fill /></Link>
            </div>}

            {notHomePage && showSearch && (
                <div className="w-full sm:hidden order-3 shadow border border-gray-200 bg-white p-3 rounded-lg text-gray-600 flex flex-col gap-3">
                    <div className="flex items-center gap-2 border-b pb-2">
                        <CiSearch className="text-xl shrink-0" />
                        <input className="outline-0 flex-1 text-sm" placeholder="Search offices" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <CiLocationOn className="shrink-0" />
                        <div className="truncate">{location?.city}, {location?.country}</div>
                    </div>
                    <Link href={TOP_OFFICES_URL} className="w-full">
                        <Button 
                            fill 
                            text={<div className="flex items-center justify-center text-sm gap-2">
                                <CiSearch />
                                <div>Find Dentist</div>
                            </div>} 
                        />
                    </Link>
                </div>
            )}

            {notHomePage && (
                <div className="hidden sm:flex shadow border border-gray-200 bg-white p-2 rounded-full text-gray-600 h-15 items-center justify-center gap-4 lg:gap-6 flex-1 max-w-2xl *:flex *:items-center *:justify-center *:gap-2">
                    <div>
                        <CiSearch className="text-xl shrink-0" />
                        <input className="outline-0 w-24 sm:w-32 lg:w-40 text-sm" placeholder="Search offices" />
                    </div>
                    <div className="border-l flex items-center pl-2 text-sm">
                        <CiLocationOn className="shrink-0" />
                        <div className="hidden lg:inline truncate">{location?.city}, {location?.country}</div>
                    </div>
                    <Link href={TOP_OFFICES_URL}>
                        <Button 
                            fill 
                            text={<div className="flex items-center justify-center text-xs sm:text-sm gap-2">
                                <CiSearch />
                                <div>Find Dentist</div>
                            </div>} 
                        />
                    </Link>
                </div>
            )}

            {!authPage && (
                <div className="hidden sm:flex text-sm items-center gap-2 sm:gap-3 *:cursor-pointer">
                    <Link href={REGISTER_PAGE_URL} className="hover:text-gray-500 text-black whitespace-nowrap">Register as Office</Link>
                    <Link href={LOGIN_PAGE_URL}><Button text="Log In" /></Link>
                </div>
            )}

            {(!authPage && !isMobile) && (
                <div className="flex sm:hidden text-xs gap-1 *:cursor-pointer order-3 w-full">
                    <Link href={REGISTER_PAGE_URL} className="hover:text-gray-500 text-black flex-1 text-center py-2 border rounded">Register</Link>
                    <Link href={LOGIN_PAGE_URL} className="flex-1"><Button text="Log In" /></Link>
                </div>
            )}
        </div>
    )
}
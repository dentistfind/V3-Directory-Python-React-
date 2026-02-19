"use client"
import Image from "next/image";
import Button from "./ui/button";

export default function HomeHeader(){
    return(
        <div className="bg-white px-5 py-2 flex justify-between items-center">
            <Image src="/dentistfind-logo.png" width={100} height={100} alt="DentistFind Logo" />
            <div className="text-sm flex items-center gap-3 *:cursor-pointer">
                <p className={`hover:opacity-70`}>Register as Office</p>
                <Button text="Log In" />
            </div>
        </div>
    )
}
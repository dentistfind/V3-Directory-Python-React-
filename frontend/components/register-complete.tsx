import Image from "next/image";
import Check from "./ui/svg/check";
import Button from "./ui/button";
import Link from "next/link";
import { HOME_PAGE_URL } from "@/lib/routes";

export default function RegisterComplete(){
    return(
        <div className="relative flex-1">
            <Image
                src="/register/background-img.png"
                alt="Background Image"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white text-black p-5 w-120 h-72 z-10 flex flex-col items-center justify-center gap-3 rounded-lg shadow">
                    <Check />
                    <div className="text-xl font-semibold">All Done!</div>
                    <div className="font-light text-gray-400 text-sm text-center">Thank you for your application. We are reviewing it and may contact you for further information</div>
                    <Link href={HOME_PAGE_URL} className="mt-5"><Button text={<div className="text-xs">Back to Home Page</div>} /></Link>
                </div>
            </div>
        </div>
    )
}
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
                    <p className="text-xl font-semibold">All Done!</p>
                    <p className="font-light text-gray-400 text-sm text-center">Thank you for your application. We are reviewing it and may contact you for further information</p>
                    <Link href={HOME_PAGE_URL} className="mt-5"><Button text={<p className="text-xs">Back to Home Page</p>} /></Link>
                </div>
            </div>
        </div>
    )
}
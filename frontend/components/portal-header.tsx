import { DirectoryUser } from "@/lib/interface";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const portalList = ["Directory Portal", "Office Portal", "DF Portal"]

export default function PortalHeader({ user: { name, profileSrc} }:{ user: DirectoryUser }){
    const [ showPortalList, setShowPortalList ] = useState(false)

    return(
        <div className="flex items-center justify-between border-b border-stone-200">
            <div className="flex justify-center items-center gap-5 border-r border-stone-200 w-70 py-3">
                <Image src="/dentistfind-logo.png" width={70} height={50} alt="Logo" />
                <div className="relative">
                    <h3 className="font-semibold">Dentist Find</h3>
                    <div onClick={() => setShowPortalList(prev => !prev)} className="flex items-center gap-5 cursor-pointer text-sm">
                        <p>Directory Portal</p>
                        {showPortalList ? <FaChevronUp className="text-sm text-stone-400" /> : <FaChevronDown className="text-sm text-stone-400" />}
                    </div>
                    {showPortalList && <div className="absolute top-12 bg-white w-full h-30 p-3 flex flex-col justify-between rounded-md border border-stone-200 shadow">
                        {portalList.map((item, index) => (
                            <div key={index} className="font-medium cursor-pointer text-sm hover:opacity-70">{item}</div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className="flex items-center gap-2 py-3 px-5">
                <p>{name}</p>
                {profileSrc && (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src={profileSrc}
                            width={50}
                            height={50}
                            alt={`Profile of ${name}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
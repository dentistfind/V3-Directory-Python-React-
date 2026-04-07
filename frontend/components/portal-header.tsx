import { useIsMobile } from "@/hooks/useIsMobile";
import { UserData } from "@/lib/interface";
import { DF_PORTAL_DASHBOARD, DIRECTORY_PORTAL_DASHBOARD, OFFICE_PORTAL_DASHBOARD } from "@/lib/routes";
import { PortalCategory } from "@/lib/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface PortalListInterface { 
    title: PortalCategory, 
    link: string 
}

export default function PortalHeader({ user: {name, profileSrc, id}, category }:{ user: UserData, category: PortalCategory }){
    const isMobile = useIsMobile()
    const router = useRouter()
    const [ showPortalList, setShowPortalList ] = useState(false)

    const portalList: PortalListInterface[] = [
        { title: "Directory Portal", link: DIRECTORY_PORTAL_DASHBOARD(id) }, 
        { title: "Office Portal", link: OFFICE_PORTAL_DASHBOARD(id)},
        { title: "DF Portal", link: DF_PORTAL_DASHBOARD(id)}
    ]

    const handleCategoryClick = (item: PortalListInterface) => {
        router.push(item.link)
        setShowPortalList(false)
    }

    return(
        <div className="flex items-start sm:items-center justify-between border-b border-stone-200">
            <div className="flex items-center gap-3 sm:gap-5 md:border-b md:border-r border-stone-200 w-full sm:w-48 lg:w-70 py-3 px-3 sm:px-4">
                <Image src="/dentistfind-logo.png" width={60} height={45} alt="Logo" className="" />
                <div className="relative flex-1 sm:flex-none">
                    <h3 className="font-semibold text-sm sm:text-base hidden sm:block">Dentist Find</h3>
                    <div onClick={() => setShowPortalList(prev => !prev)} className="flex items-center gap-2 sm:gap-5 cursor-pointer text-xs sm:text-sm">
                        <div className="truncate">{category}</div>
                        {showPortalList ? <FaChevronUp className="text-xs sm:text-sm text-stone-400 shrink-0" /> : <FaChevronDown className="text-xs sm:text-sm text-stone-400 shrink-0" />}
                    </div>
                    {showPortalList && (
                        <div className="absolute top-12 left-0 right-0 sm:left-auto sm:right-auto bg-white min-w-40 p-3 flex flex-col justify-between rounded-md border border-stone-200 shadow z-50">
                            {portalList.map((item, index) => (
                                <div key={index} onClick={() => handleCategoryClick(item)} className="font-medium cursor-pointer text-xs sm:text-sm hover:opacity-70 whitespace-nowrap py-2 px-2 rounded hover:bg-gray-50 transition">
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-2 py-3 px-3 sm:px-5 w-full sm:w-auto">
                {!isMobile && <div className="text-xs sm:text-base truncate flex-1 sm:flex-none">{name}</div>}
                {profileSrc && (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 ml-auto">
                        <Image
                            src={profileSrc}
                            width={40}
                            height={40}
                            alt={`Profile of ${name}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
"use client"
import { MdOutlineDashboard } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { DF_PORTAL_BILLINGS, DF_PORTAL_DASHBOARD, DF_PORTAL_OFFICES, DF_PORTAL_USERS, DIRECTORY_PORTAL_DASHBOARD, DIRECTORY_PORTAL_OFFICE_REQUEST, DIRECTORY_PORTAL_OFFICES, DIRECTORY_PORTAL_REVIEWS, DIRECTORY_PORTAL_VIDEO_MANAGER } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { DFPortalCategoryTypes, DirectoryPortalCategoryType } from "@/lib/type";
import { DFMenuItems, DirectoryMenuItems } from "@/lib/interface";
import { useDFPortalContext } from "@/context/DFPortalContext";

export default function DFPortalNavbar({ userId }: { userId: string }){
    const router = useRouter()
    const { dfPortalCategory, setDFPortalCategory } = useDFPortalContext()

    const menuItems: DFMenuItems[] = [
        { label: "Dashboard", icon: MdOutlineDashboard, link: DF_PORTAL_DASHBOARD(userId) },
        { label: "Users", icon: GoPeople, link: DF_PORTAL_USERS(userId) },
        { label: "Offices", icon: PiBuildingOfficeLight, link: DF_PORTAL_OFFICES(userId) },
        { label: "Billings", icon: TbNotes, link: DF_PORTAL_BILLINGS(userId) },
    ];

    const handleClickOnCategory = (label: DFPortalCategoryTypes, link: string) => {
        setDFPortalCategory(label)
        router.push(link)
    }

    return(
        <div className="w-70 p-5 *:p-2 border border-t-0 border-l border-stone-200 *:flex *:items-center *:gap-2 space-y-5">
            {menuItems.map(({ label, icon: Icon, link }, index) => (
                <div key={index} onClick={() => handleClickOnCategory(label, link)} className={`${dfPortalCategory === label ? "bg-theme-light text-theme" : ""} cursor-pointer`}>
                    <Icon className="text-xl" />
                    {label}
                </div>
            ))}
        </div>
    )
}
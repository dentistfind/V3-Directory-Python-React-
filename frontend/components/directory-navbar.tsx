"use client"
import { MdOutlineDashboard } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { useDirectoryContext } from "@/context/DirectoryContext";
import { DIRECTORY_PORTAL_DASHBOARD, DIRECTORY_PORTAL_OFFICE_REQUEST, DIRECTORY_PORTAL_OFFICES, DIRECTORY_PORTAL_REVIEWS, DIRECTORY_PORTAL_VIDEO_MANAGER } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { DirectoryPortalCategoryType } from "@/lib/type";
import { DirectoryMenuItems } from "@/lib/interface";

export default function DirectoryNavbar({ userId }: { userId: string }){
    const router = useRouter()
    const { directoryPortalCategory, setDirectoryPortalCategory } = useDirectoryContext()

    const menuItems: DirectoryMenuItems[] = [
        { label: "Dashboard", icon: MdOutlineDashboard, link: DIRECTORY_PORTAL_DASHBOARD(userId) },
        { label: "Offices", icon: PiBuildingOfficeLight, link: DIRECTORY_PORTAL_OFFICES(userId) },
        { label: "Office Request", icon: GoPeople, link: DIRECTORY_PORTAL_OFFICE_REQUEST(userId) },
        { label: "Reviews", icon: TbNotes, link: DIRECTORY_PORTAL_REVIEWS(userId) },
        { label: "Video Manager", icon: CiVideoOn, link: DIRECTORY_PORTAL_VIDEO_MANAGER(userId) },
    ];

    const handleClickOnCategory = (label: DirectoryPortalCategoryType, link: string) => {
        setDirectoryPortalCategory(label)
        router.push(link)
    }

    return(
        <div className="w-70 p-5 *:p-2 border border-t-0 border-l border-stone-200 *:flex *:items-center *:gap-2 space-y-5">
            {menuItems.map(({ label, icon: Icon, link }, index) => (
                <div key={index} onClick={() => handleClickOnCategory(label, link)} className={`${directoryPortalCategory === label ? "bg-theme-light text-theme" : ""} cursor-pointer`}>
                    <Icon className="text-xl" />
                    {label}
                </div>
            ))}
        </div>
    )
}
"use client"
import { MdOutlineDashboard } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { useDirectoryContext } from "@/context/DirectoryContext";

const menuItems = [
  { label: "Dashboard", icon: MdOutlineDashboard },
  { label: "Offices", icon: PiBuildingOfficeLight },
  { label: "Office Request", icon: GoPeople },
  { label: "Reviews", icon: TbNotes },
  { label: "Video Manager", icon: CiVideoOn },
];


export default function DirectoryNavbar(){
    const { directoryPortalCategory, setDirectoryPortalCategory } = useDirectoryContext()

    return(
        <div className="w-70 p-5 *:p-2 border border-t-0 border-l border-stone-200 *:flex *:items-center *:gap-2 space-y-5">
            {menuItems.map(({ label, icon: Icon }, index) => (
                <div key={index} onClick={() => setDirectoryPortalCategory(label)} className={`${directoryPortalCategory === label ? "bg-theme-light text-theme" : ""} cursor-pointer`}>
                    <Icon className="text-xl" />
                    {label}
                </div>
            ))}
        </div>
    )
}
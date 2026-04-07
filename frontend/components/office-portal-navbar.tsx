"use client"
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { OFFICE_PORTAL_APPOINTMENT_REQUESTS, OFFICE_PORTAL_DASHBOARD, OFFICE_PORTAL_LEADS, OFFICE_PORTAL_LOGS, OFFICE_PORTAL_PATIENTS } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { OfficePortalCategoryTypes } from "@/lib/type";
import { OfficePortalMenuItems } from "@/lib/interface";
import { useOfficePortalContext } from "@/context/OfficePortalContext";
import { MdOutlineEventNote } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";

export default function OfficePortalNavbar({ userId }: { userId: string }){
    const router = useRouter()
    const { officePortalCategory, setOfficePortalCategory } = useOfficePortalContext()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const menuItems: OfficePortalMenuItems[] = [
        { label: "Dashboard", icon: MdOutlineDashboard, link: OFFICE_PORTAL_DASHBOARD(userId) },
        { label: "Appointment Requests", icon: MdOutlineEventNote, link: OFFICE_PORTAL_APPOINTMENT_REQUESTS(userId) },
        { label: "Patients", icon: GoPeople, link: OFFICE_PORTAL_PATIENTS(userId) },
        { label: "Leads", icon: IoPersonAddOutline, link: OFFICE_PORTAL_LEADS(userId) },
        { label: "Logs", icon: TbNotes, link: OFFICE_PORTAL_LOGS(userId) }
    ];

    const handleClickOnCategory = (label: OfficePortalCategoryTypes, link: string) => {
        setOfficePortalCategory(label)
        router.push(link)
        setMobileMenuOpen(false)
    }

    return(
        <>
            {/* Desktop Sidebar */}
            <div className="hidden sm:flex sm:w-48 lg:w-70 p-3 sm:p-4 border border-t-0 border-l border-stone-200 flex-col gap-3 *:p-2 *:flex *:items-center *:gap-2 space-y-3 min-h-screen">
                {menuItems.map(({ label, icon: Icon, link }, index) => (
                    <div key={index} onClick={() => handleClickOnCategory(label, link)} className={`${officePortalCategory === label ? "bg-theme-light text-theme" : ""} cursor-pointer rounded-md transition-colors hover:bg-gray-100`}>
                        <Icon className="text-lg sm:text-xl shrink-0" />
                        <span className="text-sm sm:text-base">{label}</span>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="sm:hidden border-b border-stone-200 p-3 bg-white sticky top-0 z-40">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 active:scale-[0.98] transition"
                >
                    <span className="font-semibold text-sm">
                        {officePortalCategory || "Menu"}
                    </span>
                    <svg
                        className={`w-5 h-5 transition-transform ${
                        mobileMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                    </button>

                {mobileMenuOpen && (
                    <div className="mt-2 bg-white border border-stone-200 flex flex-col gap-2 p-3 max-h-80 overflow-y-auto rounded-lg shadow">
                        {menuItems.map(({ label, icon: Icon, link }, index) => (
                            <div 
                                key={index} 
                                onClick={() => handleClickOnCategory(label, link)} 
                                className={`${officePortalCategory === label ? "bg-theme-light text-theme" : "bg-gray-50"} cursor-pointer p-3 rounded-md flex items-center gap-3 transition-colors active:bg-gray-200`}
                            >
                                <Icon className="text-lg shrink-0" />
                                <span className="text-sm flex-1">{label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
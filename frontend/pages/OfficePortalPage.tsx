"use client"
import OfficePortalAppointmentReqests from "@/components/office-portal-appointment"
import OfficePortalDashboard from "@/components/office-portal-dashboard"
import OfficePortalLeads from "@/components/office-portal-leads"
import OfficePortalLogs from "@/components/office-portal-logs"
import OfficePortalNavbar from "@/components/office-portal-navbar"
import OfficePortalPatients from "@/components/office-portal-patients"
import PortalHeader from "@/components/portal-header"
import type { UserData } from "@/lib/interface"
import { HOME_PAGE_URL } from "@/lib/routes"
import { users } from "@/lib/temp-data"
import { OfficePortalCategoryTypes } from "@/lib/type"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function OfficePortalPage({ id, category }:{ id: string | number, category: OfficePortalCategoryTypes }){
    const [ userData, setUserData ] = useState<UserData>()

    useEffect(() => {
        const user = [...users].find(item => item.id === id)
        if (!user){
            redirect(HOME_PAGE_URL)
        }
        setUserData(user)
    }, [id])

    return (
        <div className="bg-white text-black min-h-screen">
        {userData && <PortalHeader user={userData} category="Office Portal" />}

        {/* Mobile Navbar (Top) */}
        {userData && (
            <div className="sm:hidden">
                <OfficePortalNavbar userId={userData.id} />
            </div>
        )}

        <div className="flex">
            {/* Desktop Sidebar */}
            {userData && (
                <div className="hidden sm:block">
                    <OfficePortalNavbar userId={userData.id} />
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 w-full">
                {category === "Dashboard" && <OfficePortalDashboard />}
                {category === "Leads" && <OfficePortalLeads />}
                {category === "Patients" && <OfficePortalPatients />}
                {category === "Appointment Requests" && <OfficePortalAppointmentReqests />}
                {category === "Logs" && <OfficePortalLogs />}
            </div>
        </div>
        </div>
    )
}
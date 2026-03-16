"use client"
import DFPortalDashboard from "@/components/df-portal-dashboard"
import DFPortalNavbar from "@/components/df-portal-navbar"
import DFPortalOffices from "@/components/df-portal-offices"
import DFPortalUserManagement from "@/components/df-portal-users"
import PortalHeader from "@/components/portal-header"
import type { UserData } from "@/lib/interface"
import { HOME_PAGE_URL } from "@/lib/routes"
import { users } from "@/lib/temp-data"
import { DFPortalCategoryTypes } from "@/lib/type"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function DFPortalPage({ id, category, requestId }:{ id: string | number, category: DFPortalCategoryTypes, requestId?: string | number }){
    const [ userData, setUserData ] = useState<UserData>()

    useEffect(() => {
        const user = [...users].find(item => item.id === id)
        if (!user){
            redirect(HOME_PAGE_URL)
        }
        setUserData(user)
    }, [id])

    return (
        <div className="bg-white text-black">
            {userData && <PortalHeader user={userData} category="DF Portal" />}
            <div className="flex">
                {userData && <DFPortalNavbar userId={userData.id} />}
                {category === "Dashboard" && <DFPortalDashboard />}
                {category === "Users" && <DFPortalUserManagement />}
                {category === "Offices" && <DFPortalOffices />}
                {/* {(category === "Request Details" && requestId && userData) && <OfficeRequestDetails userId={userData.id} requestId={requestId} />}
                {(category === "Reviews" && userData) && <DirectoryPortalReviews userId={userData.id} />}
                {(category === "Review Details" && userData && requestId) && <DirectoryPortalReviewDetails userId={userData.id} requestId={requestId} />}
                {(category === "Video Manager" && userData) && <DirectoryPortalVideoManager userData={userData} />} */}
            </div>
        </div>
    )
}
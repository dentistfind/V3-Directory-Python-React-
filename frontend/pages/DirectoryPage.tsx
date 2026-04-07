"use client"
import DirectoryNavbar from "@/components/directory-navbar"
import DirectoryPortalDashboard from "@/components/directory-portal-dashboard"
import DirectoryPortalOfficeRequests from "@/components/directory-portal-office-requests"
import DirectoryPortalOffices from "@/components/directory-portal-offices"
import DirectoryPortalReviewDetails from "@/components/directory-portal-review-details"
import DirectoryPortalReviews from "@/components/directory-portal-reviews"
import DirectoryPortalVideoManager from "@/components/directory-portal-video-manager"
import OfficeRequestDetails from "@/components/office-request-details"
import PortalHeader from "@/components/portal-header"
import type { UserData } from "@/lib/interface"
import { HOME_PAGE_URL } from "@/lib/routes"
import { users } from "@/lib/temp-data"
import { DirectoryPortalCategoryType } from "@/lib/type"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function DirectoryUser({ id, category, requestId }:{ id: string | number, category: DirectoryPortalCategoryType, requestId?: string | number }){
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
            {userData && <PortalHeader user={userData} category="Directory Portal" />}
            {userData && (
                <div className="sm:hidden">
                    <DirectoryNavbar userId={userData.id} />
                </div>
            )}
            <div className="flex">
                {userData && (
                    <div className="hidden sm:block">
                        <DirectoryNavbar userId={userData.id} />
                    </div>
                )}
                <div className="flex-1 w-full">
                    {category === "Dashboard" && (
                        <DirectoryPortalDashboard />
                    )}
                    {(userData && category === "Offices") && <DirectoryPortalOffices userId={userData.id} />}
                    {(category === "Office Request" && userData) && <DirectoryPortalOfficeRequests userId={userData.id} />}
                    {(category === "Request Details" && requestId && userData) && <OfficeRequestDetails userId={userData.id} requestId={requestId} />}
                    {(category === "Reviews" && userData) && <DirectoryPortalReviews userId={userData.id} />}
                    {(category === "Review Details" && userData && requestId) && <DirectoryPortalReviewDetails userId={userData.id} requestId={requestId} />}
                    {(category === "Video Manager" && userData) && <DirectoryPortalVideoManager userData={userData} />}
                </div>
            </div>
        </div>
    )
}
"use client"
import DirectoryNavbar from "@/components/directory-navbar"
import DirectoryPortalDashboard from "@/components/directory-portal-dashboard"
import DirectoryPortalOfficeRequests from "@/components/directory-portal-office-requests"
import DirectoryPortalOffices from "@/components/directory-portal-offices"
import PortalHeader from "@/components/portal-header"
import type { DirectoryUser } from "@/lib/interface"
import { HOME_PAGE_URL } from "@/lib/routes"
import { dummyDirectoryUser } from "@/lib/temp-data"
import { DirectoryPortalCategoryType } from "@/lib/type"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function DirectoryUser({ id, category }:{ id: string | number, category: DirectoryPortalCategoryType }){
    const [ userData, setUserData ] = useState<DirectoryUser>()

    useEffect(() => {
        const user = [...dummyDirectoryUser].find(item => item.id === id)
        if (!user){
            redirect(HOME_PAGE_URL)
        }
        setUserData(user)
    }, [id])

    return (
        <div className="bg-white text-black">
            {userData && <PortalHeader user={userData} />}
            <div className="flex">
                {userData && <DirectoryNavbar userId={userData.id} />}
                {category === "Dashboard" && <DirectoryPortalDashboard />}
                {userData && (category === "Offices" && <DirectoryPortalOffices userId={userData.id} />)}
                {category === "Office Request" && <DirectoryPortalOfficeRequests />}
            </div>
        </div>
    )
}
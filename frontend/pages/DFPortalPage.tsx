"use client"
import DFPortalBillings from "@/components/df-portal-billings"
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
        <div className="bg-white text-black min-h-screen">
            {userData && <PortalHeader user={userData} category="DF Portal" />}
            {userData && (
                <div className="sm:hidden">
                    <DFPortalNavbar userId={userData.id} />
                </div>
            )}
            <div className="flex">
                {userData && (
                    <div className="hidden sm:block">
                        <DFPortalNavbar userId={userData.id} />
                    </div>
                )}
                {/* {userData && <DFPortalNavbar userId={userData.id} />} */}
                <div className="flex-1 w-full">
                    {category === "Dashboard" && <DFPortalDashboard />}
                    {category === "Users" && <DFPortalUserManagement />}
                    {category === "Offices" && <DFPortalOffices />}
                    {category === "Billings" && <DFPortalBillings />}
                </div>
            </div>
        </div>
    )
}
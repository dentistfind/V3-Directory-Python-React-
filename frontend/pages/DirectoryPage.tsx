"use client"
import DirectoryNavbar from "@/components/directory-navbar"
import DirectoryPortalDashboard from "@/components/directory-portal-dashboard"
import DirectoryPortalOffices from "@/components/directory-portal-offices"
import PortalHeader from "@/components/portal-header"
import { useDirectoryContext } from "@/context/DirectoryContext"
import type { DirectoryUser } from "@/lib/interface"
import { HOME_PAGE_URL } from "@/lib/routes"
import { dummyDirectoryUser } from "@/lib/temp-data"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function DirectoryUser({ id }:{ id: string | number }){
    const { directoryPortalCategory } = useDirectoryContext()
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
                {userData && <DirectoryNavbar />}
                {directoryPortalCategory === "Dashboard" && <DirectoryPortalDashboard />}
                {directoryPortalCategory === "Offices" && <DirectoryPortalOffices />}
            </div>
        </div>
    )
}
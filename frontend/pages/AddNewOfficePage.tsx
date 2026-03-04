"use client"
import AddNewOfficeBasicInfo from "@/components/add-new-office-basic-info"
import AddNewOfficeLicense from "@/components/add-new-office-license"
import AddNewOfficeSeoMeta from "@/components/add-new-office-seo-meta"
import AddNewOfficeUpload from "@/components/add-new-office-upload"
import DirectoryNavbar from "@/components/directory-navbar"
import PortalHeader from "@/components/portal-header"
import { useDirectoryContext } from "@/context/DirectoryContext"
import { DirectoryUser } from "@/lib/interface"
import { DIRECTORY_PORTAL_OFFICES, HOME_PAGE_URL } from "@/lib/routes"
import { dummyDirectoryUser } from "@/lib/temp-data"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import { FaChevronLeft } from "react-icons/fa6"

const menuItems = [
    "Basic Info",
    "SEO & Meta",
    "License & Verification",
    "Media"
]

export default function AddNewOfficePage({ userId, officeId }: { userId: string, officeId: string | number }){
    const { addOfficeComponentPage, setAddOfficeComponentPage, setDirectoryPortalCategory } = useDirectoryContext()
    const [ userData, setUserData ] = useState<DirectoryUser>()

    useEffect(() => {
        setDirectoryPortalCategory("Offices")
        setAddOfficeComponentPage(0)
    }, [])

    useEffect(() => {
        const user = [...dummyDirectoryUser].find(item => item.id === userId)
        if (!user){
            redirect(HOME_PAGE_URL)
        }
        setUserData(user)
    }, [userId])

    return (
        <div className="bg-white text-black">
            {userData && <PortalHeader user={userData} />}
            <div className="flex">
                {userData && <DirectoryNavbar userId={userData.id} />}
                <div className="flex-1 min-h-screen p-5 space-y-7">
                    <div className="flex items-center gap-3">
                        <Link href={DIRECTORY_PORTAL_OFFICES(userId)}><FaChevronLeft className="cursor-pointer text-theme" /></Link>
                        <div>
                            <h2 className="font-semibold text-xl">Add New Office</h2>
                            <p className="text-sm font-light">Create a new dental office listing with complete SEO optimization</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 shadow rounded-lg p-7 space-y-5">
                        <div className="bg-theme-light flex justify-between *:w-50 *:text-center *:py-1 p-2 rounded-full font-medium text-sm">
                            {menuItems.map((item, index) => (
                                <div key={index}
                                    className={`${addOfficeComponentPage === index && "bg-theme rounded-full px-2 text-white whitespace-nowrap"}`}
                                >{item}</div>
                            ))}
                        </div>
                        {addOfficeComponentPage === 0 && <AddNewOfficeBasicInfo />}
                        {addOfficeComponentPage === 1 && <AddNewOfficeSeoMeta />}
                        {addOfficeComponentPage === 2 && <AddNewOfficeLicense />}
                        {addOfficeComponentPage === 3 && <AddNewOfficeUpload />}
                    </div>
                </div>
            </div>
        </div>
    )
}
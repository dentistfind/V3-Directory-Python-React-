"use client"
import { DirectoryPortalDashboardStat, OfficeData, OfficeRequests } from "@/lib/interface"
import { dentalOfficeRequests, dummyDentalOffices } from "@/lib/temp-data"
import { useEffect, useState } from "react"
import DashboardCard from "./ui/dashboard-card"
import { PiBuildingOfficeLight } from "react-icons/pi";
import { useDirectoryContext } from "@/context/DirectoryContext"

export default function DirectoryPortalDashboard(){
    const [ directoryOffices, setDirectoryOffices ] = useState<OfficeData[]>([...dummyDentalOffices])
    const [ officeRequests ] = useState<OfficeRequests[]>([...dentalOfficeRequests])
    const [ dashboardStats, setDashboardStats ] = useState<DirectoryPortalDashboardStat>({ totalOffices: 0, activeOffices: 0, pendingOfficeRequests: 0 })
    const { setDirectoryPortalCategory } = useDirectoryContext()

    useEffect(() => {
        setDirectoryPortalCategory("Dashboard")
    }, [])

    useEffect(() => {
        const totalOffices = [...dummyDentalOffices].length
        const activeOffices = ([...dummyDentalOffices].filter(item => item.isAvailable)).length
        const pendingOfficeRequests = officeRequests.length

        setDashboardStats({ totalOffices, activeOffices, pendingOfficeRequests })
        setDirectoryOffices(prev => prev.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).filter((_, index) => index < 10)) // sort by latest date, cut at 10
    }, [dummyDentalOffices])

    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div>
                <h2 className="font-semibold text-xl">Dashboard</h2>
                <div className="text-sm font-light">Welcome back! Here's what's happening today.</div>
            </div>
            <div className="w-full md:flex items-center gap-5 *:w-full space-y-5 md:space-y-0">
                <DashboardCard title="Total Offices" icon={<PiBuildingOfficeLight />} content={dashboardStats?.totalOffices} />
                <DashboardCard title="Active Offices" icon={<PiBuildingOfficeLight />} content={dashboardStats?.activeOffices} />
                <DashboardCard title="Pending Office Requests" icon={<PiBuildingOfficeLight />} content={dashboardStats?.pendingOfficeRequests} />
            </div>
            <div className="border border-theme rounded-lg p-5">
                <h3 className="font-semibold">Recently Added Offices</h3>
                <div className="text-sm font-light">
                    Latest offices added to the directory
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block border border-gray-300 mt-5">
                    {/* Header */}
                    <div className="flex text-sm uppercase font-light border-b border-gray-300">
                    <div className="w-1/4 p-3">Office Name</div>
                    <div className="w-1/4 p-3">Email</div>
                    <div className="w-1/4 p-3">Phone</div>
                    <div className="w-1/4 p-3">Location</div>
                    </div>

                    {/* Rows */}
                    {directoryOffices.map((item, index) => (
                    <div key={index} className="flex text-xs border-b border-gray-300">
                        <div className="w-1/4 p-3 wrap-break-word">{item.officeName}</div>
                        <div className="w-1/4 p-3 wrap-break-word">{item.email}</div>
                        <div className="w-1/4 p-3 wrap-break-word">
                            {item.mobileNumber && "+"}
                            {item.mobileNumber}
                        </div>
                        <div className="w-1/4 p-3 wrap-break-word">
                            {item.address.city}, {item.address.state}
                        </div>
                    </div>
                    ))}
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden mt-5 space-y-3">
                    {directoryOffices.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 text-sm space-y-1"
                    >
                        <div className="font-semibold">{item.officeName}</div>
                        <div className="text-xs text-gray-500">{item.email}</div>
                        <div className="text-xs">
                        {item.mobileNumber && "+"}
                        {item.mobileNumber}
                        </div>
                        <div className="text-xs">
                        {item.address.city}, {item.address.state}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        </div>
    )
}
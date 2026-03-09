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
            <div className="w-full flex items-center gap-5">
                <DashboardCard title="Total Offices" icon={<PiBuildingOfficeLight />} content={dashboardStats?.totalOffices} />
                <DashboardCard title="Active Offices" icon={<PiBuildingOfficeLight />} content={dashboardStats?.activeOffices} />
                <DashboardCard title="Pending Office Requests" icon={<PiBuildingOfficeLight />} content={dashboardStats?.pendingOfficeRequests} />
            </div>
            <div className="border border-theme rounded-lg p-5">
                <h3 className="font-semibold">Recently Added Offices</h3>
                <div className="text-sm font-light">Latest offices added to the directory</div>
                <div className="border border-gray-300 mt-5 *:border-b *:border-gray-300 *:p-3 *:*:w-1/4 *:flex *:items-center">
                    <div className=" uppercase font-light text-sm">
                        <div>OFFICE NAME</div>
                        <div>EMAIL</div>
                        <div>PHONE</div>
                        <div>LOCATION</div>
                    </div>
                    {directoryOffices.map((item, index) => (
                        <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                            <div>{item.officeName}</div>
                            <div>{item.email}</div>
                            <div>{item.mobileNumber && "+"}{item.mobileNumber}</div>
                            <div>{item.address.city}, {item.address.state}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
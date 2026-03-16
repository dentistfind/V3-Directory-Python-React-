"use client"
import { DFPortalDashboardStat, OfficeData, OfficeRequests } from "@/lib/interface"
import { dentalOfficeRequests, dummyDentalOffices, users } from "@/lib/temp-data"
import { useEffect, useState } from "react"
import DashboardCard from "./ui/dashboard-card"
import { PiBuildingOfficeLight } from "react-icons/pi";
import { useDFPortalContext } from "@/context/DFPortalContext"

export default function DFPortalDashboard(){
    const [ directoryOffices, setDirectoryOffices ] = useState<OfficeData[]>([...dummyDentalOffices])
    const [ officeRequests ] = useState<OfficeRequests[]>([...dentalOfficeRequests])
    const [ dashboardStats, setDashboardStats ] = useState<DFPortalDashboardStat>({ totalOffices: 0, totalUsers: 0, pendingOfficeRequests: 0 })
    const { setDFPortalCategory } = useDFPortalContext()

    useEffect(() => {
        setDFPortalCategory("Dashboard")
    }, [])

    useEffect(() => {
        const totalOffices = [...dummyDentalOffices].length
        const totalUsers = [...users].length
        const pendingOfficeRequests = officeRequests.length

        setDashboardStats({ totalOffices, totalUsers, pendingOfficeRequests })
        setDirectoryOffices(prev => prev.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).filter((_, index) => index < 10)) // sort by latest date, cut at 10
    }, [dummyDentalOffices])

    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div>
                <h2 className="font-semibold text-xl">Super Admin Dashboard</h2>
                <div className="text-sm font-light">Overview of your EHR platform performance</div>
            </div>
            <div className="w-full flex items-center gap-5">
                <DashboardCard title="Total Offices" icon={<PiBuildingOfficeLight />} content={dashboardStats?.totalOffices} />
                <DashboardCard title="Total Users" icon={<PiBuildingOfficeLight />} content={dashboardStats?.totalUsers} />
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
                            <div>{item.email || "-"}</div>
                            <div>{item.mobileNumber && "+"}{item.mobileNumber}{!item.mobileNumber && "-"}</div>
                            <div>{item.address.city}, {item.address.state}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
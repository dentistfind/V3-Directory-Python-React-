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
<div className="flex-1 min-h-screen p-4 sm:p-5 space-y-6">

  {/* Header */}
  <div>
    <h2 className="font-semibold text-lg sm:text-xl">
      Super Admin Dashboard
    </h2>
    <div className="text-sm font-light">
      Overview of your EHR platform performance
    </div>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 *:w-full">
    <DashboardCard
      title="Total Offices"
      icon={<PiBuildingOfficeLight />}
      content={dashboardStats?.totalOffices}
    />
    <DashboardCard
      title="Total Users"
      icon={<PiBuildingOfficeLight />}
      content={dashboardStats?.totalUsers}
    />
    <DashboardCard
      title="Pending Office Requests"
      icon={<PiBuildingOfficeLight />}
      content={dashboardStats?.pendingOfficeRequests}
    />
  </div>

  {/* Recently Added Offices */}
  <div className="border border-theme rounded-lg p-4 sm:p-5">
    <h3 className="font-semibold">Recently Added Offices</h3>
    <div className="text-sm font-light">
      Latest offices added to the directory
    </div>

    <div className="mt-4 border border-gray-300 rounded overflow-x-auto">

      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-4 text-xs uppercase border-b border-gray-300 p-2">
        <div>Office Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Location</div>
      </div>

      {/* Empty */}
      {directoryOffices.length === 0 && (
        <div className="flex items-center justify-center py-5 text-sm">
          No offices available
        </div>
      )}

      {/* Rows */}
      {directoryOffices.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:grid sm:grid-cols-4 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
        >
          {/* Name */}
          <div className="sm:hidden font-semibold">Office Name:</div>
          <div className="wrap-break-word">{item.officeName}</div>

          {/* Email */}
          <div className="sm:hidden font-semibold">Email:</div>
          <div className="wrap-break-word">{item.email || "-"}</div>

          {/* Phone */}
          <div className="sm:hidden font-semibold">Phone:</div>
          <div>
            {item.mobileNumber ? `+${item.mobileNumber}` : "-"}
          </div>

          {/* Location */}
          <div className="sm:hidden font-semibold">Location:</div>
          <div>
            {item.address.city}, {item.address.state}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    )
}
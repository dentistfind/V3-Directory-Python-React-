"use client"
import { useDirectoryContext } from "@/context/DirectoryContext"
import { OfficeData } from "@/lib/interface"
import { dummyDentalOffices } from "@/lib/temp-data"
import { useEffect, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import OfficeRatingCard from "./ui/office-rating-card"

export default function DirectoryPortalReviews({ userId }:{ userId: string }){
    const { setDirectoryPortalCategory } = useDirectoryContext()
    const [ inputSearch, setInputSearch ] = useState<string>()
    const [ officeData ] = useState<OfficeData[]>([...dummyDentalOffices])

    useEffect(() => {
        setDirectoryPortalCategory("Reviews")
    }, [])

    return(
    <div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">
    {/* Header */}
    <div>
        <h2 className="font-semibold text-lg sm:text-xl">Office Reviews</h2>
        <div className="text-sm font-light">
        Select an office to view and manage its reviews
        </div>
    </div>

    {/* Container */}
    <div className="rounded-lg p-4 sm:p-5 border border-gray-300 mt-5 space-y-5 sm:space-y-7">
        
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h3 className="font-semibold text-lg">All Offices</h3>

        {/* Search */}
        <div className="w-full sm:w-80 flex items-center gap-2 text-xs border border-gray-300 p-2 rounded">
            <FaMagnifyingGlass className="text-gray-400" />
            <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
            className="outline-none w-full text-sm"
            placeholder="Search by name, email, phone number"
            />
        </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {officeData.map(({ id, officeName, rating, reviewCount, address, logoUrl }) => (
            <div key={id}>
            <OfficeRatingCard
                userId={userId}
                requestId={id}
                logoUrl={logoUrl}
                officeName={officeName}
                address={address}
                rating={rating}
                reviewCount={reviewCount}
            />
            </div>
        ))}
        </div>
    </div>
    </div>
    )
}
"use client"
import { useDirectoryContext } from "@/context/DirectoryContext"
import { OfficeData } from "@/lib/interface"
import { dummyDentalOffices } from "@/lib/temp-data"
import { useEffect, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import OfficeRatingCard from "./ui/office-rating-card"

export default function DirectoryPortalReviews(){
    const { setDirectoryPortalCategory } = useDirectoryContext()
    const [ inputSearch, setInputSearch ] = useState<string>()
    const [ officeData, setOfficeData ] = useState<OfficeData[]>([...dummyDentalOffices])

    useEffect(() => {
        setDirectoryPortalCategory("Reviews")
    }, [])
    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div>
                <h2 className="font-semibold text-xl">Office Reviews</h2>
                <p className="text-sm font-light">Select an office to view and manage its reviews</p>
            </div>
            <div className="rounded-lg p-5 border border-gray-300 mt-5 space-y-7">
                <div className="text-lg flex justify-between items-center">
                    <h3 className="font-semibold">All Offices</h3>
                    <div className="w-80 flex items-center gap-1 text-xs border border-gray-300 p-3 rounded">
                        <FaMagnifyingGlass className="text-gray-400" />
                        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {officeData.map(({ id, officeName, rating, reviewCount, address, logoUrl }) => (
                        <div key={id}><OfficeRatingCard logoUrl={logoUrl} officeName={officeName} address={address} rating={rating} reviewCount={reviewCount} /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
"use client"
import { useDirectoryContext } from "@/context/DirectoryContext";
import { OfficeRequests } from "@/lib/interface";
import { DIRECTORY_PORTAL_OFFICE_REQUEST_DETAILS } from "@/lib/routes";
import { dentalOfficeRequests } from "@/lib/temp-data";
import { DIRECTORY_OFFICE_REQUEST_STATUSES, DirectoryOfficeRequestStatus, OfficeRequestStatus } from "@/lib/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

export default function DirectoryPortalOfficeRequests({ userId }: { userId: string}){
    const [ officeRequests, setOfficeRequests ] = useState<OfficeRequests[]>([...dentalOfficeRequests])
    const [ inputSearch, setInputSearch ] = useState("")
    const [ statusDisplay, setStatusDisplay ] = useState<DirectoryOfficeRequestStatus>("All")
    const [ showStatusDropdown, setShowStatusDropdown ] = useState(false)
    const { setDirectoryPortalCategory } = useDirectoryContext()
    
    useEffect(() => {
        setDirectoryPortalCategory("Office Request")
    }, [])

    useEffect(() => {
        setOfficeRequests([...dentalOfficeRequests].filter(item => item.officeName.toLowerCase().includes(inputSearch) || item.email?.toLowerCase().includes(inputSearch) || item.ownerName.toLowerCase().includes(inputSearch) || item.mobileNumber?.toLowerCase().includes(inputSearch) || item.address.city.toLowerCase().includes(inputSearch) || item.address.country.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    useEffect(() => {
        if (statusDisplay === "All") return setOfficeRequests([...dentalOfficeRequests])
        
        if (statusDisplay === "Approved"){
            setOfficeRequests([...dentalOfficeRequests].filter(item => item.status === "Approved"))
        } else if (statusDisplay === "Pending"){
            setOfficeRequests([...dentalOfficeRequests].filter(item => item.status === "Pending"))
        } else if (statusDisplay === "Rejected"){
            setOfficeRequests([...dentalOfficeRequests].filter(item => item.status === "Rejected"))
        }
    }, [statusDisplay])

    const StatusDisplay = (status: OfficeRequestStatus) => {
        switch (status) {
            case "Approved":
                return { text: "#10B981", bg: "#E7F8F2" }
            case "Pending":
                return { text: "#B9AE10", bg: "#F8F8E7" }
            case "Rejected":
                return { text: "#B91010", bg: "#F8E7E7" }
            default:
                return { text: "#000", bg: "#fff" }
        }
    }

    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div>
                <h2 className="font-semibold text-xl">Office Requests</h2>
                <div className="text-sm font-light">Review and manage office listing requests</div>
            </div>
            <div className="rounded-lg p-5 border border-gray-300 mt-5">
                <div className="text-lg flex justify-between items-center">
                    <h3 className="font-semibold">All Requests</h3>
                    <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                        <div className="w-80 flex items-center gap-1">
                            <FaMagnifyingGlass className="text-gray-400" />
                            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                        </div>
                        <div className="relative w-32">
                            <div className="absolute -top-2 bg-white px-1 text-gray-500">Status</div>
                            <div onClick={() => setShowStatusDropdown(prev => !prev)} className="flex items-center justify-between cursor-pointer">
                                <div>{statusDisplay}</div>
                                {showStatusDropdown ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {showStatusDropdown && <div 
                                className="absolute top-11 w-32 left-0 bg-white p-3 flex flex-col justify-between rounded-md border border-stone-200 shadow *:p-1 *:cursor-pointer *:hover:opacity-70">
                                {DIRECTORY_OFFICE_REQUEST_STATUSES.map((item, index) => (
                                    <div key={index} onClick={() => setStatusDisplay(item)}>{item}</div>
                                ))}
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-5 *:border-b *:border-gray-300 *:p-3 *:*:w-1/7 *:flex *:items-center *:gap-2">
                    <div className="uppercase font-light text-sm whitespace-nowrap">
                        <div>OFFICE NAME</div>
                        <div>CONTACT PERSON</div>
                        <div>EMAIL</div>
                        <div>PHONE</div>
                        <div>DATE</div>
                        <div>STATUS</div>
                        <div>ACTIONS</div>
                    </div>
                    {officeRequests.map((item, index) => (
                        <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                            <Link href={DIRECTORY_PORTAL_OFFICE_REQUEST_DETAILS(userId, item.id)} className="hover:underline">{item.officeName}</Link>
                            <div>{item.ownerName}</div>
                            <div>{item.email}</div>
                            <div>{item.mobileNumber}</div>
                            <div>{item.createdAt.toISOString().split("T")[0]}</div>
                            <div style={{ color: StatusDisplay(item.status).text, backgroundColor: StatusDisplay(item.status).bg }} className="rounded-full text-center py-2">
                                {item.status}
                            </div>
                            <div className="text-lg flex justify-center *:cursor-pointer">
                                <FiEdit />
                            </div>
                        </div>
                    ))}
                    {officeRequests.length === 0 && <div className="flex items-center justify-center py-5 text-sm">
                        Office unavailable    
                    </div>}
                </div>
            </div>
        </div>
    )
}
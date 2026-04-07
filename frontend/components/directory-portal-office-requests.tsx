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
        <div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">
        {/* Header */}
        <div>
            <h2 className="font-semibold text-lg sm:text-xl">Office Requests</h2>
            <div className="text-sm font-light">Review and manage office listing requests</div>
        </div>

        {/* Container */}
        <div className="rounded-lg p-4 sm:p-5 border border-gray-300 mt-5">
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <h3 className="font-semibold text-lg">All Requests</h3>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* Search */}
                <div className="flex items-center gap-2 w-full sm:w-80 border border-gray-300 rounded p-2">
                <FaMagnifyingGlass className="text-gray-400" />
                <input
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
                    className="outline-none w-full text-sm"
                    placeholder="Search by name, email, phone number"
                />
                </div>

                {/* Status */}
                <div className="relative w-full sm:w-32">
                <div className="absolute -top-2 bg-white px-1 text-gray-500 text-xs">Status</div>

                <div
                    onClick={() => setShowStatusDropdown((prev) => !prev)}
                    className="flex items-center justify-between cursor-pointer border border-gray-300 rounded p-2 bg-white"
                >
                    <div className="text-sm">{statusDisplay}</div>
                    {showStatusDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {showStatusDropdown && (
                    <div className="absolute top-11 w-full bg-white p-2 flex flex-col gap-1 rounded-md border border-gray-300 shadow z-10">
                    {DIRECTORY_OFFICE_REQUEST_STATUSES.map((item, index) => (
                        <div
                        key={index}
                        onClick={() => setStatusDisplay(item)}
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                        >
                        {item}
                        </div>
                    ))}
                    </div>
                )}
                </div>
            </div>
            </div>

            {/* Table / Cards */}
            <div className="mt-4 border border-gray-300 rounded overflow-x-auto">
            {/* Desktop header */}
            <div className="hidden sm:grid grid-cols-7 border-b border-gray-300 p-2 text-xs font-light uppercase whitespace-nowrap">
                <div>Office Name</div>
                <div>Contact Person</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Date</div>
                <div>Status</div>
                <div>Actions</div>
            </div>

            {/* Empty state */}
            {officeRequests.length === 0 && (
                <div className="flex items-center justify-center py-5 text-sm">
                Office unavailable
                </div>
            )}

            {/* Rows */}
            {officeRequests.map((item, index) => (
                <div
                key={index}
                className="flex flex-col sm:grid sm:grid-cols-7 border-b border-gray-200 p-3 gap-2 sm:gap-0 text-xs"
                >
                {/* Office Name */}
                <div className="sm:hidden font-semibold">Office Name:</div>
                <Link
                    href={DIRECTORY_PORTAL_OFFICE_REQUEST_DETAILS(userId, item.id)}
                    className="hover:underline wrap-break-word"
                >
                    {item.officeName}
                </Link>

                {/* Contact */}
                <div className="sm:hidden font-semibold">Contact Person:</div>
                <div>{item.ownerName}</div>

                {/* Email */}
                <div className="sm:hidden font-semibold">Email:</div>
                <div className="wrap-break-word">{item.email}</div>

                {/* Phone */}
                <div className="sm:hidden font-semibold">Phone:</div>
                <div>{item.mobileNumber}</div>

                {/* Date */}
                <div className="sm:hidden font-semibold">Date:</div>
                <div>{item.createdAt.toISOString().split("T")[0]}</div>

                {/* Status */}
                <div className="sm:hidden font-semibold">Status:</div>
                <div
                    style={{
                    color: StatusDisplay(item.status).text,
                    backgroundColor: StatusDisplay(item.status).bg,
                    }}
                    className="rounded-full text-center py-1 px-2 w-fit"
                >
                    {item.status}
                </div>

                {/* Actions */}
                <div className="sm:hidden font-semibold">Actions:</div>
                <div className="text-lg flex items-center gap-3 cursor-pointer">
                    <FiEdit />
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}
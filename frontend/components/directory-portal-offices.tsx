import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import { OfficeData } from "@/lib/interface";
import { dummyDentalOffices } from "@/lib/temp-data";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { DIRECTORY_PORTAL_ADD_OFFICE } from "@/lib/routes";
import { DirectoryStatusDisplay } from "@/lib/type";
import { useDirectoryContext } from "@/context/DirectoryContext";

export default function DirectoryPortalOffices({ userId }: { userId: string }){
    const router = useRouter()
    const [ showStatusDropdown, setShowStatusDropdown ] = useState(false)
    const [ directoryOffices, setDirectoryOffices ] = useState<OfficeData[]>([...dummyDentalOffices])
    const [ inputSearch, setInputSearch ] = useState("")
    const [ statusDisplay, setStatusDisplay ] = useState<DirectoryStatusDisplay>("All")
    const { setDirectoryPortalCategory } = useDirectoryContext()

    useEffect(() => {
        setDirectoryPortalCategory("Offices")
    }, [])

    useEffect(() => {
        setDirectoryOffices([...dummyDentalOffices].filter(item => item.officeName.toLowerCase().includes(inputSearch) || item.email?.toLowerCase().includes(inputSearch) || item.ownerName.toLowerCase().includes(inputSearch) || item.mobileNumber?.toLowerCase().includes(inputSearch) || item.address.city.toLowerCase().includes(inputSearch) || item.address.country.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    useEffect(() => {
        if (statusDisplay === "All") return setDirectoryOffices([...dummyDentalOffices])
        setDirectoryOffices([...dummyDentalOffices].filter(item => (statusDisplay === "Active") ? item.isAvailable : (statusDisplay === "Inactive") && !item.isAvailable ))
    }, [statusDisplay])

    const handleAddNewOfficeButton = () => {
        const officeId = crypto.randomUUID()
        router.push(DIRECTORY_PORTAL_ADD_OFFICE(userId, officeId))
    }

    return(
        <div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <h2 className="font-semibold text-lg sm:text-xl">Office Management</h2>
                    <div className="text-sm font-light">Create and manage dental office listings</div>
                </div>
                <div onClick={handleAddNewOfficeButton}>
                    <Button fill text="+ Add Office" className="w-full sm:w-fit rounded-md" />
                </div>
            </div>

            {/* Office List */}
            <div className="rounded-lg p-4 sm:p-5 border border-gray-300 mt-5">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
                    <h3 className="font-semibold text-lg">All Offices</h3>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-start sm:items-center">
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

                        {/* Status Dropdown */}
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
                            <div onClick={() => setStatusDisplay("All")} className="cursor-pointer hover:bg-gray-100 p-1 rounded">All</div>
                            <div onClick={() => setStatusDisplay("Active")} className="cursor-pointer hover:bg-gray-100 p-1 rounded">Active</div>
                            <div onClick={() => setStatusDisplay("Inactive")} className="cursor-pointer hover:bg-gray-100 p-1 rounded">Inactive</div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>

                {/* Office Table / Cards */}
                <div className="mt-4 border border-gray-300 rounded overflow-x-auto">
                    <div className="hidden sm:grid grid-cols-6 border-b border-gray-300 p-2 text-xs font-light uppercase">
                        <div>Office Name</div>
                        <div>Email</div>
                        <div>Phone</div>
                        <div>Status</div>
                        <div>Location</div>
                        <div>Actions</div>
                    </div>

                    {directoryOffices.length === 0 && (
                        <div className="flex items-center justify-center py-5 text-sm">Office unavailable</div>
                    )}

                    {directoryOffices.map((item, index) => (
                        <div
                        key={index}
                        className="flex flex-col sm:grid sm:grid-cols-6 border-b border-gray-200 p-3 gap-2 sm:gap-0 text-xs"
                        >
                        <div className="sm:hidden font-semibold">Office Name:</div>
                        <div>{item.officeName}</div>

                        <div className="sm:hidden font-semibold">Email:</div>
                        <div>{item.email}</div>

                        <div className="sm:hidden font-semibold">Phone:</div>
                        <div>{item.mobileNumber && "+"}{item.mobileNumber}</div>

                        <div className="sm:hidden font-semibold">Status:</div>
                        <div className={`rounded-full text-center py-1 px-2 ${item.isAvailable ? "bg-theme-light text-theme" : "bg-[#EBEBEB] text-[#5C5C5C]"}`}>
                            {item.isAvailable ? "Active" : "Inactive"}
                        </div>

                        <div className="sm:hidden font-semibold">Location:</div>
                        <div>{item.address.city}, {item.address.state}</div>

                        <div className="sm:hidden font-semibold">Actions:</div>
                        <div className="text-lg flex items-center gap-3 cursor-pointer">
                            <FiEdit />
                            <FaTrashAlt className="text-[#E20C0C]" />
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
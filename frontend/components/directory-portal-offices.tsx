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
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-xl">Office Management</h2>
                    <p className="text-sm font-light">Create and manage dental office listings</p>
                </div>
                <div onClick={handleAddNewOfficeButton}><Button fill text="+ Add Office" className="w-fit rounded-md" /></div>
            </div>
            <div className="rounded-lg p-5 border border-gray-300 mt-5">
                <div className="text-lg flex justify-between items-center">
                    <h3 className="font-semibold">All Offices</h3>
                    <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                        <div className="w-80 flex items-center gap-1">
                            <FaMagnifyingGlass className="text-gray-400" />
                            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                        </div>
                        <div className="relative w-32">
                            <p className="absolute -top-2 bg-white px-1 text-gray-500">Status</p>
                            <div onClick={() => setShowStatusDropdown(prev => !prev)} className="flex items-center justify-between cursor-pointer">
                                <p>{statusDisplay}</p>
                                {showStatusDropdown ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {showStatusDropdown && <div 
                                className="absolute top-11 w-32 left-0 bg-white p-3 flex flex-col justify-between rounded-md border border-stone-200 shadow *:p-1 *:cursor-pointer *:hover:opacity-70">
                                <div onClick={() => setStatusDisplay("All")}>All</div>
                                <div onClick={() => setStatusDisplay("Active")}>Active</div>
                                <div onClick={() => setStatusDisplay("Inactive")}>Inactive</div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-5 *:border-b *:border-gray-300 *:p-3 *:*:w-1/6 *:flex *:items-center *:gap-2">
                    <div className="uppercase font-light text-sm">
                        <p>OFFICE NAME</p>
                        <p>EMAIL</p>
                        <p>PHONE</p>
                        <p>STATUS</p>
                        <p>LOCATION</p>
                        <p>ACTIONS</p>
                    </div>
                    {directoryOffices.map((item, index) => (
                        <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                            <p>{item.officeName}</p>
                            <p>{item.email}</p>
                            <p>{item.mobileNumber && "+"}{item.mobileNumber}</p>
                            <div className={`rounded-full text-center py-2 ${item.isAvailable ? "bg-theme-light text-theme" : "bg-[#EBEBEB] text-[#5C5C5C]"}`}>
                                {item.isAvailable ? "Active" : "In-Active"}
                            </div>
                            <p>{item.address.city}, {item.address.state}</p>
                            <div className="text-lg flex items-center gap-3 *:cursor-pointer">
                                <FiEdit />
                                <FaTrashAlt className="text-[#E20C0C]" />
                            </div>
                        </div>
                    ))}
                    {directoryOffices.length === 0 && <div className="flex items-center justify-center py-5 text-sm">
                        Office unavailable    
                    </div>}
                </div>
            </div>
        </div>
    )
}
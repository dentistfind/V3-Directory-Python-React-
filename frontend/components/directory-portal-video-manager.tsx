"use client"
import { useEffect, useState } from "react"
import { useDirectoryContext } from "@/context/DirectoryContext"
import Button from "./ui/button"
import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6"
import { DirectoryStatusDisplay } from "@/lib/type"
import { DirectoryUser, DirectoryVideoData } from "@/lib/interface"
import { directoryVideos } from "@/lib/temp-data"
import { FiEdit } from "react-icons/fi"
import { FaTrashAlt } from "react-icons/fa"

export default function DirectoryPortalVideoManager({ userData } : { userData: DirectoryUser }){
    const { setDirectoryPortalCategory } = useDirectoryContext()

    const [ directoryVideoData, setDirectoryVideoData ] = useState<DirectoryVideoData[]>([...directoryVideos])
    const [ inputSearch, setInputSearch ] = useState("")
    const [ showStatusDropdown, setShowStatusDropdown ] = useState(false)
    const [ statusDisplay, setStatusDisplay ] = useState<DirectoryStatusDisplay>("All")

    useEffect(() => {
        setDirectoryPortalCategory("Video Manager")
    }, [])

    const handleAddNewVideoButton = () => {}

    const StatusDisplay = (status: DirectoryStatusDisplay) => {
        switch (status) {
            case "Active":
                return { text: "#10B981", bg: "#E7F8F2" }
            case "Inactive":
                return { text: "#5C5C5C", bg: "#EBEBEB" }
            default:
                return { text: "#000", bg: "#fff" }
        }
    }

    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
           `<div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-xl">Homepage Video Management</h2>
                    <div className="text-sm font-light">Create and manage home page video listing</div>
                </div>
                <div onClick={handleAddNewVideoButton}><Button fill text="+ Add New Video" className="w-fit rounded-md" /></div>
            </div>
            <div className="rounded-lg p-5 border border-gray-300 mt-5">
                <div className="text-lg flex justify-between items-center">
                    <h3 className="font-semibold">All Videos</h3>
                    <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                        <div className="w-80 flex items-center gap-1">
                            <FaMagnifyingGlass className="text-gray-400" />
                            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, location" />
                        </div>
                        <div className="relative w-32">
                            <div className="absolute -top-2 bg-white px-1 text-gray-500">Status</div>
                            <div onClick={() => setShowStatusDropdown(prev => !prev)} className="flex items-center justify-between cursor-pointer">
                                <div>{statusDisplay}</div>
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
                <div className="text-sm border border-gray-300 mt-5 *:border-b *:border-gray-300 *:p-3 *:flex *:items-center *:gap-2">
                    <div className="uppercase">
                        <div className="w-2/7">VIDEO TITLE</div>
                        <div className="w-1/7">SOURCE TYPE</div>
                        <div className="w-1/7">LONGITUDE</div>
                        <div className="w-1/7">LATITUDE</div>
                        <div className="w-1/7">RADIUS (Miles)</div>
                        <div className="w-1/7 text-center">STATUS</div>
                        <div className="w-1/7">ACTIONS</div>
                    </div>
                    {directoryVideoData?.map((item, index) => (
                        <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                            <div className="w-2/7">{item.title}</div>
                            <div className="w-1/7">{item.sourceType.charAt(0).toUpperCase()}{item.sourceType.slice(1).toLowerCase()}</div>
                            <div className="w-1/7">{item.longitude}</div>
                            <div className="w-1/7">{item.latitude}</div>
                            <div className="w-1/7">{item.radiusInMiles}</div>
                            <div style={{ color: StatusDisplay(item.status).text, backgroundColor: StatusDisplay(item.status).bg }} className="rounded-full text-center py-2 w-1/7">
                                {item.status === "Inactive" ? "In-Active" : item.status}
                            </div>
                            <div className="w-1/7 text-lg text-center flex items-center gap-3 *:cursor-pointer">
                                <FiEdit />
                                <FaTrashAlt className="text-[#E20C0C]" />
                            </div>
                        </div>
                    ))}
                    {directoryVideoData.length === 0 && <div className="flex items-center justify-center py-5 text-sm">
                        Videos unavailable    
                    </div>}
                </div>
            </div>
        </div>
    )
}
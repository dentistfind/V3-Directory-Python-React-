"use client"
import { useEffect, useState } from "react"
import { useDirectoryContext } from "@/context/DirectoryContext"
import Button from "./ui/button"
import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6"
import { DirectoryStatusDisplay } from "@/lib/type"
import { DirectoryVideoData, UserData } from "@/lib/interface"
import { directoryVideos } from "@/lib/temp-data"
import { FiEdit } from "react-icons/fi"
import { FaTrashAlt } from "react-icons/fa"
import AddNewVideoModal from "./add-new-video-modal"

export default function DirectoryPortalVideoManager({ userData } : { userData: UserData }){
    const { setDirectoryPortalCategory } = useDirectoryContext()

    const [ directoryVideoData ] = useState<DirectoryVideoData[]>([...directoryVideos])
    const [ inputSearch, setInputSearch ] = useState("")
    const [ showStatusDropdown, setShowStatusDropdown ] = useState(false)
    const [ statusDisplay, setStatusDisplay ] = useState<DirectoryStatusDisplay>("All")
    const [ addVideoModalIsOpen, setAddVideoModalIsOpen ] = useState(false)

    useEffect(() => {
        setDirectoryPortalCategory("Video Manager")
    }, [])

    const handleAddNewVideoButton = () => {
        setAddVideoModalIsOpen(true)
    }

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
<div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div>
      <h2 className="font-semibold text-lg sm:text-xl">Homepage Video Management</h2>
      <div className="text-sm font-light">
        Create and manage home page video listing
      </div>
    </div>

    <div onClick={handleAddNewVideoButton}>
      <Button
        fill
        text="+ Add New Video"
        className="w-full sm:w-fit rounded-md"
      />
    </div>
  </div>

  {/* Container */}
  <div className="rounded-lg p-4 sm:p-5 border border-gray-300 mt-5">

    {/* Top bar */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h3 className="font-semibold text-lg">All Videos</h3>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        
        {/* Search */}
        <div className="flex items-center gap-2 w-full sm:w-80 border border-gray-300 rounded p-2">
          <FaMagnifyingGlass className="text-gray-400" />
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
            className="outline-none w-full text-sm"
            placeholder="Search by name, location"
          />
        </div>

        {/* Status */}
        <div className="relative w-full sm:w-32">
          <div className="absolute -top-2 bg-white px-1 text-gray-500 text-xs">
            Status
          </div>

          <div
            onClick={() => setShowStatusDropdown((prev) => !prev)}
            className="flex items-center justify-between cursor-pointer border border-gray-300 rounded p-2 bg-white"
          >
            <div className="text-sm">{statusDisplay}</div>
            {showStatusDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {showStatusDropdown && (
            <div className="absolute top-11 w-full bg-white p-2 flex flex-col gap-1 rounded-md border border-gray-300 shadow z-10">
              <div onClick={() => setStatusDisplay("All")} className="p-1 hover:bg-gray-100 rounded cursor-pointer">All</div>
              <div onClick={() => setStatusDisplay("Active")} className="p-1 hover:bg-gray-100 rounded cursor-pointer">Active</div>
              <div onClick={() => setStatusDisplay("Inactive")} className="p-1 hover:bg-gray-100 rounded cursor-pointer">Inactive</div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Table / Cards */}
    <div className="mt-4 border border-gray-300 rounded overflow-x-auto">

      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-7 text-xs uppercase border-b border-gray-300 p-2">
        <div>Video Title</div>
        <div>Source</div>
        <div>Longitude</div>
        <div>Latitude</div>
        <div>Radius</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {/* Empty */}
      {directoryVideoData.length === 0 && (
        <div className="flex items-center justify-center py-5 text-sm">
          Videos unavailable
        </div>
      )}

      {/* Rows */}
      {directoryVideoData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:grid sm:grid-cols-7 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
        >
          {/* Title */}
          <div className="sm:hidden font-semibold">Video Title:</div>
          <div className="wrap-break-word">{item.title}</div>

          {/* Source */}
          <div className="sm:hidden font-semibold">Source:</div>
          <div>
            {item.sourceType.charAt(0).toUpperCase()}
            {item.sourceType.slice(1).toLowerCase()}
          </div>

          {/* Longitude */}
          <div className="sm:hidden font-semibold">Longitude:</div>
          <div>{item.longitude}</div>

          {/* Latitude */}
          <div className="sm:hidden font-semibold">Latitude:</div>
          <div>{item.latitude}</div>

          {/* Radius */}
          <div className="sm:hidden font-semibold">Radius (Miles):</div>
          <div>{item.radiusInMiles}</div>

          {/* Status */}
          <div className="sm:hidden font-semibold">Status:</div>
          <div
            style={{
              color: StatusDisplay(item.status).text,
              backgroundColor: StatusDisplay(item.status).bg,
            }}
            className="rounded-full text-center py-1 px-2 w-fit"
          >
            {item.status === "Inactive" ? "Inactive" : item.status}
          </div>

          {/* Actions */}
          <div className="sm:hidden font-semibold">Actions:</div>
          <div className="flex items-center gap-3 text-lg cursor-pointer">
            <FiEdit />
            <FaTrashAlt className="text-[#E20C0C]" />
          </div>
        </div>
      ))}
    </div>
  </div>

  <AddNewVideoModal
    isOpen={addVideoModalIsOpen}
    onClose={() => setAddVideoModalIsOpen(false)}
  />
</div>
    )
}
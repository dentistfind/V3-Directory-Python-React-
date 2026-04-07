"use client"
import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import { OfficeData } from "@/lib/interface";
import { dummyDentalOffices, initialOfficeData } from "@/lib/temp-data";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { DirectoryStatusDisplay } from "@/lib/type";
import { useDFPortalContext } from "@/context/DFPortalContext";
import AddNewOfficeModal from "./add-new-office-modal";

export default function DFPortalOffices(){
    const { setDFPortalCategory } = useDFPortalContext()
    
    const [ showStatusDropdown, setShowStatusDropdown ] = useState(false)
    const [ dfPortalOffices, setDFPortalOffices ] = useState<OfficeData[]>([...dummyDentalOffices])
    const [ inputSearch, setInputSearch ] = useState("")
    const [ statusDisplay, setStatusDisplay ] = useState<DirectoryStatusDisplay>("All")
    const [ newOfficeIsOpen, setNewOfficeIsOpen ] = useState(false)
    const [ existingOfficeData, setExistingOfficeData ] = useState(initialOfficeData)
    const [ modalIsEdit, setModalIsEdit ] = useState(false)

    useEffect(() => {
        setDFPortalCategory("Offices")
    }, [])

    useEffect(() => {
        setDFPortalOffices([...dummyDentalOffices].filter(item => item.officeName.toLowerCase().includes(inputSearch) || item.email?.toLowerCase().includes(inputSearch) || item.ownerName.toLowerCase().includes(inputSearch) || item.mobileNumber?.toLowerCase().includes(inputSearch) || item.address.city.toLowerCase().includes(inputSearch) || item.address.country.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    useEffect(() => {
        if (statusDisplay === "All") return setDFPortalOffices([...dummyDentalOffices])
        setDFPortalOffices([...dummyDentalOffices].filter(item => (statusDisplay === "Active") ? item.isAvailable : (statusDisplay === "Inactive") && !item.isAvailable ))
    }, [statusDisplay])

    const handleAddNewOfficeButton = () => {
        setModalIsEdit(false)
        setNewOfficeIsOpen(true)
    }

    const handleEditOfficeButton = (existingOffice: OfficeData) => {
        setModalIsEdit(true)
        setNewOfficeIsOpen(true)
        setExistingOfficeData(existingOffice)
    }

    return(
<div className="flex-1 min-h-screen p-4 sm:p-5 space-y-6">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div>
      <h2 className="font-semibold text-lg sm:text-xl">Office Management</h2>
      <div className="text-sm font-light">
        Manage all registered offices and their details
      </div>
    </div>

    <div onClick={handleAddNewOfficeButton}>
      <Button
        fill
        text="+ Add Office"
        className="w-full sm:w-fit rounded-md"
      />
    </div>
  </div>

  {/* Container */}
  <div className="rounded-lg p-4 sm:p-5 border border-gray-300 space-y-5">

    {/* Top Bar */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h3 className="text-lg font-semibold">All Offices</h3>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

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

        {/* Status Filter */}
        <div className="relative w-full sm:w-32 text-xs border border-gray-300 p-2 rounded">
          <div className="absolute -top-2 bg-white px-1 text-gray-500">
            Status
          </div>

          <div
            onClick={() => setShowStatusDropdown(prev => !prev)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div>{statusDisplay}</div>
            {showStatusDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {showStatusDropdown && (
            <div className="absolute top-11 left-0 w-full bg-white p-2 flex flex-col rounded-md border border-gray-200 shadow z-10">
              <div onClick={() => setStatusDisplay("All")} className="p-1 cursor-pointer hover:opacity-70">All</div>
              <div onClick={() => setStatusDisplay("Active")} className="p-1 cursor-pointer hover:opacity-70">Active</div>
              <div onClick={() => setStatusDisplay("Inactive")} className="p-1 cursor-pointer hover:opacity-70">Inactive</div>
            </div>
          )}
        </div>

      </div>
    </div>

    {/* Table / Cards */}
    <div className="mt-4 border border-gray-300 rounded overflow-x-auto">

      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-6 text-xs uppercase border-b border-gray-300 p-2">
        <div>Office Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Status</div>
        <div>No. of Patients</div>
        <div>Actions</div>
      </div>

      {/* Empty */}
      {dfPortalOffices.length === 0 && (
        <div className="flex items-center justify-center py-5 text-sm">
          Offices unavailable
        </div>
      )}

      {/* Rows */}
      {dfPortalOffices.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:grid sm:grid-cols-6 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
        >
          {/* Name */}
          <div className="sm:hidden font-semibold">Office Name:</div>
          <div className="wrap-break-word">{item.officeName}</div>

          {/* Email */}
          <div className="sm:hidden font-semibold">Email:</div>
          <div className="wrap-break-word">{item.email}</div>

          {/* Phone */}
          <div className="sm:hidden font-semibold">Phone:</div>
          <div>{item.mobileNumber ? `+${item.mobileNumber}` : "-"}</div>

          {/* Status */}
          <div className="sm:hidden font-semibold">Status:</div>
          <div
            className={`w-fit px-3 py-1 rounded-full text-center
              ${item.isAvailable
                ? "bg-theme-light text-theme"
                : "bg-gray-200 text-gray-600"
              }`}
          >
            {item.isAvailable ? "Active" : "Inactive"}
          </div>

          {/* Patients */}
          <div className="sm:hidden font-semibold">Patients:</div>
          <div className="text-center sm:text-left">
            {item.noOfPatients}
          </div>

          {/* Actions */}
          <div className="sm:hidden font-semibold">Actions:</div>
          <div className="flex items-center gap-3 text-lg cursor-pointer">
            <div onClick={() => handleEditOfficeButton(item)}>
              <FiEdit />
            </div>
            <FaTrashAlt className="text-[#E20C0C]" />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <AddNewOfficeModal
    isOpen={newOfficeIsOpen}
    onClose={() => setNewOfficeIsOpen(false)}
    existingOfficeData={existingOfficeData}
    isEdit={modalIsEdit}
  />
</div>
    )
}
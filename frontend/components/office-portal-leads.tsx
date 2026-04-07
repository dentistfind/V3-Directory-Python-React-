import { useOfficePortalContext } from "@/context/OfficePortalContext"
import { useEffect, useState } from "react"
import Button from "./ui/button"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { initialOfficePortalLead, officePortalLeadsDummyData } from "@/lib/temp-data"
import { LeadsStatus } from "@/lib/type"
import { IoPersonAddOutline } from "react-icons/io5"
import { MdOutlineLocalPhone } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { OfficePortalLeads as OfficePortalLeadsInterface } from "@/lib/interface"
import AddNewLeadModal from "./add-new-lead-modal"

export default function OfficePortalLeads(){
    const { setOfficePortalCategory } = useOfficePortalContext()
    
    const [ inputSearch, setInputSearch ] = useState("")
    const [ leadsDataDisplay, setLeadsDataDisplay ] = useState<OfficePortalLeadsInterface[]>([...officePortalLeadsDummyData])
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const [ modalIsEdit, setModalIsEdit ] = useState(false)
    const [ existingLeadData, setExistingLeadData ] = useState<OfficePortalLeadsInterface>(initialOfficePortalLead)

    useEffect(() => {
        setOfficePortalCategory("Leads")
    }, [])

    useEffect(() => {
        setLeadsDataDisplay([...officePortalLeadsDummyData].filter(item => item.name.toLowerCase().includes(inputSearch) || item.email.toLowerCase().includes(inputSearch) || item.source.toLowerCase().includes(inputSearch) || item.status.toLowerCase().includes(inputSearch) || item.phoneNumber.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    const handleAddNewLead = () => {
        setModalIsEdit(false)
        setExistingLeadData(initialOfficePortalLead)
        setModalIsOpen(true)
    }

    const handleEditLead = (lead: OfficePortalLeadsInterface) => {
        setModalIsEdit(true)
        setExistingLeadData(lead)
        setModalIsOpen(true)
    }

    const StatusDisplay = ({status}: {status: LeadsStatus}) => {
        return (
            <div style={{
                color: status === "Contacted" ? "#1013B9" : status === "Patient Lead" ? "#fff" : status === "Qualified" ? "#10B981" : status === "New Contact" ? "#B99D10" : "#000",
                backgroundColor: status === "Contacted" ? "#E8E7F8" : status === "Patient Lead" ? "#000" : status === "Qualified" ? "#E7F8F2" : status === "New Contact" ? "#F8F8E7" : "#fff"
            }} className="rounded-full text-center p-2">
                {status}
            </div>
        )
    }

    return (
<div className="flex-1 min-h-screen p-4 sm:p-5 space-y-6">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
    <div>
      <h1 className="text-xl sm:text-2xl font-bold">Leads</h1>
      <p className="font-light text-sm sm:text-base">Manage and track your leads</p>
    </div>

    <div onClick={handleAddNewLead}>
      <Button fill text="+ New Lead" className="w-full sm:w-fit rounded-md" />
    </div>
  </div>

  {/* Container */}
  <div className="border border-gray-200 shadow rounded-lg p-4 sm:p-5 space-y-5 sm:space-y-7">

    {/* Top Bar */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h3 className="text-lg font-semibold">All Leads</h3>

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

    {/* Table / Cards */}
    <div className="mt-4 border border-gray-300 rounded overflow-x-auto">

      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-7 text-xs uppercase border-b border-gray-300 p-2">
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Source</div>
        <div>Status</div>
        <div>Date</div>
        <div>Actions</div>
      </div>

      {/* Empty */}
      {leadsDataDisplay.length === 0 && (
        <div className="flex items-center justify-center py-5 text-sm">
          Leads unavailable
        </div>
      )}

      {/* Rows */}
      {leadsDataDisplay.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:grid sm:grid-cols-7 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
        >
          {/* Name */}
          <div className="sm:hidden font-semibold">Name:</div>
          <div className="wrap-break-word">{item.name}</div>

          {/* Email */}
          <div className="sm:hidden font-semibold">Email:</div>
          <div className="wrap-break-word">{item.email}</div>

          {/* Phone */}
          <div className="sm:hidden font-semibold">Phone:</div>
          <div>{item.phoneNumber}</div>

          {/* Source */}
          <div className="sm:hidden font-semibold">Source:</div>
          <div>{item.source}</div>

          {/* Status */}
          <div className="sm:hidden font-semibold">Status:</div>
          <div><StatusDisplay status={item.status} /></div>

          {/* Date */}
          <div className="sm:hidden font-semibold">Date:</div>
          <div>{new Date(item.createdAt).toDateString()}</div>

          {/* Actions */}
          <div className="sm:hidden font-semibold">Actions:</div>
          <div className="flex items-center gap-3 text-lg cursor-pointer">
            <MdOutlineLocalPhone />
            <FiMessageSquare />
            <div onClick={() => handleEditLead(item)}><IoEyeOutline /></div>
            <IoPersonAddOutline />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <AddNewLeadModal
    isOpen={modalIsOpen}
    onClose={() => setModalIsOpen(false)}
    isEdit={modalIsEdit}
    existingLeadData={existingLeadData}
  />
</div>
    )
}
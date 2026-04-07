import { useOfficePortalContext } from "@/context/OfficePortalContext"
import { useEffect, useState } from "react"
import Button from "./ui/button"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { initialOfficePortalPatient, officePortalPatientsDummyData } from "@/lib/temp-data"
import { PatientStatus } from "@/lib/type"
import { OfficePortalPatients as OfficePortalPatientsInterface } from "@/lib/interface"
import { FaEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md";
import AddNewPatientModal from "./add-new-patient-modal"

export default function OfficePortalPatients(){
    const { setOfficePortalCategory } = useOfficePortalContext()
    
    const [ inputSearch, setInputSearch ] = useState("")
    const [ patientDataDisplay, setPatientDataDisplay ] = useState<OfficePortalPatientsInterface[]>([...officePortalPatientsDummyData])
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const [ modalIsEdit, setModalIsEdit ] = useState(false)
    const [ existingPatientData, setExistingPatientData ] = useState<OfficePortalPatientsInterface>(initialOfficePortalPatient)

    useEffect(() => {
        setOfficePortalCategory("Patients")
    }, [])

    useEffect(() => {
        setPatientDataDisplay([...officePortalPatientsDummyData].filter(item => item.name.toLowerCase().includes(inputSearch) || item.email.toLowerCase().includes(inputSearch) || item.location.city.toLowerCase().includes(inputSearch) || item.location.country.toLowerCase().includes(inputSearch) || item.phoneNumber.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    const handleAddNewPatient = () => {
        setModalIsEdit(false)
        setExistingPatientData(initialOfficePortalPatient)
        setModalIsOpen(true)
    }

    const handleEditPatient = (lead: OfficePortalPatientsInterface) => {
        setModalIsEdit(true)
        setExistingPatientData(lead)
        setModalIsOpen(true)
    }

    const StatusDisplay = ({status}: {status: PatientStatus}) => {
        return (
            <div style={{
                color: status === "Inactive" ? "#1013B9" : status === "Active" ? "#10B981" : "#000",
                backgroundColor: status === "Inactive" ? "#E8E7F8" : status === "Active" ? "#E7F8F2" : "#fff"
            }} className="rounded-full text-center p-2">
                {status}
            </div>
        )
    }

    return(
        <div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div>
      <h1 className="text-xl sm:text-2xl font-bold">Patients</h1>
      <p className="font-light text-sm sm:text-base">
        Manage patient records and information
      </p>
    </div>

    <div onClick={handleAddNewPatient}>
      <Button
        fill
        text="+ New Patient"
        className="w-full sm:w-fit rounded-md"
      />
    </div>
  </div>

  {/* Container */}
  <div className="border border-gray-200 shadow rounded-lg p-4 sm:p-5 space-y-5 sm:space-y-7">

    {/* Top Bar */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h3 className="text-lg font-semibold">All Patients</h3>

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
      <div className="hidden sm:grid grid-cols-6 text-xs uppercase border-b border-gray-300 p-2">
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Status</div>
        <div>Last Visit</div>
        <div>Actions</div>
      </div>

      {/* Empty */}
      {patientDataDisplay.length === 0 && (
        <div className="flex items-center justify-center py-5 text-sm">
          Patients unavailable
        </div>
      )}

      {/* Rows */}
      {patientDataDisplay.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:grid sm:grid-cols-6 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
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

          {/* Status */}
          <div className="sm:hidden font-semibold">Status:</div>
          <div className="w-fit">
            <StatusDisplay status={item.status} />
          </div>

          {/* Last Visit */}
          <div className="sm:hidden font-semibold">Last Visit:</div>
          <div>{new Date(item.lastVisit).toDateString()}</div>

          {/* Actions */}
          <div className="sm:hidden font-semibold">Actions:</div>
          <div className="flex items-center gap-3 text-lg cursor-pointer">
            <div onClick={() => handleEditPatient(item)}>
              <FaEdit />
            </div>
            <MdDeleteOutline className="text-red-600" />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <AddNewPatientModal
    isOpen={modalIsOpen}
    onClose={() => setModalIsOpen(false)}
    isEdit={modalIsEdit}
    existingPatientData={existingPatientData}
  />
</div>
    )
}
import { OfficePortalCallLogs } from "@/lib/interface";
import { formatDuration } from "@/lib/script";
import { officePortalCallLogsDummyData } from "@/lib/temp-data";
import { CallLogsStatus, PatientStatus } from "@/lib/type";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

export default function OfficePortalLogsCallLogs(){
    const [ inputSearch, setInputSearch ] = useState("")
    const [ callLogsDisplay, setCallLogsDisplay ] = useState<OfficePortalCallLogs[]>([...officePortalCallLogsDummyData])

    useEffect(() => {
        setCallLogsDisplay([...officePortalCallLogsDummyData].filter(item => item.name.toLowerCase().includes(inputSearch) || item.phoneNumber.includes(inputSearch) || item.patientStatus.toLowerCase().includes(inputSearch) || item.status.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    const PatientStatusDisplay = ({status}: {status: PatientStatus}) => {
        return (
            <div style={{
                color: status === "Active" ? "#10B981" : status === "Inactive" ? "#1013B9" : "#000",
                backgroundColor: status === "Active" ? "#E7F8F2" : status === "Inactive" ? "#E8E7F8" : "#fff"
            }} className="rounded-full text-center p-2">
                {status}
            </div>
        )
    }

    const StatusDisplay = ({status}: {status: CallLogsStatus}) => {
        return (
            <div style={{
                color: status === "Completed" ? "#10B981" : status === "Missed" ? "#D80027" : "#000",
                backgroundColor: status === "Completed" ? "#E7F8F2" : status === "Missed" ? "#FFEAEA" : "#fff"
            }} className="rounded-full text-center p-2">
                {status}
            </div>
        )
    }
    
    return(
<div className="space-y-4">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h3 className="text-base sm:text-lg font-semibold">Call Logs</h3>

        {/* Search */}
        <div className="text-xs flex items-center gap-2 border border-gray-300 px-3 py-2 rounded w-full sm:w-80">
            <FaMagnifyingGlass className="text-gray-400" />
            <input
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
                className="outline-0 w-full text-sm"
                placeholder="Search..."
            />
        </div>
    </div>

    {/* DESKTOP TABLE */}
    <div className="hidden sm:block border border-gray-200 rounded overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-7 uppercase font-light text-sm border-b border-gray-200 p-3 bg-gray-50">
            <div>NAME</div>
            <div>PHONE</div>
            <div>CREATED AT</div>
            <div>PATIENT STATUS</div>
            <div>DURATION</div>
            <div>STATUS</div>
            <div>ACTIONS</div>
        </div>

        {/* Rows */}
        {callLogsDisplay?.map((item, index) => (
            <div key={index} className="grid grid-cols-7 text-xs border-b border-gray-200 p-3 items-center">
                <div className="wrap-break-word">{item.name}</div>
                <div>{item.phoneNumber}</div>
                <div>{item.createdAt.toDateString()}</div>
                <PatientStatusDisplay status={item.patientStatus} />
                <div>{formatDuration(item.duration)}</div>
                <StatusDisplay status={item.status} />
                <div className="text-lg flex items-center gap-3 cursor-pointer">
                    <FiEye />
                </div>
            </div>
        ))}
    </div>

    {/* MOBILE CARDS */}
    <div className="sm:hidden space-y-3">
        {callLogsDisplay?.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 text-xs space-y-2 shadow-sm">

                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-500">{item.phoneNumber}</p>
                    </div>
                    <FiEye className="text-lg cursor-pointer" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-gray-600">
                    <div>
                        <p className="text-[10px] uppercase">Created</p>
                        <p>{item.createdAt.toDateString()}</p>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase">Duration</p>
                        <p>{formatDuration(item.duration)}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <PatientStatusDisplay status={item.patientStatus} />
                    <StatusDisplay status={item.status} />
                </div>

            </div>
        ))}
    </div>

</div>
    )
}
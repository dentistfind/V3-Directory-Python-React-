import { OfficePortalWebFormLogs as OfficePortalWebFormLogsInterface } from "@/lib/interface";
import { getSubmittedDateTime } from "@/lib/script";
import { officePortalWebFormLogsDummyData } from "@/lib/temp-data";
import { CallLogsStatus, PatientStatus } from "@/lib/type";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

export default function OfficePortalWebFormLogs(){
    const [ inputSearch, setInputSearch ] = useState("")
    const [ webLogsDisplay, setWebLogsDisplay ] = useState<OfficePortalWebFormLogsInterface[]>([...officePortalWebFormLogsDummyData])

    useEffect(() => {
        setWebLogsDisplay(
            [...officePortalWebFormLogsDummyData].filter(item => 
                item.name.toLowerCase().includes(inputSearch) || 
                item.email.includes(inputSearch) || 
                item.patientStatus.toLowerCase().includes(inputSearch) || 
                item.patientStatus.toLowerCase().includes(inputSearch) || 
                item.formType.toLowerCase().includes(inputSearch)
            )
        )
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
        <div>
            <div className="text-lg flex justify-between items-center">
                <h3 className="font-semibold">Webform Logs</h3>
                <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                    <div className="w-80 flex items-center gap-1">
                        <FaMagnifyingGlass className="text-gray-400" />
                        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 mt-5 *:border-b *:border-gray-200 *:p-3 *:*:w-1/6 *:flex *:items-center *:gap-2 rounded">
                <div className="uppercase font-light text-sm">
                    <div>NAME</div>
                    <div>EMAIL</div>
                    <div>FORM TYPE</div>
                    <div>SUBMITTED DATE & TIME</div>
                    <div>PATIENT STATUS</div>
                    <div>ACTIONS</div>
                </div>
                {webLogsDisplay?.map((item, index) => (
                    <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div>{item.formType}</div>
                        <div>{getSubmittedDateTime(item.submittedDate, item.submittedTime).toLocaleString()}</div>
                        <PatientStatusDisplay status={item.patientStatus} />
                        <div className="text-lg flex items-center gap-3 *:cursor-pointer">
                            <FiEye />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
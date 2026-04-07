import { OfficePortalSMSLogs as OfficePortalSMSLogsInterface } from "@/lib/interface";
import { officePortalSMSLogsDummyData } from "@/lib/temp-data";
import { PatientStatus, SMSLogsStatus } from "@/lib/type";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

export default function OfficePortalSMSLogs(){
    const [ inputSearch, setInputSearch ] = useState("")
    const [ smsLogsDisplay, setSMSLogsDisplay ] = useState<OfficePortalSMSLogsInterface[]>([...officePortalSMSLogsDummyData])
    const [ smsStatusDisplay, setSmsStatusDisplay ] = useState<SMSLogsStatus | "All">("All")

    useEffect(() => {
        setSMSLogsDisplay(
            [...officePortalSMSLogsDummyData].filter(item => 
                item.patientName.toLowerCase().includes(inputSearch) || 
                item.message.includes(inputSearch) || 
                item.patientStatus.toLowerCase().includes(inputSearch) || 
                item.patientStatus.toLowerCase().includes(inputSearch) || 
                item.phoneNumber.toLowerCase().includes(inputSearch)
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

    const StatusDisplay = ({status}: {status: SMSLogsStatus}) => {
        return (
            <div style={{
                color: status === "Inbound" ? "#10B981" : status === "Outbound" ? "#D80027" : "#000",
                backgroundColor: status === "Inbound" ? "#E7F8F2" : status === "Outbound" ? "#FFEAEA" : "#fff"
            }} className="rounded-full text-center p-2">
                {status}
            </div>
        )
    }

    useEffect(() => {
        if (smsStatusDisplay === "All"){
            setSMSLogsDisplay([...officePortalSMSLogsDummyData])
        } else {
            setSMSLogsDisplay([...officePortalSMSLogsDummyData].filter(item => item.smsStatus === smsStatusDisplay))
        }
    }, [smsStatusDisplay])

    const handleSelectSMSStatus = (status: SMSLogsStatus) => {
        if (status === smsStatusDisplay){
            setSmsStatusDisplay("All")
        } else {
            setSmsStatusDisplay(status)
        }   
    }
    
    return(
        <div>
            <div className="text-lg flex justify-between items-center">
                <h3 className="font-semibold">SMS Logs</h3>
                <div className="flex items-center space-x-5">
                    <div className="flex items-center gap-5 *:border *:border-gray-300 *:p-2 *:rounded *:cursor-pointer text-sm text-gray-500">
                        <div 
                            style={{ borderColor: smsStatusDisplay === "Inbound" ? "var(--color-theme)" : "#d1d5dc", color: smsStatusDisplay === "Inbound" ? "var(--color-theme)" : "#6a7282" }} 
                            onClick={() => handleSelectSMSStatus("Inbound")}
                        >
                            Inbound
                        </div>
                        <div 
                            style={{ borderColor: smsStatusDisplay === "Outbound" ? "var(--color-theme)" : "#d1d5dc", color: smsStatusDisplay === "Outbound" ? "var(--color-theme)" : "#6a7282" }} 
                            onClick={() => handleSelectSMSStatus("Outbound")}
                        >
                            Outbound
                        </div>
                    </div>
                    <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                        <div className="w-80 flex items-center gap-1">
                            <FaMagnifyingGlass className="text-gray-400" />
                            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 mt-5 *:border-b *:border-gray-200 *:p-3 *:*:w-1/6 *:flex *:items-center *:gap-2 rounded">
                <div className="uppercase font-light text-sm">
                    <div>PATIENT NAME</div>
                    <div>CREATED AT</div>
                    <div>PHONE NUMBER</div>
                    <div>MESSAGE</div>
                    <div>PATIENT STATUS</div>
                    <div>SMS STATUS</div>
                    <div>ACTIONS</div>
                </div>
                {smsLogsDisplay?.map((item, index) => (
                    <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                        <div>{item.patientName}</div>
                        <div>{item.createdAt.toDateString()}</div>
                        <div>{item.phoneNumber}</div>
                        <div>{item.message}</div>
                        <PatientStatusDisplay status={item.patientStatus} />
                        <StatusDisplay status={item.smsStatus} />
                        <div className="text-lg flex items-center gap-3 *:cursor-pointer">
                            <FiEye />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
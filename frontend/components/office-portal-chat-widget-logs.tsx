import { OfficePortalChatWidgetLogs as OfficePortalChatWidgetLogsInterface } from "@/lib/interface";
import { formatDuration } from "@/lib/script";
import { officePortalChatWidgetLogsDummyData } from "@/lib/temp-data";
import { PatientStatus } from "@/lib/type";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function OfficePortalChatWidgetLogs(){
    const [ inputSearch, setInputSearch ] = useState("")
    const [ chatWidgetLogsDisplay, setChatWidgetLogsDisplay ] = useState<OfficePortalChatWidgetLogsInterface[]>([...officePortalChatWidgetLogsDummyData])

    useEffect(() => {
        setChatWidgetLogsDisplay(
            [...officePortalChatWidgetLogsDummyData].filter(item => 
                item.visitorName.toLowerCase().includes(inputSearch) || 
                item.email.includes(inputSearch) || 
                item.patientStatus.toLowerCase().includes(inputSearch) || 
                item.patientStatus.toLowerCase().includes(inputSearch) || 
                item.agent.toLowerCase().includes(inputSearch)
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
    
    return(
        <div>
            <div className="text-lg flex justify-between items-center">
                <h3 className="font-semibold">Chat Widget Logs</h3>
                <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                    <div className="w-80 flex items-center gap-1">
                        <FaMagnifyingGlass className="text-gray-400" />
                        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 mt-5 *:border-b *:border-gray-200 *:p-3 *:*:w-1/6 *:flex *:items-center *:gap-2 rounded">
                <div className="uppercase font-light text-sm">
                    <div>VISITOR NAME</div>
                    <div>EMAIL</div>
                    <div>START TIME</div>
                    <div>DURATION</div>
                    <div>AGENT</div>
                    <div>PATIENT STATUS</div>
                </div>
                {chatWidgetLogsDisplay?.map((item, index) => (
                    <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                        <div>{item.visitorName}</div>
                        <div>{item.email}</div>
                        <div>{item.startTime.toLocaleString()}</div>
                        <div>{formatDuration(item.durationInSeconds).toLocaleString()}</div>
                        <div>{item.agent}</div>
                        <PatientStatusDisplay status={item.patientStatus} />
                    </div>
                ))}
            </div>
        </div>
    )
}
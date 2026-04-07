import { useEffect, useState } from "react"
import OfficePortalLogsCallLogs from "./office-portal-logs-call-logs"
import OfficePortalWebFormLogs from "./office-portal-web-form-logs"
import OfficePortalChatWidgetLogs from "./office-portal-chat-widget-logs"
import OfficePortalSMSLogs from "./office-portal-sms-logs"
import OfficePortalPatientTrackingLogs from "./office-portal-patient-tracking-logs"
import { useOfficePortalContext } from "@/context/OfficePortalContext"

const menuItems = ["Call Logs", "Webform Logs", "Chat Widget", "Sms", "Patient Tracking"]

export default function OfficePortalLogs(){
    const { setOfficePortalCategory } = useOfficePortalContext()
    const [ componentPage, setComponentPage ] = useState(0)

    useEffect(() => {
        setOfficePortalCategory("Logs")
    }, [])
    
    return(
 <div className="flex-1 min-h-[100dvh] p-2 sm:p-5 space-y-4 sm:space-y-7">
    
    {/* Header */}
    <div className="space-y-1">
        <h1 className="text-lg sm:text-2xl font-bold">Logs</h1>
        <p className="font-light text-xs sm:text-base text-gray-600">
            View all communication and activity logs
        </p>
    </div>

    <div className="border border-gray-200 shadow-sm sm:shadow rounded-lg p-2 sm:p-5 space-y-4 sm:space-y-7">
        
        {/* Desktop Tabs */}
        <div className="hidden sm:flex bg-theme-light justify-between p-2 rounded-full font-medium text-sm">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setComponentPage(index)}
                    className={`
                        ${componentPage === index ? "bg-theme text-white" : ""}
                        cursor-pointer py-1 px-3 text-sm transition-all
                        hover:bg-theme hover:bg-opacity-20
                        rounded-full flex-1 text-center
                    `}
                >
                    {item}
                </div>
            ))}
        </div>

        {/* Mobile Tabs (Improved Scroll UX) */}
        <div className="sm:hidden flex gap-2 overflow-x-auto no-scrollbar pb-1 snap-x snap-mandatory">
            {menuItems.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setComponentPage(index)}
                    className={`
                        ${componentPage === index 
                            ? "bg-theme text-white" 
                            : "bg-theme-light text-theme"
                        }
                        py-2 px-4 text-xs font-medium
                        whitespace-nowrap rounded-full
                        transition-all shrink-0 snap-start
                        active:scale-95
                    `}
                >
                    {item}
                </button>
            ))}
        </div>

        {/* Content */}
        <div className="w-full overflow-hidden">
            {componentPage === 0 && <OfficePortalLogsCallLogs />}
            {componentPage === 1 && <OfficePortalWebFormLogs />}
            {componentPage === 2 && <OfficePortalChatWidgetLogs />}
            {componentPage === 3 && <OfficePortalSMSLogs />}
            {componentPage === 4 && <OfficePortalPatientTrackingLogs />}
        </div>

    </div>
</div>
    )
}

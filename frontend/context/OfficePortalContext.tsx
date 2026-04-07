"use client"
import { OfficePortalAppointmentRequests, OfficePortalLeads, OfficePortalPatients } from "@/lib/interface"
import { initialOfficePortalAppointmentRequest, initialOfficePortalLead, initialOfficePortalPatient } from "@/lib/temp-data"
import { OfficePortalCategoryTypes } from "@/lib/type"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type OfficePortalContextType = {
    officePortalCategory: OfficePortalCategoryTypes, 
    setOfficePortalCategory: Dispatch<SetStateAction<OfficePortalCategoryTypes>>,
    newLeadData: OfficePortalLeads, 
    setNewLeadData: Dispatch<SetStateAction<OfficePortalLeads>>,
    newPatientData: OfficePortalPatients, 
    setNewPatientData: Dispatch<SetStateAction<OfficePortalPatients>>,
    newAppointmentRequestData: OfficePortalAppointmentRequests, 
    setNewAppointmentRequestData: Dispatch<SetStateAction<OfficePortalAppointmentRequests>>
}

const OfficePortalContext = createContext<OfficePortalContextType | undefined>(undefined)

export const OfficePortalProvider = ({ children }: any) => {
    const [ officePortalCategory, setOfficePortalCategory ] = useState<OfficePortalCategoryTypes>("Dashboard")
    const [ newLeadData, setNewLeadData ] = useState<OfficePortalLeads>(initialOfficePortalLead)
    const [ newPatientData, setNewPatientData ] = useState<OfficePortalPatients>(initialOfficePortalPatient)
    const [ newAppointmentRequestData, setNewAppointmentRequestData ] = useState<OfficePortalAppointmentRequests>(initialOfficePortalAppointmentRequest)
    
    return(
        <OfficePortalContext.Provider value={{
                                        officePortalCategory, setOfficePortalCategory,
                                        newLeadData, setNewLeadData,
                                        newPatientData, setNewPatientData,
                                        newAppointmentRequestData, setNewAppointmentRequestData
                                    }}>
            { children }
        </OfficePortalContext.Provider>
    )
}

export const useOfficePortalContext = () => {
  const context = useContext(OfficePortalContext)
  if (!context) {
    throw new Error("useOfficePortalContext must be used within a OfficePortalProvider")
  }
  return context
}
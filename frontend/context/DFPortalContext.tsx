"use client"
import { OfficeData } from "@/lib/interface"
import { initialOfficeData } from "@/lib/temp-data"
import { DFPortalCategoryTypes } from "@/lib/type"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type DFPortalContextType = {
    dfPortalCategory: DFPortalCategoryTypes, 
    setDFPortalCategory: Dispatch<SetStateAction<DFPortalCategoryTypes>>,
    newOfficeData: OfficeData, 
    setNewOfficeData: Dispatch<SetStateAction<OfficeData>>
}

const DFPortalContext = createContext<DFPortalContextType | undefined>(undefined)

export const DFPortalProvider = ({ children }: any) => {
    const [ dfPortalCategory, setDFPortalCategory ] = useState<DFPortalCategoryTypes>("Dashboard")
    const [ newOfficeData, setNewOfficeData ] = useState<OfficeData>(initialOfficeData)
    
    return(
        <DFPortalContext.Provider value={{
                                        dfPortalCategory, setDFPortalCategory,
                                        newOfficeData, setNewOfficeData
                                    }}>
            { children }
        </DFPortalContext.Provider>
    )
}

export const useDFPortalContext = () => {
  const context = useContext(DFPortalContext)
  if (!context) {
    throw new Error("useDFPortalContext must be used within a DFPortalProvider")
  }
  return context
}
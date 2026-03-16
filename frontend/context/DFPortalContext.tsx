"use client"
import { DFPortalCategoryTypes } from "@/lib/type"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type DFPortalContextType = {
    dfPortalCategory: DFPortalCategoryTypes, 
    setDFPortalCategory: Dispatch<SetStateAction<DFPortalCategoryTypes>>
}

const DFPortalContext = createContext<DFPortalContextType | undefined>(undefined)

export const DFPortalProvider = ({ children }: any) => {
    const [ dfPortalCategory, setDFPortalCategory ] = useState<DFPortalCategoryTypes>("Dashboard")
    
    return(
        <DFPortalContext.Provider value={{
                                        dfPortalCategory, setDFPortalCategory,
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
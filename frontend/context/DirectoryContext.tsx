"use client"
import { OfficeData } from "@/lib/interface"
import { initialOfficeData } from "@/lib/temp-data"
import { AddOfficeComponentPageType, DirectoryContextType, DirectoryPortalCategoryType } from "@/lib/type"
import { createContext, useContext, useState } from "react"

const DirectoryContext = createContext<DirectoryContextType | undefined>(undefined)

export const DirectoryProvider = ({ children }: any) => {
    const [ directoryPortalCategory, setDirectoryPortalCategory ] = useState<DirectoryPortalCategoryType>("Dashboard")
    const [ newOfficeData, setNewOfficeData ] = useState<OfficeData>(initialOfficeData)    
    const [ addOfficeComponentPage, setAddOfficeComponentPage ] = useState<AddOfficeComponentPageType>(0)

    return(
        <DirectoryContext.Provider value={{
                                        directoryPortalCategory, setDirectoryPortalCategory,
                                        newOfficeData, setNewOfficeData,
                                        addOfficeComponentPage, setAddOfficeComponentPage
                                    }}>
            { children }
        </DirectoryContext.Provider>
    )
}

export const useDirectoryContext = () => {
  const context = useContext(DirectoryContext)
  if (!context) {
    throw new Error("useDirectoryContext must be used within a DirectoryProvider")
  }
  return context
}
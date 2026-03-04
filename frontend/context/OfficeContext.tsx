"use client"
import { Location, OfficeData } from "@/lib/interface"
import { initialOfficeData } from "@/lib/temp-data"
import { OfficeContextType } from "@/lib/type"
import { createContext, useContext, useState } from "react"

const OfficeContext = createContext<OfficeContextType | undefined>(undefined)


export const OfficeProvider = ({ children }: any) => {
    const [ location, setLocation ] = useState<Location>({city: "Toronto", state :"Toronto", country: "Canada"})
    const [ officeData, setOfficeData ] = useState<OfficeData>(initialOfficeData)
    
    return(
        <OfficeContext.Provider value={{
                                        location, setLocation,
                                        officeData, setOfficeData
                                    }}>
            { children }
        </OfficeContext.Provider>
    )
}

// export const useOfficeContext = () => useContext(OfficeContext)

export const useOfficeContext = () => {
  const context = useContext(OfficeContext)
  if (!context) {
    throw new Error("useOfficeContext must be used within a DirectoryProvider")
  }
  return context
}
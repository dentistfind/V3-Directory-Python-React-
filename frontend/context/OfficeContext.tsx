"use client"
import { Location } from "@/lib/interface"
import { createContext, useContext, useState } from "react"

const OfficeContext = createContext<any>(undefined)

export const OfficeProvider = ({ children }: any) => {
    const [ location, setLocation ] = useState<Location>({city: "Toronto", country: "Canada"})

    return(
        <OfficeContext.Provider value={{
                                        location, setLocation
                                    }}>
            { children }
        </OfficeContext.Provider>
    )
}

export const useOfficeContext = () => useContext(OfficeContext)
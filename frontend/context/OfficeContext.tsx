"use client"
import { AddressData, Location, OfficeData, OfficeVerificationData } from "@/lib/interface"
import { initialOfficeData, initialOfficeVerData } from "@/lib/temp-data"
import { createContext, useContext, useState } from "react"

const OfficeContext = createContext<any>(undefined)


export const OfficeProvider = ({ children }: any) => {
    const [ location, setLocation ] = useState<Location>({city: "Toronto", country: "Canada"})
    const [ officeData, setOfficeData ] = useState<OfficeData>(initialOfficeData)
    const [ addressData, setAddressData ] = useState<AddressData>({ street: "", city: "", state: "", zip: "" })
    const [ servicesOffered, setServicesOffered ] = useState<string>()
    const [ officeVerData, setOfficeVerData ] = useState<OfficeVerificationData>(initialOfficeVerData)

    return(
        <OfficeContext.Provider value={{
                                        location, setLocation,
                                        officeData, setOfficeData,
                                        addressData, setAddressData,
                                        servicesOffered, setServicesOffered,
                                        officeVerData, setOfficeVerData
                                    }}>
            { children }
        </OfficeContext.Provider>
    )
}

export const useOfficeContext = () => useContext(OfficeContext)
"use client"
import { DirectoryPortalCategory } from "@/lib/data"
import { createContext, useContext, useState } from "react"

const DirectoryContext = createContext<any>(undefined)


export const DirectoryProvider = ({ children }: any) => {
    const [ directoryPortalCategory, setDirectoryPortalCategory ] = useState<DirectoryPortalCategory>("Dashboard")

    return(
        <DirectoryContext.Provider value={{
                                        directoryPortalCategory, setDirectoryPortalCategory
                                    }}>
            { children }
        </DirectoryContext.Provider>
    )
}

export const useDirectoryContext = () => useContext(DirectoryContext)
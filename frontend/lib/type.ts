import { Dispatch, SetStateAction } from "react"
import { DIRECTORY_PORTAL_CATEGORIES } from "./data"
import { Location, OfficeData } from "./interface"

export type OfficeRequestStatus = "Approved" | "Pending" | "Rejected"
export type DirectoryStatusDisplay = "All" | "Active" | "Inactive"

export const DIRECTORY_OFFICE_REQUEST_STATUSES = [
  "All",
  "Approved",
  "Pending",
  "Rejected",
] as const;

export type DirectoryOfficeRequestStatus =
  typeof DIRECTORY_OFFICE_REQUEST_STATUSES[number];
  
export type AddOfficeComponentPageType = 0 | 1 | 2 | 3

export type DirectoryPortalCategoryType = typeof DIRECTORY_PORTAL_CATEGORIES[number]

export type DirectoryContextType = {
    directoryPortalCategory: DirectoryPortalCategoryType, 
    setDirectoryPortalCategory: Dispatch<SetStateAction<DirectoryPortalCategoryType>>
    newOfficeData: OfficeData,
    setNewOfficeData: Dispatch<SetStateAction<OfficeData>>,
    addOfficeComponentPage: AddOfficeComponentPageType, 
    setAddOfficeComponentPage: Dispatch<SetStateAction<AddOfficeComponentPageType>>
}

export type OfficeContextType = {
    location: Location, 
    setLocation: Dispatch<SetStateAction<Location>>,
    officeData: OfficeData, 
    setOfficeData: Dispatch<SetStateAction<OfficeData>>,

}

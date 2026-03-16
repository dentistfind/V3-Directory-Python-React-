import { Dispatch, SetStateAction } from "react"
import { DF_PORTAL_CATEGORIES, DIRECTORY_PORTAL_CATEGORIES } from "./data"
import { Location, OfficeData } from "./interface"

export type OfficeRequestStatus = "Approved" | "Pending" | "Rejected"

export const DIRECTORY_STATUS_DISPLAY = ["All", "Active", "Inactive"] as const
export type DirectoryStatusDisplay = typeof DIRECTORY_STATUS_DISPLAY[number]

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
export type DFPortalCategoryTypes = typeof DF_PORTAL_CATEGORIES[number]

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
    setOfficeData: Dispatch<SetStateAction<OfficeData>>
}

export type PortalCategory = "Directory Portal" | "Office Portal" | "DF Portal"

export const USER_ROLE_CATEGORIES = ["Clinic Admin", "Super Admin"] as const
export type UserRole = typeof USER_ROLE_CATEGORIES[number]
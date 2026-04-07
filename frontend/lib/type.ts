import { Dispatch, SetStateAction } from "react"
import { DF_PORTAL_CATEGORIES, DIRECTORY_PORTAL_CATEGORIES, OFFICE_PORTAL_CATEGORIES } from "./data"
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
export type OfficePortalCategoryTypes = typeof OFFICE_PORTAL_CATEGORIES[number]

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

const ORDER_STATUS_CATEGORIES = ["Active", "Cancelled", "Completed", "Waiting"] as const
export type OrderStatus = typeof ORDER_STATUS_CATEGORIES[number]

export const INVOICE_STATUS_CATEGORIES = ["Pending", "Paid", "Overdue"] as const
export type InvoiceStatus = typeof INVOICE_STATUS_CATEGORIES[number]

export type ProposalStatus = "Rejected" | "Accepted"

export const LEADS_SOURCE_CATEGORIES = ["Social Media", "Website", "Google Ads", "Referral", "Other"] as const
export type LeadsSource = typeof LEADS_SOURCE_CATEGORIES[number]

export const LEADS_STATUS_CATEGORIES = ["New Contact", "Contacted", "Qualified", "Patient Lead"] as const
export type LeadsStatus = typeof LEADS_STATUS_CATEGORIES[number]

export const PATIENT_STATUS_CATEGORIES = ["Active", "Inactive"] as const
export type PatientStatus = typeof PATIENT_STATUS_CATEGORIES[number]

export const APPOINTMENT_STATUS_CATEGORIES = ["Confirmed", "Pending"] as const
export type AppointmentStatus = typeof APPOINTMENT_STATUS_CATEGORIES[number]

export const CALL_LOGS_STATUS_CATEGORIES = ["Completed", "Missed"] as const
export type CallLogsStatus = typeof CALL_LOGS_STATUS_CATEGORIES[number]

export const SMS_LOGS_STATUS_CATEGORIES = ["Inbound", "Outbound"] as const
export type SMSLogsStatus = typeof SMS_LOGS_STATUS_CATEGORIES[number]
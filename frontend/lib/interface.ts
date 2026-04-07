import { IconType } from "react-icons/lib";
import { AppointmentStatus, CallLogsStatus, DFPortalCategoryTypes, DirectoryPortalCategoryType, DirectoryStatusDisplay, InvoiceStatus, LeadsSource, LeadsStatus, OfficePortalCategoryTypes, OfficeRequestStatus, OrderStatus, PatientStatus, ProposalStatus, SMSLogsStatus, UserRole } from "./type";

export interface PageProps {
    params: {
        id: string,
        requestId?: string
    }
}

export interface Location {
    street?: string,
    postalCode?: string,
    city: string,
    state: string,
    country: string
}

export interface VideoCardData {
  videoSrc: string;
  videoThumbnail?: string;
  duration?: string;
  spotlight?: boolean;
  className?: string;
} 

export interface SpotlightCard {
    name: string,
    specialty: string,
    location: string,
    description: string,
    video: VideoCardData
}

export interface ReviewData {
    author: string,
    content: string,
    createdAt: Date,
    likeCount: number,
    rating?: number
}

export interface FaqData {
    question: string,
    answer: string
}

export interface OfficeData {
    id: string,
    officeName: string,
    ownerName: string,
    address: Location,
    mobileNumber?: string,
    noOfPatients?: number,
    email?: string,
    description?: string,
    servicesOffered?: string,
    logoUrl?: string,
    rating: number,
    reviewCount: string,
    isAvailable?: boolean,
    isSponsored?: boolean,
    website?: string,
    videoUrl: VideoCardData,
    galleryMedia?: GalleryMedia[],
    metaInfo:  MetaInfo,
    verificationData: OfficeVerificationData,
    reviews?: ReviewData[],
    createdAt: Date
}

export interface OfficeRequests extends OfficeData {
    status: OfficeRequestStatus
}

export interface MetaInfo {
    urlSlug: string, 
    title: string, 
    description: string, 
    keywords?: string, 
    graphImageUrl?: string
}

export interface GalleryMedia {
    isVideo: boolean,
    videoUrl?: VideoCardData,
    imageUrl?: string
}

export interface OfficeVerificationData {
    licenseNumber: string,
    taxId: string,
    licenseDocumentSrc: string,
    liabilityInsuranceSrc?: string,
}

export interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode
}

export interface InputProps {
    title: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    value: string | number | readonly string[] | undefined
    placeholder?: string,
    isInvalid?: boolean,
    type?: string,
}

export interface RequestAppointmentData {
    fullName: string,
    contactNumber: string,
    serviceRequired: string,
    lastDentalVisit?: Date
}

export interface AddressData { 
    street: string, 
    city: string, 
    state: string,
    zip: string 
}

export interface LoginData {
    email: string,
    lastLogin?: string
    isActive: boolean
}

export interface UserData {
    id: string,
    name: string,
    profileSrc?: string,
    loginData: LoginData,
    phoneNumber: string,
    role: UserRole
}

export interface DashboardCardProp {
    title: string,
    content: string | number,
    icon?: React.ReactNode
}

export interface PortalDashboardStat {
    totalOffices: number,
    pendingOfficeRequests: number
}
export interface DirectoryPortalDashboardStat extends PortalDashboardStat {
    activeOffices: number,
}

export interface DFPortalDashboardStat extends PortalDashboardStat {
    totalUsers: number,
}

export interface DirectoryMenuItems {
    label: DirectoryPortalCategoryType, 
    icon: IconType, 
    link: string
}

export interface DFMenuItems {
    label: DFPortalCategoryTypes, 
    icon: IconType, 
    link: string
}

export interface OfficePortalMenuItems {
    label: OfficePortalCategoryTypes, 
    icon: IconType, 
    link: string
}

export interface DirectoryVideoData {
    title: string,
    description?: string,
    sourceType: string,
    url: string,
    latitude: string,
    longitude: string,
    radiusInMiles: number,
    status: DirectoryStatusDisplay
}

export interface TelecommunicationSettingType {
    voiceMail: boolean, 
    disclaimer: boolean,
    message: boolean,
    transcription: boolean, 
}

export interface DFPortalUser {
  id: string;
  name: string;
  receiveCall: boolean;
  emailNotification: boolean;
}

export interface TrackingNumber {
  id: string;
  sno: string;
  trackingNumber: string;
  title: string;
  destinationNumber: string;
}

export interface Order {
  id: string,
  orderId: string,
  office: string,
  status: OrderStatus,
  date: string,
  items: number,
  amount: number,
}

export interface Invoice {
  id: string,
  invoiceId: string,
  orderId: string,
  office: string,
  status: InvoiceStatus,
  date: string,
  amount: number,
}

export interface Proposal {
  id: string,
  proposalId: string,
  orderId: string,
  office: string,
  status: ProposalStatus,
  date: string,
  amount: number,
}

export interface OfficePortalLeads {
    name: string,
    email: string,
    phoneNumber: string,
    source: LeadsSource,
    status: LeadsStatus,
    createdAt: Date
}

export interface OfficePortalPatients {
    name: string,
    email: string,
    phoneNumber: string,
    location: Location, 
    status: PatientStatus,
    lastVisit: Date
}

export interface OfficePortalAppointmentRequests {
    name: string,
    email: string,
    phoneNumber: string,
    serviceRequired: string,
    lastDentalVisit: Date,
    status: AppointmentStatus
}

export interface OfficePortalCallLogs {
    name: string,
    phoneNumber: string,
    createdAt: Date,
    patientStatus: PatientStatus,
    duration: number,
    status: CallLogsStatus
}

export interface OfficePortalWebFormLogs {
    name: string,
    email: string,
    formType: "Appointment Request",
    submittedDate: Date,
    submittedTime: {
        hour: number,
        minute: number
    },
    patientStatus: PatientStatus
}

export interface OfficePortalChatWidgetLogs {
    visitorName: string,
    email: string,
    startTime: Date,
    durationInSeconds: number,
    agent: string,
    patientStatus: PatientStatus
}

export interface OfficePortalSMSLogs {
    patientName: string,
    createdAt: Date,
    phoneNumber: string,
    message: string,
    patientStatus: PatientStatus,
    smsStatus: SMSLogsStatus
}

export interface OfficePortalPatientTrackingLogs {
    name: string,
    createdAt: Date,
    phoneNumber: string,
    email: string,
    patientStatus: PatientStatus
}
import { IconType } from "react-icons/lib";
import { DFPortalCategoryTypes, DirectoryPortalCategoryType, DirectoryStatusDisplay, OfficeRequestStatus, UserRole } from "./type";

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


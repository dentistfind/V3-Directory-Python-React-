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
    likeCount: number
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
    email?: string,
    description?: string,
    logoUrl?: string,
    rating: number,
    reviewCount: string,
    isAvailable?: boolean,
    isSponsored?: boolean,
    website?: string,
    videoUrl: VideoCardData,
    galleryMedia?: {
        isVideo: boolean,
        videoUrl?: VideoCardData,
        imageUrl?: string
    }[],
    reviews?: ReviewData[],
    createdAt: Date
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
    onChange: React.ChangeEventHandler<HTMLInputElement>,
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
    password: string
}

export interface DirectoryUser {
    id: string,
    name: string,
    profileSrc?: string
}

export interface DashboardCardProp {
    title: string,
    content: string | number,
    icon?: React.ReactNode
}

export interface DirectoryPortalDashboardStat {
    totalOffices: number,
    activeOffices: number,
    pendingOfficeRequests: number
}
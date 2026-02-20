export interface Location {
    city: string,
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
    name: string,
    address: string,
    logoUrl?: string,
    rating: number,
    reviewCount: string,
    isAvailable?: boolean,
    isSponsored?: boolean,
    website?: string,
    videoUrl: VideoCardData
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
    placeholder?: string
}

export interface RequestAppointmentData {
    fullName: string,
    contactNumber: string,
    serviceRequired: string,
    lastDentalVisit?: Date
}
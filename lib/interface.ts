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
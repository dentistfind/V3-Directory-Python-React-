import { SpotlightCard } from "@/lib/interface";
import VideoCard from "./ui/video-card";
import { MapPin } from "lucide-react"
import Button from "./ui/button";
import { useState } from "react";
import { spotlightCards } from "@/lib/temp-data";

export default function FeaturedDentalOffices(){
    const [ spotlightCardData, setSpotlightCardData ] = useState<SpotlightCard[]>([...spotlightCards])
    
    return (
        <div className="bg-white p-4 sm:p-8 lg:p-20 space-y-6 sm:space-y-10 text-center">
            <div className="space-y-2 sm:space-y-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold px-2">Spotlight on Excellence: Featured Dental Offices</h2>
                <div className="font-light text-xs sm:text-sm px-2">Explore clinics known for outstanding service and patient satisfaction</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-15 lg:gap-8 mb-8 sm:mb-16 text-start">
                {spotlightCardData?.map((card, index) => (
                    <div key={index}>
                        <VideoCard
                            videoSrc={card.video.videoSrc} 
                            videoThumbnail={card.video.videoThumbnail}
                        />

                        <div className="py-4 sm:py-6">
                            <h3 className="font-semibold text-black text-base sm:text-lg mb-1">{card.name}</h3>
                            <div className="text-xs sm:text-sm text-theme font-medium mb-2">{card.specialty}</div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                                <MapPin className="w-3 h-3 shrink-0" />
                                <span className="truncate">{card.location}</span>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 line-clamp-2">{card.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center px-4">
                <Button text={<div className="text-xs sm:text-sm">View All</div>} />
            </div>
        </div>
    )
}
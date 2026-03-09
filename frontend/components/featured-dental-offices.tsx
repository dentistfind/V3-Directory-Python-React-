import { SpotlightCard } from "@/lib/interface";
import VideoCard from "./ui/video-card";
import { MapPin } from "lucide-react"
import Button from "./ui/button";
import { useState } from "react";
import { spotlightCards } from "@/lib/temp-data";

export default function FeaturedDentalOffices(){
    const [ spotlightCardData, setSpotlightCardData ] = useState<SpotlightCard[]>([...spotlightCards])
    
    return (
        <div className="bg-white p-20 space-y-10 text-center">
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Spotlight on Excellence: Featured Dental Offices</h2>
                <div className="font-light text-sm">Explore clinics known for outstanding service and patient satisfaction</div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16 text-start">
                {spotlightCardData?.map((card, index) => (
                    <div key={index}>
                        <VideoCard
                            videoSrc={card.video.videoSrc} 
                            videoThumbnail={card.video.videoThumbnail}
                        />

                        <div className="py-6">
                            <h3 className="font-semibold text-black text-lg mb-1">{card.name}</h3>
                            <div className="text-sm text-theme font-medium mb-2">{card.specialty}</div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                                <MapPin className="w-3 h-3" />
                                {card.location}
                            </div>
                            <div className="text-sm text-gray-500">{card.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <Button text={<div className="text-sm">View All</div>} />
            </div>
        </div>
    )
}
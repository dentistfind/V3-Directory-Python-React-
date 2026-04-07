"use client"
import { Location, VideoCardData } from "@/lib/interface";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import VideoCard from "./ui/video-card";
import { GoogleMapsEmbed } from '@next/third-parties/google'
import Button from "./ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { TOP_OFFICES_URL } from "@/lib/routes";
import Link from "next/link";

const MAIN_VIDEO_URL = "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1772019607/SxZYEu_gxtqja.mp4"

export default function TopDentists({ location } : { location: Location }){
    const isMobile = useIsMobile()
    const [ mainVideoData, setMainVideoData ] = useState<VideoCardData>({
                                                                            videoSrc: MAIN_VIDEO_URL,
                                                                            videoThumbnail: MAIN_VIDEO_URL.slice(0, -3) + "jpg",
                                                                            duration: "01:02"
                                                                        })

    return(
        <div className="bg-theme-light p-4 sm:p-8 lg:p-20 space-y-6 sm:space-y-10">
            <div className="text-center space-y-3 px-2">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 font-semibold text-sm sm:text-base lg:text-lg">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl whitespace-nowrap">Meet your dentist in</h2>
                    <div className="w-48 sm:w-56 flex items-center justify-between cursor-pointer gap-3 sm:gap-5 border border-theme text-theme rounded p-2 font-normal text-sm">
                        <div className="truncate">Toronto</div>
                        <FaChevronDown className="shrink-0" /> 
                    </div>
                </div>
                <div className="font-light text-xs sm:text-sm">Real videos from real dental practices in your neighbourhood</div>
            </div>
            <div className="bg-white text-center p-3 sm:p-6 lg:p-10 space-y-4 sm:space-y-6 lg:space-y-10 rounded-lg">
                <h3 className="font-semibold text-base sm:text-lg">Top Dentists in {location?.city}, {location?.country}</h3>
                <div className="w-full max-w-4xl mx-auto">
                    <VideoCard 
                        videoSrc={mainVideoData?.videoSrc} 
                        videoThumbnail={mainVideoData?.videoThumbnail} 
                        duration={mainVideoData?.duration} 
                        className="rounded-2xl sm:rounded-3xl w-full h-auto"
                    />
                </div>
                <div className="w-full overflow-hidden rounded-lg">
                    <GoogleMapsEmbed
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                        height={300}
                        width="100%"
                        mode="place"
                        q={`${location.city}, ${location.country}`}
                    />  
                </div>
            </div>
            <Link className="flex items-center justify-center px-2" href={TOP_OFFICES_URL}>
                <Button fill text={<div className="text-xs sm:text-sm">Explore More Dentists in Toronto</div>} />
            </Link>
        </div>
    )
}
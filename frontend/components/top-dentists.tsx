"use client"
import { Location, VideoCardData } from "@/lib/interface";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import VideoCard from "./ui/video-card";
import { GoogleMapsEmbed } from '@next/third-parties/google'
import Button from "./ui/button";

const MAIN_VIDEO_URL = "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770990330/DentistFind_Spotlight_Home_Page_Video_-_v2_qr1s0w.mp4"

export default function TopDentists({ location } : { location: Location }){
    const [ mainVideoData, setMainVideoData ] = useState<VideoCardData>({
                                                                            videoSrc: MAIN_VIDEO_URL,
                                                                            videoThumbnail: MAIN_VIDEO_URL.slice(0, -3) + "jpg",
                                                                            duration: "01:02"
                                                                        })

    return(
        <div className="bg-theme-light p-20 space-y-10">
            <div className="text-center space-y-3">
                <div className="flex justify-center items-center gap-5 font-semibold">
                    <h2 className="text-3xl">Meet your dentist in</h2>
                    <div className="w-56 flex items-center justify-between cursor-pointer gap-5 border border-theme text-theme rounded p-2 font-normal">
                        <p>Toronto</p>
                        <FaChevronDown /> 
                    </div>
                </div>
                <p className="font-light">Real videos from real dental practices in your neighbourhood</p>
            </div>
            <div className="bg-white text-center p-10 space-y-10">
                <h3 className="font-semibold">Top Dentists in {location?.city}, {location?.country}</h3>
                <VideoCard 
                    videoSrc={mainVideoData?.videoSrc} 
                    videoThumbnail={mainVideoData?.videoThumbnail} 
                    duration={mainVideoData?.duration} 
                    className="rounded-3xl w-full h-100"
                />
                <GoogleMapsEmbed
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                    height={300}
                    width="100%"
                    mode="place"
                    q={`${location.city}, ${location.country}`}
                />  
            </div>
            <div className="flex items-center justify-center">
                <Button fill text={<p className="text-sm">Explore More Dentists in Toronto</p>} />
            </div>
        </div>
    )
}
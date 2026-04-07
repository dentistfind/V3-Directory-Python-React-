"use client"
import { VideoCardData } from "@/lib/interface"
import VideoCard from "./ui/video-card"
import { useState } from "react"
import ExploreTopicsCard from "./ui/explore-topics-card"
import Button from "./ui/button"

const MAIN_VIDEO_URL = "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1772019607/SxZYEu_gxtqja.mp4"
const moreTopics = [ "Preventive Dental Care", "Cosmetic Dentistry", "Restorative Treatments", "Orthodontics", "Pediatric Dentistry"]

export default function ExploreMoreTopics(){
    const [ mainVideoData, setMainVideoData ] = useState<VideoCardData>({
                                                                            videoSrc: MAIN_VIDEO_URL,
                                                                            videoThumbnail: MAIN_VIDEO_URL.slice(0, -3) + "jpg",
                                                                            duration: "01:02"
                                                                        })
    return (
        <div className="bg-theme-light px-5 py-10 md:p-20 space-y-10 text-center">
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Empower Your Smile with Knowledge</h2>
                <div className="font-light text-sm">Explore educational content from local experts and learn about dental care and services</div>
            </div>
            <div className="md:mx-20 bg-white space-y-3 rounded-lg">
                <VideoCard 
                    videoSrc={mainVideoData?.videoSrc} 
                    videoThumbnail={mainVideoData?.videoThumbnail} 
                    duration={mainVideoData?.duration} 
                    className="w-full h-100 rounded-lg"
                />
                <div className="space-y-3 text-start p-5 shadow-lg">
                    <h2 className="text-2xl font-semibold">Discover More About DentalCare & Services</h2>
                    <div className="font-light text-sm">Watch a comprehensive video about dental services and education to understand their benefits, procedures and what to expect. Gain insights from experienced dental professionals who make sure you're informed and comfortable every step of the way.</div>
                </div>
            </div>
            <div className="px-5 md:px-30 space-y-10 *:space-y-5">
                <div className="mt-20">
                    <h2 className="text-2xl font-semibold">Explore More Topics</h2>
                    <div className="font-light text-sm">Choose from a variety of dental services and educational topics that interest you. Dive into detailed videos and learn from the leading dentist in your community.</div>
                </div>
                <div>
                    {moreTopics.map((item, index) => (
                        <div key={index}>
                            <ExploreTopicsCard text={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button fill text={<div className="text-sm">Learn More About Dental Services</div>} />
            </div>
        </div>
    )
}
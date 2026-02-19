import { SpotlightCard } from "@/lib/interface";
import VideoCard from "./ui/video-card";
import { MapPin } from "lucide-react"
import Button from "./ui/button";

const spotlightCards: SpotlightCard[] = [
  {
    name: "Aesthetic Implant Dental",
    specialty: "Family & Cosmetic Dentistry",
    location: "5775 Yonge St Suite #1000, Floor 10 Toronto, ON",
    description: "Gentle, personalized care with a focus on making every patient feel at home.",
    video: {
      videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841564/Aesthetic_Impant_General_Dentistry_wral4y.mp4",
      videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841564/Aesthetic_Impant_General_Dentistry_wral4y.png",
      duration: "00:54",
      spotlight: true,
    },
  },
  {
    name: "7 Days Dental",
    specialty: "General Dentistry",
    location: "4997 Highway 7 East Unit 5-6 Markham, ON",
    description: "Making dental visits comfortable and stress-free for patients of all ages.",
    video: {
      videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841567/7_days_Dental_xefgxd.mp4",
      videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841567/7_days_Dental_xefgxd.png",
      duration: "00:49",
      spotlight: true,
    },
  },
  {
    name: "Southdale Dentistry",
    specialty: "Family Dentistry",
    location: "104-553 Southdale Rd E London, ON N6E 3V9",
    description: "Comprehensive care with a patient-first approach to oral health.",
    video: {
      videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841560/Southdale_Dentist_FINAL_snyupy.mp4",
      videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841560/Southdale_Dentist_FINAL_snyupy.png",
      duration: "01:00",
      spotlight: true,
    },
  },
];

export default function FeaturedDentalOffices(){
    return (
        <div className="bg-white p-20 space-y-10 text-center">
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Spotlight on Excellence: Featured Dental Offices</h2>
                <p className="font-light text-sm">Explore clinics known for outstanding service and patient satisfaction</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16 text-start">
                {spotlightCards.map((card, index) => (
                    <div key={index}>
                        <VideoCard
                            videoSrc={card.video.videoSrc} 
                            videoThumbnail={card.video.videoThumbnail}
                        />

                        <div className="py-6">
                            <h3 className="font-semibold text-black text-lg mb-1">{card.name}</h3>
                            <p className="text-sm text-theme font-medium mb-2">{card.specialty}</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                                <MapPin className="w-3 h-3" />
                                {card.location}
                            </div>
                            <p className="text-sm text-gray-500">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <Button text={<p className="text-sm">View All</p>} />
            </div>
        </div>
    )
}
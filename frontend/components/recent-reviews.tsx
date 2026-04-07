"use client"
import { ReviewData } from "@/lib/interface";
import { useEffect, useState } from "react"
import ReviewCard from "./ui/review-card";
import Button from "./ui/button";

export const dummyReviews: ReviewData[] = [
  {
    author: "Sarah M.",
    content: "Absolutely amazing experience! The staff were warm and welcoming, and the dentist explained every step of my procedure clearly. I felt completely at ease throughout my appointment.",
    createdAt: new Date("2026-01-05"),
    likeCount: 24,
  },
  {
    author: "David O.",
    content: "Best dental clinic I’ve visited in years. Clean environment, modern equipment, and very professional service. My teeth cleaning was painless and thorough.",
    createdAt: new Date("2026-01-12"),
    likeCount: 18,
  },
  {
    author: "Chioma A.",
    content: "I used to be nervous about dental visits, but this team completely changed that. They were patient, gentle, and genuinely caring. Highly recommended!",
    createdAt: new Date("2026-01-18"),
    likeCount: 31,
  },
  {
    author: "Michael T.",
    content: "Got my braces consultation here and the process was smooth from start to finish. Transparent pricing and excellent customer service.",
    createdAt: new Date("2026-01-22"),
    likeCount: 15,
  },
  {
    author: "Blessing E.",
    content: "I brought my kids for their first dental checkup and the staff were incredible with them. Friendly atmosphere and very child-friendly approach.",
    createdAt: new Date("2026-01-28"),
    likeCount: 27,
  },
  {
    author: "James K.",
    content: "Emergency appointment was handled quickly and professionally. The pain relief was almost immediate, and the follow-up care instructions were clear.",
    createdAt: new Date("2026-02-02"),
    likeCount: 12,
  },
  {
    author: "Amina S.",
    content: "Teeth whitening results exceeded my expectations! Noticeably brighter smile after just one session. I’ll definitely be coming back.",
    createdAt: new Date("2026-02-08"),
    likeCount: 22,
  },
  {
    author: "Daniel W.",
    content: "Very impressed with the attention to detail. The dentist took time to answer all my questions and made sure I was comfortable throughout the procedure.",
    createdAt: new Date("2026-02-14"),
    likeCount: 19,
  },
];

export default function RecentReviews(){
    const [ reviews, setReviews ] = useState<ReviewData[]>()

    useEffect(() => {
        setReviews([...dummyReviews].sort((a,b) => (
            b.createdAt.getTime() - a.createdAt.getTime()
        )))
    }, [])

    return(
        <div className="bg-white p-4 sm:p-8 lg:p-20 space-y-6 sm:space-y-10 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold px-2">Recent Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {reviews?.map((item, index) => (
                    <div key={index}>
                        <ReviewCard review={item} />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <Button text={<div className="text-xs sm:text-sm">View All</div>} />
            </div>
        </div>
    )
}
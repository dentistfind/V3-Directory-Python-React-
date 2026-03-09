"use client"
import { FaqData } from "@/lib/interface";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FaqCard({ faq: { question, answer } }:{ faq: FaqData }){
    const [ showDesc, setShowDesc ] = useState(false)

    return (
        <div
            onMouseEnter={() => setShowDesc(true)}
            onMouseLeave={() => setShowDesc(false)} 
            className="space-y-3 cursor-pointer">
            <div className="flex items-center justify-between">
                <div>Q. {question}</div>
                <div className="transition-transform duration-300">
                    {showDesc ? <ChevronUp /> : <ChevronDown />}
                </div>
            </div>
            <div
                className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${showDesc ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}
                `}
            >
                <div className="text-start font-light text-sm">
                    {answer}
                </div>
            </div>
        </div>
    )
}
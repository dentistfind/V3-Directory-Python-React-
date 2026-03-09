import { FaqData } from "@/lib/interface"
import { ChevronDown } from "lucide-react";
import { useState } from "react"
import FaqCard from "./ui/faq-card";
import Button from "./ui/button";
import { dummyFaqs } from "@/lib/temp-data";

export default function FAQS(){
    const [ faqs, setFaqs ] = useState<FaqData[]>([...dummyFaqs])

    return(
        <div className="bg-theme-dark text-white px-20 pt-20 pb-10 text-center space-y-10 border-b border-gray-300">
            <h2 className="text-2xl font-semibold">FAQs</h2>    
            <div className="mx-30">
                {faqs.map((item, index) => (
                    <div key={index} className="py-3 px-3 border-b">
                        <FaqCard faq={item} />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <Button fill text={<div className="text-sm">View All FAQs</div>} />
            </div>
        </div>
    )
}
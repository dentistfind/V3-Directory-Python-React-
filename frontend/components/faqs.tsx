import { FaqData } from "@/lib/interface"
import { ChevronDown } from "lucide-react";
import { useState } from "react"
import FaqCard from "./ui/faq-card";
import Button from "./ui/button";

export const dummyFaqs: FaqData[] = [
  {
    question: "How often should we visit the dentist?",
    answer: "It is generally recommended to visit the dentist every six months for a routine check-up and professional cleaning. However, some patients may require more frequent visits depending on their oral health condition. Regular visits help detect issues early and maintain a healthy smile."
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer: "If you experience severe tooth pain, a knocked-out tooth, swelling, or bleeding, contact your dentist immediately. For a knocked-out tooth, try to keep it moist in milk or saline solution and seek care as soon as possible. Prompt treatment can often prevent further complications."
  },
  {
    question: "How long does Invisalign treatment take?",
    answer: "Invisalign treatment typically takes between 6 to 18 months, depending on the complexity of your case. Some minor corrections may take less time, while more advanced alignment issues may require longer treatment. Your dentist will provide a personalized timeline after assessment."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is safe when performed under the supervision of a qualified dentist. We use approved products that minimize sensitivity and protect your enamel while effectively brightening your smile."
  },
  {
    question: "Do dental procedures hurt?",
    answer: "Modern dental techniques and anesthesia ensure that most procedures are comfortable and virtually pain-free. You may experience mild discomfort after certain treatments, but this is usually temporary and manageable with prescribed care."
  },
  {
    question: "At what age should children first see a dentist?",
    answer: "Children should have their first dental visit by their first birthday or when their first tooth appears. Early visits help monitor development, prevent cavities, and establish healthy oral hygiene habits from a young age."
  }
];

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
import Image from "next/image"
import { useState } from "react"

const dentists = ["New York dentists", "Massachusetts dentists", "Rhode Island dentists", "California dentists", "Texas dentists", "Florida dentists"]
const dentistGroups = ["New York dentist groups", "Massachusetts dentist groups", "Rhode Island dentist groups", "California dentist groups", "Texas dentist groups", "Florida dentist groups"]
const healthInsurances = ["Aetna", "Blue Cross Blue Shield", "Blue Cross Blue Shield IL PPO", "Blue Cross Blue Shield MA HMO", "Blue Cross Blue Shield MA PPO", "Cigna"]
const specialties = ["Invisalign", "Dental Implants", "Paediatrics Dental", "RTC", "Root Canal", "Teeth Alignment"]

export default function Footer(){
    const [ footerData, setFooterData ] = useState({ dentists, dentistGroups, healthInsurances, specialties })

    return (
        <div className="bg-theme-dark text-white px-20 pt-10">
            <div className="flex items-center justify-between *:space-y-1 border-b border-gray-300 pb-10">
                <div>
                    <div className="uppercase text-lg pb-2">Find Dentists</div>
                    {footerData.dentists.map((item, index) => (
                        <div key={index} className="text-sm font-light">{item}</div>
                    ))}
                    <div className="text-sm font-light underline pt-2 cursor-pointer">All dentists</div>
                </div>
                <div>
                    <div className="uppercase text-lg pb-2">Find Dentist Groups</div>
                    {footerData.dentistGroups.map((item, index) => (
                        <div key={index} className="text-sm font-light">{item}</div>
                    ))}
                    <div className="text-sm font-light underline pt-2 cursor-pointer">All dentist groups</div>
                </div>
                <div>
                    <div className="uppercase text-lg pb-2">Health Insurances</div>
                    {footerData.healthInsurances.map((item, index) => (
                        <div key={index} className="text-sm font-light">{item}</div>
                    ))}
                    <div className="text-sm font-light underline pt-2 cursor-pointer">All health insurances</div>
                </div>
                <div>
                    <div className="uppercase text-lg pb-2">Specialties</div>
                    {footerData.specialties.map((item, index) => (
                        <div key={index} className="text-sm font-light">{item}</div>
                    ))}
                    <div className="text-sm font-light underline pt-2 cursor-pointer">All specialties</div>
                </div>
            </div>
            <div className="py-5 flex items-center justify-between">
                <Image src="/dentistfind-logo.png" width={100} height={100} alt="DentistFind Logo" />
                <div className="text-center uppercase">
                    © {new Date().getFullYear()} Dentist Find Group, Inc. all rights reserved.
                </div>
                <div></div>
            </div>
        </div>
    )
}

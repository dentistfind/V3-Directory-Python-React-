import Image from "next/image"
import { useState } from "react"

const dentists = ["New York dentists", "Massachusetts dentists", "Rhode Island dentists", "California dentists", "Texas dentists", "Florida dentists"]
const dentistGroups = ["New York dentist groups", "Massachusetts dentist groups", "Rhode Island dentist groups", "California dentist groups", "Texas dentist groups", "Florida dentist groups"]
const healthInsurances = ["Aetna", "Blue Cross Blue Shield", "Blue Cross Blue Shield IL PPO", "Blue Cross Blue Shield MA HMO", "Blue Cross Blue Shield MA PPO", "Cigna"]
const specialties = ["Invisalign", "Dental Implants", "Paediatrics Dental", "RTC", "Root Canal", "Teeth Alignment"]

export default function Footer(){
    const [ footerData, setFooterData ] = useState({ dentists, dentistGroups, healthInsurances, specialties })

    return (
        <div className="bg-theme-dark text-white px-4 sm:px-8 lg:px-20 pt-6 sm:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-b border-gray-300 pb-6 sm:pb-10">
                <div className="space-y-2">
                    <div className="uppercase text-base sm:text-lg pb-3 font-semibold">Find Dentists</div>
                    {footerData.dentists.map((item, index) => (
                        <div key={index} className="text-xs sm:text-sm font-light hover:underline cursor-pointer">{item}</div>
                    ))}
                    <div className="text-xs sm:text-sm font-light underline pt-3 cursor-pointer hover:opacity-80">All dentists</div>
                </div>
                <div className="space-y-2">
                    <div className="uppercase text-base sm:text-lg pb-3 font-semibold">Find Dentist Groups</div>
                    {footerData.dentistGroups.map((item, index) => (
                        <div key={index} className="text-xs sm:text-sm font-light hover:underline cursor-pointer">{item}</div>
                    ))}
                    <div className="text-xs sm:text-sm font-light underline pt-3 cursor-pointer hover:opacity-80">All dentist groups</div>
                </div>
                <div className="space-y-2">
                    <div className="uppercase text-base sm:text-lg pb-3 font-semibold">Health Insurances</div>
                    {footerData.healthInsurances.map((item, index) => (
                        <div key={index} className="text-xs sm:text-sm font-light hover:underline cursor-pointer">{item}</div>
                    ))}
                    <div className="text-xs sm:text-sm font-light underline pt-3 cursor-pointer hover:opacity-80">All health insurances</div>
                </div>
                <div className="space-y-2">
                    <div className="uppercase text-base sm:text-lg pb-3 font-semibold">Specialties</div>
                    {footerData.specialties.map((item, index) => (
                        <div key={index} className="text-xs sm:text-sm font-light hover:underline cursor-pointer">{item}</div>
                    ))}
                    <div className="text-xs sm:text-sm font-light underline pt-3 cursor-pointer hover:opacity-80">All specialties</div>
                </div>
            </div>
            <div className="py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                <Image src="/dentistfind-logo.png" width={80} height={80} alt="DentistFind Logo" className="" />
                <div className="uppercase text-xs sm:text-sm">
                    © {new Date().getFullYear()} Dentist Find Group, Inc. all rights reserved.
                </div>
            </div>
        </div>
    )
}

import Image from "next/image"
import { useState } from "react"

const dentists = ["New York dentists", "Massachusetts dentists", "Rhode Island dentists", "California dentists", "Texas dentists", "Florida dentists"]
const dentistGroups = ["New York dentist groups", "Massachusetts dentist groups", "Rhode Island dentist groups", "California dentist groups", "Texas dentist groups", "Florida dentist groups"]
const healthInsurances = ["Aetna", "Blue Cross Blue Shield", "Blue Cross Blue Shield IL PPO", "Blue Cross Blue Shield MA HMO", "Blue Cross Blue Shield MA PPO", "Cigna"]
const specialties = ["Invisalign", "Dental Implants", "Paediatrics Dental", "RTC", "Root Canal", "Teeth Alignment"]

export default function HomeFooter(){
    const [ footerData, setFooterData ] = useState({ dentists, dentistGroups, healthInsurances, specialties })

    return (
        <div className="bg-theme-dark text-white px-20 pt-10">
            <div className="flex items-center justify-between *:space-y-1 border-b border-gray-300 pb-10">
                <div>
                    <p className="uppercase text-lg pb-2">Find Dentists</p>
                    {footerData.dentists.map((item, index) => (
                        <p key={index} className="text-sm font-light">{item}</p>
                    ))}
                    <p className="text-sm font-light underline pt-2 cursor-pointer">All dentists</p>
                </div>
                <div>
                    <p className="uppercase text-lg pb-2">Find Dentist Groups</p>
                    {footerData.dentistGroups.map((item, index) => (
                        <p key={index} className="text-sm font-light">{item}</p>
                    ))}
                    <p className="text-sm font-light underline pt-2 cursor-pointer">All dentist groups</p>
                </div>
                <div>
                    <p className="uppercase text-lg pb-2">Health Insurances</p>
                    {footerData.healthInsurances.map((item, index) => (
                        <p key={index} className="text-sm font-light">{item}</p>
                    ))}
                    <p className="text-sm font-light underline pt-2 cursor-pointer">All health insurances</p>
                </div>
                <div>
                    <p className="uppercase text-lg pb-2">Specialties</p>
                    {footerData.specialties.map((item, index) => (
                        <p key={index} className="text-sm font-light">{item}</p>
                    ))}
                    <p className="text-sm font-light underline pt-2 cursor-pointer">All specialties</p>
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

"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Input from "./ui/input";
import RegisterHeader from "./ui/register-header";
import Button from "./ui/button";
import { useOfficeContext } from "@/context/OfficeContext";
import { OfficeData } from "@/lib/interface";

export default function RegisterOfficeForm1({ setComponentPage }:{ setComponentPage: Dispatch<SetStateAction<0 | 1>> }){
    useEffect(() => { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const { officeData, setOfficeData } = useOfficeContext()

    const [ isInvalid, setIsInvalid ] = useState({ officeName: false, ownerName: false, email: false, mobileNumber: false })
    const [ hasInvalidField, setHasInvalidField ] = useState(false)

    const handleNextSteps = () => {
        const newIsInvalid = {
            officeName: officeData.officeName.trim().length === 0, 
            ownerName: officeData.ownerName.trim().length === 0,
            email: officeData.email?.trim().length === 0,
            mobileNumber: officeData.mobileNumber?.trim().length === 0
        }
        const isInvalidFlag = Object.values(newIsInvalid).some(Boolean)

        setIsInvalid(newIsInvalid)
        setHasInvalidField(isInvalidFlag)

        if (!isInvalidFlag){
            setComponentPage(1)
        }
    }

    return(
        <div className="px-20 py-10 bg-white text-black space-y-5">
            <RegisterHeader />
            <div className="flex justify-center mt-10">
                <div className="border border-gray-300 w-200 rounded-lg p-5 space-y-7">
                    <div>
                        <h3 className="text-xl font-semibold">Office Profile</h3>
                        <div className="font-light text-gray-400 text-xs">Tell us about your dental office</div>
                    </div>
                    <div className="flex items-center gap-5">
                        <Input 
                            value={officeData?.officeName} isInvalid={isInvalid.officeName}
                            onChange={(e) => setOfficeData((prev: OfficeData) => ({...prev, officeName: e.target.value}))} 
                            title="Office Name *" placeholder="ABC Dental Office"
                        />
                        <Input 
                            value={officeData?.ownerName} isInvalid={isInvalid.ownerName}
                            onChange={(e) => setOfficeData((prev: OfficeData) => ({...prev, ownerName: e.target.value}))} 
                            title="Owner/Director Name *" placeholder="ABC Dental Office" 
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <Input 
                            value={officeData?.email} isInvalid={isInvalid.email}
                            onChange={(e) => setOfficeData((prev: OfficeData) => ({...prev, email: e.target.value}))} 
                            title="Email Address *" placeholder="contact@office.com" 
                        />
                        <Input 
                            value={officeData?.mobileNumber} isInvalid={isInvalid.mobileNumber}
                            onChange={(e) => setOfficeData((prev: OfficeData) => ({...prev, mobileNumber: e.target.value}))} 
                            title="Phone Number *" placeholder="+1 (555)000-0000" 
                        />
                    </div>
                    <Input 
                        value={officeData.address.street} 
                        onChange={(e) => setOfficeData(prev => ({...prev, address: {...prev.address, street: e.target.value}}))} 
                        title="Street Address" placeholder="123 Main Street" 
                    />
                    <div className="flex items-center gap-5">
                        <Input 
                            value={officeData.address.city} 
                            onChange={(e) => setOfficeData(prev => ({...prev, address: {...prev.address, city: e.target.value}}))} 
                            title="City" placeholder="New York" 
                        />
                        <Input 
                            value={officeData.address.state} 
                            onChange={(e) => setOfficeData(prev => ({...prev, address: {...prev.address, state: e.target.value}}))} 
                            title="State" placeholder="NY" 
                        />
                        <Input 
                            value={officeData.address.postalCode} 
                            onChange={(e) => setOfficeData(prev => ({...prev, address: {...prev.address, postalCode: e.target.value}}))} 
                            title="Zip Code" placeholder="10001" 
                        />
                    </div>
                    <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                        <div className="absolute -top-2 bg-white px-1">Office Description</div>
                        <textarea 
                            onChange={(e) => setOfficeData((prev: OfficeData) => ({...prev, description: e.target.value}))} 
                            value={officeData.description} maxLength={300} rows={5}
                            className="w-full h-full outline-0 resize-none" placeholder={"Tell patients about your office, specialties, and what makes you unique..."} 
                        />
                    </div>
                    <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                        <div className="absolute -top-2 bg-white px-1">Services Offered</div>
                        <textarea 
                            onChange={(e) => setOfficeData((prev: OfficeData) => ({...prev, servicesOffered: e.target.value}))} 
                            value={officeData.servicesOffered} maxLength={100} rows={3}
                            className="w-full h-full outline-0 resize-none" placeholder={"General Dentistry, Cosmetic Dentistry, Orthodontics..."} 
                        />
                    </div>
                    {hasInvalidField && <div className="text-[#fb2c36] text-xs">Please fill in all mandatory fields</div>}
                    <div className="w-full flex justify-end gap-2">
                        <div className="border border-gray-400 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-full text-sm">
                            Cancel
                        </div>
                        <div onClick={handleNextSteps}><Button fill text="Next Step" className="text-sm" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
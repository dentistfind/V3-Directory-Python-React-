"use client"
import { useEffect, useState } from "react";
import Input from "./ui/input";
import RegisterHeader from "./ui/register-header";
import { OfficeData } from "@/lib/interface";

export const initialOfficeData: OfficeData = {
  id: "",
  officeName: "",
  ownerName: "",
  address: "",
  mobileNumber: "",
  email: "",
  description: "",
  logoUrl: "",
  rating: 0,
  reviewCount: "0",
  isAvailable: false,
  isSponsored: false,
  website: "",
  videoUrl: {
    videoSrc: "",
    videoThumbnail: "",
    duration: "",
    spotlight: false
  },
  galleryMedia: [],
  reviews: []
};

export default function RegisterOfficeForm1(){
    const [ officeData, setOfficeData ] = useState<OfficeData>(initialOfficeData)
    const [ addressData, setAddressData ] = useState({ street: "", city: "", state: "", zip: "" })

    useEffect(() => {
        const { street, city, state, zip } = addressData
        setOfficeData(prev => ({...prev, address: `${street}, ${city}, ${state}. ${zip}`}))
    }, [addressData])

    return(
        <div className="px-20 py-10 bg-white text-black space-y-5">
            <RegisterHeader />
            <div className="flex justify-center">
                <div className="border border-gray-300 w-200 rounded-lg p-5 space-y-7">
                    <div>
                        <h3 className="text-xl font-semibold">Office Profile</h3>
                        <p className="font-light text-gray-400 text-xs">Tell us about your dental office</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Input 
                            value={officeData?.officeName} 
                            onChange={(e) => setOfficeData(prev => ({...prev, officeName: e.target.value}))} 
                            title="Office Name *" placeholder="ABC Dental Office"
                        />
                        <Input 
                            value={officeData?.ownerName} 
                            onChange={(e) => setOfficeData(prev => ({...prev, ownerName: e.target.value}))} 
                            title="Owner/Director Name *" placeholder="ABC Dental Office" 
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <Input 
                            value={officeData?.email} 
                            onChange={(e) => setOfficeData(prev => ({...prev, email: e.target.value}))} 
                            title="Email Address *" placeholder="contact@office.com" 
                        />
                        <Input 
                            value={officeData?.mobileNumber} 
                            onChange={(e) => setOfficeData(prev => ({...prev, mobileNumber: e.target.value}))} 
                            title="Phone Number *" placeholder="+1 (555)000-0000" 
                        />
                    </div>
                    <Input 
                        value={addressData.street} 
                        onChange={(e) => setAddressData(prev => ({...prev, street: e.target.value}))} 
                        title="Street Address" placeholder="123 Main Street" 
                    />
                    <div className="flex items-center gap-5">
                        <Input 
                            value={addressData.city} 
                            onChange={(e) => setAddressData(prev => ({...prev, city: e.target.value}))} 
                            title="City" placeholder="New York" 
                        />
                        <Input 
                            value={addressData.state} 
                            onChange={(e) => setAddressData(prev => ({...prev, state: e.target.value}))} 
                            title="State" placeholder="NY" 
                        />
                        <Input 
                            value={addressData.zip} 
                            onChange={(e) => setAddressData(prev => ({...prev, zip: e.target.value}))} 
                            title="Zip Code" placeholder="10001" 
                        />
                    </div>
                    <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                        <p className="absolute -top-2 bg-white px-1">Office Description</p>
                        <textarea 
                            onChange={(e) => setOfficeData(prev => ({...prev, description: e.target.value}))} 
                            value={officeData.description} className="w-full h-full outline-0" placeholder={"Tell patients about your office, specialties, and what makes you unique..."} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
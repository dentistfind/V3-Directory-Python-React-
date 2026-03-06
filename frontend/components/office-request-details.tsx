"use client"
import { useDirectoryContext } from "@/context/DirectoryContext"
import { OfficeRequests } from "@/lib/interface"
import { DIRECTORY_PORTAL_OFFICE_REQUEST } from "@/lib/routes"
import { dentalOfficeRequests } from "@/lib/temp-data"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaChevronLeft } from "react-icons/fa6"
import Input from "./ui/input"
import UploadMedia from "./ui/upload-media"
import Button from "./ui/button"

export default function OfficeRequestDetails({ userId, requestId }: { userId: string, requestId: string | number }){
    const router = useRouter()
    const { setDirectoryPortalCategory } = useDirectoryContext()
    const [ officeRequest, setOfficeRequest ] = useState<OfficeRequests>()
    
    useEffect(() => {
        setDirectoryPortalCategory("Office Request")
    }, [])
    
    useEffect(() => {
        const request = [...dentalOfficeRequests].find(item => item.id === requestId)

        if (!request){
            router.push(DIRECTORY_PORTAL_OFFICE_REQUEST(userId))
        }

        setOfficeRequest(request)
    }, [dentalOfficeRequests, requestId])
    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link href={DIRECTORY_PORTAL_OFFICE_REQUEST(userId)}><FaChevronLeft className="cursor-pointer text-theme" /></Link>
                    <h2 className="font-semibold text-xl">Office Request</h2>
                </div>
                <div className="flex items-center gap-3">
                    <Button text="Reject" className="rounded-md bg-white" />
                    <Button fill text="Approve" className="rounded-md" />
                </div>
            </div>
            <div className="rounded-lg p-5 border border-gray-300 mt-5 space-y-7">
                <div>
                    <h2 className="font-semibold">Office Profile</h2>
                    <p className="text-xs font-light">Tell us about your dental office</p>
                </div>
                <div className="flex items-center gap-5">
                    <Input value={officeRequest?.officeName} title="Office Name" placeholder="ABC Dental Clinic" />
                    <Input value={officeRequest?.ownerName} title="Owner/Director Name" placeholder="Dr. John" />
                </div>
                <div className="flex items-center gap-5">
                    <Input value={officeRequest?.email} title="Email Address" placeholder="contact@office.com" />
                    <Input value={officeRequest?.mobileNumber} title="Phone Number" placeholder="+1 (555) 000-0000" type="number" />
                </div>
                <Input value={officeRequest?.address.street} title="Street Address" placeholder="123 Main Street" />
                <div className="flex items-center gap-5">
                    <Input value={officeRequest?.address.city} title="City" placeholder="Toronto" />
                    <Input value={officeRequest?.address.state} title="State" placeholder="Ontario" />
                    <Input value={officeRequest?.address.postalCode} title="Zip Code" placeholder="10001" />
                </div>
                <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                    <p className="absolute -top-2 bg-white px-1">Office Description</p>
                    <textarea 
                        value={officeRequest?.description} maxLength={300} rows={5}
                        className="w-full h-full outline-0 resize-none" placeholder={"Tell patients about your office, specialties, and what makes you unique..."} 
                    />
                </div>
                <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                    <p className="absolute -top-2 bg-white px-1">Services Offered</p>
                    <textarea 
                        value={officeRequest?.servicesOffered} maxLength={100} rows={3}
                        className="w-full h-full outline-0 resize-none" placeholder={"General Dentistry, Cosmetic Dentistry, Orthodontics..."} 
                    />
                </div>
                <div className="flex items-center gap-5">
                    <Input value={officeRequest?.verificationData.licenseNumber} title="Medical License Number *" placeholder="Enter your license number" />
                    <Input value={officeRequest?.verificationData.taxId} title="Tax ID / EIN *" placeholder="XX-XXXXXXX" />
                </div>
                <div className="flex items-center gap-5">
                    <UploadMedia title="Medical License Document *" desc="Upload your medical license (PDF, JPG, PNG)" />
                    <UploadMedia title="Liability Insurance (Optional)" desc="Upload your liability insurance (PDF, JPG, PNG)" />
                </div>
            </div>
        </div>
    )
}
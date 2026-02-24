"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "./ui/button";
import RegisterHeader from "./ui/register-header";
import { OfficeVerificationData } from "@/lib/interface";
import Input from "./ui/input";
import File from "./ui/svg/file";
import Upload from "./ui/svg/upload";
import { useOfficeContext } from "@/context/OfficeContext";

export default function RegisterOfficeForm2({ setComponentPage }:{ setComponentPage: Dispatch<SetStateAction<0 | 1>> }){
    useEffect(() => { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        }) 
    }, [])

    const { officeVerData, setOfficeVerData } = useOfficeContext()

    const [ isInvalid, setIsInvalid ] = useState({ licenseNumber: false, licenseDocumentSrc: false })
    const [ hasInvalidField, setHasInvalidField ] = useState(false)

    const handleBack = () => {
        setComponentPage(0)
    }

    const handleSubmit = () => {
        const newIsInvalid = { 
            licenseNumber: officeVerData.licenseNumber.trim().length === 0, 
            licenseDocumentSrc: officeVerData.licenseDocumentSrc.trim().length === 0
        }

        setIsInvalid(newIsInvalid)
        setHasInvalidField(Object.values(newIsInvalid).some(Boolean))
    }
    return(
        <div className="px-20 py-10 bg-white text-black space-y-5">
            <RegisterHeader secondPage />
            <div className="flex justify-center mt-10">
                <div className="border border-gray-300 w-200 rounded-lg p-5 space-y-7">
                    <div>
                        <h3 className="text-xl font-semibold">Office Verification</h3>
                        <p className="font-light text-gray-400 text-xs">Upload your credentials and documentation for verification</p>
                    </div>
                    <Input
                        value={officeVerData.licenseNumber} isInvalid={isInvalid.licenseNumber}
                        onChange={(e) => setOfficeVerData((prev: OfficeVerificationData) => ({...prev, licenseNumber: e.target.value}))} 
                        title="Medical License Number *" placeholder="Enter your license number"
                    />
                    <Input
                        value={officeVerData.taxId}
                        onChange={(e) => setOfficeVerData((prev: OfficeVerificationData) => ({...prev, taxId: e.target.value}))} 
                        title="Tax ID / EIN" placeholder="XX-XXXXXXX"
                    />
                    <div className="w-full relative border-2 border-dashed border-gray-200 rounded-md p-3 text-xs">
                        <p className="absolute -top-2 bg-white px-1">Medical License Document *</p>
                        <div className="w-full h-50 flex flex-col items-center justify-center gap-3">
                            <File />
                            <p className="font-light text-gray-400 text-xs">Upload your medical license (PDF, JPG, PNG)</p>
                            <div className="flex items-center gap-1 border border-gray-300 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-lg text-sm">
                                <Upload />
                                <p className="font-light">Choose File</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full relative border-2 border-dashed border-gray-200 rounded-md p-3 text-xs">
                        <p className="absolute -top-2 bg-white px-1">Liability Insurance (Optional)</p>
                        <div className="w-full h-50 flex flex-col items-center justify-center gap-3">
                            <File />
                            <p className="font-light text-gray-400 text-xs">Upload insurance certificate (PDF, JPG, PNG)</p>
                            <div className="flex items-center gap-1 border border-gray-300 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-lg text-sm">
                                <Upload />
                                <p className="font-light">Choose File</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-md bg-gray-100 space-y-3">
                        <p className="font-semibold">What happens next?</p>
                        <ul className="text-xs space-y-3 list-disc pl-6">
                            <li>Our team will review your application within 2-3 business days</li>
                            <li>We'll verify your credentials and documentation</li>
                            <li>You'll receive an email once your office is approved</li>
                            <li>After approval, you can start receiving patient appointments</li>
                        </ul>
                    </div>
                    {hasInvalidField && <p className="text-[#fb2c36] text-xs">Please fill in all mandatory fields</p>}
                    <div className="w-full flex justify-end gap-2">
                        <div onClick={handleBack} className="border border-gray-400 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-full text-sm">
                            Back
                        </div>
                        <div onClick={handleSubmit}><Button fill text="Submit Application" className="text-sm" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
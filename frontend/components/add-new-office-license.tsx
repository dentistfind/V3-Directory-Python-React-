"use client"
import { useDirectoryContext } from "@/context/DirectoryContext"
import Input from "./ui/input"
import File from "./ui/svg/file"
import Upload from "./ui/svg/upload"
import UploadMedia from "./ui/upload-media"

export default function AddNewOfficeLicense(){
    const { newOfficeData, setNewOfficeData, setAddOfficeComponentPage } = useDirectoryContext()

    const handleSave = () => {
        setAddOfficeComponentPage(3)
    }

    return(
        <div className="border border-gray-300 rounded-lg p-7 space-y-7">
            <div>
                <h2 className="font-semibold text-lg">Office Verification</h2>
                <p className="text-xs font-light">Upload your credentials and documentation for verification</p>
            </div>
            <div className="flex items-center gap-5">
                <Input title="Medical License Number *" placeholder="Enter your license number" value={newOfficeData?.verificationData.licenseNumber} onChange={(e) => setNewOfficeData(prev => ({...prev, verificationData: ({...prev.verificationData, licenseNumber: e.target.value})}))}  />
                <Input title="Tax ID / EIN *" placeholder="XX-XXXXXXX" value={newOfficeData?.verificationData.taxId} onChange={(e) => setNewOfficeData(prev => ({...prev, verificationData: ({...prev.verificationData, taxId: e.target.value})}))}  />
            </div>
            <div className="flex items-center gap-5">
                <UploadMedia title="Medical License Document *" desc="Upload your medical license (PDF, JPG, PNG)" />
                <UploadMedia title="Liability Insurance (Optional)" desc="Upload your liability insurance (PDF, JPG, PNG)" />
            </div>
            <div className="w-full flex justify-end gap-2">
                <div className="border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-md text-sm">
                    Cancel
                </div>
                <div onClick={handleSave} className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
                    Save
                </div>
            </div>
        </div>
    )
}
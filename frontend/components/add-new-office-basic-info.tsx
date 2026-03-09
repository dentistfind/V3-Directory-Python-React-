"use client"
import { useDirectoryContext } from "@/context/DirectoryContext";
import Input from "./ui/input";

export default function AddNewOfficeBasicInfo(){
    const { newOfficeData, setNewOfficeData, setAddOfficeComponentPage } = useDirectoryContext()

    const handleSave = () => {
        setAddOfficeComponentPage(1)
    }

    return(
        <div className="border border-gray-300 rounded-lg p-7 space-y-7">
            <div>
                <h2 className="font-semibold text-lg">Office Profile</h2>
                <div className="text-xs font-light">Tell us about your dental office</div>
            </div>
            <div className="flex items-center gap-5">
                <Input value={newOfficeData?.officeName} onChange={(e) => setNewOfficeData(prev => ({...prev, officeName: e.target.value}))} title="Office Name" placeholder="ABC Dental Clinic" />
                <Input value={newOfficeData?.ownerName} onChange={(e) => setNewOfficeData(prev => ({...prev, ownerName: e.target.value}))} title="Owner/Director Name" placeholder="Dr. John" />
            </div>
            <div className="flex items-center gap-5">
                <Input value={newOfficeData?.email} onChange={(e) => setNewOfficeData(prev => ({...prev, email: e.target.value}))} title="Email Address" placeholder="contact@office.com" />
                <Input value={newOfficeData?.mobileNumber} onChange={(e) => setNewOfficeData(prev => ({...prev, mobileNumber: e.target.value}))} title="Phone Number" placeholder="+1 (555) 000-0000" type="number" />
            </div>
            <Input value={newOfficeData?.address.street} onChange={(e) => setNewOfficeData(prev => ({...prev, address: ({...prev.address, street: e.target.value})}))} title="Street Address" placeholder="123 Main Street" />
            <div className="flex items-center gap-5">
                <Input value={newOfficeData?.address.city} onChange={(e) => setNewOfficeData(prev => ({...prev, address: ({...prev.address, city: e.target.value})}))} title="City" placeholder="Toronto" />
                <Input value={newOfficeData?.address.state} onChange={(e) => setNewOfficeData(prev => ({...prev, address: ({...prev.address, state: e.target.value})}))} title="State" placeholder="Ontario" />
                <Input value={newOfficeData?.address.postalCode} onChange={(e) => setNewOfficeData(prev => ({...prev, address: ({...prev.address, postalCode: e.target.value})}))} title="Zip Code" placeholder="10001" />
            </div>
            <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                <div className="absolute -top-2 bg-white px-1">Office Description</div>
                <textarea 
                    onChange={(e) => setNewOfficeData(prev => ({...prev, description: e.target.value}))} 
                    value={newOfficeData?.description} maxLength={300} rows={5}
                    className="w-full h-full outline-0 resize-none" placeholder={"Tell patients about your office, specialties, and what makes you unique..."} 
                />
            </div>
            <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                <div className="absolute -top-2 bg-white px-1">Services Offered</div>
                <textarea 
                    onChange={(e) => setNewOfficeData(prev => ({...prev, servicesOffered: e.target.value}))} 
                    value={newOfficeData?.servicesOffered} maxLength={100} rows={3}
                    className="w-full h-full outline-0 resize-none" placeholder={"General Dentistry, Cosmetic Dentistry, Orthodontics..."} 
                />
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
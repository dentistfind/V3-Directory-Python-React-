import { ModalProps, OfficePortalPatients } from "@/lib/interface";
import { useEffect } from "react";
import { initialOfficePortalPatient } from "@/lib/temp-data";
import Modal from "./ui/modal";
import { useOfficePortalContext } from "@/context/OfficePortalContext";
import Input from "./ui/input";

interface AddNewPatientModal extends ModalProps {
    isEdit?: boolean,
    existingPatientData: OfficePortalPatients
}

export default function AddNewPatientModal({ isOpen, onClose, isEdit, existingPatientData }: AddNewPatientModal){
    const { newPatientData, setNewPatientData } = useOfficePortalContext()
    
    const startingOfficePatientData: OfficePortalPatients = isEdit ? existingPatientData : initialOfficePortalPatient
    
    useEffect(() => {
        setNewPatientData(startingOfficePatientData)
    }, [startingOfficePatientData])

    return(
        <Modal isOpen={isOpen} onClose={onClose} title={`${isEdit ? "View & Edit" : "Add"} Patient`} width={500}>
            <div className="space-y-5 p-5">
                <Input title="Name" placeholder="Enter Full Name" onChange={(e) => setNewPatientData(prev => ({...prev, name: e.target.value}))} value={newPatientData?.name} />
                <Input title="Email" placeholder="Enter Email" onChange={(e) => setNewPatientData(prev => ({...prev, email: e.target.value}))} value={newPatientData?.email} />
                <Input title="Phone Number" placeholder="Enter Phone Number" onChange={(e) => setNewPatientData(prev => ({...prev, phoneNumber: e.target.value}))} value={newPatientData?.phoneNumber} />
                <Input title="Address" placeholder="Enter Address" onChange={(e) => setNewPatientData(prev => ({...prev, location: ({...prev.location, street: e.target.value})}))} value={newPatientData?.location.street} />
                <Input title="ZIP Code" placeholder="Enter ZIP Code" onChange={(e) => setNewPatientData(prev => ({...prev, location: ({...prev.location, postalCode: e.target.value})}))} value={newPatientData?.location.postalCode} />
                <div className="flex items-center justify-between gap-5">
                    <Input title="State/Province" placeholder="Enter State/Province" onChange={(e) => setNewPatientData(prev => ({...prev, location: ({...prev.location, state: e.target.value})}))} value={newPatientData?.location.state} />
                    <Input title="Country" placeholder="Enter Country" onChange={(e) => setNewPatientData(prev => ({...prev, location: ({...prev.location, country: e.target.value})}))} value={newPatientData?.location.country} />
                </div>
            </div>
            <div className="w-full flex justify-end gap-2 p-5 border-t border-gray-300">
                <div onClick={onClose} className="border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-md text-sm">
                    Cancel
                </div>
                <div className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
                    {isEdit ? "Update" : "Create"}
                </div>
            </div>
        </Modal>
    )
}
import { ModalProps, OfficePortalAppointmentRequests } from "@/lib/interface";
import { useEffect } from "react";
import { initialOfficePortalAppointmentRequest } from "@/lib/temp-data";
import Modal from "./ui/modal";
import { useOfficePortalContext } from "@/context/OfficePortalContext";
import Input from "./ui/input";
import { APPOINTMENT_STATUS_CATEGORIES, AppointmentStatus } from "@/lib/type";

interface AddNewAppointmentRequestModal extends ModalProps {
    isEdit?: boolean,
    existingAppointmentRequestData: OfficePortalAppointmentRequests
}

export default function AddNewAppointmentRequestModal({ isOpen, onClose, isEdit, existingAppointmentRequestData }: AddNewAppointmentRequestModal){
    const { newAppointmentRequestData, setNewAppointmentRequestData } = useOfficePortalContext()
    
    const startingOfficeAppointmentRequestData: OfficePortalAppointmentRequests = isEdit ? existingAppointmentRequestData : initialOfficePortalAppointmentRequest
    
    useEffect(() => {
        setNewAppointmentRequestData(startingOfficeAppointmentRequestData)
    }, [startingOfficeAppointmentRequestData])

    return(
        <Modal isOpen={isOpen} onClose={onClose} title={`${isEdit ? "View & Edit" : "Add"} AppointmentRequest`} width={500}>
            <div className="space-y-5 p-5">
                <Input title="Name" placeholder="Enter Full Name" onChange={(e) => setNewAppointmentRequestData(prev => ({...prev, name: e.target.value}))} value={newAppointmentRequestData?.name} />
                <Input title="Email" placeholder="Enter Email" onChange={(e) => setNewAppointmentRequestData(prev => ({...prev, email: e.target.value}))} value={newAppointmentRequestData?.email} />
                <Input title="Phone Number" placeholder="Enter Phone Number" onChange={(e) => setNewAppointmentRequestData(prev => ({...prev, phoneNumber: e.target.value}))} value={newAppointmentRequestData?.phoneNumber} />
                <Input title="Services Required" placeholder="Enter Services Required" onChange={(e) => setNewAppointmentRequestData(prev => ({...prev, serviceRequired: (e.target.value)}))} value={newAppointmentRequestData?.serviceRequired} />
                <Input
                    type="date"
                    title="Last Dental Date"
                    placeholder="Enter Last Dental Date"
                    onChange={(e) =>
                        setNewAppointmentRequestData(prev => ({
                        ...prev,
                        lastDentalVisit: new Date(e.target.value)
                        }))
                    }
                    value={
                        newAppointmentRequestData?.lastDentalVisit
                        ? newAppointmentRequestData.lastDentalVisit.toISOString().split("T")[0]
                        : ""
                    }
                />              
                <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                    <div className="absolute -top-2 bg-white text-black px-1">Status</div>
                    <select name="status" id="status" value={newAppointmentRequestData.status} onChange={(e) => setNewAppointmentRequestData((prev) => ({...prev, status: e.target.value as AppointmentStatus}))} className="w-full outline-0 cursor-pointer h-full">
                        {APPOINTMENT_STATUS_CATEGORIES.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
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
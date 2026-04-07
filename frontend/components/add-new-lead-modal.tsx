import { ModalProps, OfficePortalLeads } from "@/lib/interface";
import { useEffect } from "react";
import { initialOfficePortalLead } from "@/lib/temp-data";
import Modal from "./ui/modal";
import { useOfficePortalContext } from "@/context/OfficePortalContext";
import Input from "./ui/input";
import { LEADS_SOURCE_CATEGORIES, LEADS_STATUS_CATEGORIES, LeadsSource, LeadsStatus } from "@/lib/type";

interface AddNewLeadModal extends ModalProps {
    isEdit?: boolean,
    existingLeadData: OfficePortalLeads
}

export default function AddNewLeadModal({ isOpen, onClose, isEdit, existingLeadData }: AddNewLeadModal){
    const { newLeadData, setNewLeadData } = useOfficePortalContext()
    
    const startingLeadData: OfficePortalLeads = isEdit ? existingLeadData : initialOfficePortalLead
    
    useEffect(() => {
        setNewLeadData(startingLeadData)
    }, [startingLeadData])

    return(
        <Modal isOpen={isOpen} onClose={onClose} title={`${isEdit ? "View & Edit" : "Add"} Lead`} width={500}>
            <div className="space-y-5 p-5">
                <Input title="Name" placeholder="Enter Full Name" onChange={(e) => setNewLeadData(prev => ({...prev, name: e.target.value}))} value={newLeadData?.name} />
                <Input title="Email" placeholder="Enter Email" onChange={(e) => setNewLeadData(prev => ({...prev, email: e.target.value}))} value={newLeadData?.email} />
                <Input title="Phone Number" placeholder="Enter Phone Number" onChange={(e) => setNewLeadData(prev => ({...prev, phoneNumber: e.target.value}))} value={newLeadData?.phoneNumber} />
                <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                    <div className="absolute -top-2 bg-white text-black px-1">Source</div>
                    <select name="status" id="status" value={newLeadData.source === "" as LeadsSource ? "Select Source" : newLeadData.source } onChange={(e) => setNewLeadData((prev) => ({...prev, source: e.target.value as LeadsSource}))} className="w-full outline-0 cursor-pointer h-full">
                        {LEADS_SOURCE_CATEGORIES.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                    <div className="absolute -top-2 bg-white text-black px-1">Status</div>
                    <select name="status" id="status" value={newLeadData.status === "" as LeadsStatus ? "Select Status" : newLeadData.status } onChange={(e) => setNewLeadData((prev) => ({...prev, status: e.target.value as LeadsStatus}))} className="w-full outline-0 cursor-pointer h-full">
                        {LEADS_STATUS_CATEGORIES.map((item, index) => (
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
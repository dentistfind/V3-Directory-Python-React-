import { ModalProps, OfficeData } from "@/lib/interface";
import { useEffect, useState } from "react";
import { initialOfficeData } from "@/lib/temp-data";
import { useDFPortalContext } from "@/context/DFPortalContext";
import AddOfficeDFPortalOfficeInformation from "./add-office-df-portal-office-information";
import AddOfficeDFPortalTelecommunication from "./add-office-df-portal-telecommunication";
import AddNewDFPortalOfficeUsers from "./add-new-office-users";
import AddOfficeDFPortalTrackingNumber from "./add-office-df-portal-tracking-number";
import Modal from "./ui/modal";

interface AddNewOfficeModal extends ModalProps {
    isEdit?: boolean,
    existingOfficeData: OfficeData
}

const menuItems = ["General Information", "Telecommunication", "Users", "Tracking Number"]

export default function AddNewOfficeModal({ isOpen, onClose, isEdit, existingOfficeData }: AddNewOfficeModal){
    const { setNewOfficeData } = useDFPortalContext()
    
    const [ componentPage, setComponentPage ] = useState(0)
    
    const startingOfficeData: OfficeData = isEdit ? existingOfficeData : initialOfficeData
    
    useEffect(() => {
        setNewOfficeData(startingOfficeData)
    }, [startingOfficeData])

    return(
        <Modal isOpen={isOpen} onClose={onClose} title={`${isEdit ? "Edit" : "Add"} Office`}>
            <div className="flex justify-between *:w-1/3 *:text-center *:py-1 py-2 px-5 rounded-full font-medium text-sm">
                {menuItems.map((item, index) => (
                    <div key={index} onClick={() => setComponentPage(index)}
                        className={`${componentPage === index && "border-theme text-theme px-2 whitespace-nowrap"} border-b-[1.5] border-gray-300 text-stone-500 cursor-pointer`}
                    >{item}</div>
                ))}
            </div>
            <div className="p-5 overflow-y-auto">
                {componentPage === 0 && <AddOfficeDFPortalOfficeInformation />}
                {componentPage === 1 && <AddOfficeDFPortalTelecommunication />}
                {componentPage === 2 && <AddNewDFPortalOfficeUsers />}
                {componentPage === 3 && <AddOfficeDFPortalTrackingNumber />}
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
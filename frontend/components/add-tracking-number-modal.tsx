import { ModalProps, TrackingNumber } from "@/lib/interface";
import Modal from "./ui/modal";
import Input from "./ui/input";
import { useState } from "react";

export default function AddTrackingNumberModal({ isOpen, onClose }: ModalProps){
    const [ trackingNumber, setTrackingNumber ] = useState<TrackingNumber>({ sno: "", id: "", title: "", trackingNumber: "", destinationNumber: ""})
    return(
        <Modal title="Add Tracking Number" isOpen={isOpen} onClose={onClose} width={120}>
            <div className="p-5 space-y-5">
                <Input title="S. No" placeholder="Enter Serial Number" onChange={(e) => setTrackingNumber(prev => ({...prev, sno: e.target.value}))} value={trackingNumber.sno} />
                <Input title="Tracking Number" placeholder="Enter Tracking Number" onChange={(e) => setTrackingNumber(prev => ({...prev, trackingNumber: e.target.value}))} value={trackingNumber.trackingNumber} />
                <Input title="Title" placeholder="Enter Title" onChange={(e) => setTrackingNumber(prev => ({...prev, title: e.target.value}))} value={trackingNumber.title} />
                <Input title="Destination Number" placeholder="Enter Destination Number" onChange={(e) => setTrackingNumber(prev => ({...prev, destinationNumber: e.target.value}))} value={trackingNumber.destinationNumber} />
            </div>
            <div className="w-full flex justify-end gap-2 p-5 border-t border-gray-300">
                <div onClick={onClose} className="border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-md text-sm">
                    Cancel
                </div>
                <div className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
                    Create
                </div>
            </div>
        </Modal>
    )
}
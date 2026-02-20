import { ModalProps, OfficeData, RequestAppointmentData } from "@/lib/interface";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import StarRatings from "react-star-ratings";
import Input from "./input";
import { useState } from "react";
import Button from "./button";

interface AppointmentRequestModalProps extends ModalProps {
    officeData: OfficeData
}

export default function AppointmentRequestModal({ isOpen, onClose, officeData }: AppointmentRequestModalProps){
    if (!isOpen) return null

    const { name, logoUrl, rating, reviewCount, address } = officeData

    const [ requestInput, setRequestInput ] = useState<RequestAppointmentData>({
        fullName: "",
        contactNumber: "",
        serviceRequired: "",
        lastDentalVisit: new Date()
    })

    return(
        <div
            className="z-20"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="w-120 rounded-xl m-auto p-5 bg-white space-y-5">
                <div className="flex text-xl items-center justify-between">
                    <h2 className="font-semibold">Appointment Request</h2>
                    <div onClick={onClose} className="cursor-pointer"><IoMdClose /></div>
                </div>
                <div className="flex items-center gap-3">
                    {logoUrl && (<div className="p-2 border border-gray-300 rounded-full">
                        <Image src={logoUrl} width={30} height={30} className="flex items-center justify-center rounded-full" alt={name} />
                    </div>)}
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                        <div className="flex items-center gap-2">
                            <StarRatings
                                rating={rating}
                                starRatedColor="#ffe234"
                                numberOfStars={1}
                                name='rating'
                                starDimension="15px"
                                starSpacing="0px"
                            />
                            <p className="text-xs font-semibold">{rating} • {reviewCount} reviews</p>
                        </div>
                        <div className="text-xs flex items-center gap-1 font-semibold"><CiLocationOn /> {address}</div>
                    </div>
                </div>
                <div className="mt-7 space-y-5">
                    <Input 
                        title="Full Name" 
                        onChange={(e) => setRequestInput(prev => ({...prev, fullName: e.target.value}))} 
                        value={requestInput.fullName} 
                        placeholder="Enter Full Name" 
                    />
                    <Input 
                        title="Contact Number" 
                        onChange={(e) => setRequestInput(prev => ({...prev, contactNumber: e.target.value}))} 
                        value={requestInput.contactNumber} 
                        placeholder="Enter contact number" 
                    />
                    <Input 
                        title="Service Required" 
                        onChange={(e) => setRequestInput(prev => ({...prev, serviceRequired: e.target.value}))} 
                        value={requestInput.serviceRequired} 
                        placeholder="Enter required service" 
                    />
                    <Input 
                        title="Last Dental Visit" 
                        onChange={(e) => setRequestInput(prev => ({...prev, lastDentalVisit: new Date()}))} 
                        value={requestInput.lastDentalVisit?.toString()} 
                        placeholder="Select Timeframe" 
                    />
                </div>
                <div className="space-y-3">
                    <p className="font-semibold text-sm">Dental Health Questions</p>
                    <div className="text-xs space-y-1 *:flex *:items-center *:gap-1">
                        <p><input type="checkbox" /> Are you experiencing any toothache?</p>
                        <p><input type="checkbox" /> Do you have tooth sensitivity to hot/cold?</p>
                        <p><input type="checkbox" /> Do you have bleeding gums?</p>
                    </div>
                </div>
                <Button text="Continue" className="text-center rounded-none" />
            </div>
        </div>
    )
}
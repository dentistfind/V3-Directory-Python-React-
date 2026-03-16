import { ModalProps, OfficeData, UserData } from "@/lib/interface";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Input from "./input";
import { initialOfficeData, initialUserData } from "@/lib/temp-data";
import { Country, ICountry, IState, State } from "country-state-city"

interface AddNewOfficeModal extends ModalProps {
    isEdit?: boolean,
    existingOfficeData: OfficeData
}

const menuItems = ["General Information", "Telecommunication", "Users"]

export default function AddNewOfficeModal({ isOpen, onClose, isEdit, existingOfficeData }: AddNewOfficeModal){
    if (!isOpen) return null

    const initialData: OfficeData = isEdit ? existingOfficeData : initialOfficeData

    const [ newOfficeData, setNewOfficeData ] = useState<OfficeData>(initialData)
    const [ componentPage, setComponentPage ] = useState(0)
    const [ countryStateData, setCountryStateData ] = useState<{country: ICountry[], state: IState[]}>()
    const [ currentCountryCode, setCurrentCountryCode ] = useState("US")

    useEffect(() => {
        setCountryStateData({ country: Country.getAllCountries(), state: State.getStatesOfCountry(currentCountryCode)})
        setNewOfficeData(prev => ({...prev, address: ({...prev.address, country: Country.getCountryByCode(currentCountryCode)?.name || ""})}))
    }, [Country, State, currentCountryCode])

    const handleSelectCountry = () => {

    }

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
            <div className="w-180 rounded-xl m-auto bg-white space-y-5">
                <div className="flex items-center justify-between border-b border-gray-300 p-5">
                    <h2 className="font-semibold">{isEdit ? "Edit" : "Add"} Office</h2>
                    <div onClick={onClose} className="cursor-pointer text-xl"><IoMdClose /></div>
                </div>
                <div className="flex justify-between *:w-1/3 *:text-center *:py-1 py-2 px-5 rounded-full font-medium text-sm">
                    {menuItems.map((item, index) => (
                        <div key={index} onClick={() => setComponentPage(index)}
                            className={`${componentPage === index && "border-theme text-theme px-2 whitespace-nowrap"} border-b-[1.5] border-gray-300 text-stone-500 cursor-pointer`}
                        >{item}</div>
                    ))}
                </div>
                <div className="mx-5 p-5 space-y-5 border border-gray-300 rounded-lg">
                    <h3 className="font-semibold">Office Information</h3>
                    <div className="flex items-center gap-5">
                        <Input value={newOfficeData?.officeName} onChange={(e) => setNewOfficeData(prev => ({...prev, officeName: e.target.value}))} title="Office Name" placeholder="Enter Office name" />
                        <Input value={newOfficeData?.ownerName} onChange={(e) => setNewOfficeData(prev => ({...prev, ownerName: e.target.value}))} title="Manager" placeholder="Enter Manager name" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Input value={newOfficeData?.email} onChange={(e) => setNewOfficeData(prev => ({...prev, email: e.target.value}))} title="Email" placeholder="Enter email id" />
                        <Input value={newOfficeData?.mobileNumber} onChange={(e) => setNewOfficeData(prev => ({...prev, mobileNumber: e.target.value}))} title="Phone Number" placeholder="Enter Phone Number" />
                    </div>
                    <Input value={newOfficeData?.website} onChange={(e) => setNewOfficeData(prev => ({...prev, website: e.target.value}))} title="Website URL" placeholder="Enter URL" />
                    <h3 className="font-semibold">Location Information</h3>
                    <Input value={newOfficeData?.address.street} onChange={(e) => setNewOfficeData(prev => ({...prev, address: {...prev.address, street: e.target.value}}))} title="Street Name" placeholder="Enter street name" />
                    <div className="flex items-center gap-5">
                        <Input value={newOfficeData?.address.state} onChange={(e) => setNewOfficeData(prev => ({...prev, address: {...prev.address, state: e.target.value}}))} title="State/Province" placeholder="Enter State/Province" />
                        <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                            <div className="absolute -top-2 bg-white text-black px-1">Country</div>
                            <select name="country" id="country" value={newOfficeData.address.country} onChange={(e) => setNewOfficeData(prev => ({...prev, address: {...prev.address, country: e.target.value}}))} className="w-full outline-0 cursor-pointer h-full">
                                {countryStateData?.country?.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* <Input value={newUserData?.phoneNumber} onChange={(e) => setNewUserData(prev => ({...prev, phoneNumber: e.target.value}))} title="Phone Number" placeholder="Enter Phone Number" />
                    <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                        <div className="absolute -top-2 bg-white text-black px-1">Role</div>
                        <select name="status" id="status" value={newUserData.role} onChange={(e) => setNewUserData((prev) => ({...prev, role: e.target.value as UserRole}))} className="w-full outline-0 cursor-pointer h-full">
                            {USER_ROLE_CATEGORIES.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div> */}
                </div>
                <div className="w-full flex justify-end gap-2 p-5 border-t border-gray-300">
                    <div onClick={onClose} className="border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-md text-sm">
                        Cancel
                    </div>
                    <div className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
                        {isEdit ? "Update" : "Create"}
                    </div>
                </div>
            </div>
        </div>
    )
}
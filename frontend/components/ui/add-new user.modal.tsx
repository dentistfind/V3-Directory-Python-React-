import { ModalProps, UserData } from "@/lib/interface";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Input from "./input";
import { initialUserData } from "@/lib/temp-data";
import { USER_ROLE_CATEGORIES, UserRole } from "@/lib/type";

interface AddNewUserModal extends ModalProps {
    isEdit?: boolean,
    existingUserData: UserData
}

export default function AddNewUserModal({ isOpen, onClose, isEdit, existingUserData }: AddNewUserModal){
    if (!isOpen) return null

    const initialData = isEdit ? existingUserData : initialUserData

    const [ newUserData, setNewUserData ] = useState<UserData>(initialData)

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
            <div className="w-120 rounded-xl m-auto bg-white space-y-5">
                <div className="flex items-center justify-between border-b border-gray-300 p-5">
                    <h2 className="font-semibold">{isEdit ? "Edit" : "Add"} User</h2>
                    <div onClick={onClose} className="cursor-pointer text-xl"><IoMdClose /></div>
                </div>
                <div className="px-5 pb-5 space-y-5">
                    <Input value={newUserData?.name} onChange={(e) => setNewUserData(prev => ({...prev, name: e.target.value}))} title="Name" placeholder="Enter Full Name" />
                    <Input value={newUserData?.loginData.email} onChange={(e) => setNewUserData(prev => ({...prev, loginData: {...prev.loginData, email: e.target.value}}))} title="Email" placeholder="Enter Email" />
                    <Input value={newUserData?.phoneNumber} onChange={(e) => setNewUserData(prev => ({...prev, phoneNumber: e.target.value}))} title="Phone Number" placeholder="Enter Phone Number" />
                    <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                        <div className="absolute -top-2 bg-white text-black px-1">Role</div>
                        <select name="status" id="status" value={newUserData.role} onChange={(e) => setNewUserData((prev) => ({...prev, role: e.target.value as UserRole}))} className="w-full outline-0 cursor-pointer h-full">
                            {USER_ROLE_CATEGORIES.map((item, index) => (
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
            </div>
        </div>
    )
}
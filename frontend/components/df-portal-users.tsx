"use client"
import { useEffect, useState } from "react"
import { useDFPortalContext } from "@/context/DFPortalContext"
import Button from "./ui/button"
import { UserData } from "@/lib/interface"
import { initialUserData, users } from "@/lib/temp-data"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { FiEdit } from "react-icons/fi"
import { FaTrashAlt } from "react-icons/fa"
import AddNewUserModal from "./ui/add-new user.modal"

const menuItems = ["DF Admins", "Office Users"]

export default function DFPortalUserManagement(){
    const { setDFPortalCategory } = useDFPortalContext()
    const [ componentPage, setComponentPage ] = useState(0)
    const [ userData, setUserData ] = useState<{DFAdmins: UserData[], OfficeUsers: UserData[]}>()
    const [ inputSearch, setInputSearch ] = useState("")
    const [ currentUserList, setCurrentUserList ] = useState<UserData[]>()
    const [ userDisplay, setUserDisplay ] = useState<UserData[]>()
    const [ newUserModalIsOpen, setNewUserModalIsOpen ] = useState(false)
    const [ modalIsEdit, setModalIsEdit ] = useState(false)
    const [ existingUserData, setExistingUserData ] = useState<UserData>(initialUserData)

    useEffect(() => {
        setDFPortalCategory("Users")
    }, [])

    useEffect(() => {
        setUserData({ DFAdmins: [...users].filter(item => item.role === "Super Admin"), OfficeUsers: [...users].filter(item => item.role === "Clinic Admin") })
    }, [users])

    useEffect(() => {
        setCurrentUserList((componentPage === 0) ? userData?.DFAdmins : userData?.OfficeUsers)
        setUserDisplay((componentPage === 0) ? userData?.DFAdmins : userData?.OfficeUsers)
    }, [componentPage, userData])

    useEffect(() => {
        setUserDisplay(currentUserList?.filter(item => item.name.toLowerCase().includes(inputSearch) || item.role.toLowerCase().includes(inputSearch) || item.phoneNumber.toLowerCase().includes(inputSearch) || item.loginData.email.toLowerCase().includes(inputSearch)))
    }, [inputSearch])

    const handleAddNewUserButton = () => {
        setModalIsEdit(false)
        setNewUserModalIsOpen(true)
        setExistingUserData(initialUserData)
    }

    const handleEditUserButton = (userData: UserData) => {
        setModalIsEdit(true)
        setNewUserModalIsOpen(true)
        setExistingUserData(userData)
    }

    return(
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-xl">Users Management</h2>
                    <div className="text-sm font-light">Manage all system users and their permissions</div>
                </div>
                <div onClick={handleAddNewUserButton}><Button fill text="+ Add User" className="w-fit rounded-md" /></div>
            </div>
            <div className="border border-gray-200 shadow rounded-lg p-5 space-y-7">
                <div className="bg-theme-light flex justify-between *:w-1/2 *:text-center *:py-1 p-2 rounded-full font-medium text-sm">
                    {menuItems.map((item, index) => (
                        <div key={index} onClick={() => setComponentPage(index)}
                            className={`${componentPage === index && "bg-theme rounded-full px-2 text-white whitespace-nowrap"} cursor-pointer`}
                        >{item}</div>
                    ))}
                </div>
                <div className="text-lg flex justify-between items-center">
                    <h3 className="font-semibold">All Users</h3>
                    <div className="text-xs flex items-center gap-5 *:border *:border-gray-300 *:p-3 *:rounded">
                        <div className="w-80 flex items-center gap-1">
                            <FaMagnifyingGlass className="text-gray-400" />
                            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value.toLowerCase())} className="outline-0 w-full" placeholder="Search by name, email, phone number" />
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 mt-5 *:border-b *:border-gray-200 *:p-3 *:*:w-1/4 *:flex *:items-center *:gap-2 rounded">
                    <div className="uppercase font-light text-sm">
                        <div>NAME</div>
                        <div>EMAIL</div>
                        <div>PHONE</div>
                        <div>ACTIONS</div>
                    </div>
                    {userDisplay?.map((item, index) => (
                        <div className="*:wrap-break-word *:whitespace-normal text-xs" key={index}>
                            <div>{item.name}</div>
                            <div>{item.loginData.email}</div>
                            <div>{item.phoneNumber}</div>
                            <div className="text-lg flex items-center gap-3 *:cursor-pointer">
                                <div onClick={() => handleEditUserButton(item)}><FiEdit /></div>
                                <FaTrashAlt className="text-[#E20C0C]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AddNewUserModal isOpen={newUserModalIsOpen} onClose={() => setNewUserModalIsOpen(false)} isEdit={modalIsEdit} existingUserData={existingUserData} />
        </div>
    )
}
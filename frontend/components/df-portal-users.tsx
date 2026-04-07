"use client"
import { useEffect, useState } from "react"
import { useDFPortalContext } from "@/context/DFPortalContext"
import Button from "./ui/button"
import { UserData } from "@/lib/interface"
import { initialUserData, users } from "@/lib/temp-data"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { FiEdit } from "react-icons/fi"
import { FaTrashAlt } from "react-icons/fa"
import AddNewUserModal from "./add-new user.modal"

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
<div className="flex-1 min-h-screen p-4 sm:p-5 space-y-6">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div>
      <h2 className="font-semibold text-lg sm:text-xl">Users Management</h2>
      <div className="text-sm font-light">
        Manage all system users and their permissions
      </div>
    </div>

    <div onClick={handleAddNewUserButton}>
      <Button
        fill
        text="+ Add User"
        className="w-full sm:w-fit rounded-md"
      />
    </div>
  </div>

  {/* Container */}
  <div className="border border-gray-200 shadow rounded-lg p-4 sm:p-5 space-y-5 sm:space-y-7">

    {/* Tabs */}
    <div className="flex sm:hidden gap-2 overflow-x-auto pb-2">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setComponentPage(index)}
          className={`whitespace-nowrap px-3 py-2 text-xs rounded-full shrink-0 transition-colors
            ${componentPage === index
              ? "bg-theme text-white"
              : "bg-theme-light text-theme"
            }`}
        >
          {item}
        </button>
      ))}
    </div>

    <div className="hidden sm:flex bg-theme-light justify-between p-2 rounded-full text-sm font-medium">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setComponentPage(index)}
          className={`cursor-pointer flex-1 text-center py-1 px-2 rounded-full transition-colors
            ${componentPage === index
              ? "bg-theme text-white"
              : "hover:bg-theme hover:bg-opacity-20"
            }`}
        >
          {item}
        </div>
      ))}
    </div>

    {/* Top Bar */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h3 className="text-lg font-semibold">All Users</h3>

      <div className="w-full sm:w-80 flex items-center gap-2 text-xs border border-gray-300 p-2 rounded">
        <FaMagnifyingGlass className="text-gray-400" />
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
          className="outline-none w-full text-sm"
          placeholder="Search by name, email, phone number"
        />
      </div>
    </div>

    {/* Table / Cards */}
    <div className="mt-4 border border-gray-200 rounded overflow-x-auto">

      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-4 text-xs uppercase border-b border-gray-200 p-2">
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Actions</div>
      </div>

      {/* Empty */}
      {userDisplay?.length === 0 && (
        <div className="flex items-center justify-center py-5 text-sm">
          No users available
        </div>
      )}

      {/* Rows */}
      {userDisplay?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:grid sm:grid-cols-4 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
        >
          {/* Name */}
          <div className="sm:hidden font-semibold">Name:</div>
          <div className="wrap-break-word">{item.name}</div>

          {/* Email */}
          <div className="sm:hidden font-semibold">Email:</div>
          <div className="wrap-break-word">{item.loginData.email}</div>

          {/* Phone */}
          <div className="sm:hidden font-semibold">Phone:</div>
          <div>{item.phoneNumber}</div>

          {/* Actions */}
          <div className="sm:hidden font-semibold">Actions:</div>
          <div className="flex items-center gap-3 text-lg cursor-pointer">
            <div onClick={() => handleEditUserButton(item)}>
              <FiEdit />
            </div>
            <FaTrashAlt className="text-[#E20C0C]" />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <AddNewUserModal
    isOpen={newUserModalIsOpen}
    onClose={() => setNewUserModalIsOpen(false)}
    isEdit={modalIsEdit}
    existingUserData={existingUserData}
  />
</div>
    )
}
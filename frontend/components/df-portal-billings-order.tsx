import { dummyDFPortalBillingOrders } from "@/lib/temp-data";
import { DirectoryStatusDisplay, OrderStatus } from "@/lib/type";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

type OrderStatusDisplay = OrderStatus | "All"

export default function DFPortalBillingsOrder(){
    const [ inputSearch, setInputSearch ] = useState("")
    const [ status, setStatus ] = useState<OrderStatusDisplay>("All")
    const [ showStatusDropdown, setShowStatusDropdown ] = useState(false)
    
    const StatusDisplay = ({status}: {status: OrderStatus}) => {
        return (
            <div style={{
                color: status === "Active" ? "#1013B9" : status === "Cancelled" ? "#D80027" : status === "Completed" ? "#10B981" : status === "Waiting" ? "#B99D10" : "#000",
                backgroundColor: status === "Active" ? "#E8E7F8" : status === "Cancelled" ? "#FFEAEA" : status === "Completed" ? "#E7F8F2" : status === "Waiting" ? "#F8F8E7" : "#fff"
            }} className="rounded-full text-center p-2">
                {status}
            </div>
        )
    }

    return(
<div className="space-y-5">

  {/* Header + Controls */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
    <h3 className="text-lg font-semibold">All Orders</h3>

    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

      {/* Search */}
      <div className="w-full sm:w-80 flex items-center gap-2 text-xs border border-gray-300 p-2 rounded">
        <FaMagnifyingGlass className="text-gray-400" />
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
          className="outline-none w-full text-sm"
          placeholder="Search by name, email, phone number"
        />
      </div>

      {/* Status */}
      <div className="relative w-full sm:w-40 text-xs border border-gray-300 p-2 rounded">
        <div className="absolute -top-2 bg-white px-1 text-gray-500">
          Status
        </div>

        <div
          onClick={() => setShowStatusDropdown(prev => !prev)}
          className="flex items-center justify-between cursor-pointer"
        >
          <div>{status}</div>
          {showStatusDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {showStatusDropdown && (
          <div className="absolute top-11 left-0 w-full bg-white p-2 flex flex-col rounded-md border border-gray-200 shadow z-10">
            {["All", "Active", "Completed", "Waiting", "Cancelled"].map((s) => (
              <div
                key={s}
                onClick={() => setStatus(s as OrderStatusDisplay)}
                className="p-1 cursor-pointer hover:opacity-70"
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  </div>

  {/* Table / Cards */}
  <div className="border border-gray-300 rounded overflow-x-auto">

    {/* Desktop Header */}
    <div className="hidden sm:grid grid-cols-7 text-xs uppercase border-b border-gray-300 p-2">
      <div>Order ID</div>
      <div>Office</div>
      <div>Status</div>
      <div>Date</div>
      <div>Items</div>
      <div>Amount</div>
      <div>Actions</div>
    </div>

    {/* Empty */}
    {dummyDFPortalBillingOrders.length === 0 && (
      <div className="flex items-center justify-center py-5 text-sm">
        Orders unavailable
      </div>
    )}

    {/* Rows */}
    {dummyDFPortalBillingOrders.map((item, index) => (
      <div
        key={index}
        className="flex flex-col sm:grid sm:grid-cols-7 gap-2 sm:gap-0 border-b border-gray-200 p-3 text-xs"
      >

        {/* Order ID */}
        <div className="sm:hidden font-semibold">Order ID:</div>
        <div>{item.orderId}</div>

        {/* Office */}
        <div className="sm:hidden font-semibold">Office:</div>
        <div>{item.office}</div>

        {/* Status */}
        <div className="sm:hidden font-semibold">Status:</div>
        <div>
          <StatusDisplay status={item.status} />
        </div>

        {/* Date */}
        <div className="sm:hidden font-semibold">Date:</div>
        <div>{item.date}</div>

        {/* Items */}
        <div className="sm:hidden font-semibold">Items:</div>
        <div>{item.items} items</div>

        {/* Amount */}
        <div className="sm:hidden font-semibold">Amount:</div>
        <div>${item.amount}</div>

        {/* Actions */}
        <div className="sm:hidden font-semibold">Actions:</div>
        <div className="flex items-center gap-3 text-lg cursor-pointer">
          <FiEdit />
          <FaTrashAlt className="text-[#E20C0C]" />
        </div>

      </div>
    ))}
  </div>
</div>
    )
}
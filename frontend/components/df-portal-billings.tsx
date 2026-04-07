import { useEffect, useState } from "react"
import DFPortalBillingsOrder from "./df-portal-billings-order"
import { useDFPortalContext } from "@/context/DFPortalContext"
import DFPortalBillingsInvoices from "./df-portal-billings-invoices"
import DFPortalBillingsProposals from "./df-portal-billings-proposal"
import DFPortalBillingsItems from "./df-portal-billings-item"

const menuItems = ["Orders", "Invoices", "Proposal Agreements", "Items"]

export default function DFPortalBillings(){
    const { setDFPortalCategory } = useDFPortalContext()
    
    const [ componentPage, setComponentPage ] = useState(0)

    useEffect(() => {
        setDFPortalCategory("Billings")
    }, [])

    return(
<div className="flex-1 min-h-screen p-4 sm:p-5 space-y-6">

  {/* Header */}
  <div>
    <h2 className="font-semibold text-lg sm:text-xl">
      Billings Management
    </h2>
    <div className="text-sm font-light">
      Manage orders, invoices, proposals and billing items
    </div>
  </div>

  {/* Container */}
  <div className="rounded-lg p-4 sm:p-5 border border-gray-300 space-y-5">

    {/* Tabs - Mobile */}
    <div className="sm:hidden flex gap-2 overflow-x-auto pb-2">
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

    {/* Tabs - Desktop */}
    <div className="hidden sm:flex bg-theme-light justify-between p-2 rounded-full text-sm font-medium">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setComponentPage(index)}
          className={`cursor-pointer flex-1 text-center py-1 px-2 rounded-full transition-colors
            ${componentPage === index
              ? "bg-theme text-white"
              : "hover:bg-opacity-20"
            }`}
        >
          {item}
        </div>
      ))}
    </div>

    {/* Content */}
    <div>
      {componentPage === 0 && <DFPortalBillingsOrder />}
      {componentPage === 1 && <DFPortalBillingsInvoices />}
      {componentPage === 2 && <DFPortalBillingsProposals />}
      {componentPage === 3 && <DFPortalBillingsItems />}
    </div>

  </div>
</div>
    )
}
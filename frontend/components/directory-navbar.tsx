"use client"
import { MdOutlineDashboard } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { useDirectoryContext } from "@/context/DirectoryContext";
import {
  DIRECTORY_PORTAL_DASHBOARD,
  DIRECTORY_PORTAL_OFFICE_REQUEST,
  DIRECTORY_PORTAL_OFFICES,
  DIRECTORY_PORTAL_REVIEWS,
  DIRECTORY_PORTAL_VIDEO_MANAGER
} from "@/lib/routes";
import { useRouter } from "next/navigation";
import { DirectoryPortalCategoryType } from "@/lib/type";
import { DirectoryMenuItems } from "@/lib/interface";
import { useState } from "react";

export default function DirectoryNavbar({ userId }: { userId: string }) {
  const router = useRouter();
  const { directoryPortalCategory, setDirectoryPortalCategory } = useDirectoryContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: DirectoryMenuItems[] = [
    { label: "Dashboard", icon: MdOutlineDashboard, link: DIRECTORY_PORTAL_DASHBOARD(userId) },
    { label: "Offices", icon: PiBuildingOfficeLight, link: DIRECTORY_PORTAL_OFFICES(userId) },
    { label: "Office Request", icon: GoPeople, link: DIRECTORY_PORTAL_OFFICE_REQUEST(userId) },
    { label: "Reviews", icon: TbNotes, link: DIRECTORY_PORTAL_REVIEWS(userId) },
    { label: "Video Manager", icon: CiVideoOn, link: DIRECTORY_PORTAL_VIDEO_MANAGER(userId) },
  ];

  const handleClickOnCategory = (label: DirectoryPortalCategoryType, link: string) => {
    setDirectoryPortalCategory(label);
    router.push(link);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <div className="hidden sm:flex sm:w-48 lg:w-70 p-3 sm:p-4 border border-t-0 border-l border-stone-200 flex-col gap-3 *:p-2 *:flex *:items-center *:gap-2 space-y-3 min-h-screen">
        {menuItems.map(({ label, icon: Icon, link }, index) => (
          <div
            key={index}
            onClick={() => handleClickOnCategory(label, link)}
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors 
            ${directoryPortalCategory === label ? "bg-theme-light text-theme" : "hover:bg-gray-100"}`}
          >
            <Icon className="text-lg sm:text-xl shrink-0" />
            <span className="text-sm sm:text-base">{label}</span>
          </div>
        ))}
      </div>

      {/* ✅ Mobile Menu */}
      <div className="sm:hidden border-b border-stone-200 p-3 bg-white sticky top-0 z-40">
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
        >
          <span className="font-semibold text-sm">
            {directoryPortalCategory || "Menu"}
          </span>

          <svg
            className={`w-5 h-5 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="mt-2 bg-white border border-stone-200 rounded-lg shadow p-2 flex flex-col gap-2">
            {menuItems.map(({ label, icon: Icon, link }, index) => (
              <div
                key={index}
                onClick={() => handleClickOnCategory(label, link)}
                className={`flex items-center gap-3 p-3 rounded-md cursor-pointer 
                ${directoryPortalCategory === label ? "bg-theme-light text-theme" : "hover:bg-gray-100"}`}
              >
                <Icon className="text-lg" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
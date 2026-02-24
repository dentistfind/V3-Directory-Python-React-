"use client"
import { Location } from "@/lib/interface";
import { useState, useMemo } from "react";
import TopOfficeCard from "./ui/top-office-card";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { dummyOffices } from "@/lib/temp-data";

const PAGINATION_CUTOFF = 3
const totalRecordCount = [...dummyOffices].length
const LAST_PAGE = Math.ceil(totalRecordCount / PAGINATION_CUTOFF)

export default function TopOfficesHighlight({ location: { city, country } }:{ location: Location }){
    const [ currentPage, setCurrentPage ] = useState(1);

    const startIndex = (currentPage - 1) * PAGINATION_CUTOFF;
    const endIndex = Math.min(startIndex + PAGINATION_CUTOFF, totalRecordCount);

    const paginatedOffices = useMemo(() => {
      return dummyOffices.slice(startIndex, endIndex);
    }, [startIndex, endIndex]);

    const handlePrevious = () => {
      setCurrentPage(prev => (prev > 1 ? prev - 1 : LAST_PAGE));
    };

    const handleNext = () => {
      setCurrentPage(prev => (prev < LAST_PAGE ? prev + 1 : 1));
    };

    const mapEmbed = useMemo(() => (
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        height={1064}
        width="100%"
        mode="place"
        q={`${city}, ${country}`}
      />
    ), [city, country]);

    return (
        <div className="text-black bg-white border-t border-gray-200">
            <h2 className="text-2xl font-semibold p-10">Top Dental Offices in {city}</h2>
            <div className="flex">
              <div className="w-2/3 border border-gray-200">
                  {paginatedOffices.map((item, index) => (
                      <div key={startIndex + index}>
                          <TopOfficeCard officeCard={item} />
                      </div>
                  ))}
              </div>
              <div className="w-1/3">
                {mapEmbed}
              </div>
            </div>
            <div className="p-5 font-light flex items-center justify-between">
              {startIndex + 1}-{endIndex} of {totalRecordCount} records
              <div className="text-sm flex items-center gap-3 *:cursor-pointer">
                <div onClick={handlePrevious} className="flex items-center gap-2">
                  <FaArrowLeft />
                  Previous
                </div>
                {Array.from({ length: LAST_PAGE }, (_, i) => i + 1).map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => setCurrentPage(item)}
                    style={{ color: currentPage === item ? "white" : "black"}} 
                    className={`${currentPage === item && "bg-theme rounded-md px-2 py-1"}`}
                  >
                    {item}
                  </div>
                ))}
                <div onClick={handleNext} className="flex items-center gap-2">
                  Next
                  <FaArrowRight />
                </div>
              </div>
              <div></div>
            </div>
        </div>
    )
}
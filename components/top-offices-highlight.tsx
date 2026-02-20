"use client"
import { SPOTLIGHT_VIDEO1, SPOTLIGHT_VIDEO2, SPOTLIGHT_VIDEO3 } from "@/lib/constants";
import { Location, OfficeData } from "@/lib/interface";
import { useEffect, useState } from "react";
import TopOfficeCard from "./ui/top-office-card";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const dummyOffices: OfficeData[] = [
  {
    name: "BrightSmile Dental Studio1",
    address: "2458 Sunset Blvd, Los Angeles, CA 90026",
    logoUrl: "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    reviewCount: "312",
    isAvailable: true,
    isSponsored: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO1,
  },
  {
    name: "PearlCare Family Dentistry2",
    address: "1021 Westheimer Rd, Houston, TX 77006",
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    reviewCount: "198",
    isAvailable: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO2,
  },
  {
    name: "Elite Orthodontics Center3",
    address: "890 Lake Shore Dr, Chicago, IL 60611",
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141203239-494e6cd1fe51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    reviewCount: "421",
    isAvailable: false,
    isSponsored: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO3,
  },
  {
    name: "Downtown Dental Hub4",
    address: "55 Broad St, New York, NY 10004",
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.5,
    reviewCount: "156",
    isAvailable: true,
    videoUrl: SPOTLIGHT_VIDEO1,
  },
  {
    name: "GentleTouch Pediatric Dentistry5",
    address: "7432 N Central Ave, Phoenix, AZ 85020",
    logoUrl: "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    reviewCount: "287",
    isAvailable: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO2,
  },
  {
    name: "Urban Smiles Cosmetic Clinic6",
    address: "1200 Brickell Ave, Miami, FL 33131",
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.6,
    reviewCount: "204",
    isAvailable: true,
    isSponsored: false,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO3,
  },
  {
    name: "Greenwood Dental Associates7",
    address: "4500 Greenwood Ave N, Seattle, WA 98103",
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141203239-494e6cd1fe51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.4,
    reviewCount: "98",
    isAvailable: false,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO1,
  },
  {
    name: "Harmony Dental & Implants8",
    address: "3320 Peachtree Rd NE, Atlanta, GA 30326",
    logoUrl: "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 5.0,
    reviewCount: "509",
    isAvailable: true,
    isSponsored: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO2,
  },
];

const PAGINATION_CUTOFF = 3
const totalRecordCount = [...dummyOffices].length
const LAST_PAGE = Math.ceil(totalRecordCount / PAGINATION_CUTOFF)

export default function TopOfficesHighlight({ location: { city, country } }:{ location: Location }){
    const [ topOffices, setTopOffices ] = useState<OfficeData[]>([...dummyOffices])
    const [ currentPage, setCurrentPage ] = useState(3)
    const [ currentListLimit, setCurrentListLimit ] = useState({ lowerLimit: 0, upperLimit: 0 })

    // useEffect(() => {
    //   setTopOffices(prev => prev.splice(currentListLimit.lowerLimit, currentListLimit.upperLimit))
    // }, [currentListLimit])

    useEffect(() => {
      setCurrentListLimit({ 
        lowerLimit: currentPage !== 1 ? currentPage + 1 : currentPage,
        upperLimit: (currentPage * PAGINATION_CUTOFF) >= totalRecordCount ? totalRecordCount : (currentPage * PAGINATION_CUTOFF)
      })
    }, [currentPage, PAGINATION_CUTOFF])

    const handlePrevious = () => {
      setCurrentPage(prev => {
        return prev !== 1 ? prev - 1 : LAST_PAGE
      })
    }

    const handleNext = () => {
      setCurrentPage(prev => {
        return prev !== LAST_PAGE ? prev + 1 : 1
      })
    }

    return (
        <div className="text-black bg-white border-t border-gray-200">
            <h2 className="text-2xl font-semibold p-10">Top Dental Offices in {city}</h2>
            <div className="flex">
              <div className="w-2/3 border border-gray-200">
                  {topOffices.map((item, index) => (
                      <div key={index}>
                          <TopOfficeCard officeCard={item} />
                      </div>
                  ))}
              </div>
              <div className="w-1/3">
                <GoogleMapsEmbed
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                  height={1000}
                  width="100%"
                  mode="place"
                  q={`${city}, ${country}`}
                />
              </div>
            </div>
            <div className="p-5 font-light flex items-center justify-between">
              {currentListLimit.lowerLimit}-{currentListLimit.upperLimit} of {dummyOffices.length} records
              <div className="text-sm flex items-center gap-3 *:cursor-pointer">
                <div onClick={handlePrevious} style={{ color: currentPage === 1 ? "#a6a09b" : "black" }} className="flex items-center gap-2">
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
                <div onClick={handleNext} style={{ color: currentPage === LAST_PAGE ? "#a6a09b" : "black" }} className="flex items-center gap-2">
                  Next
                  <FaArrowRight />
                </div>
              </div>
              <div></div>
            </div>
        </div>
    )
}
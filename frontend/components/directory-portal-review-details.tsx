"use client"
import { useDirectoryContext } from "@/context/DirectoryContext"
import { OfficeData } from "@/lib/interface"
import { dummyDentalOffices } from "@/lib/temp-data"
import { useEffect, useState } from "react"
import { FaChevronLeft, FaTrash } from "react-icons/fa6"
import { useRouter } from "next/navigation"
import { DIRECTORY_PORTAL_REVIEWS } from "@/lib/routes"
import Link from "next/link"
import Image from "next/image"
import { CiLocationOn } from "react-icons/ci"
import StarRatings from "react-star-ratings"

export default function DirectoryPortalReviewDetails({ userId, requestId }: { userId: string, requestId: string | number }){
    const router = useRouter()
    const { setDirectoryPortalCategory } = useDirectoryContext()
    const [ officeData, setOfficeData ] = useState<OfficeData>()

    useEffect(() => {
        setDirectoryPortalCategory("Reviews")

        const office = [...dummyDentalOffices].find(item => item.id === requestId)

        if (!office){
            router.push(DIRECTORY_PORTAL_REVIEWS(userId))
        } 

        setOfficeData(office)
    }, [])
    
    return(
<div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">
  {/* Back */}
  <Link
    href={DIRECTORY_PORTAL_REVIEWS(userId)}
    className="flex items-center gap-2 text-sm"
  >
    <FaChevronLeft className="text-theme" />
    <div>Back to Reviews</div>
  </Link>

  {/* Office Header */}
  <div className="rounded-lg border border-gray-200 shadow p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    
    {/* Left */}
    <div className="flex items-start sm:items-center gap-3">
      {officeData?.logoUrl && (
        <Image
          src={officeData?.logoUrl}
          width={50}
          height={50}
          className="rounded-full"
          alt="office-logo"
        />
      )}

      <div>
        <div className="font-semibold">{officeData?.officeName}</div>
        <div className="text-light flex items-start gap-1 text-xs wrap-break-word">
          <CiLocationOn />
          {`${officeData?.address.street}, ${officeData?.address.city}, ${officeData?.address.country}`}
        </div>
      </div>
    </div>

    {/* Right */}
    <div className="text-left sm:text-end">
      <div className="flex items-center gap-2">
        <StarRatings
          rating={officeData?.rating}
          starRatedColor="#ffe234"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="0px"
        />
        <div>{officeData?.rating}</div>
      </div>
      <div className="text-gray-700 text-sm">
        {officeData?.reviewCount} reviews
      </div>
    </div>
  </div>

  {/* Reviews */}
  <div className="rounded-lg text-sm border border-gray-200 shadow p-4 sm:p-5">
    
    {/* Desktop Header */}
    <div className="hidden sm:grid grid-cols-5 uppercase font-medium text-xs border-b pb-2 mb-3">
      <div>Reviewer</div>
      <div>Rating</div>
      <div>Comment</div>
      <div>Date</div>
      <div>Actions</div>
    </div>

    {/* Empty */}
    {!officeData?.reviews && (
      <div className="py-5 text-center">No reviews available</div>
    )}

    {/* Reviews List */}
    {officeData?.reviews?.map((item, index) => (
      <div
        key={index}
        className="flex flex-col sm:grid sm:grid-cols-5 gap-2 sm:gap-0 border-b py-3 text-xs"
      >
        {/* Reviewer */}
        <div className="sm:hidden font-semibold">Reviewer:</div>
        <div>{item.author}</div>

        {/* Rating */}
        <div className="sm:hidden font-semibold">Rating:</div>
        <div>
          {item.rating ? (
            <StarRatings
              rating={item.rating}
              starRatedColor="#ffe234"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="0px"
            />
          ) : (
            <div>Nil</div>
          )}
        </div>

        {/* Comment */}
        <div className="sm:hidden font-semibold">Comment:</div>
        <div className="wrap-break-word">{item.content}</div>

        {/* Date */}
        <div className="sm:hidden font-semibold">Date:</div>
        <div>{new Date(item.createdAt).toDateString()}</div>

        {/* Actions */}
        <div className="sm:hidden font-semibold">Actions:</div>
        <div className="flex items-center gap-3 text-lg cursor-pointer">
          <FaTrash />
        </div>
      </div>
    ))}
  </div>
</div>
    )
}
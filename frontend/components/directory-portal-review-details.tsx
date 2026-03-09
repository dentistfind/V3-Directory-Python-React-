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
        <div className="flex-1 min-h-screen p-5 space-y-7">
            <Link href={DIRECTORY_PORTAL_REVIEWS(userId)} className="flex items-center gap-2 text-sm">
                <FaChevronLeft className="text-theme" />
                <div>Back to Reviews</div>
            </Link>
            <div className="rounded-lg border border-gray-200 shadow p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {officeData?.logoUrl && <Image src={officeData?.logoUrl} width={50} height={50} className="rounded-full" alt={officeData?.logoUrl} />}
                    <div>
                        <div className="font-semibold">{officeData?.officeName}</div>
                        <div className="text-light flex items-center gap-1 text-xs"><CiLocationOn />{`${officeData?.address.street}, ${officeData?.address.city}, ${officeData?.address.country}`}</div>
                    </div>
                </div>
                <div className="text-end">
                    <div className="flex items-center gap-2">
                        <StarRatings
                            rating={officeData?.rating}
                            starRatedColor="#ffe234"
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        />
                        <div>{officeData?.rating}</div>
                    </div>
                    <div className="text-gray-700">{officeData?.reviewCount} reviews</div>
                </div>
            </div>
            <div className="rounded-lg text-sm border border-gray-200 shadow p-5 *:flex *:items-center *:gap-2">
                <div className="uppercase font-medium whitespace-nowrap">
                    <div className="w-1/5">REVIEWER</div>
                    <div className="w-1/5">RATING</div>
                    <div className="w-3/5">COMMENT</div>
                    <div className="w-1/5">DATE</div>
                    <div className="w-1/5">ACTIONS</div>
                </div>
                {officeData?.reviews?.map((item, index) => (
                    <div className="mt-5">
                        <div className="w-1/5">{item.author}</div>
                        <div className="w-1/5">
                            {item.rating ? <StarRatings
                                rating={item.rating}
                                starRatedColor="#ffe234"
                                numberOfStars={5}
                                name='rating'
                                starDimension="15px"
                                starSpacing="0px"
                            /> : <div>Nil</div>}
                        </div>
                        <div className="w-3/5">{item.content}</div>
                        <div className="w-1/5">{item.createdAt.toDateString()}</div>
                        <div className="w-1/5"><FaTrash /></div>
                    </div>
                ))}
                {!officeData?.reviews && <div className="py-5 justify-center">No reviews available</div>}
            </div>
        </div>
    )
}
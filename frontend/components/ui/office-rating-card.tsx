import { Location } from "@/lib/interface"
import { DIRECTORY_PORTAL_REVIEW_DETAILS } from "@/lib/routes";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";
import StarRatings from "react-star-ratings";

interface OfficeRatingCardProp {
    userId: string,
    requestId: string,
    logoUrl?: string,
    officeName: string, 
    address: Location, 
    rating: number, 
    reviewCount: string
}


export default function OfficeRatingCard({ userId, requestId, logoUrl, officeName, address, rating, reviewCount }: OfficeRatingCardProp){
    const router = useRouter()

    const handleClick = () => {
        router.push(DIRECTORY_PORTAL_REVIEW_DETAILS(userId, requestId))
    }

    return (
        <div onClick={handleClick} className="hover:text-theme-dark rounded-lg border border-gray-200 shadow w-72 h-48 p-5 text-sm space-y-5 cursor-pointer">
            <div className="flex items-center gap-2">
                {logoUrl && <Image src={logoUrl} width={50} height={50} className="rounded-full" alt={officeName} />}
                <div>
                    {officeName}
                    <div className="text-light flex items-center gap-1"><CiLocationOn />{address.city}</div>
                </div>
            </div>
            <div className="flex items-center justify-between ">
                <div>Rating</div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                    <StarRatings
                        rating={rating}
                        starRatedColor="#ffe234"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="0px"
                    />
                    <div>{rating}</div>
                </div>
            </div>
            <div className="flex items-center justify-between ">
                <div>Total Reviews</div>
                <div>{reviewCount}</div>
            </div>
        </div>
    )
}
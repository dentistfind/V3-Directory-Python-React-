import { Location } from "@/lib/interface"
import Image from "next/image"
import { CiLocationOn } from "react-icons/ci";

interface OfficeRatingCardProp {
    logoUrl?: string,
    officeName: string, 
    address: Location, 
    rating: number, 
    reviewCount: string
}

export default function OfficeRatingCard({ logoUrl, officeName, address, rating, reviewCount }: OfficeRatingCardProp){
    return (
        <div className="rounded-lg border border-gray-300 w-72 h-48 p-5 text-sm">
            <div className="flex items-center gap-2">
                {logoUrl && <Image src={logoUrl} width={50} height={50} className="rounded-full" alt={officeName} />}
                <div>
                    {officeName}
                    <div className="text-light flex items-center gap-1"><CiLocationOn />{address.city}</div>
                </div>
            </div>
        </div>
    )
}
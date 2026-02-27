import { OfficeData } from "@/lib/interface";
import VideoCard from "./ui/video-card";
import { FaChevronRight, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { HOME_PAGE_URL } from "@/lib/routes";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { CiLocationOn } from "react-icons/ci";
import Button from "./ui/button";
import { printAddress } from "@/lib/script";

export default function OfficeDetailsHero({ officeData }: {officeData: OfficeData}){
    const { officeName, logoUrl, isSponsored, rating, reviewCount, address, videoUrl: { videoSrc, videoThumbnail} } = officeData

    return(
        <div className="bg-white text-black">
            <p className="text-xs flex items-center gap-1 p-5"><Link href={HOME_PAGE_URL} className="text-gray-400 flex items-center gap-1 cursor-pointer">DentistFind <FaChevronRight className="text-xs" /></Link> {officeName}</p>
            <div className="px-20 pb-10">
                <VideoCard videoSrc={videoSrc} videoThumbnail={videoThumbnail} className="rounded-3xl h-80 w-full" />
            </div>
            <div className="bg-theme-light px-20 py-5 flex justify-between">
                <div className="flex items-center gap-3">
                    {logoUrl && (<div className="p-3 border border-gray-300 rounded-full">
                        <Image src={logoUrl} width={50} height={50} className="flex items-center justify-center rounded-full" alt={officeName} />
                    </div>)}
                    <div>
                        {isSponsored && <div className="text-xs p-1 bg-gray-100 rounded-md w-fit">Sponsored</div>}
                        <h3 className="font-semibold text-lg">{officeName}</h3>
                        <div className="flex items-center gap-1 font-semibold text-sm"><CiLocationOn /> {printAddress(address)}</div>
                        <div className="flex items-center gap-2 mt-5">
                            <StarRatings
                                rating={rating}
                                starRatedColor="#ffe234"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="0px"
                            />
                            <p className="font-semibold">{rating} • {reviewCount} reviews</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button text={<p className="text-xs flex items-center gap-1"><FaPhone />Call Office</p>} />
                    <Button text={<p className="text-xs flex items-center gap-1"><CiLocationOn />Get Directions</p>} />
                </div>
            </div>
        </div>
    )
}
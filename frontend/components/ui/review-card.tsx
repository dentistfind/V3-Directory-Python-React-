import { ReviewData } from "@/lib/interface";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function ReviewCard({ review: { author, content, createdAt, likeCount }, className }:{ review: ReviewData, className?: string}){
    const [ hasLiked, setHasLiked ] = useState(false)
    const [ likeCountState, setLikeCountState ] = useState(likeCount)

    const handleLikeClicked = () => {
        hasLiked ? setLikeCountState(prev => prev - 1) : setLikeCountState(prev => prev + 1)
        setHasLiked(prev => !prev)
    }
    
    return(
        <div className={`bg-gray-50 p-5 shadow rounded-md text-start text-xs h-50 ${className}`}>
            <div className="">
                <p className="font-semibold">{author}</p>
                <p className="font-light">{createdAt.toDateString()}</p>
            </div>
            <hr className="text-gray-200 my-4"  />
            <p className="">{content}</p>
            <div className="flex items-center mt-5 gap-1">
                <div onClick={handleLikeClicked} className="*:text-lg *:cursor-pointer">
                    {hasLiked ? <FcLike /> : <CiHeart />}
                </div>
                <p>{likeCountState}</p>
            </div>
        </div>
    )
}
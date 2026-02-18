import { Location } from "@/lib/interface";
import { FaChevronDown } from "react-icons/fa6";

export default function TopDentists({ location } : { location: Location }){
    return(
        <div className="bg-[#d4f8f5] p-20 space-y-10">
            <div className="text-center space-y-3">
                <div className="flex justify-center items-center gap-5 font-semibold">
                    <h2 className="text-3xl">Meet your dentist in</h2>
                    <div className="w-56 flex items-center justify-between cursor-pointer gap-5 border border-theme text-theme rounded p-2 font-normal">
                        <p>Toronto</p>
                        <FaChevronDown /> 
                    </div>
                </div>
                <p className="font-light">Real videos from real dental practices in your neighbourhood</p>
            </div>
            <div className="bg-white text-center p-5">
                <h3 className="font-semibold">Top Dentists in {location?.city}, {location?.country}</h3>
            </div>
        </div>
    )
}
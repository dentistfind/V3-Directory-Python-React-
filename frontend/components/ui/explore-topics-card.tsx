import { ChevronDown } from "lucide-react";

export default function ExploreTopicsCard({ text }: { text: string }){
    return(
        <div className="bg-white w-full p-5 flex items-center justify-between rounded-lg font-semibold cursor-pointer hover:opacity-80">
            {text}
            <ChevronDown className="text-theme" />
        </div>
    )
}
import { InputProps } from "@/lib/interface";

export default function Input({ title, onChange, value, placeholder }: InputProps){
    return(
        <div className="relative border border-gray-300 rounded-md p-3 text-xs">
            <p className="absolute -top-2 bg-white px-1">{title}</p>
            <input onChange={onChange} value={value} className="w-full outline-0" placeholder={placeholder} />
        </div>
    )
}
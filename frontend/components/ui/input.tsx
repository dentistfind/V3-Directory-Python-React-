import { InputProps } from "@/lib/interface";

export default function Input({ title, onChange, value, placeholder, isInvalid, type }: InputProps){
    return(
        <div style={{ borderColor: isInvalid ? "oklch(80.8% 0.114 19.571)" : "#d1d5dc" }} className="w-full relative border rounded-md p-3 text-xs">
            <p style={{ color: isInvalid ? "#fb2c36" : "#000" }} className="absolute -top-2 bg-white px-1">{title}</p>
            <input type={type || "text"} onChange={onChange} value={value} className="w-full h-full outline-0" placeholder={placeholder} />
        </div>
    )
}
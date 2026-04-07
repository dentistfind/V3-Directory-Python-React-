import { TelecommunicationSettingType } from "@/lib/interface"
import { Dispatch, SetStateAction, useState } from "react"

export default function SettingsCard({ title, content, isCheckedButton, setting, setTelecomSettings }:{ title: string, content: string, isCheckedButton: boolean, setting: keyof TelecommunicationSettingType, setTelecomSettings: Dispatch<SetStateAction<TelecommunicationSettingType>> }){
    const [ isChecked, setIsChecked ] = useState<boolean>(isCheckedButton)

    const handleChangeCheck = () => {
        setIsChecked(prev => !prev)
        setTelecomSettings(prev => ({...prev, [setting]: !prev[setting]}))
    }

    return(
        <div className="bg-gray-100 p-5 rounded-lg text-sm flex items-center justify-between gap-5 w-1/2">
            <div>
                <h3 className="font-medium">{title}</h3>
                <div className="text-xs">{content}</div>
            </div>
            <input type="checkbox" className="text-green-400 cursor-pointer text-lg" checked={isChecked} onChange={handleChangeCheck} />
        </div>
    )
}
import { useState } from "react"
import SettingsCard from "./ui/settings-card"
import { TelecommunicationSettingType } from "@/lib/interface"

export default function AddOfficeDFPortalTelecommunication(){
    const [ telecomSettings, setTelecomSettings ] = useState<TelecommunicationSettingType>({
        voiceMail: true, 
        disclaimer: true,
        message: true,
        transcription: true, 
    })

    return(
        <div className="mx-5 p-5 space-y-5 border border-gray-300 rounded-lg">
            <h3 className="font-semibold">Telecommunication Settings</h3>
            <div className="*:flex *:justify-between *:gap-5 space-y-5">
                <div>
                    <SettingsCard setting="voiceMail" isCheckedButton={telecomSettings.voiceMail} setTelecomSettings={setTelecomSettings} title="Voice Mail" content="Enable voice mail functionality for patient calls"  />
                    <SettingsCard setting="disclaimer" isCheckedButton={telecomSettings.disclaimer} setTelecomSettings={setTelecomSettings} title="Disclaimer" content="Display disclaimer messages in patient communications"  />
                </div>
                <div>
                    <SettingsCard setting="message" isCheckedButton={telecomSettings.message} setTelecomSettings={setTelecomSettings} title="Introduction Message" content="Play introduction message for incoming calls"  />
                    <SettingsCard setting="transcription" isCheckedButton={telecomSettings.transcription} setTelecomSettings={setTelecomSettings} title="Transcription" content="Enable automatic transcription of voice calls and messages"  />
                </div>
            </div>
        </div>
    )
}
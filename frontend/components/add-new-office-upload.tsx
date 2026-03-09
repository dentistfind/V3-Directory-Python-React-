import { useRouter } from "next/navigation";
import UploadMedia from "./ui/upload-media";
import { DIRECTORY_PORTAL_OFFICES } from "@/lib/routes";

export default function AddNewOfficeUpload(){
    const router = useRouter()
    const handleSave = () => {
        router.push(DIRECTORY_PORTAL_OFFICES("1234"))
    }
    return(
        <div className="border border-gray-300 rounded-lg p-7 space-y-7">
            <div>
                <h2 className="font-semibold text-lg">Upload Gallery</h2>
                <div className="text-xs font-light">Add images for your office </div>
            </div>
            <UploadMedia title="Add Logo *" desc="Upload your image(JPG, PNG)" />
            <UploadMedia title="Add  images/video *" desc="Upload your medical license (MP4,JPG, PNG)" />
            <div className="w-full flex justify-end gap-2">
                <div className="border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-md text-sm">
                    Cancel
                </div>
                <div onClick={handleSave} className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
                    Save
                </div>
            </div>
        </div>
    )
}
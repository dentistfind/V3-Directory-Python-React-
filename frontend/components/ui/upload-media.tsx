import File from "./svg/file";
import Upload from "./svg/upload";

export default function UploadMedia({ title, desc }: { title: string, desc: string }){
    return(
        <div className="w-full relative border border-gray-200 rounded-md p-3 text-xs">
            <p className="absolute -top-2 bg-white px-1">{title}</p>
            <div className="w-full h-50 flex flex-col items-center justify-center gap-3">
                <File />
                <p className="font-light text-gray-400 text-xs">{desc}</p>
                <div className="flex items-center gap-1 border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-lg text-sm">
                    <Upload />
                    <p className="font-light">Choose File</p>
                </div>
            </div>
        </div>
    )
}
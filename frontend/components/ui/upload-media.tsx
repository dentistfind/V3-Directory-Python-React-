import File from "./svg/file";
import Upload from "./svg/upload";

export default function UploadMedia({ title, desc }: { title: string, desc: string }){
    return(
        <div className="w-full relative border border-gray-200 rounded-md p-3 text-xs">
            <div className="absolute -top-2 bg-white px-1">{title}</div>
            <div className="w-full h-50 flex flex-col items-center justify-center gap-3">
                <File />
                <div className="font-light text-gray-400 text-xs">{desc}</div>
                <div className="flex items-center gap-1 border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-lg text-sm">
                    <Upload />
                    <div className="font-light">Choose File</div>
                </div>
            </div>
        </div>
    )
}
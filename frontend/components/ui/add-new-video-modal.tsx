import { DirectoryVideoData, ModalProps } from "@/lib/interface";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Input from "./input";
import { initialDirectoryVideoData } from "@/lib/temp-data";
import { DIRECTORY_STATUS_DISPLAY, DirectoryStatusDisplay } from "@/lib/type";

export default function AddNewVideoModal({ isOpen, onClose }: ModalProps){
    if (!isOpen) return null

    const [ newVideoData, setNewVideoData ] = useState<DirectoryVideoData>(initialDirectoryVideoData)

    return(
        <div
            className="z-20"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="w-120 rounded-xl m-auto bg-white space-y-5">
                <div className="flex items-center justify-between border-b border-gray-300 p-5">
                    <h2 className="font-semibold">Add New Video</h2>
                    <div onClick={onClose} className="cursor-pointer text-xl"><IoMdClose /></div>
                </div>
                <div className="px-5 pb-5 space-y-5">
                    <Input value={newVideoData?.title} onChange={(e) => setNewVideoData(prev => ({...prev, title: e.target.value}))} title="Video Title" placeholder="Enter video title" />
                    <Input value={newVideoData?.description} onChange={(e) => setNewVideoData(prev => ({...prev, description: e.target.value}))} title="Video Description" placeholder="Enter video description" />
                    <Input value={newVideoData?.sourceType} onChange={(e) => setNewVideoData(prev => ({...prev, sourceType: e.target.value}))} title="Video Source Type" placeholder="Select Video Source Type" />
                    <Input value={newVideoData?.url} onChange={(e) => setNewVideoData(prev => ({...prev, url: e.target.value}))} title="Video URL" placeholder="https://example.com/video.mp4" />
                    <div className="flex items-center gap-3">
                        <Input value={newVideoData?.latitude} onChange={(e) => setNewVideoData(prev => ({...prev, latitude: e.target.value}))} title="Latitude" placeholder="e.g. 34.0522" type="number" />
                        <Input value={newVideoData?.longitude} onChange={(e) => setNewVideoData(prev => ({...prev, longitude: e.target.value}))} title="Longitude" placeholder="e.g. -74.0060" type="number" />
                    </div>
                    <div className="flex items-center gap-3">
                        <Input value={newVideoData?.radiusInMiles} onChange={(e) => setNewVideoData(prev => ({...prev, radiusInMiles: Number(e.target.value)}))} title="Radius in Miles" placeholder="e.g. 10" />
                        <div className="border border-[#d1d5dc] w-full relative  rounded-md p-3 text-xs">
                            <div className="absolute -top-2 bg-white text-black px-1">Status</div>
                            <select name="status" id="status" value={newVideoData.status} onChange={(e) => setNewVideoData((prev) => ({...prev, status: e.target.value as DirectoryStatusDisplay}))} className="w-full outline-0 cursor-pointer h-full">
                                {DIRECTORY_STATUS_DISPLAY.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end gap-2 p-5 border-t border-gray-300">
                    <div className="border border-gray-200 cursor-pointer text-black bg-gray-100 px-3 py-2 rounded-md text-sm">
                        Cancel
                    </div>
                    <div className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
                        Create
                    </div>
                </div>
            </div>
        </div>
    )
}
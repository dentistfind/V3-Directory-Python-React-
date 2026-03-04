"use client"
import { useDirectoryContext } from "@/context/DirectoryContext"
import Input from "./ui/input"

export default function AddNewOfficeSeoMeta(){
    const { newOfficeData, setNewOfficeData, setAddOfficeComponentPage } = useDirectoryContext()

    const handleSave = () => {
        setAddOfficeComponentPage(2)
    }

    return (
       <div className="border border-gray-300 rounded-lg p-7 space-y-7">
            <div>
                <h2 className="font-semibold text-lg">SEO & Meta</h2>
                <p className="text-xs font-light">Tell us about your dental office</p>
            </div>
            <div className="flex items-center gap-5">
                <Input title="URL Slug * (SEO-friendly URL)*" placeholder="dentistfind.com/offices/" value={newOfficeData?.metaInfo.urlSlug} onChange={(e) => setNewOfficeData(prev => ({...prev, metaInfo: ({...prev.metaInfo, urlSlug: e.target.value})}))}  />
                <Input title="Meta Title *" placeholder="Best Dental office in Toronto" value={newOfficeData?.metaInfo.title} onChange={(e) => setNewOfficeData(prev => ({...prev, metaInfo: ({...prev.metaInfo, title: e.target.value})}))}  />
            </div>
            <div className="relative">
                <div className="w-full relative border border-gray-300 rounded-md p-3 text-xs">
                    <p className="absolute -top-2 bg-white px-1">Meta Description</p>
                    <textarea 
                        onChange={(e) => setNewOfficeData(prev => ({...prev, metaInfo: ({...prev.metaInfo, description: e.target.value})}))} 
                        value={newOfficeData?.metaInfo.description} maxLength={300} rows={5}
                        className="w-full h-full outline-0 resize-none" placeholder={"Professional dental care in a comfortable environment."} 
                    />
                </div>
                <p className="absolute -bottom-5 font-light text-xs text-gray-500">Brief summary for search engines. Keep under 160 characters.</p>
            </div>
            <div className="flex *:flex-1 items-center gap-5 mt-10 *:relative">
                <div>
                    <Input title="Meta Keywords" placeholder="dentist nyc, dental care, teeth cleaning" value={newOfficeData?.metaInfo.keywords} onChange={(e) => setNewOfficeData(prev => ({...prev, metaInfo: ({...prev.metaInfo, keywords: e.target.value})}))}  />
                    <p className="absolute -bottom-5 font-light text-xs text-gray-500">Use commas to seprate</p>
                </div>
                <div>
                    <Input title="Open Graph Image URL" placeholder="https://example.com/image.jpg" value={newOfficeData?.metaInfo.graphImageUrl} onChange={(e) => setNewOfficeData(prev => ({...prev, metaInfo: ({...prev.metaInfo, graphImageUrl: e.target.value})}))}  />
                    <p className="absolute -bottom-5 font-light text-xs text-gray-500">Recommended size: 1200x630px</p>
                </div>
            </div>
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
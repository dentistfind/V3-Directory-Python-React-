import DirectoryPage from "@/pages/DirectoryPage"
import { PageProps } from "@/lib/interface"

export default async function Page({ params }: PageProps){
    const { id } = await params
    
    return <DirectoryPage id={id} category="Video Manager" />
}
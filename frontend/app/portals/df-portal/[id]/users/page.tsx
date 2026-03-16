import { PageProps } from "@/lib/interface"
import DFPortalPage from "@/pages/DFPortalPage"

export default async function Page({ params }: PageProps){
    const { id } = await params
    
    return <DFPortalPage id={id} category="Users" />
}
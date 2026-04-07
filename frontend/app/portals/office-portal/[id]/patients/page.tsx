import { PageProps } from "@/lib/interface"
import OfficePortalPage from "@/pages/OfficePortalPage"

export default async function Page({ params }: PageProps){
    const { id } = await params
    
    return <OfficePortalPage id={id} category="Patients" />
}
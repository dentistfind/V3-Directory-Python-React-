import AddNewOfficePage from "@/pages/AddNewOfficePage"

export interface PageProps {
    params: {
        id: string,
        officeId: string
    }
}

export default async function Page({ params }: PageProps){
    const { id, officeId } = await params
    
    return <AddNewOfficePage userId={id} officeId={officeId} />
}
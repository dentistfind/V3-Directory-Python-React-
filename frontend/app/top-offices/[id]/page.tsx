import OfficeDetailsPage from "@/pages/OfficeDetailsPage"

export interface PageProps {
    params: {
        id: string
    }
}

export default async function Page({ params }: PageProps){
    const { id } = await params

    return <OfficeDetailsPage id={id} />
}
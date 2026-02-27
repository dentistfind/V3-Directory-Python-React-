import DirectoryPage from "@/pages/DirectoryPage"

export interface PageProps {
    params: {
        id: string
    }
}

export default async function Page({ params }: PageProps){
    const { id } = await params
    
    return <DirectoryPage id={id} />
}
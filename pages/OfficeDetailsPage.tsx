"use client"
import HomeHeader from "@/components/home-header";
import OfficeDetailsHero from "@/components/office-details-hero";
import OfficeDetailsMain from "@/components/office-details-main";
import { useOfficeContext } from "@/context/OfficeContext";
import { OfficeData } from "@/lib/interface";
import { TOP_OFFICES_URL } from "@/lib/routes";
import { dummyOffices } from "@/lib/temp-data";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function OfficeDetailsPage({ id }:{ id: string }){
    const { location } = useOfficeContext()
    const [ officeData, setOfficeData ] = useState<OfficeData>()

    useEffect(() => {
        const office = [...dummyOffices].find(item => item.id == id)

        if (!office){
            redirect(TOP_OFFICES_URL)
        }
        setOfficeData(office)
    }, [])

    return(
        <div>
            <HomeHeader notHomePage location={location}/>
            {officeData && <OfficeDetailsHero officeData={officeData} />}
            {officeData && <OfficeDetailsMain officeData={officeData} />}
        </div>
    )
}
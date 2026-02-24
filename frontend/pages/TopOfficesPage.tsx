"use client"
import FAQS from "@/components/faqs";
import HomeFooter from "@/components/footer";
import HomeHeader from "@/components/header";
import TopOfficesHighlight from "@/components/top-offices-highlight";
import { useOfficeContext } from "@/context/OfficeContext";

export default function TopOfficesPage(){
    const { location } = useOfficeContext()
    return (
        <div>
            <HomeHeader notHomePage location={location} />
            <TopOfficesHighlight location={location} />
            <FAQS />
            <HomeFooter />
        </div>
    )
}
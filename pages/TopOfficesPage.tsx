"use client"
import FAQS from "@/components/faqs";
import HomeFooter from "@/components/home-footer";
import HomeHeader from "@/components/home-header";
import TopOfficesHighlight from "@/components/top-offices-highlight";
import { Location } from "@/lib/interface";
import { useState } from "react";

export default function TopOfficesPage(){
    const [ location, setLocation ] = useState<Location>({
                                                                city: "Toronto",
                                                                country: "Canada"
                                                            })
    return (
        <div>
            <HomeHeader notHomePage location={location} />
            <TopOfficesHighlight location={location} />
            <FAQS />
            <HomeFooter />
        </div>
    )
}
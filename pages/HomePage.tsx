"use client"
import Hero from "@/components/hero";
import HomeHeader from "../components/home-header";
import TopDentists from "@/components/top-dentists";
import { useEffect, useState } from "react";
import { Location } from "@/lib/interface";
import FeaturedDentalOffices from "@/components/featured-dental-offices";
import ExploreMoreTopics from "@/components/explore-more-topics";
import RecentReviews from "@/components/recent-reviews";

export default function HomePage(){
    const [ location, setLocation ] = useState<Location>({
                                                            city: "Toronto",
                                                            country: "Canada"
                                                        })

    return(
        <div>
            <HomeHeader />
            <Hero location={location} />
            <TopDentists location={location} />
            <FeaturedDentalOffices />
            <ExploreMoreTopics />
            <RecentReviews />
        </div>
    )
}
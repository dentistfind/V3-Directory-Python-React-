"use client"
import Hero from "@/components/hero";
import HomeHeader from "../components/home-header";
import TopDentists from "@/components/top-dentists";
import FeaturedDentalOffices from "@/components/featured-dental-offices";
import ExploreMoreTopics from "@/components/explore-more-topics";
import RecentReviews from "@/components/recent-reviews";
import HowItWorks from "@/components/how-it-works";
import FAQS from "@/components/faqs";
import HomeFooter from "@/components/home-footer";
import { useOfficeContext } from "@/context/OfficeContext";

export default function HomePage(){
    const { location } = useOfficeContext()
    return(
        <div>
            <HomeHeader />
            <Hero location={location} />
            <TopDentists location={location} />
            <FeaturedDentalOffices />
            <ExploreMoreTopics />
            <RecentReviews />
            <HowItWorks />
            <FAQS />
            <HomeFooter />
        </div>
    )
}
import { HOMEPAGE_IMG_BASE_SRC } from "@/lib/constants";
import Image from "next/image";

export default function HowItWorks(){
    return(
        <div className="bg-theme-light p-4 sm:p-8 lg:p-20 space-y-6 sm:space-y-10 text-center">
            <div className="space-y-2 sm:space-y-3 px-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Finding the right dentist shouldn't feel like guesswork</h2>
                <div className="font-light text-xs sm:text-sm max-w-4xl mx-auto">We've made it simple: explore, connect and choose a dentist who truly fits your needs and personality. Whether you're new to the area, switching providers or looking for specialized care, DentistFind gives you everything you need to make a confident choice. Here's how it works:</div>
            </div>
            <div className="w-full flex flex-col gap-6 sm:gap-10 items-center justify-center">
                {/* Step 1 */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="w-full sm:w-1/2 shrink-0">
                        <Image src={`${HOMEPAGE_IMG_BASE_SRC}/how-it-works1.png`} width={300} height={300} alt="How it Works1" className="w-full h-auto max-w-xs mx-auto" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 sm:px-0 text-left sm:text-left">
                        <div className="font-semibold text-base sm:text-lg">1. Discover Local Expertise</div>
                        <div className="font-light text-xs sm:text-sm leading-relaxed mt-2">Explore a wealth of knowledge by watching videos from dentists right in your community. These videos cover a variety of treatments and procedures, providing insights into what you can expect. Whether you're curious about preventive care, cosmetic enhancements, or orthodontics, these resources help you make informed decisions. Enjoy the convenience of learning from trusted local experts without leaving your home.</div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:flex-row-reverse items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="w-full sm:w-1/2 shrink-0">
                        <Image src={`${HOMEPAGE_IMG_BASE_SRC}/how-it-works2.png`} width={300} height={300} alt="How it Works2" className="w-full h-auto max-w-xs mx-auto" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 sm:px-0 text-left sm:text-left">
                        <div className="font-semibold text-base sm:text-lg">2. Connect and Engage</div>
                        <div className="font-light text-xs sm:text-sm leading-relaxed mt-2">Get to Know Your Dentist Before BookingDive into profiles of nearby dentists and watch their introductory videos. These videos offer a glimpse into each dentist's personality, their approach to care, and what makes their practice special. When you find a dentist who resonates with you, book a free consultation—either virtually or in-person. This is your opportunity to discuss your needs, ask questions, and ensure the dentist's style aligns with your expectations.</div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="w-full sm:w-1/2 shrink-0">
                        <Image src={`${HOMEPAGE_IMG_BASE_SRC}/how-it-works3.png`} width={300} height={300} alt="How it Works3" className="w-full h-auto max-w-xs mx-auto" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 sm:px-0 text-left sm:text-left">
                        <div className="font-semibold text-base sm:text-lg">3. Embark on Your Dental Health Journey</div>
                        <div className="font-light text-xs sm:text-sm leading-relaxed mt-2">After your consultation, you'll have a clear understanding of whether this dentist is the right fit for you. If they meet your needs, schedule your first appointment and start your path to better dental health with someone you trust. If not, continue exploring other options until you find the perfect match. Your journey to comprehensive dental care starts here.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
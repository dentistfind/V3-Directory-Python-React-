"use client"
import Header from "@/components/header";
import LoginForm from "@/components/login-form";
import SocialMediaButtons from "@/components/social-media-icons";
import PrivacyIcon from "@/components/ui/svg/privacy-icon";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function LoginPage(){
    const isMobile = useIsMobile()

    return (
        <div className="min-h-screen flex flex-col">
            {!isMobile && <Header authPage />}
            <LoginForm />
            <div className="*:py-3 *:px-10 text-sm">
                <div className="bg-theme text-black">Need help? Visit our Help Center</div>
                <div className="bg-theme-dark text-white md:flex justify-between items-center">
                    <div className="md:flex items-center gap-5">
                        <div>© {new Date().getFullYear()} Dentist Find, Inc.</div>
                        <div className="md:flex items-center gap-3 text-stone-300">
                            <div>Terms</div> 
                            <div>Privacy</div> 
                            <div>Consumer Health</div> 
                            <div className="flex items-center gap-1"><PrivacyIcon />Your privacy choices</div>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0"><SocialMediaButtons /></div>
                </div>
            </div>
        </div>
    )
}
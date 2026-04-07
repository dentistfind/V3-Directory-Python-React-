import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "@/lib/data";
import { FaXTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function SocialMediaButtons(){
    return(
        <div className="flex items-center md:justify-between gap-2 *:cursor-pointer *:flex *:items-center *:gap-2 *:text-sm *:text-muted-foreground *:hover:text-foreground *:transition-colors">
            <a href={TWITTER_URL}>
                <FaXTwitter className="text-xl" />
            </a>
            <a href={INSTAGRAM_URL}>
                <FaInstagram className="text-xl" />
            </a>
            <a href={FACEBOOK_URL}>
                <FaFacebook className="text-xl" />
            </a>
            <a href={LINKEDIN_URL}>
                <FaLinkedin className="text-xl" />
            </a>
        </div>
    )
}
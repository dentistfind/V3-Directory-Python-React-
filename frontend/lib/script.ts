import { Location, VideoCardData } from "./interface";

export function printAddress(address: Location){
    const { street, city, state, country, postalCode } = address
    return `${street}${street && ","} ${city}, ${state}, ${country}. ${postalCode}`
}

export const makeVideo = (src: string): VideoCardData => ({
  videoSrc: src,
  videoThumbnail: "/images/video-thumb.jpg",
  duration: "2:30",
  spotlight: true
})
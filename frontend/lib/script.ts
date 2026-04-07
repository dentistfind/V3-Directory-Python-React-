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

export function timeAgo(date: Date | string): string {
  const now = new Date();
  const inputDate = new Date(date);
  const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export const formatDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
};

export function getSubmittedDateTime(
  submittedDate: Date,
  submittedTime: { hour: number; minute: number }
): Date {
  const combined = new Date(submittedDate);

  combined.setHours(submittedTime.hour);
  combined.setMinutes(submittedTime.minute);
  combined.setSeconds(0);

  return combined;
}
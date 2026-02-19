import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoCardData } from "@/lib/interface";

export default function VideoCard({ videoSrc, videoThumbnail, className = ""}: VideoCardData) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video overflow-hidden ${className}`}>
      {!playing ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setPlaying(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setPlaying(true);
          }}
          className="w-full h-full cursor-pointer bg-black relative flex items-center justify-center"
        >
            {videoThumbnail ? (
                <img
                  src={videoThumbnail}
                  alt="video thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
            ) : (
                <div className="w-full h-full bg-gray-900" />
            )}

            {/* <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" /> */}

            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-theme flex items-center justify-center group-hover:bg-primary transition-colors shadow-xl"
                >
                <Play className="w-6 h-6 text-white group-hover:text-primary-foreground ml-1 transition-colors" />
                </motion.div>
            </div>
        </div>
      ) : (
        <video
          src={videoSrc}
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          autoPlay
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
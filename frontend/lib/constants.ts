import { ReviewData, VideoCardData } from "./interface"

export const THEME_COLOUR = "#00C4B3"

export const HOMEPAGE_IMG_BASE_SRC = "/homepage"

export const SPOTLIGHT_VIDEO1: VideoCardData = {
    videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841564/Aesthetic_Impant_General_Dentistry_wral4y.mp4",
    videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841564/Aesthetic_Impant_General_Dentistry_wral4y.png",
    duration: "00:54",
    spotlight: true,
}

export const SPOTLIGHT_VIDEO2: VideoCardData = {
    videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841567/7_days_Dental_xefgxd.mp4",
    videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841567/7_days_Dental_xefgxd.png",
    duration: "00:49",
    spotlight: true,
}

export const SPOTLIGHT_VIDEO3: VideoCardData = {
    videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841560/Southdale_Dentist_FINAL_snyupy.mp4",
    videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841560/Southdale_Dentist_FINAL_snyupy.png",
    duration: "01:00",
    spotlight: true,
}

export const OfficeReviewsSet1: ReviewData[] = [
  {
    author: "Sarah Mitchell",
    content: "Absolutely amazing experience. The dentist explained every step clearly and made me feel comfortable throughout the procedure.",
    createdAt: new Date("2025-01-12"),
    likeCount: 12
  },
  {
    author: "Daniel Brooks",
    content: "Very clean clinic and friendly staff. My appointment started right on time.",
    createdAt: new Date("2025-01-18"),
    likeCount: 8
  },
  {
    author: "Emily Johnson",
    content: "Best dental visit I've had in years. Highly recommend for anyone nervous about dental work.",
    createdAt: new Date("2025-02-02"),
    likeCount: 15
  }
];

export const OfficeReviewsSet2: ReviewData[] = [
  {
    author: "Michael Turner",
    content: "Professional service and very detailed consultation. I appreciated the honesty about treatment options.",
    createdAt: new Date("2024-12-10"),
    likeCount: 6
  },
  {
    author: "Olivia Harris",
    content: "The hygienist was gentle and thorough. My teeth feel great!",
    createdAt: new Date("2025-01-05"),
    likeCount: 10
  },
  {
    author: "James Walker",
    content: "Parking was easy and the front desk staff were welcoming.",
    createdAt: new Date("2025-01-22"),
    likeCount: 4
  }
];

export const OfficeReviewsSet3: ReviewData[] = [
  {
    author: "Sophia Adams",
    content: "Great experience for my kids. The dentist was patient and made it fun for them.",
    createdAt: new Date("2025-02-08"),
    likeCount: 9
  },
  {
    author: "Ethan Clark",
    content: "Modern equipment and very efficient service.",
    createdAt: new Date("2025-02-10"),
    likeCount: 5
  },
  {
    author: "Isabella Lewis",
    content: "They handled my emergency appointment quickly and professionally.",
    createdAt: new Date("2025-02-14"),
    likeCount: 11
  }
];

export const OfficeReviewsSet4: ReviewData[] = [
  {
    author: "Benjamin Young",
    content: "Transparent pricing and no hidden charges. Very trustworthy clinic.",
    createdAt: new Date("2024-11-20"),
    likeCount: 7
  },
  {
    author: "Mia Hall",
    content: "Comfortable environment and calming atmosphere.",
    createdAt: new Date("2024-12-02"),
    likeCount: 13
  },
  {
    author: "Alexander King",
    content: "The whitening treatment gave excellent results!",
    createdAt: new Date("2025-01-15"),
    likeCount: 16
  }
];

export const OfficeReviewsSet5: ReviewData[] = [
  {
    author: "Charlotte Wright",
    content: "Staff were knowledgeable and answered all my questions.",
    createdAt: new Date("2025-02-01"),
    likeCount: 6
  },
  {
    author: "Henry Scott",
    content: "Quick and painless extraction. Much better than I expected.",
    createdAt: new Date("2025-02-07"),
    likeCount: 14
  },
  {
    author: "Amelia Green",
    content: "Follow-up care was impressive. They really care about their patients.",
    createdAt: new Date("2025-02-12"),
    likeCount: 9
  }
];

export const OfficeReviewsSet6: ReviewData[] = [
  {
    author: "Lucas Baker",
    content: "Booking online was simple and convenient.",
    createdAt: new Date("2024-12-28"),
    likeCount: 3
  },
  {
    author: "Harper Nelson",
    content: "Very attentive and professional team.",
    createdAt: new Date("2025-01-09"),
    likeCount: 8
  },
  {
    author: "Jack Carter",
    content: "Clean facilities and state-of-the-art technology.",
    createdAt: new Date("2025-01-30"),
    likeCount: 10
  }
];

export const OfficeReviewsSet7: ReviewData[] = [
  {
    author: "Ava Perez",
    content: "Friendly staff and excellent communication throughout my treatment.",
    createdAt: new Date("2025-01-03"),
    likeCount: 5
  },
  {
    author: "Noah Roberts",
    content: "Highly skilled dentist. The procedure was smooth and efficient.",
    createdAt: new Date("2025-01-19"),
    likeCount: 12
  },
  {
    author: "Lily Thompson",
    content: "I finally found a dental office I trust completely.",
    createdAt: new Date("2025-02-16"),
    likeCount: 18
  }
];

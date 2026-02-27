import { OfficeReviewsSet1, OfficeReviewsSet2, OfficeReviewsSet3, OfficeReviewsSet4, OfficeReviewsSet5, OfficeReviewsSet6, OfficeReviewsSet7, SPOTLIGHT_VIDEO1, SPOTLIGHT_VIDEO2, SPOTLIGHT_VIDEO3, } from "./constants";
import { DirectoryUser, OfficeData, OfficeVerificationData } from "./interface";

export const dummyOffices: OfficeData[] = [
  {
    id: "4462b5c5-0c50-4c64-8ea9-908bf411b078",
    officeName: "BrightSmile Dental Studio",
    ownerName: "Mr. John",
    address: {
      street: "2458 Sunset Blvd",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      postalCode: "90026"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    mobileNumber: "+123456789",
    email: "brightsmile@dental.com",
    rating: 4.9,
    reviewCount: "312",
    isAvailable: true,
    isSponsored: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO1,
    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO3
      },
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO3
      },
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO3
      }
    ],
    reviews: OfficeReviewsSet1
  },
  {
    id: "8634d7ca-3971-482f-a125-89e11ba01832",
    officeName: "PearlCare Family Dentistry",
    ownerName: "Mr. John",
    address: {
      street: "1021 Westheimer Rd",
      city: "Houston",
      state: "TX",
      country: "USA",
      postalCode: "77006"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    reviewCount: "198",
    isAvailable: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO2,
    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO1
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO1
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO1
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    reviews: OfficeReviewsSet2
  },
  {
    id: "e44c9c7a-0b38-4486-9992-306212b8a437",
    officeName: "Elite Orthodontics Center",
    ownerName: "Mr. John",
    address: {
      street: "890 Lake Shore Dr",
      city: "Chicago",
      state: "IL",
      country: "USA",
      postalCode: "60611"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141203239-494e6cd1fe51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    reviewCount: "421",
    isAvailable: false,
    isSponsored: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO3,
    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO2
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    reviews: OfficeReviewsSet3
  },
  {
    id: "fdb937aa-6b9b-4f27-8fbe-6ded724548cd",
    officeName: "Downtown Dental Hub",
    ownerName: "Mr. John",
    address: {
      street: "55 Broad St",
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10004"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.5,
    reviewCount: "156",
    isAvailable: true,
    videoUrl: SPOTLIGHT_VIDEO1,
    galleryMedia: [
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO2
      },
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    reviews: OfficeReviewsSet4
  },
  {
    id: "b1d7224a-7369-4c09-899e-9f4d5f9006bd",
    officeName: "GentleTouch Pediatric Dentistry",
    ownerName: "Mr. John",
    address: {
      street: "7432 N Central Ave",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      postalCode: "85020"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    reviewCount: "287",
    isAvailable: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO2,
    galleryMedia: [
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO3
      },
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    reviews: OfficeReviewsSet5
  },
  {
    id: "ee1d74a2-7eb1-479c-bab7-ba9add179869",
    officeName: "Urban Smiles Cosmetic Clinic",
    ownerName: "Mr. John",
    address: {
      street: "1200 Brickell Ave",
      city: "Miami",
      state: "FL",
      country: "USA",
      postalCode: "33131"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.6,
    reviewCount: "204",
    isAvailable: true,
    isSponsored: false,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO3,
    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO3
      }
    ],
    reviews: OfficeReviewsSet6
  },
  {
    id: "e3ac57df-d609-41f1-a3db-9439cafd70da",
    officeName: "Greenwood Dental Associates",
    ownerName: "Mr. John",
    address: {
      street: "4500 Greenwood Ave N",
      city: "Seattle",
      state: "WA",
      country: "USA",
      postalCode: "98103"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1683141203239-494e6cd1fe51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.4,
    reviewCount: "98",
    isAvailable: false,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO1,
    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO2
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
    ],
    reviews: OfficeReviewsSet7
  },
  {
    id: "9fcfd215-fff8-42b7-aebc-ffebf98a4b0d",
    officeName: "Harmony Dental & Implants",
    ownerName: "Mr. John",
    address: {
      street: "3320 Peachtree Rd NE",
      city: "Atlanta",
      state: "GA",
      country: "USA",
      postalCode: "30326"
    },
    logoUrl: "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 5.0,
    reviewCount: "509",
    isAvailable: true,
    isSponsored: true,
    website: "www.familydentalcare.com",
    videoUrl: SPOTLIGHT_VIDEO2,
    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        isVideo: true,
        videoUrl: SPOTLIGHT_VIDEO2
      },
      {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    reviews: OfficeReviewsSet3
  },
].map((office, index) => ({
  createdAt: new Date(2025, 0, index + 1),
  ...office
}));

export const initialOfficeData: OfficeData = {
  id: "",
  officeName: "",
  ownerName: "",
  address: {
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: ""
  },
  mobileNumber: "",
  email: "",
  description: "",
  logoUrl: "",
  rating: 0,
  reviewCount: "0",
  isAvailable: false,
  isSponsored: false,
  website: "",
  videoUrl: {
    videoSrc: "",
    videoThumbnail: "",
    duration: "",
    spotlight: false
  },
  galleryMedia: [],
  reviews: [],
  createdAt: new Date()
}

export const initialOfficeVerData: OfficeVerificationData = {
    licenseNumber: "",
    taxId: "",
    licenseDocumentSrc: "h",
    liabilityInsuranceSrc: ""
}

export const dummyDirectoryUser: DirectoryUser[] = [
  {
    id: "1234",
    name: "Anuj K.",
    profileSrc: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  }
]

export const dummyDentalOffices: OfficeData[] = [
  {
    id: "1",
    officeName: "BrightSmile Dental Studio",
    ownerName: "Dr. Sarah Johnson",
    address: {
      street: "123 Main St",
      city: "Los Angeles",
      state: "CA",
      postalCode: "90001",
      country: "USA"
    },
    mobileNumber: "555-100-0001",
    email: "contact@brightsmile.com",
    description: "Family and cosmetic dentistry with modern technology.",
    logoUrl: "https://picsum.photos/200?1",
    rating: 4.8,
    reviewCount: "124",
    isAvailable: true,
    isSponsored: true,
    website: "https://brightsmile.com",
    videoUrl: {
      videoSrc: "https://example.com/videos/office1.mp4",
      videoThumbnail: "https://picsum.photos/300?1",
      duration: "1:45",
      spotlight: true,
      className: "featured-video"
    },
    galleryMedia: [
      { isVideo: false, imageUrl: "https://picsum.photos/400?11" },
      { isVideo: false, imageUrl: "https://picsum.photos/400?12" }
    ],
    reviews: [
      {
        author: "Emily R.",
        content: "Amazing staff and painless cleaning!",
        createdAt: new Date("2025-01-10"),
        likeCount: 12
      }
    ]
  },

  {
    id: "2",
    officeName: "OceanView Dental Care",
    ownerName: "Dr. Michael Chen",
    address: {
      street: "456 Ocean Ave",
      city: "Miami",
      state: "FL",
      postalCode: "33101",
      country: "USA"
    },
    mobileNumber: "555-100-0002",
    email: "info@oceanviewdental.com",
    description: "Comprehensive dental care with a relaxing coastal vibe.",
    logoUrl: "https://picsum.photos/200?2",
    rating: 4.6,
    reviewCount: "98",
    isAvailable: true,
    website: "https://oceanviewdental.com",
    videoUrl: {
      videoSrc: "https://example.com/videos/office2.mp4",
      videoThumbnail: "https://picsum.photos/300?2",
      duration: "2:10"
    }
  },

  {
    id: "3",
    officeName: "Downtown Smile Center",
    ownerName: "Dr. Olivia Martinez",
    address: {
      street: "789 Market St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94103",
      country: "USA"
    },
    rating: 4.9,
    reviewCount: "210",
    isAvailable: false,
    videoUrl: { videoSrc: "https://example.com/videos/office3.mp4", duration: "1:20" }
  },

  {
    id: "4",
    officeName: "GreenLeaf Family Dentistry",
    ownerName: "Dr. James Wilson",
    address: {
      street: "101 Oak Dr",
      city: "Austin",
      state: "TX",
      postalCode: "73301",
      country: "USA"
    },
    rating: 4.7,
    reviewCount: "156",
    isAvailable: true,
    videoUrl: { videoSrc: "https://example.com/videos/office4.mp4" }
  },

  {
    id: "5",
    officeName: "Sunrise Dental Clinic",
    ownerName: "Dr. Aisha Patel",
    address: {
      street: "202 Sunrise Blvd",
      city: "Phoenix",
      state: "AZ",
      postalCode: "85001",
      country: "USA"
    },
    rating: 4.5,
    reviewCount: "87",
    isAvailable: true,
    videoUrl: { videoSrc: "https://example.com/videos/office5.mp4" }
  },

  {
    id: "6",
    officeName: "PearlWhite Dental",
    ownerName: "Dr. Daniel Kim",
    address: {
      street: "303 Pearl St",
      city: "Seattle",
      state: "WA",
      postalCode: "98101",
      country: "USA"
    },
    rating: 4.8,
    reviewCount: "134",
    videoUrl: { videoSrc: "https://example.com/videos/office6.mp4" }
  },

  {
    id: "7",
    officeName: "HappyTeeth Dental Care",
    ownerName: "Dr. Laura Thompson",
    address: {
      street: "404 Maple Ave",
      city: "Denver",
      state: "CO",
      postalCode: "80014",
      country: "USA"
    },
    rating: 4.4,
    reviewCount: "65",
    videoUrl: { videoSrc: "https://example.com/videos/office7.mp4" }
  },

  {
    id: "8",
    officeName: "UrbanSmile Dentistry",
    ownerName: "Dr. Robert Davis",
    address: {
      street: "505 City Rd",
      city: "Chicago",
      state: "IL",
      postalCode: "60601",
      country: "USA"
    },
    rating: 4.9,
    reviewCount: "201",
    isSponsored: true,
    videoUrl: { videoSrc: "https://example.com/videos/office8.mp4" }
  },

  {
    id: "9",
    officeName: "ComfortCare Dental",
    ownerName: "Dr. Sophia Nguyen",
    address: {
      street: "606 Comfort Ln",
      city: "Portland",
      state: "OR",
      postalCode: "97035",
      country: "USA"
    },
    rating: 4.3,
    reviewCount: "72",
    videoUrl: { videoSrc: "https://example.com/videos/office9.mp4" }
  },

  {
    id: "10",
    officeName: "NextGen Dental Studio",
    ownerName: "Dr. Ethan Brown",
    address: {
      street: "707 Innovation Dr",
      city: "Boston",
      state: "MA",
      postalCode: "02108",
      country: "USA"
    },
    rating: 4.7,
    reviewCount: "143",
    videoUrl: { videoSrc: "https://example.com/videos/office10.mp4" }
  },

  {
    id: "11",
    officeName: "SmileCraft Dental",
    ownerName: "Dr. Isabella Garcia",
    address: {
      street: "808 Artisan Rd",
      city: "San Diego",
      state: "CA",
      postalCode: "92101",
      country: "USA"
    },
    rating: 4.6,
    reviewCount: "109",
    videoUrl: { videoSrc: "https://example.com/videos/office11.mp4" }
  },

  {
    id: "12",
    officeName: "EliteCare Dentistry",
    ownerName: "Dr. William Anderson",
    address: {
      street: "909 Elite St",
      city: "Atlanta",
      state: "GA",
      postalCode: "30301",
      country: "USA"
    },
    rating: 4.8,
    reviewCount: "176",
    videoUrl: { videoSrc: "https://example.com/videos/office12.mp4" }
  },

  {
    id: "13",
    officeName: "FreshSmile Dental Group",
    ownerName: "Dr. Mia Rodriguez",
    address: {
      street: "111 Fresh Ave",
      city: "Dallas",
      state: "TX",
      postalCode: "75001",
      country: "USA"
    },
    rating: 4.5,
    reviewCount: "94",
    videoUrl: { videoSrc: "https://example.com/videos/office13.mp4" }
  },

  {
    id: "14",
    officeName: "Radiant Dental Care",
    ownerName: "Dr. Noah Clark",
    address: {
      street: "222 Radiant Blvd",
      city: "Las Vegas",
      state: "NV",
      postalCode: "88901",
      country: "USA"
    },
    rating: 4.6,
    reviewCount: "121",
    videoUrl: { videoSrc: "https://example.com/videos/office14.mp4" }
  },

  {
    id: "15",
    officeName: "Metro Dental Arts",
    ownerName: "Dr. Harper Lewis",
    address: {
      street: "333 Metro St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA"
    },
    rating: 4.9,
    reviewCount: "302",
    videoUrl: { videoSrc: "https://example.com/videos/office15.mp4" }
  },

  {
    id: "16",
    officeName: "SmileWave Dental",
    ownerName: "Dr. Benjamin Walker",
    address: {
      street: "444 Wave Rd",
      city: "Honolulu",
      state: "HI",
      postalCode: "96801",
      country: "USA"
    },
    rating: 4.7,
    reviewCount: "88",
    videoUrl: { videoSrc: "https://example.com/videos/office16.mp4" }
  },

  {
    id: "17",
    officeName: "Heritage Family Dentistry",
    ownerName: "Dr. Amelia Hall",
    address: {
      street: "555 Heritage Ln",
      city: "Nashville",
      state: "TN",
      postalCode: "37201",
      country: "USA"
    },
    rating: 4.4,
    reviewCount: "67",
    videoUrl: { videoSrc: "https://example.com/videos/office17.mp4" }
  },

  {
    id: "18",
    officeName: "Precision Dental Clinic",
    ownerName: "Dr. Lucas Allen",
    address: {
      street: "666 Precision Pkwy",
      city: "Charlotte",
      state: "NC",
      postalCode: "28201",
      country: "USA"
    },
    rating: 4.6,
    reviewCount: "139",
    videoUrl: { videoSrc: "https://example.com/videos/office18.mp4" }
  },

  {
    id: "19",
    officeName: "Serenity Dental Spa",
    ownerName: "Dr. Grace Young",
    address: {
      street: "777 Serenity Dr",
      city: "Orlando",
      state: "FL",
      postalCode: "32801",
      country: "USA"
    },
    rating: 4.8,
    reviewCount: "158",
    videoUrl: { videoSrc: "https://example.com/videos/office19.mp4" }
  },

  {
    id: "20",
    officeName: "PrimeSmile Dental Hub",
    ownerName: "Dr. Henry Scott",
    address: {
      street: "888 Prime Ave",
      city: "Houston",
      state: "TX",
      postalCode: "77001",
      country: "USA"
    },
    rating: 4.5,
    reviewCount: "112",
    videoUrl: { videoSrc: "https://example.com/videos/office20.mp4" }
  }
].map((office, index) => ({
  mobileNumber: office.mobileNumber ?? `555-100-00${(index + 1)
    .toString()
    .padStart(2, "0")}`,
  email: office.email ?? `info${index + 1}@dentaloffice.com`,
  createdAt: new Date(2025, 0, index + 1),
  ...office
}));
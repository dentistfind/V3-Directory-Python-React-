import { OfficeReviewsSet1, OfficeReviewsSet2, OfficeReviewsSet3, OfficeReviewsSet4, OfficeReviewsSet5, OfficeReviewsSet6, OfficeReviewsSet7, SPOTLIGHT_VIDEO1, SPOTLIGHT_VIDEO2, SPOTLIGHT_VIDEO3, } from "./constants";
import { DirectoryUser, OfficeData, OfficeRequests, OfficeVerificationData } from "./interface";
import { makeVideo } from "./script";

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
    reviews: OfficeReviewsSet1,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet2,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet3,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet4,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet5,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet6,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet7,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    reviews: OfficeReviewsSet3,
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
  },
].map((office, index) => ({
  ...office,
  metaInfo: {
    urlSlug: "",
    title: "",
    keywords: `${office.officeName.toLowerCase()}, dentist, dental clinic`,
    description: `${office.officeName} is a trusted dental clinic located in ${office.address.city}.`
  },
  createdAt: new Date(2025, 0, index + 1),
}))

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
  createdAt: new Date(),
  verificationData: {
    licenseDocumentSrc: "",
    licenseNumber: "",
    taxId: "",
    liabilityInsuranceSrc: ""
  },
  metaInfo: {
    urlSlug: "",
    title: "",
    description: "",
    keywords: "",
    graphImageUrl: ""
  }
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

export const dummyDentalOffices: OfficeData[]= [
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
    ],
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office3.mp4", duration: "1:20" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office4.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office5.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office6.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office7.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office8.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office9.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office10.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office11.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office12.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office13.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office14.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office15.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office16.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office17.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office18.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office19.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
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
    videoUrl: { videoSrc: "https://example.com/videos/office20.mp4" },
    verificationData: {
      licenseNumber: "DDS-CA-458921",
      taxId: "94-3456782",
      licenseDocumentSrc: "https://example.com/docs/license.pdf",
      liabilityInsuranceSrc: "https://example.com/docs/insurance.pdf",
      isVerified: true,
      verifiedAt: new Date("2024-01-15")
    },
  }
].map((office, index) => ({
  ...office,
  metaInfo: {
    urlSlug: "",
    title: "",
    keywords: `${office.officeName.toLowerCase()}, dentist, dental clinic`,
    description: `${office.officeName} is a trusted dental clinic located in ${office.address.city}.`
  },

  createdAt: new Date(2025, 0, index + 1),
}))

export const dentalOfficeRequests: OfficeRequests[] = [
  {
    id: "b2e4d7f3-2222-4c64-8ea9-222222222222",
    officeName: "PearlCare Family Dentistry",
    ownerName: "Dr. Fatima Bello",

    address: {
      street: "45 Aba Road",
      city: "Port Harcourt",
      state: "Rivers",
      country: "Nigeria",
      postalCode: "500272"
    },

    mobileNumber: "+2348098765432",
    email: "contact@pearlcare.ng",

    description: "Family-focused dental clinic with pediatric specialists.",
    servicesOffered: "Pediatric Dentistry, Braces, Routine Checkups",

    rating: 4.4,
    reviewCount: "58",

    isAvailable: false,
    isSponsored: false,

    website: "https://pearlcare.ng",

    videoUrl: {
      videoSrc: "https://example.com/videos/pearlcare.mp4",
      videoThumbnail: "/thumbnails/pearlcare.jpg",
      duration: "3:10",
      spotlight: false
    },

    galleryMedia: [
      {
        isVideo: false,
        imageUrl: "/gallery/pearlcare-1.jpg"
      }
    ],

    metaInfo: {
      urlSlug: "pearlcare-dentistry-portharcourt",
      title: "PearlCare Family Dentistry - Port Harcourt",
      description: "Trusted family dental clinic in Port Harcourt.",
      keywords: "dentist port harcourt, pediatric dentist nigeria",
      graphImageUrl: "/meta/pearlcare-og.jpg"
    },

    verificationData: {
      licenseNumber: "DDS-RIV-884211",
      taxId: "NG-11223344",
      licenseDocumentSrc: "/docs/pearlcare-license.pdf",
      liabilityInsuranceSrc: "/docs/pearlcare-insurance.pdf"
    },

    reviews: [
      {
        author: "Ifeoma K.",
        content: "My kids love coming here.",
        createdAt: new Date("2025-02-15"),
        likeCount: 4
      }
    ],

    createdAt: new Date("2025-02-01"),
    status: "Pending"
  },

  {
    id: "c3a9f8d1-3333-4c64-8ea9-333333333333",
    officeName: "UrbanWhite Cosmetic Dentistry",
    ownerName: "Dr. Michael Okoro",

    address: {
      street: "78 Aminu Kano Crescent",
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      postalCode: "900271"
    },

    mobileNumber: "+2348034567890",
    email: "info@urbanwhite.ng",

    description: "Cosmetic dental specialists focused on smile makeovers.",
    servicesOffered: "Veneers, Smile Makeovers, Teeth Whitening",

    rating: 3.9,
    reviewCount: "21",

    isAvailable: true,
    isSponsored: false,

    website: "https://urbanwhite.ng",

    videoUrl: {
      videoSrc: "https://example.com/videos/urbanwhite.mp4",
      videoThumbnail: "/thumbnails/urbanwhite.jpg",
      duration: "2:15",
      spotlight: false
    },

    metaInfo: {
      urlSlug: "urbanwhite-cosmetic-abuja",
      title: "UrbanWhite Cosmetic Dentistry Abuja",
      description: "Affordable cosmetic dentistry solutions in Abuja.",
      keywords: "cosmetic dentist abuja, veneers nigeria",
      graphImageUrl: "/meta/urbanwhite-og.jpg"
    },

    verificationData: {
      licenseNumber: "DDS-FCT-662211",
      taxId: "NG-55667788",
      licenseDocumentSrc: "/docs/urbanwhite-license.pdf",
      liabilityInsuranceSrc: "/docs/urbanwhite-insurance.pdf"
    },

    reviews: [],

    createdAt: new Date("2025-02-20"),
    status: "Rejected"
  },
  {
    id: "d4f6a7b8-4444-4c64-8ea9-444444444444",
    officeName: "EliteCare Dental Hub",
    ownerName: "Dr. Grace Nwosu",

    address: {
      street: "22 Ikorodu Road",
      city: "Ikeja",
      state: "Lagos",
      country: "Nigeria",
      postalCode: "100281"
    },

    mobileNumber: "+2348123456789",
    email: "hello@elitecare.ng",

    description: "Advanced dental technology and orthodontic solutions.",
    servicesOffered: "Braces, Implants, Surgery, Whitening",

    rating: 4.6,
    reviewCount: "89",

    isAvailable: true,
    isSponsored: true,

    website: "https://elitecare.ng",

    videoUrl: {
      videoSrc: "https://example.com/videos/elitecare.mp4",
      videoThumbnail: "/thumbnails/elitecare.jpg",
      duration: "2:58",
      spotlight: true
    },

    metaInfo: {
      urlSlug: "elitecare-dental-ikeja",
      title: "EliteCare Dental Hub Ikeja",
      description: "Premium orthodontic and surgical dental services.",
      keywords: "dentist ikeja, braces lagos, implants nigeria",
      graphImageUrl: "/meta/elitecare-og.jpg"
    },

    verificationData: {
      licenseNumber: "DDS-LAG-998877",
      taxId: "NG-66778899",
      licenseDocumentSrc: "/docs/elitecare-license.pdf",
      liabilityInsuranceSrc: "/docs/elitecare-insurance.pdf"
    },

    reviews: [
      {
        author: "Samuel T.",
        content: "Very modern equipment and friendly staff.",
        createdAt: new Date("2025-02-22"),
        likeCount: 9
      }
    ],

    createdAt: new Date("2025-02-18"),
    status: "Approved"
  },

  {
    id: "e5c7d8f9-5555-4c64-8ea9-555555555555",
    officeName: "RoyalTeeth Dental Clinic",
    ownerName: "Dr. Emeka Ibe",

    address: {
      street: "14 Okpara Avenue",
      city: "Enugu",
      state: "Enugu",
      country: "Nigeria",
      postalCode: "400102"
    },

    mobileNumber: "+2348076543210",
    email: "admin@royalteeth.ng",

    description: "Comprehensive dental care for adults and children.",
    servicesOffered: "Checkups, Fillings, Crowns, Whitening",

    rating: 4.2,
    reviewCount: "41",

    isAvailable: true,
    isSponsored: false,

    website: "https://royalteeth.ng",

    videoUrl: {
      videoSrc: "https://example.com/videos/royalteeth.mp4",
      videoThumbnail: "/thumbnails/royalteeth.jpg",
      duration: "1:50",
      spotlight: false
    },

    metaInfo: {
      urlSlug: "royalteeth-enugu",
      title: "RoyalTeeth Dental Clinic Enugu",
      description: "Reliable and affordable dental clinic in Enugu.",
      keywords: "dentist enugu, dental clinic nigeria",
      graphImageUrl: "/meta/royalteeth-og.jpg"
    },

    verificationData: {
      licenseNumber: "DDS-ENU-445566",
      taxId: "NG-33445566",
      licenseDocumentSrc: "/docs/royalteeth-license.pdf",
      liabilityInsuranceSrc: "/docs/royalteeth-insurance.pdf"
    },

    reviews: [],

    createdAt: new Date("2025-02-25"),
    status: "Pending"
  }
];
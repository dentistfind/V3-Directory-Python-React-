import { OfficeReviewsSet1, OfficeReviewsSet2, OfficeReviewsSet3, OfficeReviewsSet4, OfficeReviewsSet5, OfficeReviewsSet6, OfficeReviewsSet7, SPOTLIGHT_VIDEO1, SPOTLIGHT_VIDEO2, SPOTLIGHT_VIDEO3, } from "./constants";
import { DFPortalUser, DirectoryVideoData, FaqData, Invoice, OfficeData, OfficePortalAppointmentRequests, OfficePortalCallLogs, OfficePortalChatWidgetLogs, OfficePortalLeads, OfficePortalPatients, OfficePortalPatientTrackingLogs, OfficePortalSMSLogs, OfficePortalWebFormLogs, OfficeRequests, OfficeVerificationData, Order, Proposal, SpotlightCard, TrackingNumber, UserData } from "./interface";
import { AppointmentStatus, CallLogsStatus, LeadsSource, LeadsStatus, PatientStatus } from "./type";

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
  noOfPatients: (index + 1) * 100,
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
  noOfPatients: 0,
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

export const users: UserData[] = [
  {
    id: "usr_001",
    name: "Dr. Michael Roberts",
    phoneNumber: "+1 202-555-0101",
    profileSrc: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    loginData: {
      email: "michael.roberts@dentacare.com",
      lastLogin: "2026-03-14T10:23:00Z",
      isActive: true
    },
    role: "Clinic Admin"
  },
  {
    id: "usr_002",
    name: "Sarah Johnson",
    phoneNumber: "+1 202-555-0102",
    profileSrc: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    loginData: {
      email: "sarah.johnson@dentacare.com",
      lastLogin: "2026-03-15T08:11:00Z",
      isActive: true
    },
    role: "Clinic Admin"
  },
  {
    id: "usr_003",
    name: "David Lee",
    phoneNumber: "+1 202-555-0103",
    loginData: {
      email: "david.lee@systemadmin.com",
      lastLogin: "2026-03-13T19:40:00Z",
      isActive: true
    },
    role: "Super Admin"
  },
  {
    id: "usr_004",
    name: "Amanda Clark",
    phoneNumber: "+1 202-555-0104",
    profileSrc: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    loginData: {
      email: "amanda.clark@dentacare.com",
      lastLogin: "2026-03-10T15:02:00Z",
      isActive: false
    },
    role: "Clinic Admin"
  },
  {
    id: "usr_005",
    name: "James Peterson",
    phoneNumber: "+1 202-555-0105",
    profileSrc: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    loginData: {
      email: "james.peterson@systemadmin.com",
      lastLogin: "2026-03-12T09:18:00Z",
      isActive: true
    },
    role: "Super Admin"
  },
  {
    id: "usr_006",
    name: "Emily Carter",
    phoneNumber: "+1 202-555-0106",
    profileSrc: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    loginData: {
      email: "emily.carter@dentacare.com",
      lastLogin: "2026-03-15T11:45:00Z",
      isActive: true
    },
    role: "Clinic Admin"
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
        ratind: 4.3,
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
    logoUrl: "https://picsum.photos/200?1",
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
    logoUrl: "https://picsum.photos/200?1",
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
    logoUrl: "https://picsum.photos/200?1",
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
    logoUrl: "https://picsum.photos/200?1",
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
    logoUrl: "https://picsum.photos/200?1",
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
  noOfPatients: (index + 1) * 100,
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
        likeCount: 4,
        rating: 3.6
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
        likeCount: 9,
        rating: 4.6
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
    createdAt: new Date("2025-02-25"),
    status: "Pending"
  }
];

export const directoryVideos: DirectoryVideoData[] = [
  {
    title: "Downtown Dental Clinic Introduction",
    description: "A walkthrough of our modern dental clinic and services offered.",
    sourceType: "youtube",
    url: "https://www.youtube.com/watch?v=abc123xyz",
    latitude: "40.7128",
    longitude: "-74.0060",
    radiusInMiles: 10,
    status: "Active"
  },
  {
    title: "Family Dentistry Care Tips",
    description: "Helpful dental hygiene tips for families and children.",
    sourceType: "vimeo",
    url: "https://vimeo.com/458921234",
    latitude: "34.0522",
    longitude: "-118.2437",
    radiusInMiles: 25,
    status: "Active"
  },
  {
    title: "Orthodontics Patient Experience",
    description: "A patient testimonial about their orthodontic treatment journey.",
    sourceType: "youtube",
    url: "https://www.youtube.com/watch?v=xyz456abc",
    latitude: "41.8781",
    longitude: "-87.6298",
    radiusInMiles: 15,
    status: "Inactive"
  },
  {
    title: "Dental Implant Procedure Overview",
    description: "An overview of dental implant procedures and recovery expectations.",
    sourceType: "self-hosted",
    url: "https://media.example.com/videos/dental-implants.mp4",
    latitude: "29.7604",
    longitude: "-95.3698",
    radiusInMiles: 20,
    status: "Active"
  },
  {
    title: "Emergency Dental Services Explained",
    description: "Learn what to do when facing a dental emergency.",
    sourceType: "youtube",
    url: "https://www.youtube.com/watch?v=emergency789",
    latitude: "33.4484",
    longitude: "-112.0740",
    radiusInMiles: 30,
    status: "Inactive"
  },
  {
    title: "Cosmetic Dentistry Smile Makeover",
    description: "Before and after transformations from cosmetic dentistry procedures.",
    sourceType: "vimeo",
    url: "https://vimeo.com/761234890",
    latitude: "39.7392",
    longitude: "-104.9903",
    radiusInMiles: 12,
    status: "Active"
  }
]

export const dummyFaqs: FaqData[] = [
  {
    question: "How often should we visit the dentist?",
    answer: "It is generally recommended to visit the dentist every six months for a routine check-up and professional cleaning. However, some patients may require more frequent visits depending on their oral health condition. Regular visits help detect issues early and maintain a healthy smile."
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer: "If you experience severe tooth pain, a knocked-out tooth, swelling, or bleeding, contact your dentist immediately. For a knocked-out tooth, try to keep it moist in milk or saline solution and seek care as soon as possible. Prompt treatment can often prevent further complications."
  },
  {
    question: "How long does Invisalign treatment take?",
    answer: "Invisalign treatment typically takes between 6 to 18 months, depending on the complexity of your case. Some minor corrections may take less time, while more advanced alignment issues may require longer treatment. Your dentist will provide a personalized timeline after assessment."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is safe when performed under the supervision of a qualified dentist. We use approved products that minimize sensitivity and protect your enamel while effectively brightening your smile."
  },
  {
    question: "Do dental procedures hurt?",
    answer: "Modern dental techniques and anesthesia ensure that most procedures are comfortable and virtually pain-free. You may experience mild discomfort after certain treatments, but this is usually temporary and manageable with prescribed care."
  },
  {
    question: "At what age should children first see a dentist?",
    answer: "Children should have their first dental visit by their first birthday or when their first tooth appears. Early visits help monitor development, prevent cavities, and establish healthy oral hygiene habits from a young age."
  }
];

export const spotlightCards: SpotlightCard[] = [
  {
    name: "Aesthetic Implant Dental",
    specialty: "Family & Cosmetic Dentistry",
    location: "5775 Yonge St Suite #1000, Floor 10 Toronto, ON",
    description: "Gentle, personalized care with a focus on making every patient feel at home.",
    video: {
      videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841564/Aesthetic_Impant_General_Dentistry_wral4y.mp4",
      videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841564/Aesthetic_Impant_General_Dentistry_wral4y.png",
      duration: "00:54",
      spotlight: true,
    },
  },
  {
    name: "7 Days Dental",
    specialty: "General Dentistry",
    location: "4997 Highway 7 East Unit 5-6 Markham, ON",
    description: "Making dental visits comfortable and stress-free for patients of all ages.",
    video: {
      videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841567/7_days_Dental_xefgxd.mp4",
      videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841567/7_days_Dental_xefgxd.png",
      duration: "00:49",
      spotlight: true,
    },
  },
  {
    name: "Southdale Dentistry",
    specialty: "Family Dentistry",
    location: "104-553 Southdale Rd E London, ON N6E 3V9",
    description: "Comprehensive care with a patient-first approach to oral health.",
    video: {
      videoSrc: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841560/Southdale_Dentist_FINAL_snyupy.mp4",
      videoThumbnail: "https://res.cloudinary.com/dw6y5ce5p/video/upload/v1770841560/Southdale_Dentist_FINAL_snyupy.png",
      duration: "01:00",
      spotlight: true,
    },
  },
];

export const initialDirectoryVideoData: DirectoryVideoData = {
  title: "",
  sourceType: "",
  url: "",
  longitude: "",
  latitude: "",
  radiusInMiles: 0,
  status: "Active"
}

export const initialUserData: UserData = {
  id: "",
  name: "",
  profileSrc: "",
  loginData: {
    email: "",
    isActive: true
  },
  phoneNumber: "",
  role: "Clinic Admin"
}

export const dummyPortalUserAdmins: DFPortalUser[] = [
  { id: "a1", name: "John Doe", receiveCall: true, emailNotification: true },
  { id: "a2", name: "John Doe", receiveCall: true, emailNotification: true },
];

export const dummyPortalUsers: DFPortalUser[] = [
  { id: "u1", name: "Jane Smith", receiveCall: true, emailNotification: true },
  { id: "u2", name: "Mike Brown", receiveCall: true, emailNotification: true },
  { id: "u3", name: "John Doe", receiveCall: true, emailNotification: true },
  { id: "u4", name: "Sarah Johnson", receiveCall: true, emailNotification: true },
];

export const dummyPortalTrackingNumberData: TrackingNumber[] = Array.from({ length: 5 }, (_, i) => ({
  id: `tn${i}`,
  sno: "TN001",
  trackingNumber: "+1 (786) 746-7839",
  title: "GMB",
  destinationNumber: "+1-555-0101",
}));

export const dummyDFPortalBillingOrders: Order[] = Array.from({ length: 10 }, (_, i) => ({
  id: `o${i}`,
  orderId: "ORD-2024-001",
  office: "Sunrise Medical Center",
  status: (["Active", "Cancelled", "Completed", "Waiting", "Active", "Active", "Cancelled", "Cancelled", "Completed", "Completed"] as const)[i],
  date: "24-05-2025",
  items: 3,
  amount: 2384
}));

export const dummyDFPortalBillingInvoices: Invoice[] = Array.from({ length: 10 }, (_, i) => ({
  id: `inv${i}`,
  invoiceId: "INV-2024-001",
  orderId: "ORD-2024-001",
  office: "Sunrise Medical Center",
  status: (["Pending", "Pending", "Paid", "Overdue", "Paid", "Paid", "Paid", "Overdue", "Overdue", "Paid"] as const)[i],
  date: "24-05-2025",
  amount: 2384
}));

export const dummyDFPortalBillingProposals: Proposal[] = Array.from({ length: 5 }, (_, i) => ({
  id: `p${i}`,
  proposalId: "PROP-2024-001",
  orderId: "ORD-2024-001",
  office: "Sunrise Medical Center",
  status: i === 2 ? "Rejected" : "Accepted",
  date: "24-05-2025",
  amount: 2384,
}));

export const officePortalLeadsDummyData: OfficePortalLeads[] = [
  {
    name: "Chioma Okafor",
    email: "chioma.okafor@gmail.com",
    phoneNumber: "+2348123456789",
    source: "Social Media",
    status: "New Contact",
    createdAt: new Date("2026-03-01T10:15:00"),
  },
  {
    name: "Tunde Balogun",
    email: "tunde.balogun@yahoo.com",
    phoneNumber: "+2348034567890",
    source: "Website",
    status: "Contacted",
    createdAt: new Date("2026-03-05T14:30:00"),
  },
  {
    name: "Aisha Bello",
    email: "aisha.bello@gmail.com",
    phoneNumber: "+2348098765432",
    source: "Google Ads",
    status: "Qualified",
    createdAt: new Date("2026-03-08T09:45:00"),
  },
  {
    name: "Emeka Nwoye",
    email: "emeka.nwoye@outlook.com",
    phoneNumber: "+2348176543210",
    source: "Referral",
    status: "Patient Lead",
    createdAt: new Date("2026-03-10T16:20:00"),
  },
  {
    name: "Fatima Abubakar",
    email: "fatima.abubakar@gmail.com",
    phoneNumber: "+2348061122334",
    source: "Social Media",
    status: "Contacted",
    createdAt: new Date("2026-03-12T11:05:00"),
  },
  {
    name: "Daniel Johnson",
    email: "daniel.johnson@gmail.com",
    phoneNumber: "+2348159988776",
    source: "Other",
    status: "New Contact",
    createdAt: new Date("2026-03-15T13:40:00"),
  },
  {
    name: "Grace Eze",
    email: "grace.eze@yahoo.com",
    phoneNumber: "+2348182233445",
    source: "Website",
    status: "Qualified",
    createdAt: new Date("2026-03-18T08:25:00"),
  },
  {
    name: "Ibrahim Musa",
    email: "ibrahim.musa@gmail.com",
    phoneNumber: "+2348076655443",
    source: "Google Ads",
    status: "Patient Lead",
    createdAt: new Date("2026-03-20T17:55:00"),
  },
];

export const initialOfficePortalLead: OfficePortalLeads = {
  name: "",
  email: "",
  phoneNumber: "",
  source: "" as LeadsSource,
  status: "" as LeadsStatus,
  createdAt: new Date(),
};

export const initialOfficePortalPatient: OfficePortalPatients = {
  name: "",
  email: "",
  phoneNumber: "",
  location: {
    street: "",
    postalCode: "",
    city: "",
    state: "",
    country: ""
  },
  status: "Active",
  lastVisit: new Date()
};

export const officePortalPatientsDummyData: OfficePortalPatients[] = [
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    phoneNumber: "+2348012345678",
    status: "Active",
    lastVisit: new Date("2026-03-20"),
    location: {
      street: "12 Admiralty Way",
      postalCode: "101233",
      city: "Lekki",
      state: "Lagos",
      country: "Nigeria"
    }
  },
  {
    name: "Amaka Okafor",
    email: "amaka.okafor@yahoo.com",
    phoneNumber: "+2348098765432",
    status: "Active",
    lastVisit: new Date("2026-03-15"),
    location: {
      street: "45 Independence Layout",
      postalCode: "400001",
      city: "Enugu",
      state: "Enugu",
      country: "Nigeria"
    }
  },
  {
    name: "David Johnson",
    email: "david.johnson@outlook.com",
    phoneNumber: "+2348123456789",
    status: "Inactive",
    lastVisit: new Date("2025-12-10"),
    location: {
      city: "Port Harcourt",
      state: "Rivers",
      country: "Nigeria"
    }
  },
  {
    name: "Fatima Bello",
    email: "fatima.bello@gmail.com",
    phoneNumber: "+2348034567890",
    status: "Active",
    lastVisit: new Date("2026-02-28"),
    location: {
      street: "7 Ahmadu Bello Way",
      postalCode: "800211",
      city: "Kaduna",
      state: "Kaduna",
      country: "Nigeria"
    }
  },
  {
    name: "Chinedu Eze",
    email: "chinedu.eze@gmail.com",
    phoneNumber: "+2348076543210",
    status: "Inactive",
    lastVisit: new Date("2025-11-05"),
    location: {
      street: "22 Okpara Avenue",
      city: "Owerri",
      state: "Imo",
      country: "Nigeria"
    }
  },
  {
    name: "Aisha Mohammed",
    email: "aisha.mohammed@yahoo.com",
    phoneNumber: "+2348061122334",
    status: "Active",
    lastVisit: new Date("2026-03-22"),
    location: {
      street: "18 Gwarinpa Estate",
      postalCode: "900108",
      city: "Abuja",
      state: "FCT",
      country: "Nigeria"
    }
  }
];

export const officePortalAppointmentRequestsDummyData: OfficePortalAppointmentRequests[] = [
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    phoneNumber: "+2348012345678",
    serviceRequired: "Teeth Cleaning",
    lastDentalVisit: new Date("2025-10-12"),
    status: "Pending"
  },
  {
    name: "Amaka Okafor",
    email: "amaka.okafor@yahoo.com",
    phoneNumber: "+2348098765432",
    serviceRequired: "Tooth Extraction",
    lastDentalVisit: new Date("2024-08-05"),
    status: "Confirmed"
  },
  {
    name: "David Johnson",
    email: "david.johnson@outlook.com",
    phoneNumber: "+2348123456789",
    serviceRequired: "Dental Checkup",
    lastDentalVisit: new Date("2026-01-18"),
    status: "Pending"
  },
  {
    name: "Fatima Bello",
    email: "fatima.bello@gmail.com",
    phoneNumber: "+2348034567890",
    serviceRequired: "Braces Consultation",
    lastDentalVisit: new Date("2023-12-22"),
    status: "Confirmed"
  },
  {
    name: "Chinedu Eze",
    email: "chinedu.eze@gmail.com",
    phoneNumber: "+2348076543210",
    serviceRequired: "Tooth Filling",
    lastDentalVisit: new Date("2025-06-14"),
    status: "Pending"
  },
  {
    name: "Aisha Mohammed",
    email: "aisha.mohammed@yahoo.com",
    phoneNumber: "+2348061122334",
    serviceRequired: "Teeth Whitening",
    lastDentalVisit: new Date("2026-02-10"),
    status: "Confirmed"
  }
];

export const initialOfficePortalAppointmentRequest: OfficePortalAppointmentRequests = {
  name: "",
  email: "",
  phoneNumber: "",
  serviceRequired: "",
  lastDentalVisit: new Date(),
  status: "Pending"
}

export const officePortalCallLogsDummyData: OfficePortalCallLogs[] = [
  {
    name: "John Doe",
    phoneNumber: "+2348012345678",
    createdAt: new Date("2026-03-25T10:15:00"),
    patientStatus: "Active",
    duration: 320,
    status: "Completed",
  },
  {
    name: "Mary Johnson",
    phoneNumber: "+2348098765432",
    createdAt: new Date("2026-03-25T12:30:00"),
    patientStatus: "Inactive",
    duration: 0,
    status: "Missed",
  },
  {
    name: "David Williams",
    phoneNumber: "+2348134567890",
    createdAt: new Date("2026-03-26T09:45:00"),
    patientStatus: "Active",
    duration: 210,
    status: "Completed",
  },
  {
    name: "Chioma Okafor",
    phoneNumber: "+2348167890123",
    createdAt: new Date("2026-03-26T14:10:00"),
    patientStatus: "Active",
    duration: 95,
    status: "Completed",
  },
  {
    name: "Ibrahim Musa",
    phoneNumber: "+2348076543210",
    createdAt: new Date("2026-03-26T16:50:00"),
    patientStatus: "Inactive",
    duration: 0,
    status: "Missed",
  },
];

export const officePortalWebFormLogsDummyData: OfficePortalWebFormLogs[] = [
  {
    name: "Aisha Bello",
    email: "aisha.bello@gmail.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-24"),
    submittedTime: { hour: 9, minute: 15 },
    patientStatus: "Active",
  },
  {
    name: "Michael Okeke",
    email: "michael.okeke@yahoo.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-24"),
    submittedTime: { hour: 11, minute: 40 },
    patientStatus: "Inactive",
  },
  {
    name: "Fatima Abdullahi",
    email: "fatima.a@gmail.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-25"),
    submittedTime: { hour: 14, minute: 5 },
    patientStatus: "Active",
  },
  {
    name: "David Johnson",
    email: "david.johnson@outlook.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-25"),
    submittedTime: { hour: 16, minute: 25 },
    patientStatus: "Active",
  },
  {
    name: "Chioma Nwankwo",
    email: "chioma.nwankwo@gmail.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-26"),
    submittedTime: { hour: 8, minute: 50 },
    patientStatus: "Inactive",
  },
  {
    name: "Samuel Adeyemi",
    email: "samuel.adeyemi@gmail.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-26"),
    submittedTime: { hour: 13, minute: 10 },
    patientStatus: "Active",
  },
  {
    name: "Zainab Musa",
    email: "zainab.musa@yahoo.com",
    formType: "Appointment Request",
    submittedDate: new Date("2026-03-26"),
    submittedTime: { hour: 17, minute: 55 },
    patientStatus: "Active",
  },
];

export const officePortalChatWidgetLogsDummyData: OfficePortalChatWidgetLogs[] = [
  {
    visitorName: "John Doe",
    email: "john.doe@gmail.com",
    startTime: new Date("2026-03-30T09:15:00"),
    durationInSeconds: 320,
    agent: "Dr. Smith",
    patientStatus: "Active"
  },
  {
    visitorName: "Amaka Okafor",
    email: "amaka.okafor@gmail.com",
    startTime: new Date("2026-03-30T10:45:00"),
    durationInSeconds: 540,
    agent: "Dr. Johnson",
    patientStatus: "Active"
  },
  {
    visitorName: "Tunde Balogun",
    email: "tunde.balogun@gmail.com",
    startTime: new Date("2026-03-29T14:20:00"),
    durationInSeconds: 210,
    agent: "Dr. Smith",
    patientStatus: "Inactive"
  },
  {
    visitorName: "Chioma Nwosu",
    email: "chioma.nwosu@gmail.com",
    startTime: new Date("2026-03-28T16:05:00"),
    durationInSeconds: 780,
    agent: "Dr. Adams",
    patientStatus: "Active"
  }
];

export const officePortalSMSLogsDummyData: OfficePortalSMSLogs[] = [
  {
    patientName: "John Doe",
    createdAt: new Date("2026-03-30T08:30:00"),
    phoneNumber: "+2348012345678",
    message: "Hello, I would like to book an appointment.",
    patientStatus: "Active",
    smsStatus: "Inbound"
  },
  {
    patientName: "Amaka Okafor",
    createdAt: new Date("2026-03-30T09:45:00"),
    phoneNumber: "+2348098765432",
    message: "Your appointment is confirmed for tomorrow.",
    patientStatus: "Active",
    smsStatus: "Outbound"
  },
  {
    patientName: "Tunde Balogun",
    createdAt: new Date("2026-03-29T14:10:00"),
    phoneNumber: "+2348123456789",
    message: "Reminder: Dental check-up at 2 PM today.",
    patientStatus: "Inactive",
    smsStatus: "Outbound"
  },
  {
    patientName: "Chioma Nwosu",
    createdAt: new Date("2026-03-28T16:20:00"),
    phoneNumber: "+2348034567890",
    message: "Can I reschedule my appointment?",
    patientStatus: "Active",
    smsStatus: "Inbound"
  }
];

export const officePortalPatientTrackingLogsDummyData: OfficePortalPatientTrackingLogs[] = [
  {
    name: "John Doe",
    createdAt: new Date("2026-03-30T08:15:00"),
    phoneNumber: "+2348012345678",
    email: "john.doe@gmail.com",
    patientStatus: "Active"
  },
  {
    name: "Amaka Okafor",
    createdAt: new Date("2026-03-30T10:20:00"),
    phoneNumber: "+2348098765432",
    email: "amaka.okafor@gmail.com",
    patientStatus: "Active"
  },
  {
    name: "Tunde Balogun",
    createdAt: new Date("2026-03-29T14:05:00"),
    phoneNumber: "+2348123456789",
    email: "tunde.balogun@gmail.com",
    patientStatus: "Inactive"
  },
  {
    name: "Chioma Nwosu",
    createdAt: new Date("2026-03-28T16:45:00"),
    phoneNumber: "+2348034567890",
    email: "chioma.nwosu@gmail.com",
    patientStatus: "Active"
  }
];
import { OfficeReviewsSet1, OfficeReviewsSet2, OfficeReviewsSet3, OfficeReviewsSet4, OfficeReviewsSet5, OfficeReviewsSet6, OfficeReviewsSet7, SPOTLIGHT_VIDEO1, SPOTLIGHT_VIDEO2, SPOTLIGHT_VIDEO3, } from "./constants";
import { OfficeData, OfficeVerificationData } from "./interface";

export const dummyOffices: OfficeData[] = [
  {
    id: "4462b5c5-0c50-4c64-8ea9-908bf411b078",
    officeName: "BrightSmile Dental Studio",
    ownerName: "Mr. John",
    address: "2458 Sunset Blvd, Los Angeles, CA 90026",
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
    address: "1021 Westheimer Rd, Houston, TX 77006",
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
    address: "890 Lake Shore Dr, Chicago, IL 60611",
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
    address: "55 Broad St, New York, NY 10004",
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
    address: "7432 N Central Ave, Phoenix, AZ 85020",
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
    address: "1200 Brickell Ave, Miami, FL 33131",
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
    address: "4500 Greenwood Ave N, Seattle, WA 98103",
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
    address: "3320 Peachtree Rd NE, Atlanta, GA 30326",
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
];

export const initialOfficeData: OfficeData = {
  id: "",
  officeName: "",
  ownerName: "",
  address: "",
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
  reviews: []
};

export const initialOfficeVerData: OfficeVerificationData = {
    licenseNumber: "",
    taxId: "",
    licenseDocumentSrc: "",
    liabilityInsuranceSrc: ""
}
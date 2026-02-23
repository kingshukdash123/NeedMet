const listing = {
  listingId: "",
  contributionId: "",
  name: "",
  address: "",
  description: "",
  details: {},

  geo: {
    lat: 0.0,
    lng: 0.0
  },

  phone: "",
  category: "",
  categoryId: "",
  tags: [],

  addedBy: "",
  updatedBy: "",

  isClaimed: false,
  ownerId: "",
  ownerName: "Unknown",
  claimStatus: "unclaimed",
  verifiedBy: null,

  createdAt: new Date(), // or serverTimestamp()
  updatedAt: new Date(),

  images: [
    {
      fileId: "",
      fullUrl: "",
      thumbUrl: ""
    }
  ],

  reviews: 0,
  ratingCount: 0,
  rating: 0.0,

  since: 2025,
  likes: 0,
  views: 0,

  social: {
    facebook: "",
    instagram: "",
    website: ""
  },

  ratingStats: {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  },

  factorAvgRatings: {
    service: 0.0,
    quality: 0.0,
    price: 0.0
  },

  openHours: {
    monday: {
      open: "",
      close: "",
      closed: false
    },
    tuesday: {
      open: "",
      close: "",
      closed: false
    },
    wednesday: {
      open: "",
      close: "",
      closed: false
    },
    thursday: {
      open: "",
      close: "",
      closed: false
    },
    friday: {
      open: "",
      close: "",
      closed: false
    },
    saturday: {
      open: "",
      close: "",
      closed: false
    },
    sunday: {
      open: "",
      close: "",
      closed: true
    }
  }
};
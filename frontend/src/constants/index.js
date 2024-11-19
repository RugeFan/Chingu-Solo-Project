import { AC, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, bin, blinds, carpet, closet, dishes, disinfecting, microwave, onceOff, oven, refrigerator, regular, springCleaning, ironing, wall, window, bathroom, pets } from "../assets/images";

export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export const serviceList = [
  {
    title: "Mold & Mildew Disinfection",
    content: "Combat harmful mold and mildew with our specialized disinfection service. We target affected areas, ensuring your home is safe, clean, and free from allergens.",
    imgSrc: disinfecting,
    animation: "sm:animate-slideIn1"
  },
  {
    title: "Carpet Deep Cleaning",
    content: "Revitalize your carpets with our deep cleaning service. We remove embedded dirt, stains, and odors, restoring the freshness and comfort of your living space.",
    imgSrc: carpet,
    animation: "sm:animate-slideIn2"
  },
  {
    title: "Room Organization",
    content: "Transform cluttered spaces into organized havens. Our team will declutter, sort, and arrange your belongings, making your rooms more functional and inviting.",
    imgSrc: closet,
    animation: "sm:animate-slideIn3"
  },
  {
    title: "Bathroom Sanitation",
    content: "Achieve a sparkling, germ-free bathroom with our thorough cleaning service. We scrub, sanitize, and polish every surface, leaving your bathroom pristine and refreshing.",
    imgSrc: bathroom,
    animation: "sm:animate-slideIn4"
  }
]


export const priceList = [
  {
    type: "basic",
    title: "One-Time Cleaning",
    price: "$125.00",
    imgUrl: onceOff,
    content: [
      "Thorough Cleaning Included",
      "Perfect for a Fresh Start",
      "Flexible Scheduling"
    ]
  },
  {
    type: "deep",
    title: "Regular Cleaning",
    price: "$105.00",
    imgUrl: regular,
    content: [
      "Weekly or Biweekly Service",
      "No Long-Term Commitment",
      "Consistent Quality with the Same Cleaner"
    ]
  },
  {
    type: "move",
    title: "Spring Refresh",
    price: "$365.00",
    imgUrl: springCleaning,
    content: [
      "Comprehensive Deep Clean",
      "Tackling the Toughest Jobs",
      "Detailed Attention Inside Cabinets & Drawers"
    ]
  },
]


export const serviceOptions = [
  { id: 1, name: "Oven", price: 65, imgSrc: oven },
  { id: 2, name: "Microwave", price: 20, imgSrc: microwave },
  { id: 3, name: "Ironing", price: 50, imgSrc: ironing },
  { id: 4, name: "Blinds", price: 15, imgSrc: blinds },
  { id: 5, name: "Refrigerator", price: 40, imgSrc: refrigerator },
  { id: 6, name: "Bin", price: 10, imgSrc: bin },
  { id: 7, name: "Windows", price: 10, imgSrc: window },
  { id: 8, name: "AC", price: 10, imgSrc: AC },
  { id: 9, name: "Dishes", price: 10, imgSrc: dishes },
  { id: 10, name: "Carpet", price: 0, imgSrc: carpet },
  { id: 11, name: "Pet", price: 0, imgSrc: pets },
  { id: 12, name: "Wall", price: 0, imgSrc: wall }
];

export const serviceTypes = {
  oneTime: { name: "One-Time Cleaning", price: 105 },
  regular: { name: "Regular Cleaning", price: 125 },
  move: { name: "Move In/Out Cleaning", price: 360 },
};

export const bedroomPrices = {
  "1 Bedroom": 15,
  "2 Bedrooms": 30,
  "3 Bedrooms": 45,
  "4 Bedrooms": 60,
  "5 Bedrooms": 75,
  "5+ Bedrooms": 90,
};

export const bathroomPrices = {
  "1 Bathroom": 20,
  "2 Bathrooms": 40,
  "3 Bathrooms": 60,
  "4 Bathrooms": 80,
  "5 Bathrooms": 100,
  "5+ Bathrooms": 120,
};

export const comments = [
  {
    name: 'Daniel Johnson',
    comment: 'Pureglim’s service was absolutely outstanding! They cleaned my carpets so thoroughly that all the stubborn black spots are completely gone. Having kids at home means the walls get dirty often, but they managed to clean every mark off the walls. I’m really impressed by their attention to detail.',
    avatar: avatar1,
    date: "15/08/2024"
  },
  {
    name: 'Michael Smith',
    comment: 'This company is incredibly professional! They arrived right on time and their service was extremely meticulous. My floors are shining like new, and they didn’t miss a single speck of dust, even in the corners. I highly recommend Pureglim for anyone looking for top-notch cleaning services.',
    avatar: avatar2,
    date: "10/08/2024"
  },
  {
    name: 'Sophia Brown',
    comment: 'I absolutely love Pureglim! They cleaned my kitchen so well that all the grease stains are gone, making it look brand new. The team was polite and worked efficiently. It’s hard to find a service this good, so I highly recommend them!',
    avatar: avatar3,
    date: "07/08/2024"

  },
  {
    name: 'Jessica Williams',
    comment: 'I’m extremely satisfied with Pureglim’s cleaning service. The bathroom was particularly challenging, but they removed even the most stubborn limescale. The team was friendly and professional throughout the process.',
    avatar: avatar4,
    date: "24/07/2024"

  },
  {
    name: 'William Davis',
    comment: 'The service was incredibly thorough! Not only did they clean everything meticulously, but they also helped organize some of my clutter. The black spots on my carpet are completely gone, and I’m beyond satisfied. Definitely worth every penny!',
    avatar: avatar5,
    date: "09/07/2024"

  },
  {
    name: 'James Miller',
    comment: 'This cleaning was totally worth it! The coffee stains on my carpets are completely gone, making them look brand new. The Pureglim team worked quickly and efficiently, exceeding my expectations. I’ll definitely be using their service again.',
    avatar: avatar6,
    date: "16/06/2024"

  },
  {
    name: 'Ava Wilson',
    comment: 'I have two cats, and Pureglim’s team not only removed all the cat hair, but they also used a special cleaning solution that left the house smelling fresh and clean. The attention to detail was impressive, and I couldn’t be happier with the results.',
    avatar: avatar7,
    date: "07/06/2024"

  },
  {
    name: 'Alexander Anderson',
    comment: 'This was a fantastic experience! The staff was punctual and very friendly. They cleaned every nook and cranny of my kitchen and bathroom, leaving them spotless. I’m really impressed by their work and highly recommend them to everyone.',
    avatar: avatar8,
    date: "26/05/2024"

  },
  {
    name: 'Isabella Martinez',
    comment: 'I’m very pleased with Pureglim’s cleaning service. They managed to remove all the pen marks my kids had drawn on the walls. They even gave me some useful tips on how to prevent future messes. Their service is truly thoughtful and comprehensive.',
    avatar: avatar9,
    date: "22/05/2024"
  },
  {
    name: 'David Roberts',
    comment: 'Pureglim’s cleaning service is amazing! They made my windows so clear that it feels like there’s no glass at all. The staff was very courteous and professional. They even gave me tips on how to keep things clean longer.',
    avatar: avatar10,
    date: "27/04/2024"
  },
];

export const allRoomsCleaningTasks = [
  {
    name: "Skirting Boards Dusted",
    general: false,
    spring: true
  },
  {
    name: "Floors Vacuumed / Mopped",
    general: true,
    spring: true
  },
  {
    name: "Mirrors Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Rubbish Bin Emptied",
    general: true,
    spring: true
  },
  {
    name: "Window Sills Dusted / Wet Wiped",
    general: false,
    spring: true
  },
  {
    name: "Internal Windows Cleaned",
    general: false,
    spring: true
  },
  {
    name: "Blinds Lightly Dusted",
    general: false,
    spring: true
  },
  {
    name: "Walls Spot Wiped",
    general: false,
    spring: true
  },
  {
    name: "Woodwork / Doors Dusted",
    general: true,
    spring: true
  },
  {
    name: "Woodwork / Doors Wet Wiped",
    general: true,
    spring: true
  },
  {
    name: "Wardrobe Exterior Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Wardrobe Interior Wet Wiped",
    general: false,
    spring: true
  }
];

export const bathroomCleaningTasks = [
  {
    name: "Cabinet Exterior Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Cabinet Interior Wet Wiped",
    general: false,
    spring: true
  },
  {
    name: "Counter Top Sink Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Fixtures Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Shower / Bathtub Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Toilets Cleaned & Sanitized",
    general: true,
    spring: true
  },
  {
    name: "Ceiling Exhausts Fan Cleaned",
    general: false,
    spring: true
  }
];

export const kitchenCleaningTasks = [
  {
    name: "Oven Exterior Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Oven Interior Cleaned",
    general: false,
    spring: false
  },
  {
    name: "Microwave Exterior Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Microwave Interior Cleaned",
    general: false,
    spring: false
  },
  {
    name: "Range Hood Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Cooktop & Splash back Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Cabinets Exterior Cleaned",
    general: true,
    spring: true
  },
  {
    name: "Cabinet Interior Wet Wiped",
    general: false,
    spring: true
  },
  {
    name: "Counter Top / Sink Cleaned",
    general: true,
    spring: true
  }
];

export const housekeepingCleaningTasks = [
  {
    name: "Bed Sheets Changed",
    general: false,
    spring: true
  },
  {
    name: "Bed Made",
    general: false,
    spring: true
  },
  {
    name: "Ironing",
    general: false,
    spring: true
  },
  {
    name: "Clothes Folded",
    general: false,
    spring: true
  },
  {
    name: "Dishes Washed",
    general: false,
    spring: true
  }
];

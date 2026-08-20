export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
  badge: string;
}

export interface EquipmentCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: { name: string; specs: string }[];
  accentColor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  badge: string;
  quote: string;
  review: string;
}

export interface TrainerSlot {
  id: string;
  role: string;
  specialization: string;
  status: "available" | "coming_soon";
  experiencePlaceholder: string;
}

export const GYM_DATA = {
  name: "Peter's Gym",
  legalName: "Peter's Gym Purulia",
  tagline: "FORGE YOUR BEST SELF.",
  subtitle: "Strength. Discipline. Performance.",
  heroQuote: "BUILT FOR PEOPLE WHO DON'T QUIT.",
  establishedYear: "2022",
  yearsInBusiness: "5+",
  rating: 4.7,
  reviewCount: 337,
  openHours: {
    display: "6:00 AM – 10:00 PM",
    days: "Open Daily (Monday – Sunday)",
    disclaimer: "*Operating hours and special holiday schedules may vary. Please call before visiting.",
    opensAt: 6,
    closesAt: 22,
  },
  contact: {
    primaryPhone: "+91 98836 88247",
    primaryPhoneRaw: "9883688247",
    secondaryPhone: "+91 95477 38111",
    secondaryPhoneRaw: "9547738111",
    whatsappPhoneRaw: "919883688247",
    emailPlaceholder: "contact@petersgym.in",
    address: {
      street: "S Lake Road (Near Karbala Ground, Saheb Bandh)",
      area: "Chowk Bazar / S Lake Road",
      city: "Purulia",
      state: "West Bengal",
      postalCode: "723101",
      country: "India",
      mapsQuery: "Peter's+Gym+S+Lake+Road+Purulia+West+Bengal+723101",
      embedCoordinates: {
        lat: 23.3322,
        lng: 86.3652,
      },
    },
  },
  stats: [
    {
      value: "4.7★",
      label: "Google Rating",
      subtext: "337+ Verified Reviews",
    },
    {
      value: "2022",
      label: "Established",
      subtext: "Premier Fitness Hub",
    },
    {
      value: "6 AM – 10 PM",
      label: "Open Daily",
      subtext: "Flexible Workout Slots",
    },
    {
      value: "100%",
      label: "Commercial Grade",
      subtext: "Heavy-Duty Equipment",
    },
  ],
  services: [
    {
      id: "strength",
      name: "STRENGTH",
      tagline: "Build raw strength and dense muscle.",
      description:
        "Comprehensive free-weight and plate-loaded resistance training designed for progressive overload, hyper-trophy, and functional power.",
      highlights: [
        "Heavy Olympic Barbells & Bumper Plates",
        "Multi-angle Power Racks & Smith Machines",
        "Isolated Muscle Hypertrophy Stations",
      ],
      icon: "Dumbbell",
      badge: "Core Discipline",
    },
    {
      id: "personal-training",
      name: "PERSONAL TRAINING",
      tagline: "Focused one-to-one guidance.",
      description:
        "Direct guidance from dedicated fitness instructors focused on personalized workout regimens, posture correction, and steady progression.",
      highlights: [
        "One-on-One Form & Technique Coaching",
        "Customized Progressive Overload Plans",
        "Body Composition & Goal Tracking",
      ],
      icon: "UserCheck",
      badge: "Guided Focus",
    },
    {
      id: "conditioning",
      name: "CONDITIONING",
      tagline: "Improve athletic fitness and endurance.",
      description:
        "Cardiovascular and metabolic conditioning stations to enhance lung capacity, stamina, heart health, and high calorie burn.",
      highlights: [
        "Commercial Grade Treadmills & Ellipticals",
        "HIIT & Metabolic Conditioning Blocks",
        "Stamina & Recovery Acceleration",
      ],
      icon: "Flame",
      badge: "Endurance",
    },
    {
      id: "cross-training",
      name: "CROSS TRAINING",
      tagline: "Train beyond the ordinary.",
      description:
        "High-output functional athletic movement combining bodyweight dynamics, kettlebell work, and explosive compound drills.",
      highlights: [
        "Dynamic Functional Fitness Floor",
        "Agility, Mobility & Core Conditioning",
        "Full-Body Functional Movement Patterns",
      ],
      icon: "Zap",
      badge: "High Energy",
    },
    {
      id: "aerobics",
      name: "AEROBICS",
      tagline: "Movement and conditioning.",
      description:
        "Rhythmic cardiovascular fitness training that combines fast-paced movement, agility, and core activation in an energetic environment.",
      highlights: [
        "Rhythmic Cardio Conditioning",
        "High Energy Calorie Burn",
        "Coordination & Full Body Agility",
      ],
      icon: "Activity",
      badge: "Cardio Focus",
    },
    {
      id: "yoga",
      name: "YOGA",
      tagline: "Mobility, balance and control.",
      description:
        "Restorative mobility, deep stretching, joint flexibility, and breathing control to balance intense strength training and accelerate recovery.",
      highlights: [
        "Deep Muscle & Joint Mobility",
        "Postural Alignment & Balance",
        "Breathing Control & Active Recovery",
      ],
      icon: "HeartPulse",
      badge: "Mind & Mobility",
    },
  ] as ServiceItem[],
  equipmentCategories: [
    {
      id: "strength-zone",
      title: "STRENGTH & RESISTANCE",
      subtitle: "Plate-loaded and selectorized machines",
      description:
        "Engineered for heavy lifters and bodybuilding enthusiasts with biomechanically aligned motion paths and rugged steel construction.",
      items: [
        { name: "Heavy-Duty Power Cages & Squat Racks", specs: "Multi-grip pull-up bars & safety spotters" },
        { name: "Plate-Loaded Leg Press & Hack Squat", specs: "High-capacity heavy gauge steel sleds" },
        { name: "Lat Pulldown & Low Row Cable Stations", specs: "Smooth dual pulley tension systems" },
        { name: "Chest Press & Incline Leverage Benches", specs: "Ergonomic high-density foam support" },
      ],
      accentColor: "#E50914",
    },
    {
      id: "cardio-zone",
      title: "CARDIO SUITE",
      subtitle: "Commercial grade endurance equipment",
      description:
        "Cardio stations featuring multi-program consoles to track heart rate, distance, and calorie expenditure in air-conditioned comfort.",
      items: [
        { name: "Commercial Motorized Treadmills", specs: "Incline gradient & shock absorption belts" },
        { name: "Elliptical Cross Trainers", specs: "Zero-impact magnetic resistance flywheels" },
        { name: "Stationary & Spin Cycles", specs: "Adjustable sprint tension & racing saddles" },
      ],
      accentColor: "#988686",
    },
    {
      id: "free-weights",
      title: "FREE WEIGHTS ARENA",
      subtitle: "Cast iron dumbbells and Olympic barbells",
      description:
        "Wide dumbbell section paired with Olympic knurled bars and cast-iron bumper plates over high-impact rubber gym flooring.",
      items: [
        { name: "Complete Rubber Hex & Iron Dumbbell Rack", specs: "Progressive increments up to heavy tiers" },
        { name: "Olympic 28mm & 50mm Barbell Bars", specs: "Medium aggressive knurling & brass bushings" },
        { name: "Multi-Angle Adjustable Benches", specs: "Incline, flat, and decline lock mechanisms" },
        { name: "Cast Iron & Tri-Grip Weight Plates", specs: "Standard 2-inch Olympic bore plates" },
      ],
      accentColor: "#D1D0D0",
    },
    {
      id: "functional-zone",
      title: "FUNCTIONAL & AMENITIES",
      subtitle: "Mobility, recovery and facilities",
      description:
        "Spacious open floor for bodyweight exercises, plyometrics, plus hygienic locker rooms and restorative steam facilities.",
      items: [
        { name: "Spacious Open Stretching & Functional Mat Area", specs: "High-density shock absorbent floor" },
        { name: "Steam Bath Facility", specs: "Restorative post-workout heat therapy" },
        { name: "Air Conditioned Workout Floor", specs: "Continuous ventilation & climate control" },
        { name: "Clean Changing & Locker Facilities", specs: "Secure storage for workout gear" },
      ],
      accentColor: "#5C4E4E",
    },
  ] as EquipmentCategory[],
  reviews: [
    {
      id: "r1",
      author: "Verified Member",
      rating: 5,
      date: "Google Verified Review",
      badge: "Active Lifter",
      quote: "Best Gym in purulia, supportive, nice machines and friendly env.",
      review:
        "The equipment selection is top tier for Purulia. The trainers are always supportive and the environment keeps you pushed to hit your maximum every session.",
    },
    {
      id: "r2",
      author: "Local Member",
      rating: 5,
      date: "Google Verified Review",
      badge: "Fitness Enthusiast",
      quote: "Modern machines, great hygiene and motivating vibe.",
      review:
        "Clean atmosphere, well-maintained air conditioned floors, and heavy dumbbells for serious strength progression. Highly recommended fitness centre.",
    },
    {
      id: "r3",
      author: "Daily Athlete",
      rating: 5,
      date: "Google Verified Review",
      badge: "Strength Training",
      quote: "The coaching and atmosphere here is unmatched.",
      review:
        "From early morning 6 AM slots to late evening workouts, Peter's Gym provides the complete package for anyone serious about body transformation.",
    },
  ] as ReviewItem[],
  trainers: [
    {
      id: "coach-1",
      role: "Head Strength Coach",
      specialization: "Hypertrophy & Powerlifting",
      status: "coming_soon",
      experiencePlaceholder: "Certified Strength Specialist",
    },
    {
      id: "coach-2",
      role: "Personal Trainer",
      specialization: "Weight Loss & Transformation",
      status: "coming_soon",
      experiencePlaceholder: "Functional Fitness Specialist",
    },
    {
      id: "coach-3",
      role: "Conditioning & Yoga Coach",
      specialization: "Mobility & Cardiovascular Health",
      status: "coming_soon",
      experiencePlaceholder: "Mobility & Posture Instructor",
    },
  ] as TrainerSlot[],
  gallery: [
    {
      id: "g1",
      title: "Heavy Iron & Dumbbell Zone",
      category: "Free Weights",
      caption: "Precision knurled iron dumbbells and adjustable benches",
      image: "/images/gallery/heavy-iron.jpg",
    },
    {
      id: "g2",
      title: "Power Cages & Squat Stations",
      category: "Strength",
      caption: "Heavy duty steel cages built for maximum load capacity",
      image: "/images/gallery/power-cages.jpg",
    },
    {
      id: "g3",
      title: "Cardio & Endurance Arena",
      category: "Cardio",
      caption: "Commercial treadmills and elliptical trainers",
      image: "/images/gallery/cardio-arena.jpg",
    },
    {
      id: "g4",
      title: "Plate-Loaded Machine Floor",
      category: "Machines",
      caption: "Biomechanical leverage machines for isolated muscle growth",
      image: "/images/gallery/machine-floor.jpg",
    },
    {
      id: "g5",
      title: "Functional & Mobility Space",
      category: "Functional",
      caption: "Clean high-grip flooring for agility drills and stretching",
      image: "/images/gallery/functional-turf.jpg",
    },
    {
      id: "g6",
      title: "Steam & Recovery Facility",
      category: "Amenities",
      caption: "Post-workout heat therapy and wellness amenities",
      image: "/images/gallery/steam-recovery.jpg",
    },
  ],
};

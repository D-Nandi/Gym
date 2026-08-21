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
  name: "SM Fitness",
  legalName: "SM Fitness Purulia (এসএম ফিটনেস)",
  tagline: "FORGE YOUR ULTIMATE PHYSIQUE.",
  subtitle: "Weight Training • Indoor Cycling • Strength & Conditioning",
  heroQuote: "BEST GYM IN PURULIA TOWN.",
  establishedYear: "2021",
  yearsInBusiness: "3+",
  rating: 4.9,
  reviewCount: 131,
  openHours: {
    display: "6:00 AM – 10:00 PM",
    days: "Monday – Saturday (6 AM – 10 PM)",
    disclaimer: "*Operating hours and special schedules may vary. Please call before visiting.",
    opensAt: 6,
    closesAt: 22,
  },
  contact: {
    primaryPhone: "+91 97492 58943",
    primaryPhoneRaw: "9749258943",
    secondaryPhone: "+91 97492 58943",
    secondaryPhoneRaw: "9749258943",
    whatsappPhoneRaw: "919749258943",
    emailPlaceholder: "contact@smfitnesspurulia.in",
    address: {
      street: "S C Sen Road (Beside Nilkuthidanga Club)",
      area: "Nilkuthidanga / Chowk Bazar",
      city: "Purulia",
      state: "West Bengal",
      postalCode: "723101",
      country: "India",
      mapsQuery: "SM+Fitness+SC+Sen+Road+Nilkuthidanga+Purulia+West+Bengal+723101",
      embedCoordinates: {
        lat: 23.3320,
        lng: 86.3685,
      },
    },
  },
  stats: [
    {
      value: "4.9★",
      label: "Google Rating",
      subtext: "131+ Verified Reviews",
    },
    {
      value: "3+ Yrs",
      label: "In Business",
      subtext: "Premier Purulia Fitness Hub",
    },
    {
      value: "6 AM – 10 PM",
      label: "Mon – Sat",
      subtext: "16-Hour Daily Access",
    },
    {
      value: "100%",
      label: "Commercial Setup",
      subtext: "Cycling & Weight Training",
    },
  ],
  services: [
    {
      id: "weight-training",
      name: "WEIGHT TRAINING",
      tagline: "Build raw strength and dense muscle.",
      description:
        "Comprehensive free-weight and plate-loaded resistance training with heavy Olympic bars, dumbbell tiers, and targeted leverage machines for progressive overload.",
      highlights: [
        "Heavy Olympic Barbells & Cast Iron Plates",
        "Multi-Angle Bench Press & Power Stations",
        "Preacher Curl & Bicep Isolation Machines",
      ],
      icon: "Dumbbell",
      badge: "Flagship Service",
    },
    {
      id: "indoor-cycling",
      name: "INDOOR CYCLING",
      tagline: "High-intensity cardio and stamina.",
      description:
        "Dedicated indoor cycling and spin stations engineered for high-calorie expenditure, cardiovascular endurance, and athletic stamina in climate-controlled comfort.",
      highlights: [
        "High-Resistance Cardio Spin Cycles",
        "Metabolic HIIT & Calorie Shred",
        "Stamina & Aerobic Conditioning",
      ],
      icon: "Activity",
      badge: "Flagship Service",
    },
    {
      id: "personal-training",
      name: "PERSONAL COACHING",
      tagline: "Direct 1-on-1 trainer guidance.",
      description:
        "Individualized fitness coaching with dedicated trainers on the gym floor focusing on posture correction, lifting mechanics, and goal-oriented workout routines.",
      highlights: [
        "One-on-One Form & Technique Guidance",
        "Targeted Progressive Overload Planning",
        "Continuous Body Composition Tracking",
      ],
      icon: "UserCheck",
      badge: "Guided Focus",
    },
    {
      id: "bodybuilding",
      name: "BODYBUILDING",
      tagline: "Hypertrophy & muscle sculpting.",
      description:
        "Structured resistance protocols to sculpt broad deltoids, striated chest plates, 8-pack core definitions, and wide V-taper lat width.",
      highlights: [
        "Compound Movement & Hypertrophy Protocols",
        "Upper & Lower Body Muscle Sculpting",
        "V-Taper Symmetry & Muscle Density",
      ],
      icon: "Flame",
      badge: "Elite Discipline",
    },
    {
      id: "fat-loss",
      name: "WEIGHT LOSS & DIET",
      tagline: "Shed fat while preserving lean muscle.",
      description:
        "Comprehensive transformation programs combining caloric expenditure, strength intervals, and practical nutrition consultations tailored to your lifestyle.",
      highlights: [
        "High-Output Fat Loss Workout Blocks",
        "Personalized Calorie & Diet Guidance",
        "Sustainable Body Transformation Steps",
      ],
      icon: "Zap",
      badge: "High Energy",
    },
    {
      id: "general-fitness",
      name: "GENERAL FITNESS",
      tagline: "Mobility, stamina and daily energy.",
      description:
        "Full-body functional exercises, core strengthening, and joint mobility to maintain daily peak energy, posture alignment, and overall health.",
      highlights: [
        "Full-Body Agility & Mobility Training",
        "Core Activation & Postural Balance",
        "Stretching & Active Recovery Floor",
      ],
      icon: "HeartPulse",
      badge: "Health & Mobility",
    },
  ] as ServiceItem[],
  equipmentCategories: [
    {
      id: "strength-zone",
      title: "WEIGHT TRAINING & STRENGTH",
      subtitle: "Plate-loaded & leverage machines",
      description:
        "Built for serious lifters with heavy-duty red and black powder-coated steel frames, smooth cable pulleys, and biomechanically aligned motion paths.",
      items: [
        { name: "Heavy-Duty Incline & Flat Bench Press", specs: "High-density support & heavy load capacity" },
        { name: "Seated Preacher Curl & Bicep Machines", specs: "Isolated arm flexion with Olympic plate pegs" },
        { name: "Lat Pulldown & Dual Cable Crossover", specs: "Smooth dual pulley tension systems" },
        { name: "Power Racks & Squat Stations", specs: "Adjustable safety pins and pull-up bar grips" },
      ],
      accentColor: "#E50914",
    },
    {
      id: "cardio-zone",
      title: "CYCLING & CARDIO SUITE",
      subtitle: "Indoor spin bikes and conditioning",
      description:
        "Specialized indoor cycling arena featuring smooth magnetic flywheels, multi-position handlebars, and high-intensity sprint stations.",
      items: [
        { name: "Commercial Indoor Spin Cycles", specs: "Adjustable resistance flywheels & racing saddles" },
        { name: "Stationary Cardio Exercise Bikes", specs: "Smooth cadence and interval tracking" },
        { name: "HIIT Conditioning Cardio Floor", specs: "Designed for explosive fat burn workouts" },
      ],
      accentColor: "#988686",
    },
    {
      id: "free-weights",
      title: "FREE WEIGHTS ARENA",
      subtitle: "Rubber hex & cast-iron dumbbells",
      description:
        "Double-tier heavy steel dumbbell racks spanning beginner to advanced heavy poundages, paired with Olympic knurled barbells.",
      items: [
        { name: "Double-Tier Commercial Dumbbell Rack", specs: "Complete pairs of high-grip rubber hex dumbbells" },
        { name: "Olympic 50mm Weight Barbells", specs: "Precision knurled grip & smooth spin sleeves" },
        { name: "Cast Iron & Tri-Grip Weight Plates", specs: "Heavy Olympic standard 2-inch bore plates" },
        { name: "Multi-Angle Adjustable Utility Benches", specs: "Quick incline, flat, and decline locking" },
      ],
      accentColor: "#D1D0D0",
    },
    {
      id: "functional-zone",
      title: "ATMOSPHERE & AMENITIES",
      subtitle: "Floor aesthetics, mirrors and facilities",
      description:
        "Vibrant gym interior featuring high-contrast black and red shock-absorbing floor tiles, full-length mirror walls, and neon motivational murals.",
      items: [
        { name: "Shock-Absorbing Rubber Tile Flooring", specs: "Heavy-duty anti-slip black and red pattern" },
        { name: "Full-Length Mirrored Workout Walls", specs: "Optimal posture and lifting form monitoring" },
        { name: "Vibrant Neon & Graffiti Wall Art", specs: "'WE ARE READY NOW' motivational atmosphere" },
        { name: "Air Conditioned & Clean Ventilation", specs: "Continuous airflow and climate control" },
      ],
      accentColor: "#5C4E4E",
    },
  ] as EquipmentCategory[],
  reviews: [
    {
      id: "r1",
      author: "Verified Local Lifter",
      rating: 5,
      date: "Google Verified Review",
      badge: "Regular Member",
      quote: "Best gym in Purulia town, perfect atmosphere and best trainers.",
      review:
        "The best gym in Purulia town without a doubt. The equipment is top class, the ambience is energetic with great music, and the trainers guide you attentively on every single exercise.",
    },
    {
      id: "r2",
      author: "Purulia Fitness Member",
      rating: 5,
      date: "Google Verified Review",
      badge: "Weight Training",
      quote: "Amazing environment, friendly trainers and well equipped.",
      review:
        "Great setup with dedicated cycling and heavy weight training machines. Clean rubber floor, motivating vibe, and the trainers are always ready to help you correct your lifting posture.",
    },
    {
      id: "r3",
      author: "Daily Athlete",
      rating: 5,
      date: "Google Verified Review",
      badge: "Strength & Cardio",
      quote: "4.9 star rated for a reason. Top notch gym in Purulia.",
      review:
        "From early 6 AM morning slots to late evening workouts, SM Fitness provides the complete package for anyone serious about bodybuilding, fat loss, and strength transformation.",
    },
  ] as ReviewItem[],
  trainers: [
    {
      id: "coach-1",
      role: "Head Strength Coach",
      specialization: "Weight Training & Hypertrophy",
      status: "available",
      experiencePlaceholder: "Certified Strength Specialist",
    },
    {
      id: "coach-2",
      role: "Cycling & Cardio Coach",
      specialization: "Indoor Spin & Fat Loss",
      status: "available",
      experiencePlaceholder: "Cardio Conditioning Specialist",
    },
    {
      id: "coach-3",
      role: "Personal Transformation Coach",
      specialization: "1-on-1 Coaching & Diet Planning",
      status: "available",
      experiencePlaceholder: "Personal Fitness Specialist",
    },
  ] as TrainerSlot[],
  gallery: [
    {
      id: "g1",
      title: "Commercial Dumbbell Rack Aisle",
      category: "Free Weights",
      caption: "Double-tier rubber hex and cast iron dumbbells with multi-angle benches",
      image: "/images/gallery/heavy-iron.jpg",
    },
    {
      id: "g2",
      title: "Preacher Curl & Leverage Stations",
      category: "Strength",
      caption: "Red framework bicep preacher curl machines and heavy plate pegs",
      image: "/images/gallery/power-cages.jpg",
    },
    {
      id: "g3",
      title: "Indoor Cycling & Cardio Suite",
      category: "Cardio",
      caption: "Commercial spin bikes and stationary cycling stations for stamina",
      image: "/images/gallery/cardio-arena.jpg",
    },
    {
      id: "g4",
      title: "Plate-Loaded Machine Floor",
      category: "Machines",
      caption: "Bench press, lat pulldowns, and cable stations with smooth motion arcs",
      image: "/images/gallery/machine-floor.jpg",
    },
    {
      id: "g5",
      title: "Shock-Absorbing Rubber Floor",
      category: "Functional",
      caption: "High-density black and red checker tiles for heavy deadlifts and drops",
      image: "/images/gallery/functional-turf.jpg",
    },
    {
      id: "g6",
      title: "Motivational Art & Mirrored Walls",
      category: "Amenities",
      caption: "'WE ARE READY NOW' wall art, full-length mirrors, and climate control",
      image: "/images/gallery/steam-recovery.jpg",
    },
  ],
};


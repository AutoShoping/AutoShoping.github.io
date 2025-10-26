export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
}

import toolboxImg from "@/assets/products/toolbox-set.jpg";
import drillImg from "@/assets/products/cordless-drill.jpg";
import gardenHoseImg from "@/assets/products/garden-hose.jpg";
import ledLightImg from "@/assets/products/led-worklight.jpg";
import carVacuumImg from "@/assets/products/car-vacuum.jpg";
import pressureWasherImg from "@/assets/products/pressure-washer.jpg";
import bluetoothSpeakerImg from "@/assets/products/bluetooth-speaker.jpg";
import campingTentImg from "@/assets/products/camping-tent.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Professional Tool Kit Set - 52 Pieces",
    price: 89.99,
    originalPrice: 149.99,
    image: toolboxImg,
    discount: 40,
    category: "tools",
    description: "Complete professional-grade tool kit with wrenches, sockets, screwdrivers and more in a durable red carrying case.",
    features: [
      "52-piece comprehensive tool set",
      "Chrome vanadium steel construction",
      "Durable red carrying case",
      "Perfect for automotive and home repairs",
      "Lifetime warranty included"
    ],
    inStock: true
  },
  {
    id: "2",
    name: "Heavy Duty Cordless Power Drill with Battery",
    price: 79.99,
    originalPrice: 129.99,
    image: drillImg,
    discount: 38,
    category: "tools",
    description: "Professional cordless drill with powerful motor, rechargeable battery, and multiple speed settings for all drilling needs.",
    features: [
      "20V lithium-ion battery",
      "Variable speed control",
      "LED work light",
      "Includes drill bits and case",
      "Fast charging technology"
    ],
    inStock: true
  },
  {
    id: "3",
    name: "Garden Hose Reel with 100ft Hose",
    price: 64.99,
    originalPrice: 99.99,
    image: gardenHoseImg,
    discount: 35,
    category: "home-garden",
    description: "Heavy-duty garden hose reel with 100ft reinforced hose, perfect for all your outdoor watering needs.",
    features: [
      "100ft reinforced garden hose",
      "Sturdy reel with handle",
      "Multiple spray patterns",
      "Kink-resistant design",
      "Weather-resistant construction"
    ],
    inStock: true
  },
  {
    id: "4",
    name: "LED Tactical Work Light Flashlight",
    price: 34.99,
    originalPrice: 54.99,
    image: ledLightImg,
    discount: 36,
    category: "tools",
    description: "Ultra-bright LED tactical flashlight with multiple modes, perfect for work, camping, and emergencies.",
    features: [
      "Ultra-bright LED technology",
      "Multiple lighting modes",
      "Water-resistant design",
      "Rechargeable battery",
      "Durable aluminum construction"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "Car Vacuum Cleaner Handheld",
    price: 44.99,
    originalPrice: 69.99,
    image: carVacuumImg,
    discount: 36,
    category: "automotive",
    description: "Powerful handheld car vacuum with strong suction for thorough vehicle cleaning, includes multiple attachments.",
    features: [
      "High-power suction",
      "Portable and lightweight",
      "Multiple attachment tools",
      "12V car adapter included",
      "Easy to empty dust container"
    ],
    inStock: true
  },
  {
    id: "6",
    name: "Electric Pressure Washer 2000 PSI",
    price: 149.99,
    originalPrice: 249.99,
    image: pressureWasherImg,
    discount: 40,
    category: "home-garden",
    description: "Professional electric pressure washer with 2000 PSI power for cleaning cars, driveways, and outdoor surfaces.",
    features: [
      "2000 PSI cleaning power",
      "Adjustable spray nozzle",
      "35ft high-pressure hose",
      "Built-in detergent tank",
      "Compact storage design"
    ],
    inStock: true
  },
  {
    id: "7",
    name: "Portable Bluetooth Speaker Waterproof",
    price: 39.99,
    originalPrice: 69.99,
    image: bluetoothSpeakerImg,
    discount: 43,
    category: "electronics",
    description: "Premium Bluetooth speaker with 360-degree sound, waterproof design, and long battery life.",
    features: [
      "360-degree premium sound",
      "IPX7 waterproof rating",
      "12-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls"
    ],
    inStock: true
  },
  {
    id: "8",
    name: "4-Person Camping Tent Easy Setup",
    price: 89.99,
    originalPrice: 149.99,
    image: campingTentImg,
    discount: 40,
    category: "outdoors",
    description: "Spacious 4-person camping tent with easy setup, weather-resistant design, and excellent ventilation.",
    features: [
      "Quick 5-minute setup",
      "Weather-resistant materials",
      "Fits 4 people comfortably",
      "Multiple ventilation windows",
      "Includes carry bag and stakes"
    ],
    inStock: true
  },
  {
    id: "9",
    name: "Spray Stealth Plate Defender 30ml",
    price: 11.99,
    originalPrice: 19.99,
    image: toolboxImg,
    discount: 40,
    category: "automotive",
    description: "Professional-grade license plate defender spray that provides invisible protection for your vehicle's license plates.",
    features: [
      "Invisible protection layer",
      "Weather resistant formula",
      "Easy application",
      "Long-lasting effectiveness",
      "Fits all car license plates"
    ],
    inStock: true
  },
  {
    id: "10",
    name: "Car Battery Tester LCD Display",
    price: 52.99,
    image: drillImg,
    category: "tools",
    description: "Professional-grade battery tester with LCD display for accurate diagnostics.",
    features: [
      "Clear LCD display",
      "Digital analysis system",
      "Works with 12V batteries",
      "Easy to read results",
      "Portable design"
    ],
    inStock: true
  },
  {
    id: "11",
    name: "Bamboo Over The Toilet Storage Shelf 2-Tier",
    price: 24.99,
    image: gardenHoseImg,
    category: "home-garden",
    description: "Space-saving bamboo storage solution for small bathrooms.",
    features: [
      "Natural bamboo construction",
      "2-tier storage design",
      "Easy assembly",
      "Space-saving solution",
      "Fits over standard toilets"
    ],
    inStock: true
  },
  {
    id: "12",
    name: "Hand Crank Ice Shaver Portable",
    price: 20.99,
    image: campingTentImg,
    category: "home-garden",
    description: "Manual ice shaver perfect for making snow cones, slushies, and frozen treats.",
    features: [
      "Manual hand crank operation",
      "No electricity needed",
      "Portable design",
      "Easy to clean",
      "Durable construction"
    ],
    inStock: true
  },
  {
    id: "13",
    name: "Car Dashboard Camera HD 1080P",
    price: 69.99,
    originalPrice: 99.99,
    image: carVacuumImg,
    discount: 30,
    category: "automotive",
    description: "High-definition dashboard camera with night vision and loop recording for vehicle security.",
    features: [
      "Full HD 1080P recording",
      "Night vision capability",
      "Loop recording function",
      "G-sensor for collision detection",
      "Wide-angle lens 170°"
    ],
    inStock: true
  },
  {
    id: "14",
    name: "Automotive OBD2 Scanner Diagnostic Tool",
    price: 39.99,
    originalPrice: 59.99,
    image: drillImg,
    discount: 33,
    category: "automotive",
    description: "Professional OBD2 scanner for reading and clearing engine fault codes.",
    features: [
      "Read and clear error codes",
      "Works with all OBD2 vehicles",
      "LCD display screen",
      "Easy plug and play",
      "Real-time data monitoring"
    ],
    inStock: true
  },
  {
    id: "15",
    name: "Car Jump Starter Power Bank 12000mAh",
    price: 79.99,
    originalPrice: 119.99,
    image: carVacuumImg,
    discount: 33,
    category: "automotive",
    description: "Portable jump starter with built-in power bank for charging devices.",
    features: [
      "12000mAh high capacity",
      "Jump starts 12V vehicles",
      "USB charging ports",
      "Built-in LED flashlight",
      "Safety protection features"
    ],
    inStock: true
  },
  {
    id: "16",
    name: "Tire Pressure Monitoring System TPMS",
    price: 49.99,
    originalPrice: 79.99,
    image: toolboxImg,
    discount: 37,
    category: "automotive",
    description: "Real-time tire pressure monitoring system for safer driving.",
    features: [
      "4 external sensors included",
      "LCD display monitor",
      "Real-time pressure alerts",
      "Easy installation",
      "Battery powered sensors"
    ],
    inStock: true
  },
  {
    id: "17",
    name: "Mechanic Tool Set 120 Pieces Professional",
    price: 129.99,
    originalPrice: 199.99,
    image: toolboxImg,
    discount: 35,
    category: "tools",
    description: "Comprehensive professional mechanic tool set with ratchets, sockets, and more.",
    features: [
      "120-piece complete set",
      "Chrome vanadium steel",
      "Multiple socket sizes",
      "Heavy-duty storage case",
      "Professional grade quality"
    ],
    inStock: true
  },
  {
    id: "18",
    name: "Electric Impact Wrench 1/2 Drive",
    price: 89.99,
    originalPrice: 139.99,
    image: drillImg,
    discount: 36,
    category: "tools",
    description: "High torque electric impact wrench for automotive and construction work.",
    features: [
      "High torque 450 Nm",
      "1/2 inch drive size",
      "Variable speed control",
      "Forward and reverse",
      "Includes socket set"
    ],
    inStock: true
  },
  {
    id: "19",
    name: "Laser Level Self-Leveling Green Beam",
    price: 54.99,
    originalPrice: 89.99,
    image: ledLightImg,
    discount: 39,
    category: "tools",
    description: "Professional self-leveling laser level for precise alignment and measurements.",
    features: [
      "Green laser beam technology",
      "Self-leveling function",
      "360-degree rotation",
      "Indoor and outdoor use",
      "Tripod mountable"
    ],
    inStock: true
  },
  {
    id: "20",
    name: "Adjustable Wrench Set 3-Piece",
    price: 29.99,
    originalPrice: 44.99,
    image: toolboxImg,
    discount: 33,
    category: "tools",
    description: "Premium adjustable wrench set with ergonomic grip handles.",
    features: [
      "3 different sizes included",
      "Chrome-plated finish",
      "Ergonomic grip handles",
      "Wide jaw opening",
      "Durable construction"
    ],
    inStock: true
  },
  {
    id: "21",
    name: "Garden Pruning Shears Set Professional",
    price: 34.99,
    originalPrice: 54.99,
    image: gardenHoseImg,
    discount: 36,
    category: "home-garden",
    description: "Professional-grade pruning shears for gardening and landscaping.",
    features: [
      "Stainless steel blades",
      "Ergonomic design",
      "Safety lock included",
      "Sharp precision cutting",
      "Comfortable grip handles"
    ],
    inStock: true
  },
  {
    id: "22",
    name: "Solar Powered Garden Lights 8-Pack",
    price: 39.99,
    originalPrice: 69.99,
    image: ledLightImg,
    discount: 43,
    category: "home-garden",
    description: "Solar-powered LED garden pathway lights, no wiring required.",
    features: [
      "8 lights included",
      "Solar powered, eco-friendly",
      "Auto on/off sensor",
      "Weather resistant",
      "Easy ground installation"
    ],
    inStock: true
  },
  {
    id: "23",
    name: "Lawn Sprinkler System Automatic",
    price: 44.99,
    originalPrice: 74.99,
    image: pressureWasherImg,
    discount: 40,
    category: "home-garden",
    description: "Automatic lawn sprinkler system with adjustable spray patterns.",
    features: [
      "360-degree coverage",
      "Adjustable spray patterns",
      "Timer function",
      "Covers large areas",
      "Easy setup and use"
    ],
    inStock: true
  },
  {
    id: "24",
    name: "Garden Tool Organizer Wall Mount",
    price: 27.99,
    originalPrice: 44.99,
    image: toolboxImg,
    discount: 38,
    category: "home-garden",
    description: "Heavy-duty wall-mounted garden tool organizer and storage rack.",
    features: [
      "Holds up to 40 tools",
      "Wall-mounted design",
      "Adjustable hooks",
      "Space-saving solution",
      "Durable steel construction"
    ],
    inStock: true
  },
  {
    id: "25",
    name: "Wireless Earbuds Bluetooth 5.3 Noise Cancelling",
    price: 49.99,
    originalPrice: 89.99,
    image: bluetoothSpeakerImg,
    discount: 44,
    category: "electronics",
    description: "Premium wireless earbuds with active noise cancellation and long battery life.",
    features: [
      "Bluetooth 5.3 connectivity",
      "Active noise cancellation",
      "30-hour total battery life",
      "IPX7 waterproof rating",
      "Touch control features"
    ],
    inStock: true
  },
  {
    id: "26",
    name: "Smart Watch Fitness Tracker Heart Rate Monitor",
    price: 59.99,
    originalPrice: 99.99,
    image: bluetoothSpeakerImg,
    discount: 40,
    category: "electronics",
    description: "Advanced fitness tracker smartwatch with heart rate monitoring and activity tracking.",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Multiple sport modes",
      "7-day battery life",
      "Water-resistant IP68"
    ],
    inStock: true
  },
  {
    id: "27",
    name: "Portable Power Station 300W Battery Generator",
    price: 199.99,
    originalPrice: 299.99,
    image: pressureWasherImg,
    discount: 33,
    category: "electronics",
    description: "Portable power station for camping, emergencies, and outdoor activities.",
    features: [
      "300W continuous power",
      "Multiple output ports",
      "Solar panel compatible",
      "LCD display screen",
      "Portable handle design"
    ],
    inStock: true
  },
  {
    id: "28",
    name: "USB-C Hub 7-in-1 Adapter Multi-Port",
    price: 29.99,
    originalPrice: 49.99,
    image: drillImg,
    discount: 40,
    category: "electronics",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
    features: [
      "7 ports in one hub",
      "4K HDMI output",
      "USB 3.0 high speed",
      "SD/TF card reader",
      "Aluminum alloy design"
    ],
    inStock: true
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);

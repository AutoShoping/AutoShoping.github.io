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
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);

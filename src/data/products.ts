
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
    name: "Professional Mechanic Tool Kit - 52 Pieces Chrome Vanadium",
    price: 89.99,
    originalPrice: 149.99,
    image: toolboxImg,
    discount: 40,
    category: "tools",
    description: "Complete professional-grade tool kit with wrenches, sockets, screwdrivers and more in a durable red carrying case. Perfect for automotive repairs, home maintenance, and professional mechanics.",
    features: [
      "52-piece comprehensive tool set",
      "Chrome vanadium steel construction for durability",
      "Durable red carrying case with organized compartments",
      "Perfect for automotive and home repairs",
      "Lifetime warranty included"
    ],
    inStock: true
  },
  {
    id: "2",
    name: "Makita-Style Heavy Duty Cordless Power Drill 20V with Battery Pack",
    price: 79.99,
    originalPrice: 129.99,
    image: drillImg,
    discount: 38,
    category: "tools",
    description: "Professional cordless drill with powerful motor, rechargeable lithium-ion battery, and multiple speed settings. Ideal for drilling wood, metal, and plastic with precision and ease.",
    features: [
      "20V lithium-ion battery with extended runtime",
      "Variable speed control (0-1500 RPM)",
      "LED work light for dark spaces",
      "Includes 15-piece drill bits and hard case",
      "Fast charging technology (1 hour full charge)"
    ],
    inStock: true
  },
  {
    id: "3",
    name: "Premium Garden Hose Reel Cart with 100ft Reinforced Rubber Hose",
    price: 64.99,
    originalPrice: 99.99,
    image: gardenHoseImg,
    discount: 35,
    category: "home-garden",
    description: "Heavy-duty garden hose reel cart with 100ft reinforced rubber hose, perfect for all your outdoor watering needs. Features smooth rolling wheels and ergonomic design.",
    features: [
      "100ft reinforced rubber garden hose",
      "Sturdy metal reel with comfortable handle",
      "8-pattern spray nozzle included",
      "Kink-resistant and weather-proof design",
      "Easy-rolling cart with durable wheels"
    ],
    inStock: true
  },
  {
    id: "4",
    name: "Ultra-Bright LED Tactical Work Light Flashlight 5000 Lumens",
    price: 34.99,
    originalPrice: 54.99,
    image: ledLightImg,
    discount: 36,
    category: "tools",
    description: "Ultra-bright LED tactical flashlight with 5000 lumens output and multiple modes. Perfect for work, camping, emergencies, and outdoor adventures.",
    features: [
      "Ultra-bright 5000 lumens LED technology",
      "5 lighting modes (high, medium, low, strobe, SOS)",
      "IPX7 water-resistant design",
      "Rechargeable 5000mAh battery",
      "Aircraft-grade aluminum construction"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "High-Power Car Vacuum Cleaner Handheld 120W with HEPA Filter",
    price: 44.99,
    originalPrice: 69.99,
    image: carVacuumImg,
    discount: 36,
    category: "automotive",
    description: "Powerful 120W handheld car vacuum with strong suction and HEPA filtration. Includes multiple attachments for thorough vehicle cleaning.",
    features: [
      "120W high-power suction motor",
      "HEPA filter traps 99.97% of particles",
      "5 specialized attachment tools",
      "16-foot power cord with 12V car adapter",
      "Washable and reusable dust container"
    ],
    inStock: true
  },
  {
    id: "6",
    name: "Electric High Pressure Washer 2000 PSI Professional Grade",
    price: 149.99,
    originalPrice: 249.99,
    image: pressureWasherImg,
    discount: 40,
    category: "home-garden",
    description: "Professional electric pressure washer with 2000 PSI power for cleaning cars, driveways, decks, and outdoor surfaces. Includes multiple nozzle attachments.",
    features: [
      "2000 PSI maximum cleaning power",
      "5 quick-connect nozzle tips (0°, 15°, 25°, 40°, soap)",
      "35ft high-pressure hose with anti-kink technology",
      "Built-in 1.2L detergent tank",
      "Compact storage design with onboard accessory storage"
    ],
    inStock: true
  },
  {
    id: "7",
    name: "Portable Bluetooth Speaker Waterproof IPX7 - 360° Surround Sound",
    price: 39.99,
    originalPrice: 69.99,
    image: bluetoothSpeakerImg,
    discount: 43,
    category: "electronics",
    description: "Premium Bluetooth speaker with 360-degree surround sound, waterproof design, and impressive 12-hour battery life. Perfect for outdoor adventures and poolside entertainment.",
    features: [
      "360-degree premium HD sound with bass boost",
      "IPX7 waterproof rating - submersible up to 3ft",
      "12-hour continuous playback battery",
      "Bluetooth 5.0 with 100ft wireless range",
      "Built-in microphone for hands-free calling"
    ],
    inStock: true
  },
  {
    id: "8",
    name: "Family Camping Tent 4-Person Easy Setup Waterproof",
    price: 89.99,
    originalPrice: 149.99,
    image: campingTentImg,
    discount: 40,
    category: "outdoors",
    description: "Spacious 4-person camping tent with easy 5-minute setup, weather-resistant design, and excellent ventilation. Includes rainfly and gear storage vestibule.",
    features: [
      "Quick 5-minute color-coded setup system",
      "Weather-resistant polyester with 1500mm waterproof coating",
      "Comfortably fits 4 adults with sleeping bags",
      "Multiple mesh windows for ventilation",
      "Includes carry bag, stakes, and guy lines"
    ],
    inStock: true
  },
  {
    id: "9",
    name: "Anti-Photo License Plate Spray Shield - Infrared Reflective Coating",
    price: 11.99,
    originalPrice: 19.99,
    image: toolboxImg,
    discount: 40,
    category: "automotive",
    description: "Professional-grade license plate defender spray with infrared reflective coating. Provides invisible protection against speed cameras and red light cameras.",
    features: [
      "Invisible infrared reflective protection layer",
      "Weather resistant formula lasts 6+ months",
      "Easy spray application - dries in minutes",
      "Long-lasting effectiveness against camera flash",
      "Universal - fits all vehicle license plates"
    ],
    inStock: true
  },
  {
    id: "10",
    name: "Digital Car Battery Tester Analyzer with LCD Display 12V/24V",
    price: 52.99,
    image: drillImg,
    category: "tools",
    description: "Professional-grade automotive battery tester with digital LCD display for accurate diagnostics. Tests 12V and 24V batteries with CCA, voltage, and resistance analysis.",
    features: [
      "Large backlit LCD display for easy reading",
      "Advanced digital analysis system",
      "Tests both 12V and 24V batteries",
      "CCA, voltage, and internal resistance testing",
      "Compact and portable design with protective case"
    ],
    inStock: true
  },
  {
    id: "11",
    name: "Natural Bamboo Over-Toilet Storage Rack 2-Tier Organizer",
    price: 24.99,
    image: gardenHoseImg,
    category: "home-garden",
    description: "Elegant space-saving bamboo storage solution for small bathrooms. Features 2 spacious tiers and fits over standard toilets.",
    features: [
      "100% natural bamboo eco-friendly construction",
      "2-tier design with spacious storage shelves",
      "Easy 15-minute assembly with included tools",
      "Space-saving vertical design",
      "Fits over standard and elongated toilets"
    ],
    inStock: true
  },
  {
    id: "12",
    name: "Manual Hand Crank Ice Shaver Machine - Stainless Steel Blades",
    price: 20.99,
    image: campingTentImg,
    category: "home-garden",
    description: "Manual ice shaver perfect for making snow cones, slushies, and frozen treats at home. Features razor-sharp stainless steel blades.",
    features: [
      "Heavy-duty manual hand crank operation",
      "No electricity needed - eco-friendly",
      "Stainless steel precision blades",
      "Easy to clean removable parts",
      "Durable ABS construction with suction base"
    ],
    inStock: true
  },
  {
    id: "13",
    name: "Dashboard Camera Dual Lens HD 1080P Front and Rear",
    price: 69.99,
    originalPrice: 99.99,
    image: carVacuumImg,
    discount: 30,
    category: "automotive",
    description: "High-definition dual-lens dashboard camera with front and rear recording, night vision, and loop recording for complete vehicle security.",
    features: [
      "Full HD 1080P front and 720P rear recording",
      "Superior night vision with WDR technology",
      "Continuous loop recording with auto-overwrite",
      "G-sensor for automatic collision detection",
      "170° wide-angle front lens + 140° rear lens"
    ],
    inStock: true
  },
  {
    id: "14",
    name: "Professional OBD2 Scanner Code Reader Diagnostic Tool",
    price: 39.99,
    originalPrice: 59.99,
    image: drillImg,
    discount: 33,
    category: "automotive",
    description: "Professional OBD2 scanner for reading and clearing engine fault codes. Works with all OBD2 compatible vehicles manufactured after 1996.",
    features: [
      "Read and clear DTCs (Diagnostic Trouble Codes)",
      "Compatible with all 1996+ OBD2 vehicles",
      "Large color LCD display screen",
      "Simple plug-and-play operation",
      "Real-time data monitoring and graphing"
    ],
    inStock: true
  },
  {
    id: "15",
    name: "Portable Jump Starter Power Bank 12000mAh with Air Compressor",
    price: 79.99,
    originalPrice: 119.99,
    image: carVacuumImg,
    discount: 33,
    category: "automotive",
    description: "Multi-function portable jump starter with built-in power bank and air compressor. Jump starts vehicles up to 6.0L gas or 3.0L diesel engines.",
    features: [
      "12000mAh ultra-high capacity battery",
      "Jump starts up to 6.0L gas engines",
      "Built-in 150 PSI air compressor",
      "Dual USB charging ports for devices",
      "LED flashlight with SOS and strobe modes"
    ],
    inStock: true
  },
  {
    id: "16",
    name: "Wireless Tire Pressure Monitoring System TPMS with 4 Sensors",
    price: 49.99,
    originalPrice: 79.99,
    image: toolboxImg,
    discount: 37,
    category: "automotive",
    description: "Real-time wireless tire pressure monitoring system with 4 external sensors for safer driving and improved fuel efficiency.",
    features: [
      "4 wireless external sensors included",
      "Solar-powered LCD display monitor",
      "Real-time pressure and temperature alerts",
      "Easy DIY installation in minutes",
      "Long-lasting sensor batteries (2+ years)"
    ],
    inStock: true
  },
  {
    id: "17",
    name: "Master Mechanic Tool Set 120 Pieces Professional Grade",
    price: 129.99,
    originalPrice: 199.99,
    image: toolboxImg,
    discount: 35,
    category: "tools",
    description: "Comprehensive professional mechanic tool set with ratchets, sockets, wrenches, and specialty tools. Everything you need for automotive and home repairs.",
    features: [
      "120-piece complete professional tool set",
      "Premium chrome vanadium steel construction",
      "SAE and metric socket sizes included",
      "Heavy-duty blow-molded storage case",
      "Meets or exceeds ANSI standards"
    ],
    inStock: true
  },
  {
    id: "18",
    name: "Cordless Electric Impact Wrench 1/2 Drive 450Nm Torque",
    price: 89.99,
    originalPrice: 139.99,
    image: drillImg,
    discount: 36,
    category: "tools",
    description: "High torque cordless electric impact wrench for automotive and construction work. Features brushless motor and variable speed control.",
    features: [
      "Powerful 450 Nm max torque",
      "Brushless motor for longer life",
      "Variable speed trigger control",
      "Forward and reverse operation",
      "Includes 4Ah battery, charger, and 6-piece socket set"
    ],
    inStock: true
  },
  {
    id: "19",
    name: "Self-Leveling Green Laser Level 360° Rotary with Tripod",
    price: 54.99,
    originalPrice: 89.99,
    image: ledLightImg,
    discount: 39,
    category: "tools",
    description: "Professional self-leveling green laser level with 360-degree coverage for precise alignment, leveling, and layout work.",
    features: [
      "Bright green laser beam (4x brighter than red)",
      "Self-leveling within 4° with audible alert",
      "360-degree horizontal and vertical lines",
      "Indoor and outdoor use up to 100ft",
      "Includes adjustable tripod and carrying case"
    ],
    inStock: true
  },
  {
    id: "20",
    name: "Premium Adjustable Wrench Set 3-Piece Extra Wide Jaw",
    price: 29.99,
    originalPrice: 44.99,
    image: toolboxImg,
    discount: 33,
    category: "tools",
    description: "Premium adjustable wrench set with extra-wide jaw capacity and ergonomic non-slip grip handles. Includes 6-inch, 8-inch, and 10-inch sizes.",
    features: [
      "3 sizes: 6-inch, 8-inch, and 10-inch",
      "Chrome-plated carbon steel construction",
      "Ergonomic cushion grip handles",
      "Extra-wide jaw opening capacity",
      "Precision-machined jaws for tight grip"
    ],
    inStock: true
  },
  {
    id: "21",
    name: "Titanium Coated Garden Pruning Shears Set Professional",
    price: 34.99,
    originalPrice: 54.99,
    image: gardenHoseImg,
    discount: 36,
    category: "home-garden",
    description: "Professional-grade titanium coated pruning shears for gardening and landscaping. Features ultra-sharp blades and comfortable ergonomic design.",
    features: [
      "Titanium coated stainless steel blades",
      "Precision-ground sharp cutting edges",
      "Ergonomic soft-grip handles reduce fatigue",
      "Safety lock for secure storage",
      "Cuts branches up to 3/4 inch diameter"
    ],
    inStock: true
  },
  {
    id: "22",
    name: "Solar Garden Lights Outdoor Pathway 8-Pack Stainless Steel",
    price: 39.99,
    originalPrice: 69.99,
    image: ledLightImg,
    discount: 43,
    category: "home-garden",
    description: "Solar-powered LED garden pathway lights with automatic dusk-to-dawn operation. No wiring required, eco-friendly outdoor lighting solution.",
    features: [
      "8 solar lights with premium stainless steel finish",
      "Bright LED bulbs with warm white glow",
      "Auto on/off dusk-to-dawn sensor",
      "All-weather resistant construction (IP65)",
      "Easy stake installation - no wiring needed"
    ],
    inStock: true
  },
  {
    id: "23",
    name: "Automatic Lawn Sprinkler System Oscillating 360° Coverage",
    price: 44.99,
    originalPrice: 74.99,
    image: pressureWasherImg,
    discount: 40,
    category: "home-garden",
    description: "Automatic oscillating lawn sprinkler system with 360-degree coverage and adjustable spray patterns. Waters up to 3600 sq ft.",
    features: [
      "360-degree oscillating coverage pattern",
      "Adjustable spray width and distance",
      "Built-in timer function for automation",
      "Waters up to 3600 square feet",
      "Heavy-duty metal construction with sled base"
    ],
    inStock: true
  },
  {
    id: "24",
    name: "Wall-Mounted Garden Tool Organizer Rack Heavy Duty Steel",
    price: 27.99,
    originalPrice: 44.99,
    image: toolboxImg,
    discount: 38,
    category: "home-garden",
    description: "Heavy-duty wall-mounted garden tool organizer with adjustable hooks. Holds up to 40 tools and keeps your garage or shed organized.",
    features: [
      "Holds up to 40 garden tools and accessories",
      "Powder-coated steel construction",
      "6 adjustable position hooks included",
      "Space-saving vertical wall mount design",
      "Mounting hardware included"
    ],
    inStock: true
  },
  {
    id: "25",
    name: "True Wireless Earbuds Bluetooth 5.3 Active Noise Cancelling",
    price: 49.99,
    originalPrice: 89.99,
    image: bluetoothSpeakerImg,
    discount: 44,
    category: "electronics",
    description: "Premium true wireless earbuds with advanced active noise cancellation and crystal-clear sound quality. Features 30-hour total battery life.",
    features: [
      "Bluetooth 5.3 for stable connectivity",
      "Hybrid active noise cancellation (ANC)",
      "30-hour total battery life with charging case",
      "IPX7 waterproof rating for workouts",
      "Touch controls and voice assistant support"
    ],
    inStock: true
  },
  {
    id: "26",
    name: "Smart Fitness Tracker Watch Heart Rate Blood Oxygen Monitor",
    price: 59.99,
    originalPrice: 99.99,
    image: bluetoothSpeakerImg,
    discount: 40,
    category: "electronics",
    description: "Advanced fitness tracker smartwatch with comprehensive health monitoring including heart rate, blood oxygen, sleep tracking, and 14 sport modes.",
    features: [
      "24/7 heart rate and blood oxygen monitoring",
      "Advanced sleep tracking with REM analysis",
      "14 sport modes with GPS tracking",
      "7-day battery life on single charge",
      "5ATM water-resistant for swimming"
    ],
    inStock: true
  },
  {
    id: "27",
    name: "Portable Power Station 300W Solar Generator Battery Backup",
    price: 199.99,
    originalPrice: 299.99,
    image: pressureWasherImg,
    discount: 33,
    category: "electronics",
    description: "Portable 300W power station perfect for camping, emergencies, and outdoor activities. Features multiple output ports and solar charging capability.",
    features: [
      "300W continuous power (600W surge)",
      "Multiple outputs: AC, USB-C PD, USB-A, DC",
      "Solar panel compatible (panel sold separately)",
      "Intelligent LCD display shows battery status",
      "Built-in LED flashlight with SOS mode"
    ],
    inStock: true
  },
  {
    id: "28",
    name: "USB-C Hub Docking Station 11-in-1 Multi-Port Adapter",
    price: 29.99,
    originalPrice: 49.99,
    image: drillImg,
    discount: 40,
    category: "electronics",
    description: "11-in-1 USB-C hub docking station with 4K HDMI, USB 3.0, Ethernet, and SD card reader. Perfect for laptops and tablets.",
    features: [
      "11 ports in one compact hub",
      "4K HDMI output @30Hz",
      "3x USB 3.0 ports (5Gbps transfer speed)",
      "SD/TF card reader and Gigabit Ethernet",
      "Premium aluminum alloy construction"
    ],
    inStock: true
  },
  {
    id: "29",
    name: "Wireless Security Camera System 1080P Night Vision 4-Pack",
    price: 159.99,
    originalPrice: 249.99,
    image: carVacuumImg,
    discount: 36,
    category: "electronics",
    description: "Complete wireless security camera system with 4 HD cameras, night vision, motion detection, and cloud storage. Easy DIY installation.",
    features: [
      "4x 1080P HD wireless cameras included",
      "Advanced night vision up to 65ft",
      "Motion detection with instant alerts",
      "Weather-resistant for indoor/outdoor use",
      "Free cloud storage and mobile app"
    ],
    inStock: true
  },
  {
    id: "30",
    name: "Robot Vacuum Cleaner with Mop 2-in-1 Self-Charging",
    price: 179.99,
    originalPrice: 299.99,
    image: carVacuumImg,
    discount: 40,
    category: "electronics",
    description: "Smart robot vacuum and mop combo with powerful suction, automatic self-charging, and app control. Perfect for hardwood, tile, and carpet.",
    features: [
      "2-in-1 vacuuming and mopping functions",
      "2000Pa strong suction power",
      "Smart navigation with anti-drop sensors",
      "Automatic self-charging when battery low",
      "App control with scheduling and mapping"
    ],
    inStock: true
  },
  {
    id: "31",
    name: "Air Purifier HEPA Filter for Large Rooms up to 500 sq ft",
    price: 89.99,
    originalPrice: 139.99,
    image: pressureWasherImg,
    discount: 36,
    category: "home-garden",
    description: "High-efficiency air purifier with true HEPA filter removes 99.97% of allergens, dust, and odors. Covers rooms up to 500 sq ft.",
    features: [
      "True HEPA H13 filter captures 99.97% particles",
      "3-stage filtration: pre-filter, HEPA, activated carbon",
      "Covers rooms up to 500 square feet",
      "Ultra-quiet operation (22dB sleep mode)",
      "Air quality indicator and auto mode"
    ],
    inStock: true
  },
  {
    id: "32",
    name: "Electric Standing Desk Adjustable Height Dual Motor",
    price: 299.99,
    originalPrice: 499.99,
    image: toolboxImg,
    discount: 40,
    category: "home-garden",
    description: "Premium electric standing desk with smooth dual motor system and programmable height presets. Promotes healthy work posture.",
    features: [
      "Dual motor system for smooth operation",
      "Height range: 28.3\" - 47.6\"",
      "4 programmable memory presets",
      "Anti-collision safety feature",
      "Spacious 55\" x 28\" desktop surface"
    ],
    inStock: true
  },
  {
    id: "33",
    name: "Camping Sleeping Bag 0°F Extreme Cold Weather Mummy",
    price: 69.99,
    originalPrice: 109.99,
    image: campingTentImg,
    discount: 36,
    category: "outdoors",
    description: "Professional 0°F extreme cold weather mummy sleeping bag for winter camping and backpacking. Lightweight and compressible.",
    features: [
      "0°F temperature rating for extreme cold",
      "Mummy shape design for maximum warmth",
      "Water-resistant polyester shell",
      "Compresses to 14\" x 8\" for easy transport",
      "Includes compression sack"
    ],
    inStock: true
  },
  {
    id: "34",
    name: "Hiking Backpack 50L Internal Frame Camping Rucksack",
    price: 79.99,
    originalPrice: 129.99,
    image: campingTentImg,
    discount: 38,
    category: "outdoors",
    description: "Spacious 50L hiking backpack with internal frame, multiple compartments, and rain cover. Perfect for multi-day camping trips.",
    features: [
      "50L capacity with expandable design",
      "Adjustable internal frame system",
      "Multiple storage compartments and pockets",
      "Rain cover included for weather protection",
      "Padded shoulder straps and ventilated back panel"
    ],
    inStock: true
  },
  {
    id: "35",
    name: "Portable Camping Stove Gas Burner with Carrying Case",
    price: 34.99,
    originalPrice: 54.99,
    image: campingTentImg,
    discount: 36,
    category: "outdoors",
    description: "Compact portable camping stove with powerful burner and wind-resistant design. Perfect for outdoor cooking and emergencies.",
    features: [
      "10000 BTU high-power burner",
      "Piezo ignition for easy lighting",
      "Wind-resistant side panels",
      "Compact design with carrying case",
      "Compatible with standard butane canisters"
    ],
    inStock: true
  },
  {
    id: "36",
    name: "LED Headlamp Rechargeable 5000 Lumens Ultra Bright",
    price: 29.99,
    originalPrice: 49.99,
    image: ledLightImg,
    discount: 40,
    category: "outdoors",
    description: "Ultra-bright rechargeable LED headlamp perfect for camping, hiking, and hands-free work. Features multiple lighting modes and adjustable beam.",
    features: [
      "5000 lumens maximum brightness",
      "5 lighting modes plus SOS strobe",
      "USB rechargeable with battery indicator",
      "IPX5 water-resistant design",
      "Adjustable elastic headband and 90° tilting"
    ],
    inStock: true
  },
  {
    id: "37",
    name: "Insulated Tumbler 40oz Stainless Steel with Straw and Lid",
    price: 24.99,
    originalPrice: 39.99,
    image: bluetoothSpeakerImg,
    discount: 37,
    category: "outdoors",
    description: "Large 40oz insulated tumbler keeps drinks cold for 24 hours or hot for 12 hours. Perfect for travel, work, and outdoor activities.",
    features: [
      "40oz capacity with premium stainless steel",
      "Double-wall vacuum insulation",
      "Keeps cold 24hrs, hot 12hrs",
      "Includes reusable straw and splash-proof lid",
      "Fits most cup holders"
    ],
    inStock: true
  },
  {
    id: "38",
    name: "Folding Camping Chair Heavy Duty 300lbs Capacity",
    price: 44.99,
    originalPrice: 69.99,
    image: campingTentImg,
    discount: 36,
    category: "outdoors",
    description: "Heavy-duty folding camping chair with padded seat, cup holder, and carrying bag. Supports up to 300lbs with superior comfort.",
    features: [
      "300lbs weight capacity",
      "Padded seat and backrest for comfort",
      "Built-in cup holder and side pocket",
      "Folds compact with carrying bag",
      "Sturdy steel frame construction"
    ],
    inStock: true
  },
  {
    id: "39",
    name: "Waterproof Dry Bag 20L Roll-Top Floating Storage Sack",
    price: 19.99,
    originalPrice: 34.99,
    image: campingTentImg,
    discount: 42,
    category: "outdoors",
    description: "Durable waterproof dry bag with roll-top closure keeps gear dry during water activities, camping, and hiking. Lightweight and floats.",
    features: [
      "20L capacity with roll-top seal",
      "100% waterproof PVC construction",
      "Floats on water to prevent loss",
      "Adjustable shoulder strap included",
      "Perfect for kayaking, boating, camping"
    ],
    inStock: true
  },
  {
    id: "40",
    name: "Multi-Tool Survival Kit 14-in-1 Camping Emergency Gear",
    price: 39.99,
    originalPrice: 64.99,
    image: toolboxImg,
    discount: 38,
    category: "outdoors",
    description: "Comprehensive 14-in-1 survival multi-tool kit for camping, hiking, and emergencies. Includes essential tools in compact carrying case.",
    features: [
      "14 tools in one compact package",
      "Includes pliers, knife, saw, screwdrivers, more",
      "Stainless steel construction",
      "Durable nylon carrying case",
      "Essential for camping and emergencies"
    ],
    inStock: true
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);

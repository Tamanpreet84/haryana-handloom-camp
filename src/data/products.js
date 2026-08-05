// Haryana Handloom Camp Store Data & High-Res Handloom Media Catalog

export const STORE_DETAILS = {
  name: "HARYANA HANDLOOM CAMP",
  slogan: "WEAVE COMFORT INTO YOUR LIFE",
  subtitle: "WEAVE COMFORT INTO YOUR LIFE",
  address: "NK Road, Nandyal, Pincode 518501 (Near Sai Baba Mandir)",
  phones: [
    { number: "9215211025", label: "Primary Store Inquiry" },
    { number: "9215511025", label: "Secondary Store Contact" }
  ],
  whatsapp: "9215211025",
  workingHours: "9:00 AM - 9:30 PM (Mon - Sun)",
  hours: "9:00 AM - 9:30 PM (Mon - Sun)",
  gstNumber: "37AAACH9821F1Z8",
  highlights: [
    { title: "BEST QUALITY", desc: "100% pure cotton, high thread count, color-fast & pre-shrunk handloom fabrics." },
    { title: "LATEST DESIGNS", desc: "Exclusive Jaipuri floral prints, royal velvet zari borders & modern 3D mink patterns." },
    { title: "AFFORDABLE PRICES", desc: "Direct loom pricing & wholesale discounts for Nandyal families and bulk buyers." },
    { title: "ALL SIZES AVAILABLE", desc: "Single, Queen, Double King (90x108\"), and custom fitted elasticated covers." }
  ]
};

export const CATEGORIES = [
  { id: 'bed-sheets', name: 'Bed Sheets', count: 6, icon: '🛏️', description: '100% Pure Cotton & Rajasthani Print Glace Cotton Sheets' },
  { id: 'cushion-covers', name: 'Cushion Covers', count: 4, icon: '🛋️', description: 'Velvet, Zari & Jacquard Embroidered Cushion Covers' },
  { id: 'curtains', name: 'Curtains', count: 4, icon: '🪟', description: '90% Heavy Blackout & Sheer Sheen Door/Window Curtains' },
  { id: 'comforters', name: 'Comforters & Duvets', count: 4, icon: '🪶', description: 'Ultra-Soft All-Season Cashmere Microfiber Comforters' },
  { id: 'blankets', name: 'Mink & Polar Blankets', count: 4, icon: '❄️', description: 'Heavy Double-Ply Mink & Warm Polar Fleece Blankets' },
  { id: 'pillows', name: 'Pillows & Memory Foam', count: 4, icon: '☁️', description: 'Orthopedic Microfiber & Ergonomic Neck Support Pillows' },
  { id: 'sofa-covers', name: 'Sofa Covers & Protectors', count: 4, icon: '🛋️', description: 'Custom Elasticated 3+1+1 & Fitted Velvet Sofa Covers' }
];

export const FABRIC_TYPES = [
  'All Materials',
  '100% Pure Cotton',
  'Royal Velvet & Zari',
  'Plush Microfiber',
  'Korean Mink & Fleece',
  'Memory Foam'
];

export const REVIEWS = [
  {
    id: 1,
    name: "K. Venkata Subbaiah",
    city: "Nandyal, Andhra Pradesh",
    location: "Nandyal, Andhra Pradesh",
    rating: 5,
    date: "2 days ago",
    comment: "Bought 3 double bed sheets and velvet cushion covers from Haryana Handloom Camp on NK Road. The cotton quality is amazing and colors haven't faded after washing!",
    verified: true
  },
  {
    id: 2,
    name: "Sridevi Reddy",
    city: "Nandyal town",
    location: "Nandyal town",
    rating: 5,
    date: "1 week ago",
    comment: "Best home furnishing shop near Sai Baba Mandir! The mink blanket is super heavy and warm. Owner was very polite and guided us on sizes.",
    verified: true
  },
  {
    id: 3,
    name: "Ramesh Babu",
    city: "Kurnool District",
    location: "Kurnool District",
    rating: 5,
    date: "2 weeks ago",
    comment: "Ordered blackout curtains and comforters for our new house. Complete light block and very premium stitching. Highly recommended!",
    verified: true
  }
];

export const FAQS = [
  {
    q: "Where is Haryana Handloom Camp located in Nandyal?",
    a: "Our physical store is located at NK Road, Nandyal, Pincode 518501 (Near Sai Baba Mandir). You can visit us 7 days a week from 9:00 AM to 9:30 PM.",
    question: "Where is Haryana Handloom Camp located in Nandyal?",
    answer: "Our physical store is located at NK Road, Nandyal, Pincode 518501 (Near Sai Baba Mandir). You can visit us 7 days a week from 9:00 AM to 9:30 PM."
  },
  {
    q: "Are your bedsheets 100% pure cotton?",
    a: "Yes! We stock authentic 100% Rajasthani handloom printed bedsheets (up to 450 Thread Count) that are pre-shrunk with colorfast dyes.",
    question: "Are your bedsheets 100% pure cotton?",
    answer: "Yes! We stock authentic 100% Rajasthani handloom printed bedsheets (up to 450 Thread Count) that are pre-shrunk with colorfast dyes."
  },
  {
    q: "How can I order or inquire via WhatsApp?",
    a: "You can click any 'Inquire on WhatsApp' button on the website or message store owners directly at 9215211025 / 9215511025 with your selected items.",
    question: "How can I order or inquire via WhatsApp?",
    answer: "You can click any 'Inquire on WhatsApp' button on the website or message store owners directly at 9215211025 / 9215511025 with your selected items."
  },
  {
    q: "Do you deliver home in Nandyal and nearby towns?",
    a: "Yes, we offer free home delivery across Nandyal town for orders over ₹999, as well as courier shipping across Andhra Pradesh.",
    question: "Do you deliver home in Nandyal and nearby towns?",
    answer: "Yes, we offer free home delivery across Nandyal town for orders over ₹999, as well as courier shipping across Andhra Pradesh."
  }
];

export const PRODUCTS = [
  // --- BED SHEETS (6 Products) ---
  {
    id: 'bs-001',
    name: 'Haryana Royal Jaipuri Floral Cotton Double Bed Sheet',
    category: 'bed-sheets',
    price: 899,
    mrp: 1499,
    discount: '40% OFF',
    badge: 'Bestseller',
    tag: 'Bestseller',
    rating: 4.9,
    reviewsCount: 42,
    material: '100% Superfine Pure Cotton',
    threadCount: '300 TC',
    colors: ['#B91C1C', '#1E3A8A', '#D97706'],
    sizes: ['Double King (90x108")', 'Queen (90x100")'],
    image: '/images/bed-sheets/bs-jaipuri-cotton-red.png',
    images: [
      '/images/bed-sheets/bs-jaipuri-cotton-red.png',
      '/images/bed-sheets/bs-jaipuri-cotton-blue.png',
      '/images/bed-sheets/bs-jaipuri-cotton-yellow.png'
    ],
    inStock: true,
    description: 'Authentic 100% Rajasthani handloom printed double bedsheet crafted with 300 Thread Count long-staple cotton for zero shrinkage and silky breathable comfort.',
    features: ['100% Breathable Cotton', 'Pre-shrunk Fast Colors', 'Includes 2 Matching Pillow Covers (18x28 inches)']
  },
  {
    id: 'bs-002',
    name: 'Luxury Royal Velvet Touch Micro-Cotton Bedsheet Set',
    category: 'bed-sheets',
    price: 1199,
    mrp: 1899,
    discount: '37% OFF',
    badge: 'Store Choice',
    tag: 'Store Choice',
    rating: 4.8,
    reviewsCount: 29,
    material: 'Ultra-Soft Glace Micro-Cotton',
    threadCount: '400 TC',
    colors: ['#FEF3C7', '#065F46', '#881337'],
    sizes: ['Super King (108x108")', 'Double King (90x108")'],
    image: '/images/bed-sheets/bs-velvet-touch-cream.png',
    images: [
      '/images/bed-sheets/bs-velvet-touch-cream.png',
      '/images/bed-sheets/bs-velvet-touch-green.png',
      '/images/bed-sheets/bs-velvet-touch-red.png'
    ],
    inStock: true,
    description: 'Wrinkle-resistant premium glace cotton sheet with heavy satin borders for a royal hotel-like suite experience right in your bedroom.',
    features: ['Wrinkle-Free Technology', 'Deep Pocket Corner Fit', 'Silky Velvet Touch Texture']
  },
  {
    id: 'bs-003',
    name: 'Haryana Heritage Handcrafted Striped Cotton Sheet',
    category: 'bed-sheets',
    price: 749,
    mrp: 1299,
    discount: '42% OFF',
    badge: 'Traditional',
    tag: 'Traditional',
    rating: 4.7,
    reviewsCount: 18,
    material: 'Organic Handloom Cotton',
    threadCount: '250 TC',
    colors: ['#C2410C', '#1E3A8A', '#047857'],
    sizes: ['Double (90x100")', 'Single (60x90")'],
    image: '/images/bed-sheets/bs-heritage-striped.png',
    images: [
      '/images/bed-sheets/bs-heritage-striped.png',
      '/images/bed-sheets/bs-jaipuri-cotton-blue.png'
    ],
    inStock: true,
    description: 'Traditional Panipat loom woven heavy weave cotton bedsheet with reinforced edges designed for everyday durability and rustic elegance.',
    features: ['Durable Loom Weave', 'Machine Washable', '2 Pillow Covers Included']
  },
  {
    id: 'bs-004',
    name: 'Modern Geometric Satin Striped Hotel Bedsheet',
    category: 'bed-sheets',
    price: 999,
    mrp: 1699,
    discount: '41% OFF',
    badge: 'Luxury',
    tag: 'Luxury',
    rating: 4.9,
    reviewsCount: 34,
    material: 'Pure Cotton Satin Weave',
    threadCount: '350 TC',
    colors: ['#FFFFFF', '#F59E0B'],
    sizes: ['Super King (108x108")'],
    image: '/images/bed-sheets/bs-satin-striped-white.png',
    images: [
      '/images/bed-sheets/bs-satin-striped-white.png',
      '/images/bed-sheets/bs-velvet-touch-cream.png'
    ],
    inStock: true,
    description: 'Pure white 1cm satin striped luxury hotel sheet engineered to maintain crisp white brightness even after 100+ commercial washes.',
    features: ['5-Star Hotel Grade', 'Hypoallergenic Finish', 'Extra Soft Touch']
  },
  {
    id: 'bs-005',
    name: 'Traditional Panipat Checked Heavy Cotton Bedsheet',
    category: 'bed-sheets',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    badge: 'Value Pack',
    tag: 'Value Pack',
    rating: 4.6,
    reviewsCount: 22,
    material: '100% Handloom Cotton',
    threadCount: '210 TC',
    colors: ['#991B1B', '#1E3A8A'],
    sizes: ['Double (90x100")'],
    image: '/images/bed-sheets/bs-heritage-striped.png',
    images: [
      '/images/bed-sheets/bs-heritage-striped.png',
      '/images/bed-sheets/bs-jaipuri-cotton-red.png'
    ],
    inStock: true,
    description: 'Heavy duty Panipat cotton weave with vibrant checks. Cool in summer and comfortable year round.',
    features: ['Thick Heavy Gauge Weave', 'Vibrant Fast Dyes', '2 Pillow Cases']
  },
  {
    id: 'bs-006',
    name: 'Embroidery Border Premium Percale Double Sheet',
    category: 'bed-sheets',
    price: 1299,
    mrp: 2199,
    discount: '40% OFF',
    badge: 'Premium',
    tag: 'Premium',
    rating: 4.9,
    reviewsCount: 15,
    material: '100% Egyptian Percale Cotton',
    threadCount: '450 TC',
    colors: ['#FEF3C7', '#F472B6'],
    sizes: ['King (108x108")'],
    image: '/images/bed-sheets/bs-velvet-touch-cream.png',
    images: [
      '/images/bed-sheets/bs-velvet-touch-cream.png',
      '/images/bed-sheets/bs-velvet-touch-red.png'
    ],
    inStock: true,
    description: 'Ultra-luxurious 450 TC Egyptian cotton bedsheet featuring delicate hand-embroidered borders for wedding & festive trousseaus.',
    features: ['450 Thread Count', 'Intricate Hand Zari Stitching', 'Gift Box Packaging']
  },

  // --- CUSHION COVERS (4 Products) ---
  {
    id: 'cc-001',
    name: 'Royal Crimson Velvet Zari Border Cushion Covers (Set of 5)',
    category: 'cushion-covers',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    badge: 'Hot Seller',
    tag: 'Hot Seller',
    rating: 4.9,
    reviewsCount: 56,
    material: 'Heavy Dutch Velvet with Gold Zari',
    threadCount: 'N/A',
    colors: ['#991B1B', '#1E3A8A', '#D97706'],
    sizes: ['16x16 inches (Standard)', '18x18 inches (Large)'],
    image: '/images/cushion-covers/cc-crimson-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-crimson-velvet-zari.png',
      '/images/cushion-covers/cc-navy-velvet-zari.png',
      '/images/cushion-covers/cc-golden-velvet-zari.png'
    ],
    inStock: true,
    description: 'Exquisite set of 5 heavy velvet cushion covers accented with intricate golden zari threadwork borders and concealed zip closures.',
    features: ['Set of 5 Covers', 'Heavy Plush Velvet', 'Hidden Zipper Closure']
  },
  {
    id: 'cc-002',
    name: 'Handloom Cotton Jacquard Geometric Cushion Cover Set',
    category: 'cushion-covers',
    price: 549,
    mrp: 899,
    discount: '38% OFF',
    badge: 'Trending',
    tag: 'Trending',
    rating: 4.7,
    reviewsCount: 31,
    material: 'Woven Cotton Jacquard',
    threadCount: 'N/A',
    colors: ['#0F172A', '#0D9488'],
    sizes: ['16x16 inches'],
    image: '/images/cushion-covers/cc-golden-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-golden-velvet-zari.png',
      '/images/cushion-covers/cc-navy-velvet-zari.png'
    ],
    inStock: true,
    description: 'Bohemian handwoven jacquard textured cushion covers designed to elevate modern living room sofas with artisanal charm.',
    features: ['Set of 5 Covers', 'Textured 3D Weave', 'Machine Washable']
  },
  {
    id: 'cc-003',
    name: 'Silk Brocade Heritage Motif Decorative Cushion Covers',
    category: 'cushion-covers',
    price: 799,
    mrp: 1399,
    discount: '42% OFF',
    badge: 'Festive Special',
    tag: 'Festive Special',
    rating: 4.8,
    reviewsCount: 24,
    material: 'Art Silk Brocade',
    threadCount: 'N/A',
    colors: ['#881337', '#1E3A8A'],
    sizes: ['16x16 inches'],
    image: '/images/cushion-covers/cc-crimson-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-crimson-velvet-zari.png',
      '/images/cushion-covers/cc-navy-velvet-zari.png'
    ],
    inStock: true,
    description: 'Traditional South Indian motif silk brocade cushion set designed for festive celebrations and wedding living decor.',
    features: ['Set of 5 Covers', 'Glossy Silk Sheen', 'Piped Edge Finish']
  },
  {
    id: 'cc-004',
    name: 'Minimalist Linen Cotton Solid Color Cushion Set',
    category: 'cushion-covers',
    price: 499,
    mrp: 799,
    discount: '37% OFF',
    badge: 'Minimalist',
    tag: 'Minimalist',
    rating: 4.6,
    reviewsCount: 19,
    material: 'Linen Cotton Blend',
    threadCount: 'N/A',
    colors: ['#047857', '#F59E0B'],
    sizes: ['16x16 inches'],
    image: '/images/cushion-covers/cc-golden-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-golden-velvet-zari.png',
      '/images/cushion-covers/cc-crimson-velvet-zari.png'
    ],
    inStock: true,
    description: 'Breathable organic linen cotton cushion covers with understated natural texture for clean scandinavian interiors.',
    features: ['Set of 5 Covers', 'Soft Washed Linen', 'Eco-friendly Dyes']
  },

  // --- CURTAINS (4 Products) ---
  {
    id: 'cur-001',
    name: 'Haryana Heavy Blackout Thermal Insulated Window Curtains',
    category: 'curtains',
    price: 1199,
    mrp: 1999,
    discount: '40% OFF',
    badge: 'Top Rated',
    tag: 'Top Rated',
    rating: 4.9,
    reviewsCount: 68,
    material: '3-Layer Triple Weave Polyester',
    threadCount: 'N/A',
    colors: ['#475569', '#1E3A8A', '#D97706'],
    sizes: ['Door (7ft x 4ft)', 'Long Door (9ft x 4ft)', 'Window (5ft x 4ft)'],
    image: '/images/curtains/cur-slate-grey-blackout.png',
    images: [
      '/images/curtains/cur-slate-grey-blackout.png',
      '/images/curtains/cur-navy-blackout.png',
      '/images/curtains/cur-warm-beige-blackout.png'
    ],
    inStock: true,
    description: 'Blocks 90%+ sun light and cuts outside noise. Heavy thermal layer helps keep rooms cool during hot Andhra summers.',
    features: ['Pack of 2 Curtains', 'Rust-Free Metal Grommet Eyelets', 'Noise Reduction & Heat Blocking']
  },
  {
    id: 'cur-002',
    name: 'Sheer Sheen Sheer Linen Door Curtains',
    category: 'curtains',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    badge: 'Elegant',
    tag: 'Elegant',
    rating: 4.7,
    reviewsCount: 41,
    material: 'Faux Linen Sheer Fabric',
    threadCount: 'N/A',
    colors: ['#FFFFFF', '#F59E0B'],
    sizes: ['Door (7ft x 4ft)', 'Long Door (9ft x 4ft)'],
    image: '/images/curtains/cur-warm-beige-blackout.png',
    images: [
      '/images/curtains/cur-warm-beige-blackout.png',
      '/images/curtains/cur-slate-grey-blackout.png'
    ],
    inStock: true,
    description: 'Translucent semi-sheer curtains that filter sunlight gently, creating a bright and airy atmosphere in living spaces.',
    features: ['Pack of 2 Curtains', 'Soft Light Diffusion', 'Steel Eyelet Rings']
  },
  {
    id: 'cur-003',
    name: 'Velvet Touch Heavy Room Darkening Door Curtains',
    category: 'curtains',
    price: 1499,
    mrp: 2499,
    discount: '40% OFF',
    badge: 'Luxury Suite',
    tag: 'Luxury Suite',
    rating: 4.9,
    reviewsCount: 23,
    material: 'Heavy Micro Velvet',
    threadCount: 'N/A',
    colors: ['#881337', '#065F46'],
    sizes: ['Door (7ft x 4ft)', 'Long Door (9ft x 4ft)'],
    image: '/images/curtains/cur-navy-blackout.png',
    images: [
      '/images/curtains/cur-navy-blackout.png',
      '/images/curtains/cur-slate-grey-blackout.png'
    ],
    inStock: true,
    description: 'Ultra-luxurious heavy velvet room darkening curtains designed for home theaters, grand living halls, and master bedrooms.',
    features: ['Pack of 2 Curtains', 'Plush Matte Velvet Finish', 'Maximum Fall & Drape']
  },
  {
    id: 'cur-004',
    name: 'Printed Floral Modern Eyelet Window Curtains',
    category: 'curtains',
    price: 849,
    mrp: 1399,
    discount: '39% OFF',
    badge: 'Fresh Design',
    tag: 'Fresh Design',
    rating: 4.6,
    reviewsCount: 17,
    material: 'Poly-Cotton Jacquard',
    threadCount: 'N/A',
    colors: ['#0D9488', '#FB923C'],
    sizes: ['Door (7ft x 4ft)', 'Window (5ft x 4ft)'],
    image: '/images/curtains/cur-warm-beige-blackout.png',
    images: [
      '/images/curtains/cur-warm-beige-blackout.png',
      '/images/curtains/cur-slate-grey-blackout.png'
    ],
    inStock: true,
    description: 'Vibrant modern botanical floral curtains to add fresh color and privacy to home study rooms and windows.',
    features: ['Pack of 2 Curtains', 'Fade Resistant Print', 'Pre-fitted Stainless Steel Eyelets']
  },

  // --- COMFORTERS & DUVETS (4 Products) ---
  {
    id: 'com-001',
    name: 'Reversible Plush All-Season Microfiber Double Comforter',
    category: 'comforters',
    price: 1799,
    mrp: 2999,
    discount: '40% OFF',
    badge: 'Bestseller',
    tag: 'Bestseller',
    rating: 4.9,
    reviewsCount: 52,
    material: 'Microfiber Shell (300 GSM Hypoallergenic Fill)',
    threadCount: 'N/A',
    colors: ['#1E3A8A', '#881337', '#0D9488'],
    sizes: ['Double King (90x100")', 'Single (60x90")'],
    image: '/images/comforters/com-navy-slate-dual.png',
    images: [
      '/images/comforters/com-navy-slate-dual.png',
      '/images/comforters/com-maroon-cream-dual.png',
      '/images/comforters/com-teal-beige-dual.png'
    ],
    inStock: true,
    description: 'Ultra-lightweight yet cozy 300 GSM siliconized microfiber filled comforter with diamond box stitching that prevents fill shifting.',
    features: ['Reversible Dual Color Design', '300 GSM Hollow Fiber Filling', 'Hypoallergenic & Dust Mite Proof']
  },
  {
    id: 'com-002',
    name: 'Haryana Ultra Heavy Winter Double Ply Cashmere Quilt',
    category: 'comforters',
    price: 2499,
    mrp: 3999,
    discount: '37% OFF',
    badge: 'Heavy Winter',
    tag: 'Heavy Winter',
    rating: 4.8,
    reviewsCount: 38,
    material: 'Cashmere Touch Flannel Fleece',
    threadCount: 'N/A',
    colors: ['#881337', '#1E3A8A'],
    sizes: ['Double King (90x108")'],
    image: '/images/comforters/com-maroon-cream-dual.png',
    images: [
      '/images/comforters/com-maroon-cream-dual.png',
      '/images/comforters/com-navy-slate-dual.png'
    ],
    inStock: true,
    description: 'Designed for extreme AC cooling or winter nights. Features plush fleece on both sides with high density thermal insulation.',
    features: ['Heavy AC / Winter Weight', 'Plush Cashmere Texture', 'Machine Washable']
  },
  {
    id: 'com-003',
    name: '100% Organic Cotton Shell Summer AC Duvet',
    category: 'comforters',
    price: 1599,
    mrp: 2499,
    discount: '36% OFF',
    badge: 'Summer Choice',
    tag: 'Summer Choice',
    rating: 4.7,
    reviewsCount: 26,
    material: '100% Breathable Cotton Shell (150 GSM)',
    threadCount: 'N/A',
    colors: ['#38BDF8', '#FFFFFF'],
    sizes: ['Double King (90x100")'],
    image: '/images/comforters/com-teal-beige-dual.png',
    images: [
      '/images/comforters/com-teal-beige-dual.png',
      '/images/comforters/com-navy-slate-dual.png'
    ],
    inStock: true,
    description: 'Lightweight 150 GSM organic cotton shell summer duvet for AC bedrooms during warm weather without overheating.',
    features: ['100% Cotton Outer Cover', 'Sweat Free Breathable Fill', 'Corner Duvet Loops']
  },
  {
    id: 'com-004',
    name: 'Embossed Velvet Luxury King Comforter Set with Pillows',
    category: 'comforters',
    price: 2999,
    mrp: 4999,
    discount: '40% OFF',
    badge: 'Bridal Set',
    tag: 'Bridal Set',
    rating: 4.9,
    reviewsCount: 14,
    material: 'Embossed Royal Velvet (350 GSM)',
    threadCount: 'N/A',
    colors: ['#D97706', '#991B1B'],
    sizes: ['Super King (100x108")'],
    image: '/images/comforters/com-maroon-cream-dual.png',
    images: [
      '/images/comforters/com-maroon-cream-dual.png',
      '/images/comforters/com-navy-slate-dual.png'
    ],
    inStock: true,
    description: 'Grand royal wedding trousseau comforter set with 3D embossed floral velvet top and matching velvet pillow shams.',
    features: ['Comforter + 2 Pillow Shams', '3D Embossed Royal Pattern', 'Gift Case Included']
  },

  // --- MINK & POLAR BLANKETS (4 Products) ---
  {
    id: 'blk-001',
    name: 'Haryana Double-Ply Heavy Embossed Korean Mink Blanket',
    category: 'blankets',
    price: 2199,
    mrp: 3499,
    discount: '37% OFF',
    badge: 'Winter Bestseller',
    tag: 'Winter Bestseller',
    rating: 4.9,
    reviewsCount: 74,
    material: 'Ultra Soft Korean Mink Micro-Flannel',
    threadCount: 'N/A',
    colors: ['#881337', '#1E3A8A', '#065F46'],
    sizes: ['Double King (90x100" - 4kg)', 'Single (60x90" - 2.5kg)'],
    image: '/images/blankets/blk-mink-maroon.png',
    images: [
      '/images/blankets/blk-mink-maroon.png',
      '/images/blankets/blk-mink-blue.png',
      '/images/blankets/blk-mink-green.png'
    ],
    inStock: true,
    description: 'Heavy 4kg double-ply Korean style mink blanket with deep embossed floral carvings for supreme warmth during cold nights.',
    features: ['Double Ply 4kg Heavyweight', 'Super Soft Silk-Like Mink Fur', 'Satin Border Binding']
  },
  {
    id: 'blk-002',
    name: 'Super Soft Lightweight Polar Fleece AC Blanket',
    category: 'blankets',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    badge: 'AC Blanket',
    tag: 'AC Blanket',
    rating: 4.8,
    reviewsCount: 45,
    material: 'Anti-Pill Polar Fleece (280 GSM)',
    threadCount: 'N/A',
    colors: ['#78350F', '#1E3A8A'],
    sizes: ['Double (90x100")', 'Single (60x90")'],
    image: '/images/blankets/blk-polar-camel.png',
    images: [
      '/images/blankets/blk-polar-camel.png',
      '/images/blankets/blk-mink-blue.png'
    ],
    inStock: true,
    description: 'Feather-light anti-pilling polar fleece blanket designed for year-round AC use, travel, and guest room bedding.',
    features: ['Anti-Pill Fleece Finish', 'Compact Travel Friendly', 'Easy Machine Wash']
  },
  {
    id: 'blk-003',
    name: 'Single Ply Soft Mink Blanket with Satin Border',
    category: 'blankets',
    price: 1399,
    mrp: 2199,
    discount: '36% OFF',
    badge: 'Mild Winter',
    tag: 'Mild Winter',
    rating: 4.7,
    reviewsCount: 28,
    material: '100% Microfiber Mink (2kg)',
    threadCount: 'N/A',
    colors: ['#FB7185', '#881337'],
    sizes: ['Double (90x100")'],
    image: '/images/blankets/blk-mink-maroon.png',
    images: [
      '/images/blankets/blk-mink-maroon.png',
      '/images/blankets/blk-mink-green.png'
    ],
    inStock: true,
    description: 'Medium weight 2kg single ply mink blanket ideal for Andhra Pradesh climate and mild winter months.',
    features: ['Medium 2kg Weight', 'Ultra Silky Touch', 'Non-Shedding Fur']
  },
  {
    id: 'blk-004',
    name: 'Sherpa Lambswool Plush Double Layer Blanket',
    category: 'blankets',
    price: 2599,
    mrp: 4199,
    discount: '38% OFF',
    badge: 'Ultra Warm',
    tag: 'Ultra Warm',
    rating: 4.9,
    reviewsCount: 19,
    material: 'Fleece Front & Sherpa Fleece Back',
    threadCount: 'N/A',
    colors: ['#334155', '#1E3A8A'],
    sizes: ['Double King (90x100")'],
    image: '/images/blankets/blk-polar-camel.png',
    images: [
      '/images/blankets/blk-polar-camel.png',
      '/images/blankets/blk-mink-blue.png'
    ],
    inStock: true,
    description: 'Dual layer blanket featuring soft velvety fleece on top and thick fluffy white sherpa lambswool lining inside.',
    features: ['Thick Faux Sherpa Lining', 'Extreme Comfort & Warmth', 'Gift Box Ribbon Wrapped']
  },

  // --- PILLOWS & MEMORY FOAM (4 Products) ---
  {
    id: 'pil-001',
    name: 'Haryana Orthopedic Memory Foam Contour Neck Pillow',
    category: 'pillows',
    price: 999,
    mrp: 1699,
    discount: '41% OFF',
    badge: 'Doctor Recommended',
    tag: 'Doctor Recommended',
    rating: 4.9,
    reviewsCount: 63,
    material: 'High-Density Visco Elastic Memory Foam',
    threadCount: 'N/A',
    colors: ['#FFFFFF', '#475569'],
    sizes: ['Standard Ergonomic (24x14x4.5")'],
    image: '/images/pillows/pil-memory-foam-neck.png',
    images: [
      '/images/pillows/pil-memory-foam-neck.png',
      '/images/pillows/pil-microfiber-plush.png'
    ],
    inStock: true,
    description: 'Ergonomically contoured cervical memory foam pillow designed to align spinal curve and provide instant neck pain relief.',
    features: ['Cervical Spine Support', 'Cooling Gel Infused Foam', 'Removable Zippered Breathable Cover']
  },
  {
    id: 'pil-002',
    name: 'Ultra-Soft Virgin Microfiber Hotel Plush Pillows (Pair of 2)',
    category: 'pillows',
    price: 799,
    mrp: 1399,
    discount: '42% OFF',
    badge: 'Pair Pack',
    tag: 'Pair Pack',
    rating: 4.8,
    reviewsCount: 47,
    material: '100% Conjugated Virgin Microfiber',
    threadCount: '300 TC Outer Shell',
    colors: ['#FFFFFF'],
    sizes: ['Standard (18x28 inches)'],
    image: '/images/pillows/pil-microfiber-plush.png',
    images: [
      '/images/pillows/pil-microfiber-plush.png',
      '/images/pillows/pil-memory-foam-neck.png'
    ],
    inStock: true,
    description: 'Set of 2 fluffy down-alternative microfiber sleeping pillows with 300 TC cotton shell for 5-star hotel comfort.',
    features: ['Pack of 2 Pillows', 'Down Alternative Virgin Fill', 'Retains Bounce & Shape']
  },
  {
    id: 'pil-003',
    name: 'Cooling Gel Infused Breathable Memory Foam Pillow',
    category: 'pillows',
    price: 1299,
    mrp: 2199,
    discount: '40% OFF',
    badge: 'Cooling Tech',
    tag: 'Cooling Tech',
    rating: 4.9,
    reviewsCount: 22,
    material: 'Cooling Hydro-Gel Memory Foam',
    threadCount: 'N/A',
    colors: ['#0EA5E9'],
    sizes: ['King Size (26x16x5")'],
    image: '/images/pillows/pil-memory-foam-neck.png',
    images: [
      '/images/pillows/pil-memory-foam-neck.png',
      '/images/pillows/pil-microfiber-plush.png'
    ],
    inStock: true,
    description: 'Features an active cooling gel pad layer on top of premium memory foam to dissipate body heat during sleep.',
    features: ['Active Heat Dissipation', 'Ideal for Hot Sleepers', 'Washable Bamboo Outer Shell']
  },
  {
    id: 'pil-004',
    name: 'Firm Support Fiber Bolster Pillow for Back & Knee',
    category: 'pillows',
    price: 649,
    mrp: 999,
    discount: '35% OFF',
    badge: 'Multi-Purpose',
    tag: 'Multi-Purpose',
    rating: 4.6,
    reviewsCount: 16,
    material: 'High-Resilience Hollow Fiber Fill',
    threadCount: '250 TC',
    colors: ['#FFFBEB'],
    sizes: ['Long Bolster (9x30 inches)'],
    image: '/images/pillows/pil-microfiber-plush.png',
    images: [
      '/images/pillows/pil-microfiber-plush.png',
      '/images/pillows/pil-memory-foam-neck.png'
    ],
    inStock: true,
    description: 'Cylindrical bolster pillow for back support while sitting on bed or placement under knees for posture alignment.',
    features: ['Long Bolster Shape', 'High Density Bounce', '100% Cotton Outer Cover']
  },

  // --- SOFA COVERS (4 Products) ---
  {
    id: 'sof-001',
    name: 'Haryana Universal Elasticated Velvet Fitted Sofa Cover Set',
    category: 'sofa-covers',
    price: 1699,
    mrp: 2799,
    discount: '39% OFF',
    badge: 'Top Fit',
    tag: 'Top Fit',
    rating: 4.9,
    reviewsCount: 39,
    material: 'High-Stretch Dutch Spandex Velvet',
    threadCount: 'N/A',
    colors: ['#881337', '#1E3A8A', '#78350F'],
    sizes: ['3+1+1 Seater Complete Set', '3-Seater Single Sofa'],
    image: '/images/cushion-covers/cc-crimson-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-crimson-velvet-zari.png',
      '/images/cushion-covers/cc-navy-velvet-zari.png'
    ],
    inStock: true,
    description: 'Full 360-degree stretchable velvet sofa cover set designed to protect living room furniture from dust, spills, and pet scratches.',
    features: ['Complete 3+1+1 Cover Set', '360° Elastic Bottom Border', 'Includes Foam Fixation Sticks']
  },
  {
    id: 'sof-002',
    name: 'Heavy Jacquard Floral Quilted Sofa Protector Mat',
    category: 'sofa-covers',
    price: 1299,
    mrp: 1999,
    discount: '35% OFF',
    badge: 'Easy Wash',
    tag: 'Easy Wash',
    rating: 4.7,
    reviewsCount: 27,
    material: 'Heavy Cotton Jacquard Quilted',
    threadCount: 'N/A',
    colors: ['#D97706', '#1E3A8A'],
    sizes: ['3+1+1 Seater Cover Set'],
    image: '/images/cushion-covers/cc-golden-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-golden-velvet-zari.png',
      '/images/cushion-covers/cc-navy-velvet-zari.png'
    ],
    inStock: true,
    description: 'Heavy quilted cotton jacquard sofa mats with anti-slip backing that drape over sofa seats and armrests effortlessly.',
    features: ['Non-Slip Rubberized Backing', 'Thick Quilted Cushioning', 'Machine Washable']
  },
  {
    id: 'sof-003',
    name: 'Waterproof Pet Proof Sofa Protector Cover Sheet',
    category: 'sofa-covers',
    price: 1499,
    mrp: 2399,
    discount: '37% OFF',
    badge: 'Waterproof',
    tag: 'Waterproof',
    rating: 4.8,
    reviewsCount: 21,
    material: 'Waterproof Microfiber Layered',
    threadCount: 'N/A',
    colors: ['#334155', '#D97706'],
    sizes: ['3-Seater Sofa Shield'],
    image: '/images/cushion-covers/cc-crimson-velvet-zari.png',
    images: [
      '/images/cushion-covers/cc-crimson-velvet-zari.png',
      '/images/cushion-covers/cc-golden-velvet-zari.png'
    ],
    inStock: true,
    description: '100% liquid and spill-proof sofa protector mat ideal for homes with pets or children.',
    features: ['100% Liquid & Stain Barrier', 'Side Storage Pockets', 'Reversible Dual Colors']
  },
  {
    id: 'sof-004',
    name: 'Handloom Cotton Woven Throw Blanket Sofa Towel',
    category: 'sofa-covers',
    price: 899,
    mrp: 1499,
    discount: '40% OFF',
    badge: 'Artisanal',
    tag: 'Artisanal',
    rating: 4.6,
    reviewsCount: 15,
    material: '100% Woven Handloom Cotton',
    threadCount: 'N/A',
    colors: ['#FEF3C7', '#1E3A8A'],
    sizes: ['Large Throw (70x90 inches)'],
    image: '/images/bed-sheets/bs-heritage-striped.png',
    images: [
      '/images/bed-sheets/bs-heritage-striped.png',
      '/images/cushion-covers/cc-navy-velvet-zari.png'
    ],
    inStock: true,
    description: 'Artisanal handwoven cotton sofa throw towel with fringed tassels for casual drape styling and everyday furniture protection.',
    features: ['Handcrafted Fringe Tassels', 'Multipurpose Throw / Sofa Mat', '100% Pure Cotton']
  }
];

// Helper to get formatted WhatsApp URL for instant store inquiry or order notification
export function getWhatsAppUrl(phoneIndex = 0, message = '') {
  const phoneObj = STORE_DETAILS.phones[phoneIndex] || STORE_DETAILS.phones[0];
  const phone = phoneObj ? phoneObj.number : '9215211025';
  const defaultMsg = message || `Hello ${STORE_DETAILS.name}! I am interested in purchasing handloom products from your store.`;
  return `https://wa.me/91${phone}?text=${encodeURIComponent(defaultMsg)}`;
}

// Helper to generate instant order alert WhatsApp URL to store owners (9215211025 / 9215511025)
export function getOrderWhatsAppUrl(order, phoneIndex = 0) {
  const phoneObj = STORE_DETAILS.phones[phoneIndex] || STORE_DETAILS.phones[0];
  const phone = phoneObj ? phoneObj.number : '9215211025';
  const itemsText = (order.items || []).map((it, i) => `${i + 1}. *${it.name}* (${it.selectedSize}) x${it.quantity} - ₹${it.price * it.quantity}`).join('\n');
  
  const text = `🛍️ *NEW ORDER ALERT - HARYANA HANDLOOM CAMP*\n\n` +
    `📌 *Order ID*: ${order.orderId}\n` +
    `👤 *Customer*: ${order.shippingAddress?.fullName || 'Customer'}\n` +
    `📞 *Phone*: ${order.shippingAddress?.phone || '9215211025'}\n` +
    `📍 *Delivery Address*: ${order.shippingAddress?.street}, ${order.shippingAddress?.city} (${order.shippingAddress?.pincode})\n\n` +
    `📦 *ITEMS ORDERED*:\n${itemsText}\n\n` +
    `💰 *GRAND TOTAL*: ₹${order.totalAmount}\n` +
    `💳 *Payment Method*: ${order.paymentMethod || 'Razorpay UPI'}\n\n` +
    `Please confirm dispatch! Thank you for shopping with Haryana Handloom Camp.`;

  return `https://wa.me/91${phone}?text=${encodeURIComponent(text)}`;
}

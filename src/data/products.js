export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles' },
  { id: 'bed-sheets', name: 'Bed Sheets', icon: 'Bed' },
  { id: 'cushion-covers', name: 'Cushion Covers', icon: 'Square' },
  { id: 'curtains', name: 'Curtains', icon: 'Columns' },
  { id: 'comforters', name: 'Comforters', icon: 'Box' },
  { id: 'blankets', name: 'Mink Blankets', icon: 'Layers' },
  { id: 'polar-blankets', name: 'Polar Fleeces', icon: 'Snowflake' },
  { id: 'shawls', name: 'Shawls & Wraps', icon: 'Shirt' },
  { id: 'pillows', name: 'Pillows & Form', icon: 'Disc' },
];

export const FABRIC_TYPES = [
  'All Materials',
  '100% Pure Cotton',
  'Dutch Velvet & Zari',
  'Polyester Jacquard',
  'Microfiber Down',
  'Korean Mink Plush',
  'Merino Wool Blend',
  'Organic Jute Blend'
];

export const STORE_DETAILS = {
  name: 'HARYANA HANDLOOM CAMP',
  tagline: 'Weave Comfort Into Your Life',
  subtitle: 'PREMIUM HOME FURNISHING COLLECTION',
  address: 'NK Road, Nandyal, Pincode 518501 (Near Sai Baba Mandir)',
  city: 'Nandyal, Andhra Pradesh',
  whatsapp: '919215211025',
  phones: [
    { label: 'Store Phone 1', number: '9215211025', formatted: '+91 9215211025', wa: '919215211025' },
    { label: 'Store Phone 2', number: '9215511025', formatted: '+91 9215511025', wa: '919215511025' }
  ],
  hours: 'Monday - Sunday: 9:30 AM - 9:30 PM (Open All 7 Days)',
  highlights: [
    { title: 'BEST QUALITY', desc: '100% Handloom & Premium Checked Fabrics', icon: 'Award' },
    { title: 'LATEST DESIGNS', desc: 'Exclusive Indian Traditional & Modern Prints', icon: 'Sparkles' },
    { title: 'AFFORDABLE PRICES', desc: 'Direct Loom Pricing with No Middlemen', icon: 'IndianRupee' },
    { title: 'ALL SIZES AVAILABLE', desc: 'Single, Double, King & Custom Tailoring', icon: 'Layers' }
  ]
};

export const getWhatsAppUrl = (phoneIndex = 0, messageText = '') => {
  const target = STORE_DETAILS.phones[phoneIndex] || STORE_DETAILS.phones[0];
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${target.wa}?text=${encoded}`;
};

export const PRODUCTS = [
  // 1. Cushion Covers - Exact Uploaded Store Photos
  {
    id: 'cc-01',
    category: 'cushion-covers',
    name: 'Royal Crimson Velvet Zari Border Cushion Covers (Set of 5)',
    subtitle: 'Intricate Gold Zari Central Medallion & Border',
    tag: 'Store Original',
    material: 'Dutch Velvet & Zari',
    threadCount: 'Premium Heavy Velvet',
    price: 699,
    mrp: 1299,
    discount: '46% OFF',
    rating: 5.0,
    reviewsCount: 184,
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['#881337', '#172554', '#042f2e', '#e6c265'],
    moreVarietiesCount: 25,
    image: '/images/cushion-covers/cc-crimson-velvet-zari.png',
    description: 'Plush royal crimson Dutch velvet featuring metallic gold zari thread embroidery, ornate lace border, and heavy concealed zipper closures.',
    features: ['Heavy Zari Lace Embroidery', 'Concealed Zipper Closure', 'Plush Dutch Velvet', 'Set of 5 Covers']
  },
  {
    id: 'cc-02',
    category: 'cushion-covers',
    name: 'Vibrant Ethnic Owl & Elephant Digital Print Cushion Covers (Set of 5)',
    subtitle: 'Playful Multi-Color Folk Art Motif',
    tag: 'Best Seller',
    material: '100% Pure Cotton',
    threadCount: 'HD Digital Print',
    price: 599,
    mrp: 1099,
    discount: '45% OFF',
    rating: 4.9,
    reviewsCount: 162,
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['#d97706', '#0284c7', '#dc2626', '#16a34a'],
    moreVarietiesCount: 30,
    image: '/images/cushion-covers/cc-vibrant-ethnic-digital.png',
    description: 'Eye-catching folk art owl and elephant motifs in rich vibrant jewel tones. Perfect for brightening up living room couches and seating.',
    features: ['HD Digital Print', 'Fade-Proof Colors', 'Soft Cotton Blend', 'Set of 5 Covers']
  },
  {
    id: 'cc-03',
    category: 'cushion-covers',
    name: 'Black Velvet 3D Hand-Appliqué Floral Stem Cushion Covers (Set of 5)',
    subtitle: 'Textured Ribbed Base with 3D Pop-Out Flowers',
    tag: 'Luxury Edition',
    material: 'Dutch Velvet & Zari',
    threadCount: 'Hand-Appliqué Work',
    price: 749,
    mrp: 1399,
    discount: '46% OFF',
    rating: 4.9,
    reviewsCount: 128,
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['#0f172a', '#e6c265', '#be123c'],
    moreVarietiesCount: 20,
    image: '/images/cushion-covers/cc-black-velvet-3d-stem.png',
    description: 'Black ribbed velvet base embellished with handcrafted 3D cloth flower stems and velvet backing for luxury couch accents.',
    features: ['Hand-Appliqué 3D Flowers', 'Textured Ribbed Velvet', 'Concealed Zipper', 'Set of 5 Covers']
  },
  {
    id: 'cc-04',
    category: 'cushion-covers',
    name: 'Off-White Punch Needle Tufted Woolen Floral Cushion Covers (Set of 5)',
    subtitle: 'Tactile Woolen Loop Embroidery',
    tag: 'Trending',
    material: 'Organic Jute Blend',
    threadCount: 'Hand Tufted Loop',
    price: 649,
    mrp: 1199,
    discount: '45% OFF',
    rating: 4.8,
    reviewsCount: 110,
    sizes: ['16x16 inches', '20x20 inches'],
    colors: ['#fef3c7', '#ca8a04', '#0d9488', '#dc2626'],
    moreVarietiesCount: 16,
    image: '/images/cushion-covers/cc-offwhite-punch-tufted.png',
    description: 'Cozy off-white canvas featuring vibrant punch needle tufted woolen flowers in mustard yellow, teal green, and poppy red.',
    features: ['Punch Needle Tufted', 'Organic Texture', 'Heavy Cotton Canvas', 'Set of 5 Covers']
  },
  {
    id: 'cc-05',
    category: 'cushion-covers',
    name: 'Quilted Beige Meadow Floral Embroidered Cushion Covers (Set of 5)',
    subtitle: 'Diamond Quilted Fabric with Wildflower Embroidery',
    tag: 'Customer Favorite',
    material: 'Dutch Velvet & Zari',
    threadCount: 'Quilted Embroidered',
    price: 799,
    mrp: 1499,
    discount: '46% OFF',
    rating: 5.0,
    reviewsCount: 145,
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['#f59e0b', '#0284c7', '#059669'],
    moreVarietiesCount: 22,
    image: '/images/cushion-covers/cc-quilted-beige-meadow.png',
    description: 'Diamond quilted cream-beige backdrop embellished with colorful multi-hued wildflower stem embroidery along the bottom border.',
    features: ['Diamond Quilted Stitching', 'Botanical Wildflower Work', 'Piped Edge Seams', 'Set of 5 Covers']
  },

  // 2. Comforters - Exact Uploaded Store Photos
  {
    id: 'com-01',
    category: 'comforters',
    name: 'Cashmere King Size Olive & Beige Floral Comforter Set',
    subtitle: 'Includes Ruffle Pillowcase & Zipper Travel Case',
    tag: 'Store Original',
    material: 'Microfiber Down',
    threadCount: '350 GSM Cashmere Touch',
    price: 1599,
    mrp: 2599,
    discount: '38% OFF',
    rating: 5.0,
    reviewsCount: 178,
    sizes: ['Double (90x100")', 'King (108x108")'],
    colors: ['#78716c', '#65a30d', '#ca8a04', '#44403c'],
    moreVarietiesCount: 15,
    image: '/images/comforters/com-cashmere-olive-beige.jpg',
    description: 'Luxurious Cashmere Touch King comforter set featuring soothing olive green leaves, white floral blossoms, beige striped borders, ruffled pillowcase, and matching storage case.',
    features: ['Cashmere Soft Touch', '350 GSM Microfiber Fill', 'Matching Ruffled Pillowcase', 'Zippered Bag Packaging']
  },
  {
    id: 'com-02',
    category: 'comforters',
    name: 'Cashmere King Size Sky Blue Blossom Comforter Set',
    subtitle: 'Includes Ruffle Pillowcase & Zipper Travel Case',
    tag: 'Best Seller',
    material: 'Microfiber Down',
    threadCount: '350 GSM Cashmere Touch',
    price: 1599,
    mrp: 2599,
    discount: '38% OFF',
    rating: 4.9,
    reviewsCount: 194,
    sizes: ['Double (90x100")', 'King (108x108")'],
    colors: ['#38bdf8', '#0284c7', '#0369a1', '#e0f2fe'],
    moreVarietiesCount: 18,
    image: '/images/comforters/com-cashmere-sky-blue.jpg',
    description: 'Refreshing sky blue background adorned with white cherry blossom prints, striped ruffled pillow cover, and heavy quilt stitch lines for year-round cooling comfort.',
    features: ['350 GSM Thermal Insulation', 'Dust-Mite Resistant', 'Complete Packaged Set', 'Feather Soft Comfort']
  },

  // 3. Bed Sheets - Exact Uploaded Photos
  {
    id: 'bs-01',
    category: 'bed-sheets',
    name: 'Light Blue & White Jaipuri Block Floral Bedsheet',
    subtitle: 'Includes 2 Matching Pillow Covers',
    tag: 'Best Seller',
    material: '100% Pure Cotton',
    threadCount: '300 TC',
    price: 849,
    mrp: 1399,
    discount: '39% OFF',
    rating: 4.9,
    reviewsCount: 168,
    sizes: ['Single (60x90")', 'Double (90x100")', 'King (108x108")'],
    colors: ['#38bdf8', '#60a5fa', '#3b82f6', '#1d4ed8'],
    moreVarietiesCount: 24,
    image: '/images/bedsheets/bs-light-blue-block.png',
    description: 'Fresh light blue Jaipuri block floral lattice print on 100% pure breathable cotton. Includes matching pillowcases with fast-color guarantee.',
    features: ['300 Thread Count', 'Color-Fast Dye', 'Breathable Pure Cotton', '2 Pillow Covers Included']
  },

  // 4. Curtains - Exact Uploaded Store Photos
  {
    id: 'cur-01',
    category: 'curtains',
    name: 'Ethnic Paisley Cream & Red Border Eyelet Curtains (Set of 2)',
    subtitle: 'Traditional Indian Block Border Motif',
    tag: 'Store Original',
    material: '100% Pure Cotton',
    threadCount: 'Heavy 350 GSM',
    price: 999,
    mrp: 1699,
    discount: '41% OFF',
    rating: 4.9,
    reviewsCount: 156,
    sizes: ['Window (5 ft)', 'Door (7 ft)', 'Long Door (9 ft)'],
    colors: ['#fffbeb', '#991b1b', '#0f766e'],
    moreVarietiesCount: 16,
    image: '/images/curtains/curtain-ethnic-cream.png',
    description: 'Elegant cream backdrop with vibrant crimson, teal, and mustard yellow ethnic paisley border prints. Brass eyelet grommets for smooth sliding.',
    features: ['100% Cotton Weave', 'Rust-Free Grommets', 'Ethnic Paisley Border', 'Machine Washable']
  },

  // 5. Mink Blankets
  {
    id: 'blk-01',
    category: 'blankets',
    name: 'Korean 3D Embossed Floral Heavyweight Mink Blanket',
    subtitle: '5.5 KG Double Ply Super Warm',
    tag: 'Winter Special',
    material: 'Korean Mink Plush',
    threadCount: '5.5 KG Heavy Weight',
    price: 1899,
    mrp: 3199,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 215,
    sizes: ['Double Bed (200x240 cm)'],
    colors: ['#881337', '#1e3a8a', '#451a03'],
    moreVarietiesCount: 30,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious double ply Korean mink blanket featuring 3D embossed floral patterns.',
    features: ['Double Ply Layer', '3D Embossed Floral', 'Shrink Resistant']
  },

  // 6. Polar Fleeces
  {
    id: 'pb-01',
    category: 'polar-blankets',
    name: 'Ultra Lightweight Thermal Travel Polar Fleece Blanket',
    subtitle: '280 GSM Compact & Super Soft',
    tag: 'Travel Favorite',
    material: 'Korean Mink Plush',
    threadCount: '280 GSM Density',
    price: 449,
    mrp: 799,
    discount: '43% OFF',
    rating: 4.8,
    reviewsCount: 150,
    sizes: ['Single (54x90")', 'Double (80x90")'],
    colors: ['#0284c7', '#d97706', '#059669'],
    moreVarietiesCount: 16,
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight polar fleece blanket ideal for travel, sofa snuggles, and AC rooms.',
    features: ['Lint-Free Fleece', 'Lightweight Warmth', 'Quick Dry']
  },

  // 7. Shawls
  {
    id: 'sh-01',
    category: 'shawls',
    name: 'Handcrafted Kashmiri Pure Woolen Paisley Shawl',
    subtitle: 'Intricate Woven Border Artwork',
    tag: 'Artisan Crafted',
    material: 'Merino Wool Blend',
    threadCount: '100% Fine Weave',
    price: 1199,
    mrp: 2099,
    discount: '42% OFF',
    rating: 4.9,
    reviewsCount: 92,
    sizes: ['Free Size (100x200 cm)'],
    colors: ['#7c2d12', '#1e1b4b', '#450a0a'],
    moreVarietiesCount: 14,
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Kashmiri style woven shawl with rich traditional paisley borders.',
    features: ['Pure Warm Wool', 'Jacquard Border', 'Soft Handfeel']
  },

  // 8. Pillows
  {
    id: 'pil-01',
    category: 'pillows',
    name: 'Microfiber Bounce Hotel Quality Pillow Set (Pair of 2)',
    subtitle: 'Medium-Firm Neck Support',
    tag: 'Customer Favorite',
    material: 'Microfiber Down',
    threadCount: 'Conjugate Fiber Fill',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    rating: 4.9,
    reviewsCount: 198,
    sizes: ['Standard (17x27 inches)', 'King (20x30 inches)'],
    colors: ['#ffffff'],
    moreVarietiesCount: 8,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    description: 'Resilient microfiber bounce pillows engineered for spine alignment and plush support.',
    features: ['Non-Allergic', 'Fluff Restorable', 'Neck Support']
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Suresh Kumar',
    location: 'Nandyal Town',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best handloom shop in Nandyal! Purchased 4 pure cotton king bedsheets and mink blankets for winter. Thread quality and color fastness are superb after washing.',
    product: 'Royal Crimson Velvet Zari Cushion Covers Set'
  },
  {
    id: 2,
    name: 'Lakshmi Prasanna',
    location: 'Near NK Road',
    rating: 5,
    date: '1 month ago',
    comment: 'Customized our full house curtains and velvet cushion covers through Haryana Handloom Camp. Store uncle guided us patiently with color matching. Highly recommended!',
    product: 'Emerald Green & Gold Royalty Damask Curtains'
  },
  {
    id: 3,
    name: 'Ramesh Reddy',
    location: 'Sanjeeva Nagar, Nandyal',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Direct loom prices are genuine! Bought Korean 3D mink blanket and comforters. Very soft and warm for AC rooms.',
    product: 'Korean 3D Embossed Mink Blanket'
  }
];

export const FAQS = [
  {
    q: 'Where is Haryana Handloom Camp located in Nandyal?',
    a: 'We are located on NK Road, Nandyal (Pincode 518501), right near Sai Baba Mandir. You can tap the "Open Location" button in our contact section for turn-by-turn Google Maps navigation.'
  },
  {
    q: 'Do you offer custom sizing for curtains and mattress covers?',
    a: 'Yes! We provide custom stitching and size alterations for curtains (5ft, 7ft, 9ft, 11ft) and elastic fitted bedsheets according to your specific window and mattress measurements.'
  },
  {
    q: 'How do I place an inquiry or order on WhatsApp?',
    a: 'Simply click "Add to Bag" on any items you like, open your Inquiry Bag, choose your preferred store representative number (9215211025 or 9215511025), and tap "Send Order via WhatsApp".'
  },
  {
    q: 'What payment modes are accepted at your store?',
    a: 'We accept all major payment options: UPI (Google Pay, PhonePe, Paytm, BHIM), Cash, Debit/Credit Cards, and Direct Bank Transfer.'
  },
  {
    q: 'Are your cotton bedsheets 100% color-fast and pre-shrunk?',
    a: 'Absolutely. All our cotton bedsheets (250 TC to 500 TC) undergo strict fast-color processing and pre-shrinking to guarantee no shrinking or bleeding during machine washing.'
  }
];

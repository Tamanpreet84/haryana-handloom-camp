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
  // 1. Mink Blankets - Exact Uploaded Store Photos
  {
    id: 'blk-01',
    category: 'blankets',
    name: 'Crimson Red & Pink 3D Embossed Korean Mink Blanket',
    subtitle: 'Ultra Plush Velvet Touch Single Ply',
    tag: 'Store Original',
    material: 'Korean Mink Plush',
    threadCount: '3.5 KG Super Soft',
    price: 1299,
    mrp: 2199,
    discount: '41% OFF',
    rating: 4.9,
    reviewsCount: 190,
    sizes: ['Single Bed (150x220 cm)', 'Double Bed (200x240 cm)'],
    colors: ['#881337', '#be123c', '#991b1b', '#fda4af'],
    moreVarietiesCount: 25,
    image: '/images/blankets/blk-crimson-floral-3d.png',
    description: 'Vibrant crimson red and pink single ply Korean mink blanket featuring raised 3D floral wheel embossing and silky velvet binding borders.',
    features: ['3D Embossed Floral Wheel', 'Velvet Touch Plush', 'Light Winter & AC Room', 'Shrink Resistant']
  },
  {
    id: 'blk-02',
    category: 'blankets',
    name: 'Camel Brown Geometric Criss-Cross Single Mink Blanket',
    subtitle: 'Modern Diamond Lattice & Rose Border',
    tag: 'Best Seller',
    material: 'Korean Mink Plush',
    threadCount: '3.0 KG Mid-Weight',
    price: 1099,
    mrp: 1799,
    discount: '39% OFF',
    rating: 4.8,
    reviewsCount: 165,
    sizes: ['Single Bed (150x220 cm)', 'Double Bed (200x240 cm)'],
    colors: ['#b45309', '#78350f', '#fef3c7', '#d97706'],
    moreVarietiesCount: 20,
    image: '/images/blankets/blk-camel-geometric.png',
    description: 'Sophisticated warm camel brown mink blanket designed with a bold dark brown criss-cross lattice body and elegant floral side borders.',
    features: ['Geometric Lattice Design', 'Silky Smooth Pile', 'Pre-shrunk Micro-Plush', 'Easy Machine Wash']
  },
  {
    id: 'blk-03',
    category: 'blankets',
    name: 'Rich Brown & Coral Rose Leopard Border Heavy Double Mink Blanket',
    subtitle: 'Double Ply Super Thermal Winter Blanket',
    tag: 'Luxury Grade',
    material: 'Korean Mink Plush',
    threadCount: '4.8 KG Heavy Weight',
    price: 1899,
    mrp: 3199,
    discount: '40% OFF',
    rating: 5.0,
    reviewsCount: 240,
    sizes: ['Double Bed (200x240 cm)', 'King Size (220x250 cm)'],
    colors: ['#451a03', '#ea580c', '#78350f', '#9a3412'],
    moreVarietiesCount: 30,
    image: '/images/blankets/blk-brown-rose-leopard.png',
    description: 'Heavyweight double ply mink blanket featuring opulent coral rose center blooms framed with chic leopard print borders for maximum winter warmth.',
    features: ['Double Ply Layer', 'Leopard Print Frame', 'Sub-Zero Winter Protection', 'Heavy Duty Finish']
  },
  {
    id: 'blk-04',
    category: 'blankets',
    name: 'Maroon & Golden Orange Royal Damask 5.5 KG Heavyweight Mink Blanket',
    subtitle: '5.5 KG Double Ply Royal Palace Collection',
    tag: 'Winter Special',
    material: 'Korean Mink Plush',
    threadCount: '5.5 KG Ultra Heavy Weight',
    price: 2199,
    mrp: 3599,
    discount: '39% OFF',
    rating: 5.0,
    reviewsCount: 215,
    sizes: ['Double Bed (200x240 cm)', 'Super King (240x260 cm)'],
    colors: ['#450a0a', '#c2410c', '#78350f', '#f59e0b'],
    moreVarietiesCount: 28,
    image: '/images/blankets/blk-maroon-damask-5.5kg.png',
    description: 'Our heaviest 5.5 KG double ply mink blanket. Rich dark maroon background with glowing golden orange floral damask tapestries.',
    features: ['5.5 KG Ultra Heavyweight', 'Double Ply Thermal Shield', 'Royal Damask Embroidery', 'Color Lock Tech']
  },
  {
    id: 'blk-05',
    category: 'blankets',
    name: 'Pastel Blue & Pink Dreamcatcher Embossed Soft Mink AC Blanket',
    subtitle: 'Lightweight All-Season Dreamcatcher Artwork',
    tag: 'Trending',
    material: 'Korean Mink Plush',
    threadCount: '2.8 KG Light Weight',
    price: 1399,
    mrp: 2299,
    discount: '39% OFF',
    rating: 4.9,
    reviewsCount: 142,
    sizes: ['Double Bed (200x240 cm)'],
    colors: ['#38bdf8', '#f472b6', '#bae6fd', '#fbcfe8'],
    moreVarietiesCount: 18,
    image: '/images/blankets/blk-pastel-dreamcatcher.png',
    description: 'Aesthetic pastel sky blue and blush pink ombre mink blanket embossed with dreamy feather dreamcatcher artwork for year-round AC room comfort.',
    features: ['Ombre Pastel Colors', 'Dreamcatcher Art', 'AC Room Comfort', 'Feather Soft Velvet']
  },

  // 2. Pillows - Exact Uploaded Store Photos
  {
    id: 'pil-01',
    category: 'pillows',
    name: 'Pure White Microfiber Bounce Hotel Quality Pillow',
    subtitle: 'Ultra Soft Conjugate Fiber Fill',
    tag: 'Store Original',
    material: 'Microfiber Down',
    threadCount: '100% Breathable Shell',
    price: 399,
    mrp: 799,
    discount: '50% OFF',
    rating: 5.0,
    reviewsCount: 210,
    sizes: ['Standard (17x27 inches)', 'King (20x30 inches)'],
    colors: ['#ffffff'],
    moreVarietiesCount: 10,
    image: '/images/pillows/pil-white-plush-bounce.png',
    description: 'Resilient pure white bounce sleeping pillow stuffed with hypoallergenic conjugate microfiber down fill. Ensures optimal neck & spine support.',
    features: ['Conjugate Microfiber Fill', 'Anti-Allergic Shell', 'Restorable Fluff', '5-Star Hotel Softness']
  },
  {
    id: 'pil-02',
    category: 'pillows',
    name: 'Charcoal Grey & White Dual-Tone Hotel Pillow Set (Pair of 2)',
    subtitle: 'Modern 2-Tone Hotel Luxury Contour Pillows',
    tag: 'Best Seller',
    material: 'Microfiber Down',
    threadCount: 'Dual-Layer Fabric',
    price: 799,
    mrp: 1399,
    discount: '43% OFF',
    rating: 4.9,
    reviewsCount: 185,
    sizes: ['Standard (17x27 inches)', 'King (20x30 inches)'],
    colors: ['#4b5563', '#ffffff', '#1f2937'],
    moreVarietiesCount: 12,
    image: '/images/pillows/pil-charcoal-duotone-set.png',
    description: 'Ultra-modern charcoal grey and crisp white half-and-half dual tone hotel pillow set. High density rebound fill for back & side sleepers.',
    features: ['Dual-Tone Aesthetic', 'Pair of 2 Pillows', 'Medium Firm Support', 'Breathable Casing']
  },
  {
    id: 'pil-03',
    category: 'pillows',
    name: 'Royal Navy Blue Piped Cord Bounce Sleeping Pillow Set (Pair of 2)',
    subtitle: 'Reinforced Piped Seam Bordering',
    tag: 'Luxury Grade',
    material: 'Microfiber Down',
    threadCount: 'High Density Bounce',
    price: 899,
    mrp: 1499,
    discount: '40% OFF',
    rating: 5.0,
    reviewsCount: 164,
    sizes: ['Standard (17x27 inches)', 'King (20x30 inches)'],
    colors: ['#1e3a8a', '#ffffff', '#0f172a'],
    moreVarietiesCount: 15,
    image: '/images/pillows/pil-navy-piped-pair.png',
    description: 'Premium white hotel pillows framed with dark royal navy blue cording along the perimeter seams for extra structural bounce and shape retention.',
    features: ['Navy Blue Piped Cord Border', 'High Shape Retention', 'Pair of 2 Pillows', 'Spine Support Alignment']
  },

  // 3. Cushion Covers - Exact Uploaded Store Photos
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

  // 4. Comforters - Exact Uploaded Store Photos
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

  // 5. Bed Sheets - Exact Uploaded Photos
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

  // 6. Curtains - Exact Uploaded Store Photos
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

  // 7. Polar Fleeces
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

  // 8. Shawls
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
    product: 'Rich Brown & Coral Rose Heavy Mink Blanket'
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
    product: 'Maroon & Golden Orange 5.5 KG Mink Blanket'
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

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
  // 1. Bed Sheets - Strict Bed Sheet Photos Only
  {
    id: 'bs-01',
    category: 'bed-sheets',
    name: 'Royal Indigo Floral Block Print Cotton Bedsheet',
    subtitle: 'Includes 2 Matching Pillow Covers',
    tag: 'Best Seller',
    material: '100% Pure Cotton',
    threadCount: '300 TC',
    price: 899,
    mrp: 1499,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 128,
    sizes: ['Single (60x90")', 'Double (90x100")', 'King (108x108")'],
    colors: ['#1e3a8a', '#881337', '#065f46'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Indigo & Floral Sanganeri block print on breathable premium cotton. Ultra-durable color fastness with high thread count softness.',
    features: ['300 Thread Count', 'Color-Fast Dye', 'Breathable Weave', 'Machine Washable']
  },
  {
    id: 'bs-02',
    category: 'bed-sheets',
    name: 'Jaipuri Elephant Motif Heritage Bedsheet Set',
    subtitle: 'Traditional Artisanal Handloom Print',
    tag: 'Handcrafted',
    material: '100% Pure Cotton',
    threadCount: '250 TC',
    price: 1199,
    mrp: 1899,
    discount: '37% OFF',
    rating: 4.8,
    reviewsCount: 94,
    sizes: ['Double (90x100")', 'King (108x108")'],
    colors: ['#d97706', '#991b1b', '#1e293b'],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant ethnic elephant prints framed with intricate border motifs. Designed to add timeless Indian heritage elegance to your bedroom.',
    features: ['Ethnic Handloom Print', 'Soft Handfeel', 'Pre-shrunk Fabric']
  },
  {
    id: 'bs-03',
    category: 'bed-sheets',
    name: 'Deep Pocket Glace Cotton Fitted Elastic Bedsheet',
    subtitle: 'Snug Fit 360-Degree Elasticated Edges',
    tag: 'Easy Maintenance',
    material: '100% Pure Cotton',
    threadCount: '400 TC',
    price: 999,
    mrp: 1599,
    discount: '38% OFF',
    rating: 4.7,
    reviewsCount: 82,
    sizes: ['Double (90x100")', 'King (108x108")'],
    colors: ['#0284c7', '#059669', '#7c3aed'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    description: 'Wrinkle-resistant super soft cotton with deep pockets to accommodate up to 10-inch mattresses without slipping.',
    features: ['360 Elastic Border', 'No Tuck-in Hassle', 'Silky Smooth Finish']
  },
  {
    id: 'bs-04',
    category: 'bed-sheets',
    name: 'Modern Geometric Satin Striped Hotel Bedsheet',
    subtitle: '5-Star Hotel Luxury Comfort',
    tag: 'Luxury Edition',
    material: '100% Pure Cotton',
    threadCount: '500 TC',
    price: 1499,
    mrp: 2499,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 156,
    sizes: ['King (108x108")', 'Super King (110x120")'],
    colors: ['#ffffff', '#cbd5e1', '#fef08a'],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp white satin striped weave engineered for five-star hotel comfort and cooling breathability.',
    features: ['500 Thread Count', 'Satin Striped Finish', 'Hypoallergenic']
  },

  // 2. Cushion Covers - Strict Cushion Cover Photos Only
  {
    id: 'cc-01',
    category: 'cushion-covers',
    name: 'Embroidered Velvet Zari Floral Cushion Covers (Set of 5)',
    subtitle: 'Rich Royal Blue & Gold Threadwork',
    tag: 'Hot Seller',
    material: 'Dutch Velvet & Zari',
    threadCount: 'Premium Heavy',
    price: 699,
    mrp: 1299,
    discount: '46% OFF',
    rating: 4.9,
    reviewsCount: 110,
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['#172554', '#881337', '#042f2e'],
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious plush velvet with metallic gold hand-embroidery. Features heavy concealed zipper closure for long-lasting aesthetic appeal.',
    features: ['Heavy Zari Work', 'Concealed Zipper', 'Plush Texture']
  },
  {
    id: 'cc-02',
    category: 'cushion-covers',
    name: 'Boho Organic Jute Tufted Tassel Cushion Covers (Set of 5)',
    subtitle: 'Handwoven Natural Tones',
    tag: 'Trending',
    material: 'Organic Jute Blend',
    threadCount: 'Handwoven Heavy',
    price: 599,
    mrp: 999,
    discount: '40% OFF',
    rating: 4.7,
    reviewsCount: 76,
    sizes: ['16x16 inches', '20x20 inches'],
    colors: ['#d97706', '#78350f', '#3f6212'],
    image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80',
    description: 'Earthy handwoven textures with playful tassel corners. Perfect for accentuating living room couches and lounge chairs.',
    features: ['Hand-tufted Tassels', 'Eco-friendly Cotton', 'Durable Weave']
  },
  {
    id: 'cc-03',
    category: 'cushion-covers',
    name: 'Silk Jacquard Peacock Art Cushion Covers (Set of 5)',
    subtitle: 'Vibrant Traditional Mandala Motifs',
    tag: 'Exclusive Art',
    material: 'Dutch Velvet & Zari',
    threadCount: 'Artisan Finish',
    price: 749,
    mrp: 1399,
    discount: '46% OFF',
    rating: 4.8,
    reviewsCount: 62,
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['#0f766e', '#b45309', '#581c87'],
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    description: 'High-definition digital mandala motifs woven on silk jacquard backdrops for opulent living room decor.',
    features: ['HD Digital Print', 'Piped Edge Borders', 'Fade-Proof Colors']
  },

  // 3. Curtains - Strict Curtain Drapes Photos Only
  {
    id: 'cur-01',
    category: 'curtains',
    name: 'Heavy Jacquard Self Floral Curtains (Set of 2)',
    subtitle: 'Brass Eyelet Grommets Included',
    tag: 'Premium Quality',
    material: 'Polyester Jacquard',
    threadCount: 'Heavy 350 GSM',
    price: 1299,
    mrp: 2199,
    discount: '41% OFF',
    rating: 4.9,
    reviewsCount: 142,
    sizes: ['Window (5 ft)', 'Door (7 ft)', 'Long Door (9 ft)'],
    colors: ['#e6c265', '#1e293b', '#475569'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Rich self-patterned gold and cream jacquard weave. Provides 85% light control and thermal insulation against heat.',
    features: ['85% Blackout', 'Rust-Free Eyelets', 'Wrinkle Resistant']
  },
  {
    id: 'cur-02',
    category: 'curtains',
    name: 'Sheer Linen Daylight Diffusing Curtains (Set of 2)',
    subtitle: 'Subtle Botanical Tree Branch Artwork',
    tag: 'Elegant Choice',
    material: '100% Pure Cotton',
    threadCount: 'Soft Sheer Weave',
    price: 899,
    mrp: 1499,
    discount: '40% OFF',
    rating: 4.7,
    reviewsCount: 88,
    sizes: ['Door (7 ft)', 'Long Door (9 ft)'],
    colors: ['#ffffff', '#fef08a', '#e2e8f0'],
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&w=800&q=80',
    description: 'Airy, graceful sheer panels featuring subtle botanic line work. Allows natural daylight while preserving indoor privacy.',
    features: ['Light Diffusing', 'Fluid Drape', 'Easy Care']
  },
  {
    id: 'cur-03',
    category: 'curtains',
    name: '100% Solid Velvet Thermal Blackout Curtains (Set of 2)',
    subtitle: 'Complete Room Darkening & Noise Shield',
    tag: '100% Blackout',
    material: 'Dutch Velvet & Zari',
    threadCount: 'Extra Heavy 450 GSM',
    price: 1699,
    mrp: 2799,
    discount: '39% OFF',
    rating: 4.9,
    reviewsCount: 104,
    sizes: ['Door (7 ft)', 'Long Door (9 ft)'],
    colors: ['#0f172a', '#450a0a', '#064e3b'],
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-dense velvet drapes blocking 100% sun rays, dampening outside noise, and maintaining cool air conditioning indoors.',
    features: ['100% Light Block', 'Sound Dampening', 'Heavy Thermal Shield']
  },

  // 4. Comforters - Strict Quilted Comforter Photos Only
  {
    id: 'com-01',
    category: 'comforters',
    name: 'All-Season Ultra Soft Reversible Microfiber Comforter',
    subtitle: '200 GSM Hypoallergenic Down Alternative',
    tag: 'Top Rated',
    material: 'Microfiber Down',
    threadCount: '200 GSM Soft Fill',
    price: 1499,
    mrp: 2499,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 168,
    sizes: ['Single (60x90")', 'Double / King (90x100")'],
    colors: ['#1e3a8a', '#475569', '#991b1b'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    description: 'Cloud-like warmth designed for year-round air conditioned comfort. Box-stitched pattern prevents filling from shifting.',
    features: ['Dual Color Reversible', 'Diamond Box Stitching', 'Feather Soft']
  },
  {
    id: 'com-02',
    category: 'comforters',
    name: 'Heavy Winter 400 GSM Plush Sherpa Quilted Duvet',
    subtitle: 'Double Ply Cozy Winter Blanket Duvet',
    tag: 'Winter Essential',
    material: 'Microfiber Down',
    threadCount: '400 GSM Ultra Thermal',
    price: 2299,
    mrp: 3799,
    discount: '39% OFF',
    rating: 4.9,
    reviewsCount: 95,
    sizes: ['Double / King (90x100")'],
    colors: ['#78350f', '#1e1b4b', '#1c1917'],
    image: 'https://images.unsplash.com/photo-1629949009765-40fc74c954c9?auto=format&fit=crop&w=800&q=80',
    description: 'Double-sided quilted duvet with fleece backing. Delivers intense winter heat retention without heavy bulk.',
    features: ['Sherpa Warmth', 'Corner Anchor Loops', 'Breathable Shell']
  },

  // 5. Mink Blankets - Strict Korean Mink Blanket Photos Only
  {
    id: 'blk-01',
    category: 'blankets',
    name: 'Heavyweight Korean 3D Embossed Floral Mink Blanket',
    subtitle: '5.5 KG Double Ply Super Warm Blanket',
    tag: 'Winter Special',
    material: 'Korean Mink Plush',
    threadCount: '5.5 KG Heavy Weight',
    price: 1999,
    mrp: 3499,
    discount: '43% OFF',
    rating: 4.9,
    reviewsCount: 210,
    sizes: ['Double Bed (200x240 cm)'],
    colors: ['#881337', '#1e3a8a', '#451a03'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-luxurious double ply mink blanket featuring 3D embossed floral patterns. Engineered to lock in maximum warmth for cold nights.',
    features: ['Double Ply Layer', '3D Floral Embossing', 'Shrink Resistant']
  },
  {
    id: 'blk-02',
    category: 'blankets',
    name: 'Single Ply Velvet Touch Lightweight Mink Blanket',
    subtitle: 'Cozy AC & Light Winter Blanket',
    tag: 'Value Pack',
    material: 'Korean Mink Plush',
    threadCount: '2.5 KG Soft Weight',
    price: 1199,
    mrp: 1999,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 115,
    sizes: ['Single Bed (150x220 cm)', 'Double Bed (200x240 cm)'],
    colors: ['#0f766e', '#b45309', '#312e81'],
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80',
    description: 'Silky single-ply mink blanket designed for AC bedroom temperatures and mid-season chills.',
    features: ['Velvet Soft Finish', 'Non-Shedding Micro-Fibers', 'Washable']
  },

  // 6. Polar Fleeces - Strict Polar Fleece Photos Only
  {
    id: 'pb-01',
    category: 'polar-blankets',
    name: 'Ultra Lightweight Thermal Travel Polar Fleece Blanket',
    subtitle: '280 GSM Compact & Super Soft',
    tag: 'Travel Favorite',
    material: 'Korean Mink Plush',
    threadCount: '280 GSM Density',
    price: 499,
    mrp: 899,
    discount: '44% OFF',
    rating: 4.8,
    reviewsCount: 145,
    sizes: ['Single (54x90")', 'Double (80x90")'],
    colors: ['#0284c7', '#d97706', '#059669'],
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80',
    description: 'Silky smooth polar fleece blanket. Perfect for light winter warmth, AC rooms, sofa snuggles, and travel comfort.',
    features: ['Lint-Free Fleece', 'Lightweight Warmth', 'Quick Dry']
  },
  {
    id: 'pb-02',
    category: 'polar-blankets',
    name: 'Super Soft Brushed Coral Fleece Sofa Throw Blanket',
    subtitle: '320 GSM Plush Coral Accent Throw',
    tag: 'Soft Touch',
    material: 'Korean Mink Plush',
    threadCount: '320 GSM Coral Weave',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    rating: 4.7,
    reviewsCount: 78,
    sizes: ['Single (60x90")', 'Double (80x90")'],
    colors: ['#be123c', '#4338ca', '#15803d'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Extra plush coral fleece throw with stitched satin hem. Ideal for lounge chairs and bedroom layering.',
    features: ['Brushed Softness', 'No Pills or Fuzz', 'Fade Resistant']
  },

  // 7. Shawls - Strict Shawl Photos Only
  {
    id: 'sh-01',
    category: 'shawls',
    name: 'Handcrafted Kashmiri Heritage Pure Woolen Shawl',
    subtitle: 'Intricate Border Weave & Paisley Embroidery',
    tag: 'Artisan Crafted',
    material: 'Merino Wool Blend',
    threadCount: '100% Fine Weave',
    price: 1299,
    mrp: 2299,
    discount: '43% OFF',
    rating: 4.9,
    reviewsCount: 88,
    sizes: ['Free Size (100x200 cm)'],
    colors: ['#7c2d12', '#1e1b4b', '#450a0a'],
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Kashmiri style woven shawl with rich traditional borders. Keeps you warmly wrapped in regal sophistication.',
    features: ['Pure Warm Wool', 'Traditional Jacquard Border', 'Soft Handfeel']
  },
  {
    id: 'sh-02',
    category: 'shawls',
    name: 'Jacquard Floral Pashmina Reversible Wrap Shawl',
    subtitle: 'Dual Side Motif Festive Gents & Ladies Wrap',
    tag: 'Unisex Style',
    material: 'Merino Wool Blend',
    threadCount: 'Pure Soft Touch',
    price: 999,
    mrp: 1799,
    discount: '44% OFF',
    rating: 4.8,
    reviewsCount: 64,
    sizes: ['Free Size (100x200 cm)'],
    colors: ['#1e293b', '#b45309', '#047857'],
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight yet incredibly warm shawl designed with elegant royal borders for winter festive occasions.',
    features: ['Dual Side Pattern', 'Wrinkle Free', 'Gentle Wash']
  },

  // 8. Pillows - Strict Bed Pillow Photos Only
  {
    id: 'pil-01',
    category: 'pillows',
    name: 'Ergonomic Microfiber Bounce Pillow Set (Pair of 2)',
    subtitle: 'Hotel Quality Medium-Firm Neck Support',
    tag: 'Customer Favorite',
    material: 'Microfiber Down',
    threadCount: 'Conjugate Fiber Fill',
    price: 799,
    mrp: 1399,
    discount: '42% OFF',
    rating: 4.9,
    reviewsCount: 190,
    sizes: ['Standard (17x27 inches)', 'King (20x30 inches)'],
    colors: ['#ffffff'],
    image: 'https://images.unsplash.com/photo-1629949009765-40fc74c954c9?auto=format&fit=crop&w=800&q=80',
    description: 'Resilient microfiber bounce pillows engineered for spine alignment and plush neck support. Breathable cotton casing.',
    features: ['Non-Allergic', 'Fluff Restorable', 'Neck Support']
  },
  {
    id: 'pil-02',
    category: 'pillows',
    name: 'Orthopedic Cooling Memory Foam Cervical Neck Pillow',
    subtitle: 'Cervical Spine Support Design',
    tag: 'Health Care',
    material: 'Microfiber Down',
    threadCount: 'High Density Foam',
    price: 1199,
    mrp: 1999,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 112,
    sizes: ['Contour (20x14x4 inches)'],
    colors: ['#e0f2fe'],
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    description: 'Contoured memory foam pillow relieving neck pain and pressure points for restorative sleep.',
    features: ['Slow Rebound Foam', 'Cooling Gel Infused', 'Removable Cover']
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
    product: 'Royal Block Print Pure Cotton Bedsheet'
  },
  {
    id: 2,
    name: 'Lakshmi Prasanna',
    location: 'Near NK Road',
    rating: 5,
    date: '1 month ago',
    comment: 'Customized our full house curtains and velvet cushion covers through Haryana Handloom Camp. Store uncle guided us patiently with color matching. Highly recommended!',
    product: 'Heavy Jacquard Blackout Curtains'
  },
  {
    id: 3,
    name: 'Ramesh Reddy',
    location: 'Sanjeeva Nagar, Nandyal',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Direct loom prices are genuine! Bought Korean 3D mink blanket and comforters. Very soft and warm for AC rooms.',
    product: 'Korean Embossed 3D Mink Blanket'
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

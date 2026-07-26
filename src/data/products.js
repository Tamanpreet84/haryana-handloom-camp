export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles' },
  { id: 'bed-sheets', name: 'Bed Sheets', icon: 'Bed' },
  { id: 'cushion-covers', name: 'Cushion Covers', icon: 'Square' },
  { id: 'curtains', name: 'Curtains', icon: 'Columns' },
  { id: 'comforters', name: 'Comforters', icon: 'Box' },
  { id: 'blankets', name: 'Blankets', icon: 'Layers' },
  { id: 'polar-blankets', name: 'Polar Blankets', icon: 'Snowflake' },
  { id: 'shawls', name: 'Shawls', icon: 'Shirt' },
  { id: 'pillows', name: 'Pillows', icon: 'Disc' },
];

export const PRODUCTS = [
  // Bed Sheets
  {
    id: 'bs-01',
    category: 'bed-sheets',
    name: 'Royal Block Print Pure Cotton Double Bed Sheet',
    subtitle: 'Includes 2 Matching Pillow Covers',
    tag: 'Best Seller',
    material: '100% Super Soft Pure Cotton',
    sizes: ['Single (60x90")', 'Double (90x100")', 'King (108x108")'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Indigo & Floral Sanganeri block print on breathable premium cotton. Ultra-durable color fastness with high thread count softness.',
    features: ['High Thread Count', 'Color-Fast Dye', 'Breathable Weave', 'Machine Washable']
  },
  {
    id: 'bs-02',
    category: 'bed-sheets',
    name: 'Jaipuri Elephant Motif Luxury Bedsheet Set',
    subtitle: 'Traditional Heritage Craftsmanship',
    tag: 'Handcrafted',
    material: '100% Percale Cotton',
    sizes: ['Double (90x100")', 'King (108x108")'],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant ethnic elephant prints framed with intricate border motifs. Designed to add timeless Indian heritage elegance to your bedroom.',
    features: ['Ethnic Prints', 'Soft Handfeel', 'Pre-shrunk Fabric']
  },

  // Cushion Covers
  {
    id: 'cc-01',
    category: 'cushion-covers',
    name: 'Embroidered Velvet Floral Cushion Cover Set (5 Pcs)',
    subtitle: 'Rich Royal Blue & Gold Threadwork',
    tag: 'Hot Item',
    material: 'Premium Dutch Velvet with Zari Thread Work',
    sizes: ['16x16 inches', '18x18 inches'],
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious plush velvet with metallic gold hand-embroidery. Features heavy concealed zipper closure for long-lasting aesthetic appeal.',
    features: ['Heavy Zari Work', 'Concealed Zipper', 'Plush Texture']
  },
  {
    id: 'cc-02',
    category: 'cushion-covers',
    name: 'Handloom Cotton Jute Textured Cushion Covers (5 Pcs)',
    subtitle: 'Boho Chic Neutral & Mustard Tones',
    tag: 'Trending',
    material: 'Organic Cotton & Jute Blend',
    sizes: ['16x16 inches', '20x20 inches'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Earthy handwoven textures with playful tassel corners. Perfect for accentuating living room couches and lounge chairs.',
    features: ['Hand-tufted Tassels', 'Eco-friendly Cotton', 'Durable Weave']
  },

  // Curtains
  {
    id: 'cur-01',
    category: 'curtains',
    name: 'Heavy Jacquard Floral Room Darkening Curtains (Set of 2)',
    subtitle: 'Brass Eyelet Grommets Included',
    tag: 'Premium Quality',
    material: 'Heavyweight Polyester Jacquard Weave',
    sizes: ['Window (5 ft)', 'Door (7 ft)', 'Long Door (9 ft)'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Rich self-patterned gold and cream jacquard weave. Provides 85% light control and thermal insulation against heat.',
    features: ['85% Blackout', 'Rust-Free Eyelets', 'Wrinkle Resistant']
  },
  {
    id: 'cur-02',
    category: 'curtains',
    name: 'Sheer Linen Hand-Printed Tree Branch Curtains (Set of 2)',
    subtitle: 'Soft Ambient Light Filtering',
    tag: 'Elegant Choice',
    material: 'Natural Linen Cotton Blend',
    sizes: ['Door (7 ft)', 'Long Door (9 ft)'],
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&w=800&q=80',
    description: 'Airy, graceful sheer panels featuring subtle botanic line work. Allows natural daylight while preserving indoor privacy.',
    features: ['Light Diffusing', 'Fluid Drape', 'Easy Care']
  },

  // Comforters
  {
    id: 'com-01',
    category: 'comforters',
    name: 'All-Season Ultra Soft Reversible Microfiber Comforter',
    subtitle: '200 GSM Hypoallergenic Down Alternative',
    tag: 'Top Rated',
    material: 'Microfiber Shell with Hollow Siliconized Fiber',
    sizes: ['Single (60x90")', 'Double / King (90x100")'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    description: 'Cloud-like warmth designed for year-round air conditioned comfort. Box-stitched pattern prevents filling from shifting.',
    features: ['Dual Color Reversible', 'Diamond Box Stitching', 'Feather Soft']
  },

  // Blankets
  {
    id: 'blk-01',
    category: 'blankets',
    name: 'Heavy Heavyweight Korean Embossed Mink Blanket',
    subtitle: 'Double Ply Super Warm Winter Blanket',
    tag: 'Winter Special',
    material: 'Micro-polyester Mink Plush',
    sizes: ['Double Bed (200x240 cm)'],
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-luxurious double ply mink blanket featuring 3D embossed floral patterns. Engineered to lock in maximum warmth for harsh cold nights.',
    features: ['Double Ply Layer', '3D Floral Embossing', 'Shrink Resistant']
  },

  // Polar Blankets
  {
    id: 'pb-01',
    category: 'polar-blankets',
    name: 'Ultra Lightweight Thermal Polar Fleece Blanket',
    subtitle: 'Compact, Travel-Friendly & Super Cozy',
    tag: 'All Sizes Available',
    material: 'High-Density Polar Fleece',
    sizes: ['Single (54x90")', 'Double (80x90")'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Silky smooth polar fleece blanket. Perfect for light winter warmth, AC rooms, sofa snuggles, and travel comfort.',
    features: ['Lint-Free Fleece', 'Lightweight Warmth', 'Quick Dry']
  },

  // Shawls
  {
    id: 'sh-01',
    category: 'shawls',
    name: 'Handcrafted Heritage Woolen Shawl',
    subtitle: 'Intricate Border Weave & Paisley Embroidery',
    tag: 'Artisan Crafted',
    material: 'Pure Australian Merino Wool Blend',
    sizes: ['Free Size (100x200 cm)'],
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Kashmiri style woven shawl with rich traditional borders. Keeps you warmly wrapped in regal sophistication.',
    features: ['Pure Warm Wool', 'Traditional Jacquard Border', 'Soft Handfeel']
  },

  // Pillows
  {
    id: 'pil-01',
    category: 'pillows',
    name: 'Ergonomic Microfiber Bounce Pillow Set (Pair of 2)',
    subtitle: 'Hotel Quality Medium-Firm Support',
    tag: 'Customer Favorite',
    material: '100% Virgin Conjugate Microfiber',
    sizes: ['Standard (17x27 inches)', 'King (20x30 inches)'],
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    description: 'Resilient microfiber bounce pillows engineered for spine alignment and plush neck support. Breathable cotton casing.',
    features: ['Non-Allergic', 'Fluff Restorable', 'Neck Support']
  }
];

export const STORE_DETAILS = {
  name: 'HARYANA HANDLOOM CAMP',
  tagline: 'Weave Comfort Into Your Life',
  subtitle: 'PREMIUM HOME FURNISHING COLLECTION',
  address: 'NK Road, Nandyal, Pincode 518501 (Near Sai Baba Mandir)',
  city: 'Nandyal, Andhra Pradesh',
  phones: ['9215211025', '9215511025'],
  whatsapp: '919215211025',
  hours: 'Monday - Sunday: 9:30 AM - 9:30 PM',
  highlights: [
    { title: 'Best Quality', desc: '100% Handloom & Premium Checked Fabrics' },
    { title: 'Latest Designs', desc: 'Exclusive Indian Traditional & Modern Prints' },
    { title: 'Affordable Prices', desc: 'Direct Loom Pricing with No Middlemen' },
    { title: 'All Sizes Available', desc: 'Single, Double, King & Custom Tailoring' }
  ]
};

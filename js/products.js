/* ==========================================================
   Products — add, remove or edit items here.
   category: "bridal" | "evening" | "traditional" | "casual" | "men"
   image:    a URL, or a local file like "images/my-dress.jpg"
   price:    a number (shown with SITE.currency), or "" for "Price on request"
   featured: true to show on the home page
   ========================================================== */
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=1040&q=75`;

const PRODUCTS = [
  {
    id: "royal-lace-gown",
    name: "Royal Lace Bridal Gown",
    category: "bridal",
    price: "",
    image: U("photo-1594552072238-b8a33785b261"),
    description: "Hand-beaded French lace over a sculpted corset bodice, finished with a cathedral-length train. Made to measure for your day.",
    featured: true,
  },
  {
    id: "garden-bride",
    name: "Garden Romance Bridal Set",
    category: "bridal",
    price: "",
    image: U("photo-1591604466107-ec97de577aff"),
    description: "A soft lace sheath for the bride with a coordinating tailored suit for the groom. Perfect for outdoor ceremonies.",
    featured: false,
  },
  {
    id: "scarlet-flow",
    name: "Scarlet Flow Ball Gown",
    category: "evening",
    price: 185000,
    image: U("photo-1595777457583-95e059d581b8"),
    description: "Floor-sweeping satin in rich scarlet with a fitted bodice and a full skirt that moves beautifully with every step.",
    featured: true,
  },
  {
    id: "plum-majesty",
    name: "Plum Majesty Off-Shoulder",
    category: "evening",
    price: 120000,
    image: U("photo-1566174053879-31528523f8ae"),
    description: "A body-skimming crepe gown with a clean off-shoulder neckline in deep plum. Understated and regal.",
    featured: true,
  },
  {
    id: "azure-breeze",
    name: "Azure Breeze Maxi",
    category: "evening",
    price: 95000,
    image: U("photo-1539008835657-9e8e9680c956"),
    description: "A flowing chiffon wrap maxi with a plunging neckline and a high slit. Made for destination weddings and summer soirées.",
    featured: false,
  },
  {
    id: "ivory-anarkali",
    name: "Ivory Embroidered Flare",
    category: "traditional",
    price: 110000,
    image: U("photo-1583391733956-3750e0ff4e8b"),
    description: "A tiered, flared silhouette with delicate hand embroidery and a sheer matching veil.",
    featured: true,
  },
  {
    id: "golden-kaftan",
    name: "Golden Sun Kaftan",
    category: "traditional",
    price: 75000,
    image: U("photo-1605763240000-7e93b172d754"),
    description: "A saffron silk kaftan with floral embroidery on the bodice and sleeves. Belt it or wear it loose.",
    featured: true,
  },
  {
    id: "off-shoulder-white",
    name: "Cloud Off-Shoulder Dress",
    category: "casual",
    price: 45000,
    image: U("photo-1515372039744-b8f02a3ae446"),
    description: "A light cotton mini with a ruffled off-shoulder neckline and a smocked waist. Easy weekend elegance.",
    featured: false,
  },
  {
    id: "floral-wrap",
    name: "Blossom Wrap Dress",
    category: "casual",
    price: 55000,
    image: U("photo-1496747611176-843222e1e57c"),
    description: "An ivory floral print wrap dress with flutter sleeves and an adjustable tie waist.",
    featured: false,
  },
  {
    id: "sky-pencil",
    name: "Sky Tailored Pencil Dress",
    category: "casual",
    price: 60000,
    image: U("photo-1617922001439-4a2e6562f328"),
    description: "A structured cap-sleeve pencil dress in powder blue, cut close to the body to flatter.",
    featured: false,
  },
  {
    id: "heritage-three-piece",
    name: "Heritage Three-Piece Suit",
    category: "men",
    price: 210000,
    image: U("photo-1594938298603-c8148c4dae35"),
    description: "A windowpane-check wool suit with a matching waistcoat, fully canvassed and tailored to your measurements.",
    featured: true,
  },
  {
    id: "midnight-suit",
    name: "Midnight Slim Suit",
    category: "men",
    price: 165000,
    image: U("photo-1617137968427-85924c800a22"),
    description: "A sharp navy two-piece with a slim lapel and tapered trousers. Your go-to for events.",
    featured: false,
  },
];

const CATEGORIES = [
  ["all", "All"],
  ["bridal", "Bridal"],
  ["evening", "Evening"],
  ["traditional", "Traditional"],
  ["casual", "Casual"],
  ["men", "Men"],
];

// product.js:

const products = [
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://losangelesapparel.net/cdn/shop/products/RCP402-BLUE-2-s.jpg?v=1657030224",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=40",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 35,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy Blue", "Burgundy"],
    collections: "Formal Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://images.openai.com/thumbnails/025d89d8071288946e12c8833f8da4ac.webp",
        altText: "Slim-Fit Stretch Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=42",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Casual Denim Shirt",
    description:
      "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 15,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    brand: "Street Style",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Wash"],
    collections: "Casual Wear",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://www.citrusclothing.in/cdn/shop/files/CS_6631-C_1_1d6ff3dd-38cb-4485-9b66-20f2c6866cab.jpg?v=1734697356&width=900",
        altText: "Casual Denim Shirt Front View",
      },
      {
        url: "https://www.citrusclothing.in/cdn/shop/files/CS_6631-C_1_1d6ff3dd-38cb-4485-9b66-20f2c6866cab.jpg?v=1734697356&width=900",
        altText: "Casual Denim Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Printed Resort Shirt",
    description:
      "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    price: 29.99,
    discountPrice: 22.99,
    countInStock: 25,
    sku: "PRNT-RES-004",
    category: "Top Wear",
    brand: "Beach Breeze",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Tropical Print", "Navy Palms"],
    collections: "Vacation Wear",
    material: "Viscose",
    gender: "Men",
    images: [
      {
        url: "https://images.openai.com/static/encrypted-tbn2/shopping?q=tbn:ANd9GcQ7EzdiHeN02zMJTNDmZJGFfqaRpvk-_lBiGBnZz4jnmWAyTvgj3V4V-Yk6_bUfaURHzS9XlEY887SjE58iNh7M8ordAl1y&usqp=CAY",
        altText: "Printed Resort Shirt Front View",
      },
      {
        url: "https://images.openai.com/static/encrypted-tbn0/shopping?q=tbn:ANd9GcRuVpGxIKeacHg-sXHoXF9Rl7K0HbmjZaM1-h5Wwz6KiOakdNIRztLqTybHp_N7JcDww10nKJ1BEakAeQRlfVoY5nESn5Rx&usqp=CAY",
        altText: "Printed Resort Shirt Back View",
      },
    ],
    rating: 4.4,
    numReviews: 10,
  },
  {
    name: "Slim-Fit Easy-Iron Shirt",
    description:
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 30,
    sku: "SLIM-EIR-005",
    category: "Top Wear",
    brand: "Urban Chic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Gray"],
    collections: "Business Wear",
    material: "Cotton",
    gender: "Men",
    images: [
       {
        url: "https://images.openai.com/static/encrypted-tbn2/shopping?q=tbn:ANd9GcTFxtAKBwQ161hYLM5rT1HOlc028sdJIxjVA_ZJpLq90Cc_6lkcUqBSG3iJBJoRNzcrOs8J1W4YWZ2LzRUvkhS2M8X1M_TvSw&usqp=CAY",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
      {
        url: "https://images.openai.com/thumbnails/0bcc2a99e86b9d1144a13b691c5c6b50.webp",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
     
    ],
    rating: 5,
    numReviews: 14,
  },
  {
    name: "Polo T-Shirt with Ribbed Collar",
    description:
      "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    price: 24.99,
    discountPrice: 19.99,
    countInStock: 50,
    sku: "POLO-TSH-006",
    category: "Top Wear",
    brand: "Polo Classics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Red"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://images.openai.com/static/encrypted-tbn0/shopping?q=tbn:ANd9GcR-zwMG0ruhtS1Zpc7tJl4sChPSKrG9TTliy9B7Qa4GGpgLFzET2Iptpun12mcxGsyLsaMPTGkH0vymqPT65G6Rimovf0Wv&usqp=CAY",
        altText: "Polo T-Shirt Front View",
      },
      {
        url: "https://images.openai.com/static/encrypted-tbn2/shopping?q=tbn:ANd9GcScqQ8Ppl1O2B3kOrI15_8D2qyW9mnSSR7VSTub-ZKt64KwDtzLo76tkrXhI2JiUQauT9pSp7Z-JmeEUL5azvbwkeOF1jit&usqp=CAY",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: "Oversized Graphic T-Shirt",
    description:
      "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    price: 19.99,
    discountPrice: 15.99,
    countInStock: 40,
    sku: "OVS-GRF-007",
    category: "Top Wear",
    brand: "Street Vibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    collections: "Streetwear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://images.openai.com/static/encrypted-tbn2/shopping?q=tbn:ANd9GcSr1Duem5jiJN9DbL1LPJ3AuPcb7UBy9Lbim0q8l2dG108W_QmzkReweNoojYOV-knqXZ-yU3g0cjLQ_YanzWkI2YsDzy54&usqp=CAY",
        altText: "Oversized Graphic T-Shirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Regular-Fit Henley Shirt",
    description:
      "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    price: 22.99,
    discountPrice: 18.99,
    countInStock: 35,
    sku: "REG-HEN-008",
    category: "Top Wear",
    brand: "Heritage Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Heather Gray", "Olive", "Black"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://image.hm.com/assets/hm/bf/85/bf85e78864ae8956641e5eb6a190830c85eb93b7.jpg?imwidth=1536",
        altText: "Regular-Fit Henley Shirt Front View",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Long-Sleeve Thermal Tee",
    description:
      "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    price: 27.99,
    discountPrice: 22.99,
    countInStock: 20,
    sku: "LST-THR-009",
    category: "Top Wear",
    brand: "Winter Basics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Dark Green", "Navy"],
    collections: "Winter Essentials",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/51kK4HOHSvL._SX569_.jpg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: "V-Neck Classic T-Shirt",
    description:
      "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    price: 14.99,
    discountPrice: 11.99,
    countInStock: 60,
    sku: "VNECK-CLS-010",
    category: "Top Wear",
    brand: "Everyday Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    collections: "Basics",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://imagescdn.vanheusenindia.com/img/app/product/7/749638-8470564.jpg?auto=format&w=390",
        altText: "V-Neck Classic T-Shirt Front View",
      },
    ],
    rating: 4.7,
    numReviews: 28,
  },
  {
    name: "Slim Fit Joggers",
    description:
      "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-001",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/710Sy3F1f+L._SY741_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Cargo Joggers",
    description:
      "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    price: 45,
    discountPrice: 40,
    countInStock: 15,
    sku: "BW-002",
    category: "Bottom Wear",
    brand: "UrbanStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/6388524e38573bc3aa16e112/cat_img/Mint_Green_Cargo_1736491536537_b1il0004iznms53.jpg",
        altText: "Cargo Joggers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Tapered Sweatpants",
    description:
      "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    price: 35,
    discountPrice: 30,
    countInStock: 25,
    sku: "BW-003",
    category: "Bottom Wear",
    brand: "ChillZone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Charcoal", "Blue"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://oldnavy.gap.com/webcontent/0056/075/367/cn56075367.jpg",
        altText: "Tapered Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: "Denim Jeans",
    description:
      "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://images.wrangler.com/is/image/Wrangler/112332617-HERO?$PDP24-XXLARGE$&fit=crop",
        altText: "Denim Jeans Front View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: "Chino Pants",
    description:
      "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    price: 55,
    discountPrice: 48,
    countInStock: 40,
    sku: "BW-005",
    category: "Bottom Wear",
    brand: "CasualLook",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Black"],
    collections: "Smart Casual Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://target.scene7.com/is/image/Target/GUEST_43ee37da-fd56-47ae-9aed-b2d745737a43?wid=1200&hei=1200&qlt=80&fmt=webp",
        altText: "Chino Pants Front View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Track Pants",
    description:
      "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-006",
    category: "Bottom Wear",
    brand: "SportX",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "Blue"],
    collections: "Activewear Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://nohble.com/cdn/shop/products/PM-53948556.jpg?v=1677617479&width=1080",
        altText: "Track Pants Front View",
      },
    ],
    rating: 4.2,
    numReviews: 17,
  },
  {
    name: "Slim Fit Trousers",
    description:
      "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    price: 65,
    discountPrice: 55,
    countInStock: 15,
    sku: "BW-007",
    category: "Bottom Wear",
    brand: "ExecutiveStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Gray", "Black"],
    collections: "Office Wear",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://image.hm.com/assets/hm/2a/83/2a83b6a11a24bd044a4f67d9d7a11d9dbe40365e.jpg?imwidth=2160",
        altText: "Slim Fit Trousers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: "Cargo Pants",
    description:
      "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    price: 50,
    discountPrice: 45,
    countInStock: 25,
    sku: "BW-008",
    category: "Bottom Wear",
    brand: "StreetWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Brown", "Black"],
    collections: "Street Style Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000013596505-Green-GREEN-1000013596505_02-2100.jpg",
        altText: "Cargo Pants Front View",
      },
    ],
    rating: 4.5,
    numReviews: 13,
  },
  {
    name: "Relaxed Fit Sweatpants",
    description:
      "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    price: 35,
    discountPrice: 30,
    countInStock: 35,
    sku: "BW-009",
    category: "Bottom Wear",
    brand: "LoungeWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fboynecountrysports.com%2Fproducts%2Fthe-north-face-mens-half-dome-sweatpant&psig=AOvVaw0RlkWupyo8O8TTXp_GgY-F&ust=1748497893121000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDM3LS8xY0DFQAAAAAdAAAAABAL",
        altText: "Relaxed Fit Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 14,
  },
  {
    name: "Formal Dress Pants",
    description:
      "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    price: 70,
    discountPrice: 60,
    countInStock: 20,
    sku: "BW-010",
    category: "Bottom Wear",
    brand: "ElegantStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://pantproject.com/cdn/shop/files/DSC2409_24e976fe-76b0-4740-aa5a-0ba59591a87b.jpg?v=1745228096&width=310",
        altText: "Formal Dress Pants Front View",
      },
    ],
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "High-Waist Skinny Jeans",
    description:
      "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-001",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://www.terranovastyle.com/media/catalog/product/cache/b46beb9cecc73a6626ba06cdd3edd3db/s/a/b/0/SAB0066825001S352_det_1_11060203.jpg",
        altText: "High-Waist Skinny Jeans",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Wide-Leg Trousers",
    description:
      "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "BW-W-002",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "White"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://lsco.scene7.com/is/image/lsco/A75350002-dynamic1-pdp?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500",
        altText: "Wide-Leg Trousers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Stretch Leggings",
    description:
      "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
    price: 25,
    discountPrice: 20,
    countInStock: 40,
    sku: "BW-W-003",
    category: "Bottom Wear",
    brand: "ComfyFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Activewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://kicaactive.com/cdn/shop/files/7_0d7e6f5f-a008-409b-9a50-52463b61f554.jpg?v=1747891964&width=1946",
        altText: "Stretch Leggings Front View",
      },
    ],
    rating: 4.5,
    numReviews: 30,
  },
  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    price: 55,
    discountPrice: 50,
    countInStock: 20,
    sku: "BW-W-004",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Navy", "Black"],
    collections: "Spring Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71wdTOs5wCL._AC_UY1100_.jpg",
        altText: "Pleated Midi Skirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Flared Palazzo Pants",
    description:
      "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "BW-W-005",
    category: "Bottom Wear",
    brand: "BreezyVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Beige", "Light Blue"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Women",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pg9H52Y16X7yVYSxOHOBYr3FXr5FLbng5Q&s",
        altText: "Flared Palazzo Pants Front View",
      },
    ],
    rating: 4.4,
    numReviews: 22,
  },
  {
    name: "High-Rise Joggers",
    description:
      "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    price: 40,
    discountPrice: 35,
    countInStock: 30,
    sku: "BW-W-006",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Gray", "Pink"],
    collections: "Loungewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://target.scene7.com/is/image/Target/GUEST_e8122fdb-6377-47cd-9aa2-6afe63a66f31?wid=300&hei=300&fmt=pjpeg",
        altText: "High-Rise Joggers Front View",
      },
    ],
    rating: 4.3,
    numReviews: 25,
  },
  {
    name: "Paperbag Waist Shorts",
    description:
      "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    price: 35,
    discountPrice: 30,
    countInStock: 20,
    sku: "BW-W-007",
    category: "Bottom Wear",
    brand: "SunnyStyle",
    sizes: ["S", "M", "L"],
    colors: ["White", "Khaki", "Blue"],
    collections: "Summer Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://www.styched.in/cdn/shop/products/PaperbagwaistcargoshortsB.jpg?v=1622793502&width=1445",
        altText: "Paperbag Waist Shorts Front View",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Stretch Denim Shorts",
    description:
      "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "BW-W-008",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "White"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw4c8abc4d/product_images/0829602180103NEW_00_349.jpg?sw=300",
        altText: "Stretch Denim Shorts Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Culottes",
    description:
      "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-009",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Olive"],
    collections: "Casual Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQgiyNgygljAx4Wi3X8GB2T_qv6D8DSLgkw&s",
        altText: "Culottes Front View",
      },
    ],
    rating: 4.6,
    numReviews: 23,
  },
  {
    name: "Classic Pleated Trousers",
    description:
      "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    price: 70,
    discountPrice: 65,
    countInStock: 25,
    sku: "BW-W-010",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"],
    collections: "Formal Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      {
        url: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/3/a3c8b69FKEN101317_2.jpg?tr=w-512",
        altText: "Classic Pleated Trousers Front View",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Knitted Cropped Top",
    description:
      "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "White"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=29",
        altText: "Knitted Cropped Top",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Boho Floral Blouse",
    description:
      "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-002",
    category: "Top Wear",
    brand: "BohoVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Pink"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=30",
        altText: "Boho Floral Blouse",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Casual T-Shirt",
    description:
      "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    price: 25,
    discountPrice: 20,
    countInStock: 50,
    sku: "TW-W-003",
    category: "Top Wear",
    brand: "ComfyTees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    collections: "Essentials",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=31",
        altText: "Casual T-Shirt",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Off-Shoulder Top",
    description:
      "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "TW-W-004",
    category: "Top Wear",
    brand: "Elegance",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Blue"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=32",
        altText: "Off-Shoulder Top",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: "Lace-Trimmed Cami Top",
    description:
      "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
    price: 35,
    discountPrice: 30,
    countInStock: 40,
    sku: "TW-W-005",
    category: "Top Wear",
    brand: "DelicateWear",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    collections: "Lingerie-Inspired",
    material: "Silk Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=33",
        altText: "Lace-Trimmed Cami Top",
      },
    ],
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: "Graphic Print Tee",
    description:
      "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    price: 30,
    discountPrice: 25,
    countInStock: 45,
    sku: "TW-W-006",
    category: "Top Wear",
    brand: "StreetStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=34",
        altText: "Graphic Print Tee",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Ribbed Long-Sleeve Top",
    description:
      "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    price: 55,
    discountPrice: 50,
    countInStock: 30,
    sku: "TW-W-007",
    category: "Top Wear",
    brand: "ComfortFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Pink", "Brown"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=35",
        altText: "Ribbed Long-Sleeve Top",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "Ruffle-Sleeve Blouse",
    description:
      "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 20,
    sku: "TW-W-008",
    category: "Top Wear",
    brand: "FeminineWear",
    sizes: ["S", "M", "L"],
    colors: ["White", "Navy", "Lavender"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=36",
        altText: "Ruffle-Sleeve Blouse",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Classic Button-Up Shirt",
    description:
      "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "TW-W-009",
    category: "Top Wear",
    brand: "ClassicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Black"],
    collections: "Office Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=37",
        altText: "Classic Button-Up Shirt",
      },
    ],
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: "V-Neck Wrap Top",
    description:
      "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-010",
    category: "Top Wear",
    brand: "ChicWrap",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Black", "White"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=38",
        altText: "V-Neck Wrap Top",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
  {
    name: "Athletic Performance Hoodie",
    description: "A moisture-wicking hoodie designed for workouts and outdoor activities. Features a zip-up front, adjustable hood, and side pockets for convenience.",
    price: 65,
    discountPrice: 55,
    countInStock: 18,
    sku: "ATH-HD-011",
    category: "Top Wear",
    brand: "SportX",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"],
    collections: "Activewear Collection",
    material: "Polyester Blend",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=101",
        altText: "Athletic Performance Hoodie Front View"
      }
    ],
    rating: 4.6,
    numReviews: 14
  },
  {
    name: "Cashmere Blend Sweater",
    description: "Luxurious cashmere blend sweater with a relaxed fit. Perfect for cold weather with its soft texture and elegant ribbed detailing.",
    price: 120,
    discountPrice: 99,
    countInStock: 12,
    sku: "CAS-SW-012",
    category: "Top Wear",
    brand: "Luxury Knits",
    sizes: ["S", "M", "L"],
    colors: ["Camel", "Gray", "Navy"],
    collections: "Winter Collection",
    material: "Cashmere Blend",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=102",
        altText: "Cashmere Blend Sweater Front View"
      }
    ],
    rating: 4.9,
    numReviews: 8
  },
  {
    name: "Tailored Wool Blazer",
    description: "Sophisticated wool blazer with notch lapels and flap pockets. Perfect for business meetings or formal occasions with its structured fit.",
    price: 199,
    discountPrice: 179,
    countInStock: 10,
    sku: "BLZ-013",
    category: "Outerwear",
    brand: "ExecutiveStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal", "Black"],
    collections: "Formal Collection",
    material: "Wool",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=103",
        altText: "Tailored Wool Blazer Front View"
      }
    ],
    rating: 5,
    numReviews: 6
  },
  {
    name: "Quilted Bomber Jacket",
    description: "Stylish quilted bomber jacket with a water-resistant finish. Features a ribbed hem and cuffs for a snug fit.",
    price: 89,
    discountPrice: 75,
    countInStock: 15,
    sku: "BMB-014",
    category: "Outerwear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black", "Burgundy"],
    collections: "Fall Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=104",
        altText: "Quilted Bomber Jacket Front View"
      }
    ],
    rating: 4.7,
    numReviews: 11
  },
  {
    name: "Performance Running Shorts",
    description: "Lightweight running shorts with built-in liner and moisture-wicking fabric. Features side pockets and reflective details for safety.",
    price: 35,
    discountPrice: 29,
    countInStock: 25,
    sku: "RUN-SH-015",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Gray"],
    collections: "Athletic Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=105",
        altText: "Performance Running Shorts Front View"
      }
    ],
    rating: 4.8,
    numReviews: 17
  },
  {
    name: "Corduroy Overshirt",
    description: "Casual corduroy overshirt with a relaxed fit. Perfect for layering during transitional weather with its button-front design.",
    price: 59,
    discountPrice: 49,
    countInStock: 20,
    sku: "CRD-016",
    category: "Outerwear",
    brand: "Heritage Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Green", "Beige"],
    collections: "Casual Collection",
    material: "Corduroy",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=106",
        altText: "Corduroy Overshirt Front View"
      }
    ],
    rating: 4.5,
    numReviews: 13
  },
  {
    name: "Wool Overcoat",
    description: "Classic wool overcoat with a tailored fit and notched lapels. Features a double-breasted front and inner lining for extra warmth.",
    price: 249,
    discountPrice: 219,
    countInStock: 8,
    sku: "OVC-017",
    category: "Outerwear",
    brand: "ElegantStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Camel", "Black", "Gray"],
    collections: "Winter Collection",
    material: "Wool",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=107",
        altText: "Wool Overcoat Front View"
      }
    ],
    rating: 4.9,
    numReviews: 5
  },
  {
    name: "Linen Blend Shirt",
    description: "Breathable linen blend shirt with a relaxed fit. Perfect for summer with its lightweight fabric and casual roll-up sleeves.",
    price: 45,
    discountPrice: 39,
    countInStock: 22,
    sku: "LIN-SH-018",
    category: "Top Wear",
    brand: "Summer Breeze",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Beige"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=108",
        altText: "Linen Blend Shirt Front View"
      }
    ],
    rating: 4.6,
    numReviews: 16
  },
  {
    name: "Fleece-Lined Cargo Pants",
    description: "Winter-ready cargo pants with a fleece lining for warmth. Features multiple utility pockets and an adjustable waistband.",
    price: 75,
    discountPrice: 65,
    countInStock: 15,
    sku: "FL-CRG-019",
    category: "Bottom Wear",
    brand: "WinterWear",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Khaki", "Black", "Olive"],
    collections: "Winter Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=109",
        altText: "Fleece-Lined Cargo Pants Front View"
      }
    ],
    rating: 4.7,
    numReviews: 9
  },
  {
    name: "Performance Polo Shirt",
    description: "Moisture-wicking polo shirt with UV protection. Features a classic collar and three-button placket for a sporty yet polished look.",
    price: 49,
    discountPrice: 42,
    countInStock: 30,
    sku: "PER-POL-020",
    category: "Top Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Red"],
    collections: "Athletic Collection",
    material: "Polyester Blend",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=110",
        altText: "Performance Polo Shirt Front View"
      }
    ],
    rating: 4.8,
    numReviews: 12
  },
  {
    name: "Faux Leather Moto Jacket",
    description: "Edgy faux leather moto jacket with zippered details and a belted waist. Features a quilted lining for added warmth and style.",
    price: 129,
    discountPrice: 109,
    countInStock: 18,
    sku: "FL-JKT-021",
    category: "Outerwear",
    brand: "StreetStyle",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Brown"],
    collections: "Streetwear Collection",
    material: "Faux Leather",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=111",
        altText: "Faux Leather Moto Jacket Front View"
      }
    ],
    rating: 4.7,
    numReviews: 14
  },
  {
    name: "Wrap Midi Dress",
    description: "Flattering wrap midi dress with a V-neckline and tie waist. Made from flowy fabric that drapes beautifully for an elegant silhouette.",
    price: 79,
    discountPrice: 69,
    countInStock: 20,
    sku: "WRP-DRS-022",
    category: "Dresses",
    brand: "FeminineWear",
    sizes: ["S", "M", "L"],
    colors: ["Navy", "Black", "Floral Print"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=112",
        altText: "Wrap Midi Dress Front View"
      }
    ],
    rating: 4.8,
    numReviews: 19
  },
  {
    name: "Cropped Hoodie",
    description: "Trendy cropped hoodie with a relaxed fit and kangaroo pocket. Perfect for pairing with high-waisted bottoms for a casual look.",
    price: 45,
    discountPrice: 39,
    countInStock: 25,
    sku: "CRP-HD-023",
    category: "Top Wear",
    brand: "UrbanStyle",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Gray", "Black"],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=113",
        altText: "Cropped Hoodie Front View"
      }
    ],
    rating: 4.5,
    numReviews: 21
  },
  {
    name: "Turtleneck Sweater Dress",
    description: "Cozy turtleneck sweater dress with a bodycon fit. Perfect for winter with its thick knit fabric and stylish ribbed detailing.",
    price: 65,
    discountPrice: 55,
    countInStock: 15,
    sku: "TURT-DRS-024",
    category: "Dresses",
    brand: "Winter Chic",
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Black", "Burgundy"],
    collections: "Winter Collection",
    material: "Acrylic Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=114",
        altText: "Turtleneck Sweater Dress Front View"
      }
    ],
    rating: 4.7,
    numReviews: 13
  },
  {
    name: "Denim Jacket",
    description: "Classic denim jacket with a slightly oversized fit. Features distressed detailing and button-front closure for a timeless look.",
    price: 69,
    discountPrice: 59,
    countInStock: 22,
    sku: "DEN-JKT-025",
    category: "Outerwear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Light Wash", "Dark Wash"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=115",
        altText: "Denim Jacket Front View"
      }
    ],
    rating: 4.6,
    numReviews: 17
  },
  {
    name: "Silk Slip Dress",
    description: "Elegant silk slip dress with adjustable spaghetti straps. Features a bias cut for a flattering drape and a sleek, minimalist design.",
    price: 99,
    discountPrice: 89,
    countInStock: 12,
    sku: "SLP-DRS-026",
    category: "Dresses",
    brand: "LuxurySilk",
    sizes: ["XS", "S", "M"],
    colors: ["Black", "Champagne", "Burgundy"],
    collections: "Evening Collection",
    material: "Silk",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=116",
        altText: "Silk Slip Dress Front View"
      }
    ],
    rating: 4.9,
    numReviews: 8
  },
  {
    name: "Oversized Cardigan",
    description: "Cozy oversized cardigan with long sleeves and a relaxed fit. Perfect for layering over any outfit during cooler months.",
    price: 55,
    discountPrice: 49,
    countInStock: 20,
    sku: "OVS-CRD-027",
    category: "Outerwear",
    brand: "ComfyKnits",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Gray", "Pink"],
    collections: "Fall Collection",
    material: "Acrylic Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=117",
        altText: "Oversized Cardigan Front View"
      }
    ],
    rating: 4.7,
    numReviews: 15
  },
  {
    name: "Athletic Sports Bra",
    description: "High-support sports bra with moisture-wicking fabric. Features a racerback design and wide elastic band for maximum comfort during workouts.",
    price: 35,
    discountPrice: 29,
    countInStock: 30,
    sku: "SPT-BRA-028",
    category: "Activewear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Athletic Collection",
    material: "Polyester Blend",
    gender: "Women",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
        altText: "Athletic Sports Bra Front View"
      }
    ],
    rating: 4.8,
    numReviews: 24
  },
  {
    name: "Knit Jumper Dress",
    description: "Chunky knit jumper dress with a roll neck and long sleeves. Perfect for winter with its warm fabric and relaxed silhouette.",
    price: 75,
    discountPrice: 65,
    countInStock: 18,
    sku: "KNIT-DRS-029",
    category: "Dresses",
    brand: "Winter Chic",
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Gray", "Burgundy"],
    collections: "Winter Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=119",
        altText: "Knit Jumper Dress Front View"
      }
    ],
    rating: 4.7,
    numReviews: 11
  },
  {
    name: "Belted Trench Coat",
    description: "Classic belted trench coat with a double-breasted front and water-resistant finish. Features epaulets and a storm flap for timeless style.",
    price: 159,
    discountPrice: 139,
    countInStock: 10,
    sku: "TRNCH-030",
    category: "Outerwear",
    brand: "ElegantStyle",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "Black", "Navy"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=120",
        altText: "Belted Trench Coat Front View"
      }
    ],
    rating: 4.9,
    numReviews: 7
  }
];

export default products;
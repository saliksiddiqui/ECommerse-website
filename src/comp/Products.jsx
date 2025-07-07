const products = [
  {
    id: 1,
    title: "Backpack",
    price: 109.95,
    category: "men's clothing",
    description: "Perfect everyday backpack with laptop sleeve and essentials storage.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Tshirt",
    price: 22.3,
    category: "men's clothing",
    description: "Soft slim-fit t-shirt for comfortable everyday wear.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Jacket",
    price: 55.99,
    category: "men's clothing",
    description: "Durable mid-weight jacket with quilted lining for warmth.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Jeans",
    price: 39.99,
    category: "men's clothing",
    description: "Modern slim-fit jeans with stretch and reinforced seams.",
    image: "https://cefalu.in/cdn/shop/files/100634-32_1.jpg?v=1721733706",
    rating: { rate: 4.2, count: 430 }
  },
  {
    id: 5,
    title: "Bracelet",
    price: 695,
    category: "jewelery",
    description: "Gold and silver dragon bracelet from Legends Collection.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 6,
    title: "Micropave",
    price: 168,
    category: "jewelery",
    description: "Elegant solid gold micropave band for special occasions.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 }
  },
  {
    id: 7,
    title: "Ring",
    price: 9.99,
    category: "jewelery",
    description: "Princess-cut white gold plated engagement ring design.",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.0, count: 400 }
  },
  {
    id: 8,
    title: "Earrings",
    price: 10.99,
    category: "jewelery",
    description: "Rose-gold stainless steel double plug tunnel earrings.",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.1, count: 430 }
  },
  {
    id: 9,
    title: "HardDrive",
    price: 64,
    category: "electronics",
    description: "Portable external drive with fast USB 3.0 transfers.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 10,
    title: "SSD",
    price: 109,
    category: "electronics",
    description: "Upgrade to faster boot times with SATA III SSD.",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title: "NAND",
    price: 109,
    category: "electronics",
    description: "Advanced 3D NAND SSD with excellent performance boost.",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 12,
    title: "GamingDrive",
    price: 114,
    category: "electronics",
    description: "Expand PlayStation 4 storage with high-performance drive.",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 13,
    title: "Monitor",
    price: 599,
    category: "electronics",
    description: "Ultra-thin full HD IPS monitor with FreeSync support.",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 }
  },
  {
    id: 14,
    title: "GamingMonitor",
    price: 999.99,
    category: "electronics",
    description: "Super ultrawide curved gaming monitor with HDR support.",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 }
  },
  {
    id: 15,
    title: "SnowboardJacket",
    price: 56.99,
    category: "women's clothing",
    description: "3-in-1 waterproof jacket with warm fleece liner.",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 }
  },
  {
    id: 16,
    title: "MotoJacket",
    price: 29.95,
    category: "women's clothing",
    description: "Stylish faux-leather biker jacket with removable hood.",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 }
  },
  {
    id: 17,
    title: "Raincoat",
    price: 39.99,
    category: "women's clothing",
    description: "Lightweight striped raincoat perfect for travel wear.",
    image: "https://thumbs.dreamstime.com/b/little-girl-raincoat-funny-33126852.jpg",
    rating: { rate: 3.8, count: 679 }
  },
  {
    id: 18,
    title: "BoatNeck",
    price: 9.85,
    category: "women's clothing",
    description: "Soft boat neck t-shirt with stretchy comfortable fabric.",
    image: "https://dailybuyys.com/cdn/shop/files/WhatsAppImage2023-05-12at1.17.53PM_1.jpg?v=1683892716",
    rating: { rate: 4.7, count: 130 }
  },
  {
    id: 19,
    title: "AthleticShirt",
    price: 7.95,
    category: "women's clothing",
    description: "V-neck moisture-wicking athletic shirt for active use.",
    image: "https://5.imimg.com/data5/CR/OL/NO/ANDROID-36904487/img-20181220-wa0001-jpg-500x500.jpg",
    rating: { rate: 4.5, count: 146 }
  },
  {
    id: 20,
    title: "CasualTee",
    price: 12.99,
    category: "women's clothing",
    description: "Casual short-sleeve cotton tee with stylish print.",
    image: "https://i.pinimg.com/736x/6b/71/b1/6b71b182053775b5a6d810de9b560ed8.jpg",
    rating: { rate: 3.6, count: 145 }
  },
  {
    id: 21,
    title: "Skillet",
    price: 29.95,
    category: "home & kitchen",
    description: "Heavy-duty cast-iron skillet for ultimate heat retention.",
    image: "https://media.istockphoto.com/id/1181541705/photo/black-teflon-skillet-with-non-stick-coated-surface-isolated.jpg?s=612x612&w=0&k=20&c=NrYr9HtmVQjuvUJJ_FnAbIfFINfHF_R9zlFE5cFCaW0=",
    rating: { rate: 4.9, count: 5400 }
  },
  {
    id: 22,
    title: "Basketball",
    price: 74.95,
    category: "sports & outdoors",
    description: "Indoor basketball with cushion core and leather touch.",
    image: "https://www.shutterstock.com/image-photo/basketball-ball-isolated-on-white-600nw-2492633873.jpg",
    rating: { rate: 4.9, count: 1250 }
  },
  {
    id: 23,
    title: "Airpods",
    price: 239,
    category: "electronics",
    description: "Noise-canceling AirPods with H2 chip and spatial audio.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    rating: { rate: 4.7, count: 1120 }
  },
  {
    id: 24,
    title: "PressureCooker",
    price: 89,
    category: "home & kitchen",
    description: "7-in-1 electric pressure cooker for fast meals.",
    image: "https://kitchenmart.co.in/cdn/shop/products/prestige-popular-aluminium-pressure-cooker-1-5-litre-8901365100386-prestige-popular-1-5l-1065-4620932251738.jpg?v=1607126319",
    rating: { rate: 4.8, count: 1450 }
  },
  {
    id: 25,
    title: "Cleanser",
    price: 14.97,
    category: "beauty",
    description: "Facial cleanser with ceramides and hyaluronic acid.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WGxr6G6nTSxDDr2I9BoSWMnLyLyV6-mkKw&s",
    rating: { rate: 4.8, count: 6700 }
  },
  {
    id: 26,
    title: "RunningWatch",
    price: 349.99,
    category: "sports & outdoors",
    description: "GPS running watch with multi-band tracking and HRV.",
    image: "https://in.amazfit.com/cdn/shop/files/20230621-201135_2048x2048_151c4a0c-9c48-433b-be4f-c13f938d009a.jpg?v=1694756919&width=300",
    rating: { rate: 4.8, count: 620 }
  },
  {
    id: 27,
    title: "Camping Tent",
    price: 89.99,
    category: "sports & outdoors",
    description: "Durable tent for all-weather outdoor camping.",
    image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZyUyMHRlbnR8ZW58MHx8MHx8fDA%3D",
    rating: { rate: 4.6, count: 4200 }
  },
  {
    id: 28,
    title: "Wireless Headphones",
    price: 329,
    category: "electronics",
    description: "Noise-cancelling headphones with 24-hour battery life.",
    image: "https://images.philips.com/is/image/philipsconsumer/60a04af525fe4e7589acb0c90075d2d7?$pnglarge$&wid=1250",
    rating: { rate: 4.8, count: 2600 }
  },
  {
    id: 29,
    title: "Air Fryer",
    price: 89.99,
    category: "home & kitchen",
    description: "Crisp foods with 75% less fat easily.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrvQRFgZiAdOrojEQtdOsjePiCxcTG6osAQ&s",
    rating: { rate: 4.7, count: 10500 }
  },
  {
    id: 30,
    title: "Insulated Bottle",
    price: 27.99,
    category: "sports & outdoors",
    description: "Keeps drinks cold for up to 24 hours.",
    image: "https://www.jiomart.com/images/product/original/rv6vrrxynv/nirlon-milk-vacuum-insulated-flask-hot-and-cold-water-bottle-thermosteel-bottle-for-office-home-travel-milk-bottle-bubble-750ml-product-images-orv6vrrxynv-p602838525-5-202306292259.jpg?im=Resize=(420,420)",
    rating: { rate: 4.9, count: 2800 }
  },
  {
    id: 31,
    title: "Regular Fit Jeans",
    price: 59.99,
    category: "men's clothing",
    description: "Classic straight jeans with a comfy fit.",
    image: "https://imagescdn.peterengland.com/img/app/product/3/39827003-16637360.jpg?auto=format&w=390",
    rating: { rate: 4.5, count: 12000 }
  },
  {
    id: 32,
    title: "Washable Mascara",
    price: 8.97,
    category: "beauty",
    description: "Bold, full lashes with smudge-proof formula.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzazIoJOmXBX44Gp-Z6wq8eQGVSTRjrfshqQ&s",
    rating: { rate: 4.7, count: 15700 }
  },
  {
    id: 33,
    title: "Men's Sneakers",
    price: 74.99,
    category: "men's clothing",
    description: "Sporty sneakers with ultra-cushion comfort.",
    image: "https://images.bestsellerclothing.in/data/JJ/17-dec-2024/237878107_g0.jpg?width=415&height=550&mode=fill&fill=blur&format=auto",
    rating: { rate: 4.6, count: 7800 }
  },
  {
    id: 34,
    title: "Wireless Controller",
    price: 69.99,
    category: "electronics",
    description: "Immersive gameplay with adaptive triggers.",
    image: "https://m.media-amazon.com/images/I/61Q1Pa4X4-L.jpg",
    rating: { rate: 4.8, count: 21000 }
  },
  {
    id: 35,
    title: "Sandwich Maker",
    price: 29.99,
    category: "home & kitchen",
    description: "Make quick, tasty sandwiches at home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMZMr1mYebySLL62pf0r7P5o3_K-qY6ORzg&s",
    rating: { rate: 4.6, count: 24000 }
  },
  {
    id: 36,
    title: "Classic Clogs",
    price: 44.99,
    category: "footwear",
    description: "Lightweight clogs with ventilation ports.",
    image: "https://www.crocs.in/media/catalog/product/1/0/10001_1ft_alt110.jpg?width=820",
    rating: { rate: 4.7, count: 8600 }
  },
  {
    id: 37,
    title: "HP Laptop",
    price: 449.99,
    category: "electronics",
    description: "Fast laptop with Ryzen processor and SSD.",
    image: "https://sg-files.apjonlinecdn.com/landingpages/category-family/hp-laptops-family/images/w100_hero_mobile_v2.jpg",
    rating: { rate: 4.5, count: 3100 }
  },
  {
    id: 38,
    title: "Video Doorbell",
    price: 59.99,
    category: "electronics",
    description: "Monitor visitors with HD video and alerts.",
    image: "https://i.guim.co.uk/img/media/b24979809000cbc4cacbad76c6ada50f47ed90ea/0_0_5000_3000/master/5000.jpg?width=465&dpr=1&s=none&crop=none",
    rating: { rate: 4.4, count: 9500 }
  },
  {
    id: 39,
    title: "Tech T‑Shirt",
    price: 19.99,
    category: "men's clothing",
    description: "Quick-dry fabric with a natural soft feel.",
    image: "https://images-cdn.ubuy.co.in/65a8f8a5865b5b789a24f2b6-funny-computer-tech-t-shirt-unique.jpg",
    rating: { rate: 4.7, count: 6600 }
  },
  {
    id: 40,
    title: "Vacuum Cleaner",
    price: 199.99,
    category: "home & kitchen",
    description: "Powerful vacuum for carpets and hard floors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ubo22ziVTVHFe2UuDd2JB8XX6WIXWMDvAg&s",
    rating: { rate: 4.8, count: 18000 }
  },
  {
    id: 41,
    title: "Fitness Tracker",
    price: 129.95,
    category: "electronics",
    description: "Track fitness with GPS and stress tools.",
    image: "https://m.media-amazon.com/images/I/61dV494jBgL.jpg",
    rating: { rate: 4.5, count: 13500 }
  },
  {
    id: 42,
    title: "Hair Dryer Brush",
    price: 49.99,
    category: "beauty",
    description: "Dry and style hair with less frizz.",
    image: "https://www.jiomart.com/images/product/original/rvpra84p0r/roboson-professional-volumizer-hair-dryer-1200-watts-hot-air-brush-one-step-styler-for-women-with-3-temperature-2-speed-settings-3-in-1-blow-dryer-straightener-and-curler-1-year-warranty-product-images-orvpra84p0r-p608940030-0-202405091420.png?im=Resize=(1000,1000)",
    rating: { rate: 4.6, count: 34000 }
  },
  {
    id: 43,
    title: "Court Sneakers",
    price: 65,
    category: "men's clothing",
    description: "Tennis-inspired sneakers with leather design.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/m/u/x/-original-imagtajgnkve6z9y.jpeg?q=90&crop=false",
    rating: { rate: 4.7, count: 4900 }
  },
  {
    id: 44,
    title: "Robot Vacuum",
    price: 179,
    category: "electronics",
    description: "Smart cleaning robot with Wi-Fi and app control.",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:248,cw:1504,ch:1128,q:80,w:1504/oWbx78CSbK6FzqAM76puzM.jpg",
    rating: { rate: 4.4, count: 15800 }
  },
  {
    id: 45,
    title: "Echo Dot",
    price: 49.99,
    category: "electronics",
    description: "Smart speaker with improved sound and Alexa.",
    image: "https://m.media-amazon.com/images/I/81hgjKwsdHL._AC_UF1000,1000_QL80_.jpg",
    rating: { rate: 4.8, count: 21000 }
  },
  {
    id: 46,
    title: "Rain Jacket",
    price: 69.99,
    category: "men's clothing",
    description: "Light, waterproof jacket for outdoor adventures.",
    image: "https://powersports.in/cdn/shop/files/KordaPhalanxRainLiner_445ad917-57f6-4e20-9945-197431400530.jpg?v=1691125091",
    rating: { rate: 4.6, count: 4100 }
  },
  {
    id: 47,
    title: "Women's Backpack",
    price: 99,
    category: "women's clothing",
    description: "Comfortable backpack with padded support straps.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFv572DihPwAOFvLQD8-URb4swfSNfdzceSA&s",
    rating: { rate: 4.7, count: 2500 }
  },
  {
    id: 48,
    title: "Gaming Mouse",
    price: 49.99,
    category: "electronics",
    description: "Ultra-fast sensor and lightweight design.",
    image: "https://assets-prd.ignimgs.com/2022/06/29/gaming-mouse-1656479071918.jpg",
    rating: { rate: 4.8, count: 3300 }
  },
  {
    id: 49,
    title: "Blender",
    price: 349.95,
    category: "home & kitchen",
    description: "High-speed blender for smoothies and soups.",
    image: "https://m.media-amazon.com/images/I/71n3mrnKBTL.jpg",
    rating: { rate: 4.8, count: 2800 }
  },
  {
    id: 50,
    title: "Kindle",
    price: 139.99,
    category: "electronics",
    description: "E-reader with a glare-free, high-res display.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli6qNoLQhEC8OIGW2xoAWJ0v0kzkQPAlh1g&s",
    rating: { rate: 4.7, count: 20000 }
  }
];
export default products;
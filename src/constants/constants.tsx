import {
  FaTshirt,
  FaMale,
  FaMobileAlt,
  FaHome,
  FaPills,
  FaFootballBall,
  FaBaby,
  FaShoppingCart,
  FaHeart,
  FaCar,
  FaShippingFast,
  FaCheckCircle,
  FaTags,
  FaCreditCard,
  FaUndo,
  FaHeadset,
  FaGift,
  FaLeaf,
} from "react-icons/fa";

export const footerLinks = [
  {
    title: "Customer Service",
    items: [
      { name: "Contact Us", link: "" },
      { name: "Returns", link: "" },
      { name: "Order History", link: "" },
      { name: "Site Map", link: "" },
      { name: "Testimonials", link: "" },
      { name: "My Account", link: "" },
      { name: "Unsubscribe Notification", link: "" },
    ],
  },
  {
    title: "Information",
    items: [
      { name: "About Us", link: "" },
      { name: "Delivery Information", link: "" },
      { name: "Privacy Policy", link: "" },
      { name: "Terms & Conditions", link: "" },
      { name: "Warranty", link: "" },
      { name: "FAQ", link: "" },
      { name: "Seller Login", link: "" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Brands", link: "" },
      { name: "Gift Vouchers", link: "" },
      { name: "Affiliates", link: "" },
      { name: "Wishlist", link: "" },
      { name: "Order History", link: "" },
      { name: "Track Your Order", link: "" },
      { name: "Track Your Order", link: "" },
    ],
  },
];

export const services = [
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    description:
      "Get your orders delivered within 24–72 hours, with real-time tracking until it arrives at your doorstep.",
  },
  {
    icon: <FaCheckCircle />,
    title: "100% Authentic Products",
    description:
      "We guarantee the authenticity and quality of every product, with easy return and replacement options.",
  },
  {
    icon: <FaTags />,
    title: "Daily Deals & Discounts",
    description:
      "Enjoy frequent offers and seasonal discounts on top brands and popular items.",
  },
  {
    icon: <FaCreditCard />,
    title: "Secure & Flexible Payment",
    description:
      "Pay using credit card, cash on delivery, or online payment — all protected with advanced data encryption.",
  },
  {
    icon: <FaUndo />,
    title: "Easy Returns",
    description:
      "A flexible 14-day return policy with a smooth process for exchanges or refunds.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Our support team is available around the clock via phone, chat, and email.",
  },
  {
    icon: <FaGift />,
    title: "Rewards Program",
    description:
      "Earn points with every purchase and redeem them for discounts and exclusive benefits.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Packaging",
    description:
      "We use safe and environmentally friendly packaging to protect both your order and the planet.",
  },
];

export const extraItems = [
  {
    title: "Fresh Fruit Basket Packed With Natural Goodness",
    description:
      "Experience deep bass, crystal-clear audio, and unmatched comfort. Designed for music lovers who want every beat to feel alive.",
    image: "/discount-1.png",
    className: "extraItems-card top-card",
  },
  {
    title: "Professional Beauty Tools for Perfect Results",
    description:
      "High-quality beauty essentials crafted for precision and effortless use, helping you achieve flawless looks every day.",
    image: "/discount-2.png",
    className: "extraItems-card btm-card",
  },
];

export const featuredItems = [
  {
    title: "Luxury Watch That Elevates Your Style",
    description:
      "A premium timepiece crafted with precision and elegance, designed to enhance your presence with every moment you wear it.",
    image: "/slide-1.png",
  },
  {
    title: "Elegant Women’s Handbag for Every Occasion",
    description:
      "A stylish and practical handbag with a modern touch, offering refined details and perfect space for daily essentials.",
    image: "/slide-2.png",
  },
  {
    title: "Comfort Bed for a Deeper, Better Sleep",
    description:
      "A thoughtfully designed bed that provides ideal body support, ensuring ultimate relaxation and restful nights.",
    image: "/slide-3.png",
  },
  {
    title: "Refreshing Energy Drink to Boost Your Day",
    description:
      "A bold and refreshing drink with a powerful formula that fuels your energy and focus—perfect for work, sport, and active days.",
    image: "/slide-4.png",
  },
  {
    title: "A Car Built for Power, Style, and Performance",
    description:
      "A high-performance vehicle with a premium sporty design, advanced technology, and a driving experience that inspires confidence.",
    image: "/slide-5.png",
  },
];
export const categories = [
  {
    title: "Woman's Fashion",
    prefix: "FashionandAccessories",
    icon: <FaTshirt />,
  },
  { title: "Men's Fashion", prefix: "FashionandAccessories", icon: <FaMale /> },
  { title: "Electronics", prefix: "electricmachines", icon: <FaMobileAlt /> },
  { title: "Home & Lifestyle", prefix: "HomeLifestyle", icon: <FaHome /> },
  { title: "Medicine", prefix: "Medicine", icon: <FaPills /> },
  {
    title: "Sports & Outdoor",
    prefix: "Sports",
    icon: <FaFootballBall />,
  },
  { title: "Baby's & Toys", prefix: "FashionandAccessories", icon: <FaBaby /> },
  {
    title: "Groceries & Pets",
    prefix: "GroceriesPets",
    icon: <FaShoppingCart />,
  },
  {
    title: "Health & Beauty",
    prefix: "FashionandAccessories",
    icon: <FaHeart />,
  },
  { title: "Cars", prefix: "Cars", icon: <FaCar /> },
];

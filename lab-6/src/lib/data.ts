export interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  isNew?: boolean;
}

export const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: "/1.jpg",
    title: "Premium Headphones",
    description:
      "Noise-cancelling wireless headphones with 30-hour battery life and premium sound quality.",
    buttonText: "View Details",
    isNew: true,
  },
  {
    id: 2,
    imageUrl: "/4.jpg",
    title: "Smart Watch",
    description:
      "Track your fitness, receive notifications, and monitor your health with this sleek smartwatch.",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    imageUrl: "/2.jpg",
    title: "Wireless Earbuds",
    description:
      "Compact earbuds with crystal clear sound and comfortable fit for all-day wear.",
    buttonText: "Learn More",
    isNew: true,
  },
  {
    id: 4,
    imageUrl: "/3.jpg",
    title: "Portable Speaker",
    description:
      "Waterproof Bluetooth speaker with 20-hour playtime and immersive 360° sound.",
    buttonText: "Shop Now",
  },
  {
    id: 5,
    imageUrl: "/5.jpg",
    title: "Digital Camera",
    description:
      "Capture stunning photos and videos with this professional-grade digital camera.",
    buttonText: "See Specs",
    isNew: true,
  },
  {
    id: 6,
    imageUrl: "/2.jpg",
    title: "Gaming Console",
    description:
      "Next-generation gaming with stunning graphics and lightning-fast load times.",
    buttonText: "Pre-order",
  },
  {
    id: 7,
    imageUrl: "/1.jpg",
    title: "Laptop Pro",
    description:
      "Powerful performance in a sleek, lightweight design for professionals on the go.",
    buttonText: "Compare Models",
    isNew: true,
  },
  {
    id: 8,
    imageUrl: "/4.jpg",
    title: "Smart Home Hub",
    description:
      "Control all your smart home devices from one central hub with voice commands.",
    buttonText: "Explore Features",
  },
  {
    id: 9,
    imageUrl: "/3.jpg",
    title: "Fitness Tracker",
    description:
      "Monitor your workouts, sleep, and health metrics with this advanced fitness band.",
    buttonText: "Add to Cart",
  },
  {
    id: 10,
    imageUrl: "/5.jpg",
    title: "Wireless Charger",
    description:
      "Fast wireless charging for all your compatible devices with sleek, minimalist design.",
    buttonText: "Buy Now",
    isNew: true,
  },
];

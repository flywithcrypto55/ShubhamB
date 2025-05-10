import { Anchor, Calendar, Compass, Fish, Shell, Star, Waves } from "lucide-react";

const counterItems = [
  { value: 100, suffix: "%", label: "Liquidity Strike" },
  { value: 100, suffix: "%", label: "Viral Vibes" },
  { value: 100, suffix: "%", label: "Community Bluff" },
  { value: 100, suffix: "%", label: "Anti Rug" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/DexLogo.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo.png",
  },
  {
    name: "logo3",
    imgPath: "/images/teleLogo.png",
  },
];


const roadmapItems = [
  {
    title: "Krabby Patty Secret Formula",
    description: "Discover the secret ingredients of the famous Krabby Patty",
    icon: "icon",
    color: "bg-yellow-400",
  },
  {
    title: "Jellyfish Fields Expedition",
    description: "Explore the mysterious Jellyfish Fields with SpongeBob and Patrick",
    //  icon: <Waves className="h-6 w-6" />,
    icon: "icon",
    color: "bg-pink-400",
  },
  {
    title: "Boating School Graduation",
    description: "Help SpongeBob finally pass his boating exam at Mrs. Puff's Boating School",
    // icon: <Anchor className="h-6 w-6" />,
    icon: "Anchor",
    color: "bg-blue-400",
  },
  {
    title: "Bikini Bottom Tour",
    description: "Visit all the iconic locations in Bikini Bottom",
    // icon: <Compass className="h-6 w-6" />,
    icon: "Compass",
    color: "bg-green-400",
  },
  {
    title: "Annual Jellyfishing Competition",
    description: "Participate in the annual Jellyfishing competition with SpongeBob",
    // icon: <Calendar className="h-6 w-6" />,
    icon: "Calendar",
    color: "bg-purple-400",
  },
  {
    title: "Shell City Adventure",
    description: "Embark on an epic journey to the dangerous Shell City",
    // icon: <Shell className="h-6 w-6" />,
    icon: "Shell",
    color: "bg-orange-400",
  },
]


const characters=[
                  {
                    name: "SpongeBob SquarePants",
                    role: "Fry Cook at the Krusty Krab",
                    color: "bg-yellow-400",
                    description: "An optimistic sea sponge who works as a fry cook at the Krusty Krab.",
                    imgPath: "/images/bob/logo.png",
                  },
                  {
                    name: "Patrick Star",
                    role: "SpongeBob's Best Friend",
                    color: "bg-orange-400",
                    description: "A friendly but dim-witted pink starfish who lives under a rock.",
                    imgPath: "/images/bob/patrick.png",
                  },
                  {
                    name: "Squidward Tentacles",
                    role: "Krusty Krab Cashier",
                    color: "bg-pink-400",
                    description: "SpongeBob's grumpy neighbor and coworker who loves clarinet and art.",
                    imgPath: "/images/bob/squid.png",
                  },
                  {
                    name: "Mr. Krabs",
                    role: "Owner of the Krusty Krab",
                    color: "bg-red-400",
                    description: "A money-obsessed crab who owns the Krusty Krab restaurant.",
                    imgPath: "/images/bob/krab.png",
                  },
                ]


const fighters =[
  {
      title: "Zeus",
      description:"Zeus, ruler of the tides, master of the deep! 🌊⚡",
      imgUrl:"/images/fish/zo2.jfif",
  },
  {
      title: "Zeus",
      description:"With a trident in hand, he commands the oceans with absolute power.🌊🐎",
      imgUrl:"/images/fish/po2.jfif",
  },
  {
      title: "Zeus",
      description:"The earth shakes and the waves rise at Zeus's command!🌊⚡",
      imgUrl:"/images/fish/po3.jfif",
  },
  {
      title: "Zeus",
      description:"From stormy seas to tranquil waters, Zeus will reigns supreme.🌊🐎",
      imgUrl:"/images/fish/po1.jfif",
  },
  {
      title: "Zeus",
      description:"No force rivals the god who rides the waves and tames the storms.🌊⚡",
      imgUrl:"/images/fish/po5.jfif",
  },
  {
      title: "Zeus",
      description:"The sea belongs to none, except the mighty Zeus!🌊🐎",
      imgUrl:"/images/fish/po6.jfif",
  },
]

const bikini=[
  {
    name: "The Krusty Krab",
    description: "Home of the famous Krabby Patty and SpongeBob's workplace.",
    color: "from-red-500 to-red-700",
    imgUrl: "/images/bob/krusty.jfif",
  },
  {
    name: "SpongeBob's Pineapple House",
    description: "A pineapple under the sea where SpongeBob lives with Gary.",
    color: "from-yellow-400 to-yellow-600",
    imgUrl: "/images/bob/pineapple.jfif",
  },
  {
    name: "Jellyfish Fields",
    description: "A beautiful meadow where SpongeBob and Patrick go jellyfishing.",
    color: "from-pink-400 to-purple-600",
    imgUrl: "/images/bob/jellyfish.jfif",
  },
  {
    name: "Sandy's Treedome",
    description: "An air-filled dome where Sandy Cheeks lives and practices karate.",
    color: "from-green-400 to-green-600",
    imgUrl: "/images/bob/sandy.jfif",
  },
  {
    name: "Mrs. Puff's Boating School",
    description: "Where SpongeBob repeatedly fails to get his boating license.",
    color: "from-blue-400 to-blue-600",
    imgUrl: "/images/bob/boating2.jfif",
  },
  {
    name: "Goo Lagoon",
    description: "The underwater beach where everyone goes to relax and have fun.",
    color: "from-amber-400 to-amber-600",
    imgUrl: "/images/bob/lagoon.jfif",
  },
]

export {
  // abilities,
   logoIconsList,
   counterItems,
   expLogos,
   fighters,
   roadmapItems,
   characters,
   bikini,
  // testimonials,
  // socialImgs,
  // techStackIcons,
  // techStackImgs,
  // navLinks,
};

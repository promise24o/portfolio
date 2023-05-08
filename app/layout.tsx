import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Obe Promise — Fullstack Developer",
  description:
    "Experienced fullstack developer with 5 years of expertise in creating scalable and maintainable applications using LAMP, MERN, and Flutter. Proficient in React, Node.js, Three.js, MongoDB, PHP, Laravel, and CodeIgniter, delivering innovative solutions that guarantee a seamless user experience. Continuously seeking to learn and implement new technologies to remain up-to-date with the latest trends in the industry. Passionate about writing clean and efficient code, optimizing applications for speed and performance, and ensuring high standards of security and data protection.",
  generator: "Next.js",
  applicationName: "Obe Promise",
  keywords: [
    "full-stack developer",
    "React",
    "Node.js",
    "Three.js",
    "MongoDB",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "scalable applications",
    "maintainable applications",
    "seamless user experience",
    "innovative solutions",
    "latest technologies",
    "clean code",
    "efficient code",
    "optimization",
    "speed",
    "performance",
    "security",
    "data protection",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Obe Promise —  Fullstack Developer",
    description:
      "As a freelance developer based in Nigeria, I specialize in frontend development with expertise in React. With 5 years of experience as a software developer, I have built a strong portfolio of innovative and creative applications. I am passionate about delivering seamless user experiences and continuously seek to learn and implement new technologies. If you're looking for a skilled and creative developer, please check out my portfolio.",
    url: "https://www.obepromise.me/",
    siteName: "www.obepromise.me",
    images: [
      {
        url:
          "https://res.cloudinary.com/dbiqas7ef/image/upload/v1682903215/Portfolio/profile_card_nmrc5z.png",
        width: 1200,
        height: 630,
        alt: "Obe Promise —  Fullstack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obe Promise —  Fullstack Developer",
    description:
      "I'm a Nigeria-based freelance frontend developer with 5 years of experience in React. Passionate about delivering seamless user experiences and implementing new technologies. Check out my portfolio.",
    creator: "SoftpathT",
    creatorId: "1243720976552144897",
    images: [
      "https://res.cloudinary.com/dbiqas7ef/image/upload/v1682903215/Portfolio/profile_card_nmrc5z.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#3d5dbc] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

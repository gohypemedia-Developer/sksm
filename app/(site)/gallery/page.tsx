import type { Metadata } from "next";
import { galleryData, GalleryItem } from "@/data/gallery";
import GalleryPageClient from "./GalleryPageClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Gallery | Shri Krishnam Sharnam Mamah Foundation",
  description:
    "हमारे आयोजनों, सेवा कार्यों और यादगार पलों की खूबसूरत झलकियाँ। Explore SKSM devotional artwork, founder profiles and the temple vision.",
  openGraph: {
    title: "हमारी झलकियाँ | Photos & Videos Gallery - Shri Krishnam Sharnam Mamah Foundation",
    description:
      "हमारे आयोजनों, सेवा कार्यों और यादगार पलों की खूबसूरत झलकियाँ। Browse our sacred moments, satsang gatherings, and community seva initiatives.",
    url: "https://shrikrishnamsharnammamah.com/gallery",
    siteName: "Shri Krishnam Sharnam Mamah Foundation",
    images: [
      {
        url: "/sksm/10.png",
        width: 1200,
        height: 630,
        alt: "Shri Krishnam Sharnam Mamah Foundation Gallery",
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient initialItems={galleryData} />;
}

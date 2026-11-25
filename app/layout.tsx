import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shrikrishnamsharnammamah.com"),
  title: "Shri Krishnam Sharnam Mamah Foundation | Bhakti, Culture & Seva",
  description: "Discover SKSM Foundation: Krishna bhakti, Braj culture, community seva and the Shri Banke Bihari temple vision in South Delhi.",
  keywords: ["SKSM Foundation", "Shri Krishnam Sharnam Mamah Foundation", "Shri Banke Bihari Temple", "Braj Culture", "Krishna Bhakti", "Seva"],
  icons: { icon: "/sksm/logo.png", apple: "/sksm/logo.png" },
  openGraph: {
    title: "Shri Krishnam Sharnam Mamah Foundation",
    description: "Devotion to Shri Krishna. Preservation of Braj culture. Compassionate service to society.",
    url: "https://shrikrishnamsharnammamah.com",
    siteName: "SKSM Foundation",
    images: [{ url: "/sksm/1A.png", width: 1672, height: 941, alt: "Shri Krishna Sharanam Mamah Foundation" }],
    locale: "en_IN", type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#FFF9F2] text-[#2B201A]">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

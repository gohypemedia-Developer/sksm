"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Plus, Minus, ShieldCheck, Truck } from "lucide-react";
import { useApp } from "@/context/AppContext";
import {
  TextReveal,
  ParagraphReveal,
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
} from "@/components/animation";
import HeadingDivider from "@/components/HeadingDivider";

export default function BooksPage() {
  const { lang, addToCart, setIsCartOpen } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const product = {
    id: "sksm-introduction",
    title: "Discover SKSM Foundation",
    titleHi: "श्री कृष्ण शरणम् ममः फाउंडेशन का परिचय",
    price: 95.0,
    image: "/sksm/2.jpg",
  };

  const handleAddToCart = () => { window.open("/sksm/2.jpg", "_blank", "noopener,noreferrer"); };

  const handleBuyNow = () => { window.location.href = "https://wa.me/918750508506?text=Please%20share%20information%20about%20SKSM%20spiritual%20literature."; };

  const highlights = [
    {
      title: "Shri Banke Bihari Temple",
      titleHi: "श्री बांके बिहारी मंदिर",
      desc: "A sacred temple vision for South Delhi, dedicated to Shri Krishna and inspired by the devotional heritage of Braj.",
      descHi: "दक्षिण दिल्ली में श्रीकृष्ण को समर्पित और ब्रज की भक्ति परंपरा से प्रेरित भव्य मंदिर निर्माण का संकल्प।",
    },
    {
      title: "Braj Culture & Heritage",
      titleHi: "ब्रज संस्कृति एवं विरासत",
      desc: "Preserving the living traditions of Braj through devotional arts, music, storytelling and cultural gatherings.",
      descHi: "भक्ति कला, संगीत, कथा और सांस्कृतिक आयोजनों से ब्रज की जीवंत परंपराओं का संरक्षण एवं प्रसार।",
    },
    {
      title: "Community Seva",
      titleHi: "समाज सेवा एवं जनकल्याण",
      desc: "Bringing compassion into everyday life through community participation, care for elders and respect for nature.",
      descHi: "सामाजिक सहभागिता, वरिष्ठ नागरिकों के सम्मान और प्रकृति संरक्षण द्वारा करुणा को जीवन से जोड़ना।",
    },
    {
      title: "Krishna Bhakti & Sanskar",
      titleHi: "श्रीकृष्ण भक्ति एवं संस्कार",
      desc: "Sharing Shri Krishna’s teachings and Sanatan values through spiritual programmes, bhajans and kirtan.",
      descHi: "आध्यात्मिक आयोजनों, भजन और कीर्तन द्वारा श्रीकृष्ण की शिक्षाओं एवं सनातन मूल्यों का प्रसार।",
    },
  ];

  return (
    <div className="w-full space-y-0">
      {/* HERO / PRODUCT DISPLAY SECTION */}
      <section className="py-12 md:py-20 bg-[#FBF2E7] border-b border-[#E7D8C8] min-h-[calc(100vh-68px)] sm:min-h-[calc(100vh-74px)] min-[1000px]:min-h-[calc(100vh-76px)] xl:min-h-[calc(100vh-82px)] flex items-center">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Product Image Gallery */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-[#FFF9F2] shadow-2xl group bg-[#FFF9F2]">
                <Image
                  src={product.image}
                  alt="फाउंडेशन का परिचय"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[#E86F1D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-warm-sm z-10">
                  {lang === "hi" ? "आधिकारिक प्रकाशन" : "OFFICIAL PUBLICATION"}
                </div>
              </div>
            </div>

            {/* Right Product Info & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-[#B8893E] uppercase tracking-widest">
                  {lang === "hi" ? "कृषि ज्ञान श्रृंखला" : "SPIRITUAL & CULTURAL LEARNING"}
                </p>
                <TextReveal as="h1" className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E86F1D] leading-tight">
                  {lang === "hi" ? product.titleHi : product.title}
                </TextReveal>
                <p className="text-sm text-[#2B201A]/70 font-medium">
                  {lang === "hi"
                    ? "फाउंडेशन का परिचय • भाषा: हिंदी (देवनागरी)"
                    : "Foundation introduction • Language: Hindi (देवनागरी)"}
                </p>
              </div>

              {/* Price */}
              <div className="py-3 border-y border-[#E7D8C8] flex flex-wrap items-baseline gap-3">
                <span className="font-editorial text-4xl font-bold text-[#E86F1D]">
                  {lang === "hi" ? "परिचय" : "Discover"}
                </span>
                <span className="text-sm font-semibold text-[#2B201A]/60">SKSM</span>
                <span className="text-xs text-[#2F5A43] font-bold bg-[#2F5A43]/10 px-2.5 py-1 rounded-md ml-auto sm:ml-0">
                  {lang === "hi" ? "साहित्य की जानकारी के लिए संपर्क करें" : "Contact us for literature"}
                </span>
              </div>

              <ParagraphReveal className="text-sm sm:text-base text-[#2B201A]/85 leading-relaxed font-sans">
                {lang === "hi"
                  ? "फाउंडेशन का परिचय पढ़ें और श्रीकृष्ण भक्ति, ब्रज संस्कृति एवं श्री बांके बिहारी मंदिर के संकल्प को जानें। उपलब्ध आध्यात्मिक साहित्य और शिक्षण कार्यक्रमों के लिए टीम से संपर्क करें।"
                  : "Read the foundation’s introduction and discover its vision for Krishna bhakti, Braj culture and the Shri Banke Bihari temple. Contact the team for available spiritual literature and learning programmes."}
              </ParagraphReveal>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B201A]/80">
                  {lang === "hi" ? "मात्रा (प्रतियां)" : "Quantity"}
                </label>
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center border border-[#E7D8C8] bg-[#FFF9F2] rounded-xl p-1 shadow-warm-sm">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2 text-[#2B201A] hover:text-[#E86F1D] min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 text-[#2B201A] hover:text-[#E86F1D] min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-[#2B201A]/70 font-semibold">
                    {lang === "hi" ? "जानकारी:" : "Details:"} <strong>{lang === "hi" ? "फाउंडेशन से संपर्क करें" : "Enquire with the foundation"}</strong>
                  </span>
                </div>
              </div>

              {/* Cart Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="btn-outline w-full border-2 border-[#E86F1D] text-[#E86F1D]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {lang === "hi"
                      ? addedNotice ? "कार्ट में जोड़ा गया!" : "परिचय देखें"
                      : addedNotice ? "Added to Cart!" : "View introduction"}
                  </span>
                </button>

                <button onClick={handleBuyNow} className="btn-primary w-full">
                  <span>{lang === "hi" ? "जानकारी लें" : "Buy It Now"}</span>
                </button>
              </div>

              {/* Delivery info */}
              <div className="pt-4 grid grid-cols-2 gap-4 text-xs text-[#2B201A]/75 font-semibold border-t border-[#E7D8C8]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B8893E]" />
                  <span>{lang === "hi" ? "उपलब्धता के लिए संपर्क करें" : "Contact for availability"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2F5A43]" />
                  <span>{lang === "hi" ? "फाउंडेशन का आधिकारिक परिचय" : "Official Foundation Introduction"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS GRID */}
      <section className="section-py">
        <div className="page-container">
          <SectionReveal className="text-center max-w-2xl mx-auto section-header space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E86F1D]">
              {lang === "hi" ? "फाउंडेशन को जानें" : "WHY READ THIS GUIDE?"}
            </p>
            <TextReveal as="h2" className="font-editorial text-3xl sm:text-4xl font-bold text-[#E86F1D]">
              {lang === "hi" ? "हमारा संकल्प और मूल्य" : "Our Mission & Values"}
            </TextReveal>
            <HeadingDivider className="my-1.5" />
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {highlights.map((h, idx) => (
              <StaggerItem key={idx} className="card-warm space-y-2.5">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#2B201A]">
                  {lang === "hi" ? h.titleHi : h.title}
                </h3>
                <p className="text-sm text-[#2B201A]/85 leading-relaxed font-sans">
                  {lang === "hi" && h.descHi ? h.descHi : h.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

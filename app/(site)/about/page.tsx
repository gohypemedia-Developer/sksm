"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useApp } from "@/context/AppContext";
import {
  TextReveal,
  ParagraphReveal,
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
  ParallaxImage,
} from "@/components/animation";
import HeadingDivider from "@/components/HeadingDivider";


export default function AboutPage() {
  const { lang, openDonateModal } = useApp();

  const commitmentCards = [
    {
      id: "farmer-welfare",
      title: "Shri Banke Bihari Temple",
      titleHi: "श्री बांके बिहारी मंदिर",
      badge: "SEVA PILLAR I",
      badgeHi: "सेवा स्तंभ १",
      desc: "A sacred temple vision for South Delhi, dedicated to Shri Krishna and inspired by the devotional heritage of Braj.",
      descHi: "दक्षिण दिल्ली में श्रीकृष्ण को समर्पित और ब्रज की भक्ति परंपरा से प्रेरित भव्य मंदिर निर्माण का संकल्प।",
      image: "/sksm/7.jpg",
      points: [{"en":"Temple development in South Delhi","hi":"दक्षिण दिल्ली में मंदिर निर्माण"},{"en":"Prayer, devotion and spiritual learning","hi":"भक्ति, आराधना और आध्यात्मिक शिक्षा"},{"en":"Completion date to be announced","hi":"पूर्ण होने की तिथि अभी घोषित नहीं"}],
    },
    {
      id: "womens-empowerment",
      title: "Braj Culture & Heritage",
      titleHi: "ब्रज संस्कृति एवं विरासत",
      badge: "SEVA PILLAR II",
      badgeHi: "सेवा स्तंभ २",
      desc: "Preserving the living traditions of Braj through devotional arts, music, storytelling and cultural gatherings.",
      descHi: "भक्ति कला, संगीत, कथा और सांस्कृतिक आयोजनों से ब्रज की जीवंत परंपराओं का संरक्षण एवं प्रसार।",
      image: "/sksm/9.jpg",
      points: [{"en":"Devotional music and traditional dance","hi":"भक्ति संगीत और पारंपरिक नृत्य"},{"en":"Katha and Krishna leela","hi":"कथा और श्रीकृष्ण लीला"},{"en":"Cultural awareness for younger generations","hi":"युवा पीढ़ी में सांस्कृतिक जागृति"}],
    },
    {
      id: "youth-empowerment",
      title: "Community Seva",
      titleHi: "समाज सेवा एवं जनकल्याण",
      badge: "SEVA PILLAR III",
      badgeHi: "सेवा स्तंभ ३",
      desc: "Bringing compassion into everyday life through community participation, care for elders and respect for nature.",
      descHi: "सामाजिक सहभागिता, वरिष्ठ नागरिकों के सम्मान और प्रकृति संरक्षण द्वारा करुणा को जीवन से जोड़ना।",
      image: "/sksm/8.jpg",
      points: [{"en":"Proposed gaushala within the temple campus","hi":"मंदिर परिसर में प्रस्तावित गौशाला"},{"en":"Proposed hospital for accessible healthcare","hi":"सुलभ स्वास्थ्य सेवा हेतु प्रस्तावित चिकित्सालय"},{"en":"Proposed home for senior citizens","hi":"वरिष्ठ नागरिकों के लिए प्रस्तावित वृद्धाश्रम"}],
    },
    {
      id: "spiritual-education",
      title: "Krishna Bhakti & Sanskar",
      titleHi: "श्रीकृष्ण भक्ति एवं संस्कार",
      badge: "SEVA PILLAR IV",
      badgeHi: "सेवा स्तंभ ४",
      desc: "Sharing Shri Krishna’s teachings and Sanatan values through spiritual programmes, bhajans and kirtan.",
      descHi: "आध्यात्मिक आयोजनों, भजन और कीर्तन द्वारा श्रीकृष्ण की शिक्षाओं एवं सनातन मूल्यों का प्रसार।",
      image: "/sksm/1.jpg",
      points: [{"en":"Bhajan, kirtan and devotional celebrations","hi":"भजन, कीर्तन और भक्ति समारोह"},{"en":"Spiritual storytelling and moral values","hi":"आध्यात्मिक कथा एवं नैतिक मूल्य"},{"en":"Love, harmony and selfless service","hi":"प्रेम, सद्भाव और निःस्वार्थ सेवा"}],
    },
  ];

  return (
    <div className="w-full space-y-0 text-[#2B201A] font-sans">
      {/* 1. HERO SECTION - RECREATED FROM REFERENCE (PANORAMIC ON DESKTOP, 100VH ON MOBILE & LAPTOP) */}
      <section className="relative overflow-hidden bg-[#1F150E] md:bg-[#F7EDE1] border-b border-[#E7D8C8] min-h-[calc(100vh-68px)] sm:min-h-[calc(100vh-74px)] min-[1000px]:min-h-[calc(100vh-76px)] xl:min-h-[calc(100vh-82px)] md:flex md:items-center">
        {/* Desktop Panoramic Background Banner (hidden on mobile) */}
        <ParallaxImage offset={45} className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/sksm/10.png"
            alt="Rooted in Wisdom. Driven by Service."
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-center"
          />
          {/* Clean feathered mask: completely masks baked-in text on the left while seamlessly revealing Lord Krishna on the right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #F7EDE1 0%, #F7EDE1 52%, rgba(247,237,225,0.98) 55%, rgba(247,237,225,0.85) 59%, rgba(247,237,225,0.45) 64%, rgba(247,237,225,0.12) 68%, rgba(247,237,225,0) 72%)",
            }}
          />
        </ParallaxImage>

        {/* MOBILE HERO (100VH Full Viewport Height with Bottom Overlay) */}
        <div className="md:hidden relative z-1 w-full h-[calc(100vh-68px)] min-h-[540px] flex items-center justify-center overflow-hidden">
          <ParallaxImage offset={30} className="absolute inset-0 w-full h-full">
            <Image
              src="/sksm/1.jpg"
              alt="Lord Krishna and Children - Rooted in Wisdom. Driven by Service."
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-cover object-top block select-none pointer-events-none"
            />
          </ParallaxImage>

          {/* Mobile Overlay Action Bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 w-full px-4 pt-16 pb-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col items-center gap-2 text-center pointer-events-auto">
            <TextReveal as="h2" className="font-editorial text-sm sm:text-base font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
              {lang === "hi" ? "ज्ञान में निष्ठा • सेवा में समर्पण" : "Rooted in Wisdom • Driven by Service"}
            </TextReveal>
            <div className="flex items-center justify-center gap-2.5 w-full max-w-xs pt-1">
              <a
                href="#about-story"
                className="flex-1 py-2 px-3 rounded-lg bg-[#E86F1D] text-white font-bold text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition-transform"
              >
                {lang === "hi" ? "ट्रस्ट परिचय" : "Our Story"}
              </a>
              <button
                onClick={() => openDonateModal()}
                className="flex-1 py-2 px-3 rounded-lg bg-white text-[#2B201A] font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-transform"
              >
                <Heart className="w-3 h-3 text-[#E86F1D] fill-current" />
                <span>{lang === "hi" ? "सहयोग करें" : "Support"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Hero Content (hidden on mobile) */}
        <div className="hidden md:block relative z-10 page-container py-8 sm:py-12 md:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5">
            {/* Main Title matching reference */}
            <TextReveal as="h1" className="font-editorial text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F1712] leading-[1.12] tracking-tight">
              {lang === "hi" ? (
                <>
                  ज्ञान में निष्ठा।
                  <br />
                  <span className="text-[#E86F1D]">सेवा में समर्पण।</span>
                </>
              ) : (
                <>
                  Rooted in Wisdom.
                  <br />
                  <span className="text-[#E86F1D]">Driven by Service.</span>
                </>
              )}
            </TextReveal>

            {/* Subtitle matching exact reference text */}
            <ParagraphReveal className="text-sm sm:text-base md:text-lg text-[#3E3129] leading-relaxed font-sans font-medium">
              {lang === "hi"
                ? "श्री कृष्ण शरणम् ममः फाउंडेशन आध्यात्मिक ज्ञान के प्रसार, मानवता की सेवा और शिक्षा, स्वास्थ्य, संस्कृति व समाज कल्याण के माध्यम से जीवन उत्थान के लिए समर्पित है।"
                : "Shri Krishnam Sharnam Mamah Foundation is dedicated to spreading spiritual wisdom, serving humanity, and uplifting lives through selfless initiatives in education, health, culture, and community welfare."}
            </ParagraphReveal>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <a
                href="#about-story"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl bg-[#E86F1D] hover:bg-[#D25E12] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>{lang === "hi" ? "ट्रस्ट की यात्रा जानें" : "Our Story & Journey"}</span>
              </a>
              <button
                type="button"
                onClick={() => openDonateModal()}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl bg-white/80 hover:bg-white text-[#2B201A] font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#E7D8C8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>{lang === "hi" ? "पुण्य सेवा में सहयोग करें" : "Support Our Mission"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC NARRATIVE: "ABOUT US" & "OUR MISSION" */}
      <SectionReveal className="py-16 sm:py-20 lg:py-24 bg-[#FBF6EE]" id="about-story">
        <div className="page-container max-w-5xl lg:max-w-6xl space-y-12 sm:space-y-16">
          {/* ABOUT US BLOCK */}
          <div className="space-y-4 sm:space-y-5 text-center sm:text-left">
            <TextReveal as="h2" className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#E86F1D] leading-tight">
              {lang === "hi"
                ? "भक्ति, संस्कृति और सेवा का पावन संगम"
                : "Devotion, Culture & Service Together"}
            </TextReveal>
            <HeadingDivider align="left" className="!py-0.5 max-sm:justify-center" />

            <ParagraphReveal className="text-sm sm:text-base md:text-lg text-[#3E3129] leading-relaxed space-y-4 pt-1 font-normal">
              <p>{lang === "hi" ? "श्री कृष्ण शरणम् ममः फाउंडेशन श्रीकृष्ण से प्रेरित एक आध्यात्मिक, सांस्कृतिक एवं सेवाभावी संस्था है। भक्ति, ब्रज की विरासत और निःस्वार्थ सेवा इसके कार्यों के आधार हैं।" : "Shri Krishnam Sharnam Mamah Foundation is a spiritual, cultural and charitable organisation inspired by Shri Krishna. It brings people together through devotion, the heritage of Braj and selfless service."}</p>
              <p>{lang === "hi" ? "हमारा मुख्य उद्देश्य दक्षिण दिल्ली में श्री बांके बिहारी मंदिर का निर्माण है। यह मंदिर पूजा-अर्चना, आध्यात्मिक शिक्षा, संस्कृति और समाज सेवा का केंद्र होगा।" : "Our central mission is a Shri Banke Bihari temple in South Delhi. The temple is envisioned as a place of worship, spiritual learning, cultural connection and community care."}</p>
            </ParagraphReveal>
          </div>

          {/* OUR MISSION BLOCK */}
          <div className="space-y-4 sm:space-y-5 text-center sm:text-left">
            <TextReveal as="h2" className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#E86F1D] leading-tight">
              {lang === "hi"
                ? "श्री बांके बिहारी मंदिर का हमारा संकल्प"
                : "Our Vision for Shri Banke Bihari Temple"}
            </TextReveal>
            <HeadingDivider align="left" className="!py-0.5 max-sm:justify-center" />

            <ParagraphReveal className="text-sm sm:text-base md:text-lg text-[#3E3129] leading-relaxed space-y-4 pt-1 font-normal">
              <p>{lang === "hi" ? "प्रस्तावित मंदिर परिसर में गौशाला, चिकित्सालय एवं वृद्धाश्रम का संकल्प है। ये सेवाएँ करुणा, सम्मान और समाज कल्याण के प्रति हमारी प्रतिबद्धता हैं।" : "The proposed temple campus includes a gaushala, a hospital and a home for senior citizens. These planned facilities express our commitment to care, dignity and compassion."}</p>
              <p>{lang === "hi" ? "भक्ति संगीत, कथा और सांस्कृतिक सहभागिता द्वारा हम युवा पीढ़ी को ब्रज संस्कृति, श्रीकृष्ण लीला और सनातन मूल्यों से जोड़ते हैं।" : "We work to connect younger generations with Braj culture, Krishna leela and Sanatan values through devotional music, storytelling and cultural participation."}</p>
              <p className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7D8C8] shadow-xs italic text-[#2B201A] font-serif">{lang === "hi" ? "फाउंडेशन समाज के प्रत्येक वर्ग का स्वागत करता है। हम सामाजिक समरसता, पर्यावरण संरक्षण और सेवा की भावना को सुदृढ़ करने के लिए संकल्पित हैं।" : "Our foundation welcomes people from every part of society. Together, we seek to strengthen harmony, environmental care and a shared spirit of seva."}</p>
            </ParagraphReveal>
          </div>
        </div>
      </SectionReveal>

      {/* 3. SACRED TEMPLE BRAND STATEMENT BANNER */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#FFFDF9]">
        <div className="page-container">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E7D8C8] shadow-[0_8px_30px_rgb(0,0,0,0.06)] min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] flex items-center">
            {/* Background Temple Landscape (2nd image) */}
            <Image
              src="/sksm/10.png"
              alt="Sacred Vedic Temple Skyline"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-right md:object-center"
            />
            {/* Soft gradient wash on left for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F0]/75 via-[#FFF8F0]/35 to-transparent pointer-events-none" />

            {/* Text on Left Side in 2 lines */}
            <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-14 py-8 sm:py-12">
              <ParagraphReveal yOffset={15} className="max-w-full md:max-w-[720px] lg:max-w-[820px] xl:max-w-[880px]">
                <blockquote className="font-editorial text-base sm:text-lg md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#2B201A] font-bold leading-relaxed tracking-tight">
                  {lang === "hi" ? (
                    <>
                      <span className="relative inline-block pb-1">
                        हम
                        <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#E86F1D] rounded-full" />
                      </span>{" "}
                      हृदय से शिक्षकों, विचारकों और कर्मठ समाजसेवियों का एक परिवार हैं —<br className="hidden md:inline" />
                      जो गाँव-गाँव, विद्यालय-विद्यालय और परिवार-परिवार जाकर सेवा कार्य कर रहे हैं।
                    </>
                  ) : (
                    <>
                      <span className="relative inline-block pb-1">
                        We
                        <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#E86F1D] rounded-full" />
                      </span>{" "}
                      are, at heart, a foundation of teachers, practitioners and community builders<br className="hidden md:inline" />
                      working village by village, school by school, and family by family.
                    </>
                  )}
                </blockquote>
              </ParagraphReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION STATEMENT (CLEAN & DIGNIFIED MINIMALIST PRESENTATION) */}
      <SectionReveal className="py-14 sm:py-20 bg-[#FFFDF9] border-b border-[#E7D8C8]">
        <div className="page-container max-w-5xl text-center space-y-6">
          <div className="flex justify-center">
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold inline-flex items-baseline gap-2.5 sm:gap-3">
              <span className="relative inline-block text-[#1F1712] pb-2">
                {lang === "hi" ? "मिशन" : "Mission"}
                <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-[#E86F1D] rounded-full" />
              </span>
              <span className="text-[#E86F1D]">
                {lang === "hi" ? "संकल्प" : "Statement"}
              </span>
            </h2>
          </div>

          <TextReveal as="h3" className="font-editorial text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[30px] text-[#E86F1D] font-bold leading-relaxed max-w-4xl lg:max-w-5xl mx-auto">
            {lang === "hi" ? (
              <>
                “मन को संस्कारित व सशक्त बनाना, समाज का उत्थान करना<br className="hidden md:inline" />
                और प्रत्येक कर्म को श्रीमद्भगवद्गीता के शाश्वत ज्ञान से सिंचित करना।”
              </>
            ) : (
              <>
                “To nurture the mind, uplift the community, and root every action<br className="hidden md:inline" />
                in the timeless wisdom of the Bhagavad Gita.”
              </>
            )}
          </TextReveal>
        </div>
      </SectionReveal>

      {/* 5. WE ARE COMMITTED TO (4 PILLAR MODULES FAITHFULLY MATCHING ORIGINAL SITE) */}
      <SectionReveal className="py-16 sm:py-20 lg:py-24 bg-[#FBF6EE]">
        <div className="page-container space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <TextReveal as="h2" className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#E86F1D]">
              {lang === "hi" ? "हम समर्पित हैं" : "WE ARE COMMITTED TO"}
            </TextReveal>
            <HeadingDivider className="my-1.5" />
            <p className="text-sm sm:text-base text-[#3E3129]/80 font-medium">{lang === "hi" ? "फाउंडेशन के अनुसार मंदिर परियोजना आरंभ हो चुकी है। पूर्ण होने की तिथि अभी घोषित नहीं हुई है; मंदिर के चित्र इस परियोजना के संकल्प और प्रेरणा को दर्शाते हैं।" : "The foundation reports that temple development has begun. A completion date has not yet been announced; the temple artwork presents the vision and inspiration for the project."}</p>
          </div>

          {/* Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {commitmentCards.map((card) => {
              return (
                <StaggerItem key={card.id} className="h-full">
                  <div className="bg-white rounded-3xl border border-[#E7D8C8] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
                    {/* Card Header & Content */}
                    <div className="p-6 sm:p-8 space-y-5">
                      {/* Card Title */}
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#E86F1D] uppercase tracking-wider">
                        {lang === "hi" ? card.titleHi : card.title}
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-base text-[#3E3129] leading-relaxed">
                        {lang === "hi" ? card.descHi : card.desc}
                      </p>

                      {/* Specific Action Points */}
                      <div className="pt-2 space-y-2 border-t border-[#F2E5D5]">
                        {card.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4E3E33]">
                            <span className="w-2 h-2 rounded-full bg-[#E86F1D] shrink-0 mt-1.5" aria-hidden="true" />
                            <span>{lang === "hi" ? pt.hi : pt.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Real Photograph at bottom (Full-bleed flush to bottom/side borders) */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden mt-auto">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill sizes="100vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="text-center pt-2">
            <Link
              href="/initiatives"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2B201A] hover:bg-[#3D2C24] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>{lang === "hi" ? "सभी सेवा प्रकल्प विस्तार से देखें" : "Explore All Trust Initiatives"}</span>
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* 6. CLOSING GOLDEN WALK LANDSCAPE BANNER (MATCHING REFERENCE DESIGN) */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 border-t border-[#E7D8C8] flex flex-col justify-start items-center min-h-[540px] sm:min-h-[600px]">
        {/* Landscape Banner Artwork (Golden Sunrise Rural Family) */}
        <ParallaxImage offset={25} className="absolute inset-0 z-0">
          <Image
            src="/sksm/9.jpg"
            alt="Rural family walking together into golden horizon"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </ParallaxImage>

        {/* Floating Card Container (Matching Reference Image 2) */}
        <div className="relative z-10 page-container max-w-4xl text-center px-4 sm:px-6 w-full pt-2 sm:pt-4">
          <div className="bg-[#FFFDF9]/95 sm:bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#E86F1D]/35 shadow-[0_16px_40px_rgba(0,0,0,0.18)] p-6 sm:p-10 md:p-12 space-y-5">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#E86F1D]">
              {lang === "hi" ? "समग्र समाज उत्थान का संकल्प" : "WALKING TOGETHER FOR HUMANITY"}
            </p>

            <ParagraphReveal yOffset={20}>
              <blockquote className="font-editorial text-base sm:text-xl md:text-2xl text-[#2B1810] font-semibold leading-relaxed">
                {lang === "hi"
                  ? "“इन निरंतर प्रयासों के माध्यम से, श्री कृष्ण शरणम् ममः फाउंडेशन एक ऐसे समाज के निर्माण के लिए समर्पित है जहाँ सनातन मूल्य और आधुनिक क्षमताएँ साथ-साथ आगे बढ़ें — हर बच्चे, हर महिला, हर युवा और हर किसान के जीवन को छूते हुए।”"
                  : "“Through these efforts, Shri Krishnam Sharnam Mamah Foundation strives to build a society where ancient values and modern capability walk hand in hand — one child, one woman, one young person, and one farmer at a time.”"}
              </blockquote>
            </ParagraphReveal>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={() => openDonateModal("General Seva")}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-xl bg-[#E86F1D] hover:bg-[#D25E12] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-white" />
                <span>{lang === "hi" ? "सेवा में सहयोग करें" : "Support Our Seva"}</span>
              </button>
              <Link
                href="/membership"
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-xl bg-[#FFF9F2] hover:bg-white text-[#2B1810] font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#E86F1D]/60 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center"
              >
                <span>{lang === "hi" ? "ट्रस्ट के सदस्य बनें" : "Become a Member"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

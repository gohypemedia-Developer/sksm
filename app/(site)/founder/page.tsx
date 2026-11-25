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

export default function FounderPage() {
  const { lang, openDonateModal } = useApp();

  const commitmentAreas = [
    {
      title: "Krishna Bhakti",
      titleHi: "श्रीकृष्ण भक्ति",
    },
    {
      title: "Braj Culture",
      titleHi: "ब्रज संस्कृति",
    },
    {
      title: "Youth & Sanskar",
      titleHi: "युवा एवं संस्कार",
    },
    {
      title: "Gau Seva",
      titleHi: "गौ सेवा",
    },
    {
      title: "Proposed Healthcare Services",
      titleHi: "प्रस्तावित स्वास्थ्य सेवाएँ",
    },
    {
      title: "Bhajan & Kirtan",
      titleHi: "भजन एवं कीर्तन",
    },
    {
      title: "Environmental Conservation",
      titleHi: "पर्यावरण संरक्षण",
    },
    {
      title: "Care for Senior Citizens",
      titleHi: "वरिष्ठ नागरिकों की देखभाल",
    },
    {
      title: "Cultural Participation",
      titleHi: "सांस्कृतिक सहभागिता",
    },
    {
      title: "Social Harmony",
      titleHi: "सामाजिक समरसता",
    },
    {
      title: "Community Welfare",
      titleHi: "जनकल्याण",
    },
  ];

  return (
    <div className="w-full space-y-0 text-[#2B201A] font-sans">
      {/* 1. HERO SECTION (PANORAMIC ON DESKTOP, 100VH ON MOBILE & LAPTOP) */}
      <section className="relative overflow-hidden bg-[#1F150E] md:bg-[#F7EDE1] border-b border-[#E7D8C8] min-h-[calc(100vh-68px)] sm:min-h-[calc(100vh-74px)] min-[1000px]:min-h-[calc(100vh-76px)] xl:min-h-[calc(100vh-82px)] md:flex md:items-center">
        {/* Desktop Panoramic Background Banner (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
          <ParallaxSection range={[0, 30]} className="w-full h-full">
            <div className="relative w-full h-[108%] -mt-4 sm:-mt-5 md:-mt-6">
              <Image
                src="/sksm/4.jpg"
                alt="Kapil Aggarwal - Founder"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[80%_top] lg:object-[82%_top]"
              />
            </div>
            {/* Clean feathered mask: completely masks baked-in text & dark pillar on left while seamlessly revealing temple & Sadhvi Ji on right */}
            <div
              className="absolute -top-10 -bottom-10 inset-x-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #F7EDE1 0%, #F7EDE1 47%, rgba(247,237,225,0.98) 51%, rgba(247,237,225,0.85) 56%, rgba(247,237,225,0.45) 62%, rgba(247,237,225,0.12) 67%, rgba(247,237,225,0) 72%)",
              }}
            />
          </ParallaxSection>
        </div>

        {/* MOBILE HERO (100VH Full Viewport Height with Bottom Overlay) */}
        <div className="md:hidden relative z-1 w-full h-[calc(100vh-68px)] min-h-[540px] flex items-center justify-center overflow-hidden">
          <ParallaxImage offset={30} className="absolute inset-0 w-full h-full">
            <Image
              src="/sksm/4.jpg"
              alt="Kapil Aggarwal - Founder"
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-cover object-top block select-none pointer-events-none"
            />
          </ParallaxImage>

          {/* Mobile Overlay Action Bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 w-full px-4 pt-16 pb-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col items-center gap-2 text-center pointer-events-auto">
            <TextReveal as="h2" className="font-editorial text-sm sm:text-base font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
              {lang === "hi" ? "कपिल अग्रवाल" : "Kapil Aggarwal"}
            </TextReveal>
            <div className="flex items-center justify-center gap-2.5 w-full max-w-xs pt-1">
              <a
                href="#founder-story"
                className="flex-1 py-2 px-3 rounded-lg bg-[#E86F1D] text-white font-bold text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition-transform"
              >
                {lang === "hi" ? "जीवन यात्रा" : "Biography"}
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
                  कपिल <br />
                  <span className="text-[#E86F1D]">अग्रवाल</span>
                </>
              ) : (
                <>
                  Founder & Leadership <br />
                  <span className="text-[#E86F1D]">Kapil Aggarwal</span>
                </>
              )}
            </TextReveal>

            {/* Subtitle matching exact reference text */}
            <ParagraphReveal className="text-sm sm:text-base md:text-lg text-[#3E3129] leading-relaxed font-sans font-medium">
              {lang === "hi"
                ? "कपिल अग्रवाल के नेतृत्व में फाउंडेशन श्रीकृष्ण भक्ति, ब्रज संस्कृति और निःस्वार्थ सेवा के लिए समर्पित है। दक्षिण दिल्ली में श्री बांके बिहारी मंदिर का निर्माण हमारा मुख्य संकल्प है।"
                : "Kapil Aggarwal leads SKSM Foundation’s commitment to Krishna bhakti, Braj culture and compassionate service, with the vision of a Shri Banke Bihari temple in South Delhi."}
            </ParagraphReveal>



            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <a
                href="#founder-story"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl bg-[#E86F1D] hover:bg-[#D25E12] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>{lang === "hi" ? "हमारा साझा संकल्प जानें" : "Discover Our Shared Mission"}</span>
              </a>
              <button
                type="button"
                onClick={() => openDonateModal()}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white/80 hover:bg-white text-[#2B201A] font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#E7D8C8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>{lang === "hi" ? "सेवा मिशन में सहयोग करें" : "Support Our Mission"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC FOUNDER NARRATIVE: "SHRI KRISHNAM SHARNAM MAMAH FOUNDATION" */}
      <SectionReveal className="py-16 sm:py-20 lg:py-24 bg-[#FBF6EE]" id="founder-story">
        <div className="page-container max-w-5xl lg:max-w-6xl space-y-8">
          <div className="text-center space-y-2">
            <TextReveal as="h2" className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#E86F1D]">
              {lang === "hi" ? "श्री कृष्ण शरणम् ममः फाउंडेशन" : "SHRI KRISHNAM SHARNAM MAMAH FOUNDATION"}
            </TextReveal>
            <HeadingDivider className="my-1.5" />
          </div>

          <ParagraphReveal className="bg-white rounded-3xl border border-[#E7D8C8] p-6 sm:p-10 md:p-12 shadow-sm space-y-6 text-sm sm:text-base md:text-lg text-[#3E3129] leading-relaxed font-normal">
            <p>{lang === "hi" ? "श्री कृष्ण शरणम् ममः फाउंडेशन श्रीकृष्ण से प्रेरित एक आध्यात्मिक, सांस्कृतिक एवं सेवाभावी संस्था है। भक्ति, ब्रज की विरासत और निःस्वार्थ सेवा इसके कार्यों के आधार हैं।" : "Shri Krishnam Sharnam Mamah Foundation is a spiritual, cultural and charitable organisation inspired by Shri Krishna. It brings people together through devotion, the heritage of Braj and selfless service."}</p>

            <p>{lang === "hi" ? "हमारा मुख्य उद्देश्य दक्षिण दिल्ली में श्री बांके बिहारी मंदिर का निर्माण है। यह मंदिर पूजा-अर्चना, आध्यात्मिक शिक्षा, संस्कृति और समाज सेवा का केंद्र होगा।" : "Our central mission is a Shri Banke Bihari temple in South Delhi. The temple is envisioned as a place of worship, spiritual learning, cultural connection and community care."}</p>

            <p>{lang === "hi" ? "प्रस्तावित मंदिर परिसर में गौशाला, चिकित्सालय एवं वृद्धाश्रम का संकल्प है। ये सेवाएँ करुणा, सम्मान और समाज कल्याण के प्रति हमारी प्रतिबद्धता हैं।" : "The proposed temple campus includes a gaushala, a hospital and a home for senior citizens. These planned facilities express our commitment to care, dignity and compassion."}</p>

            <p>{lang === "hi" ? "भक्ति संगीत, कथा और सांस्कृतिक सहभागिता द्वारा हम युवा पीढ़ी को ब्रज संस्कृति, श्रीकृष्ण लीला और सनातन मूल्यों से जोड़ते हैं।" : "We work to connect younger generations with Braj culture, Krishna leela and Sanatan values through devotional music, storytelling and cultural participation."}</p>
          </ParagraphReveal>
        </div>
      </SectionReveal>

      {/* 3. HER PHILOSOPHY BANNER (INSPIRED BY REFERENCE PIC 3: LIGHT CREAM AESTHETIC WITH OPEN BOOK) */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 border-y border-[#E7D8C8] flex items-center mb-10 sm:mb-16 md:mb-20">
        {/* Soft Sacred Still-Life Artwork (Book & Mala on right, clean space on left) */}
        <ParallaxImage offset={35} className="absolute inset-0 z-0">
          <Image
            src="/sksm/9.jpg"
            alt="Sacred Bhagavad Gita Scripture and Rudraksha Japa Mala"
            fill sizes="100vw"
            className="object-cover object-right sm:object-center"
          />
          {/* Subtle mobile-only soft cream fade for perfect text contrast on small screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE]/95 via-[#FAF6EE]/80 to-transparent sm:hidden" />
        </ParallaxImage>

        {/* Content (Clean, left-aligned, matching reference pic 3) */}
        <div className="relative z-10 page-container px-6 sm:px-10 lg:px-12 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-3.5 text-left">
            <p className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#5A4638] uppercase">
              {lang === "hi"
                ? "हमारा साझा संकल्प:"
                : "Our shared vision:"}
            </p>

            <ParagraphReveal yOffset={20}>
              <blockquote className="font-editorial text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold leading-relaxed text-[#1F1712]">
                {lang === "hi"
                  ? "“चिंता में मत जियो — धर्मसम्मत कर्म में जियो। प्रत्येक विचार, प्रत्येक शब्द और प्रत्येक कर्म ईश्वर की दृष्टि में है। जब हमारे कर्म निष्काम और पवित्र होते हैं, तो हमारा भविष्य स्वतः ही उज्ज्वल हो जाता है।”"
                  : "“Do not live in worry — live through righteous action. Every thought, every word, and every deed is witnessed by the Divine. When our actions are pure, our future naturally becomes bright.”"}
              </blockquote>
            </ParagraphReveal>
          </div>
        </div>
      </section>

      {/* 4. OUR COMMITMENT TO SOCIETY (11 SEVA AREAS EXACTLY MATCHING ORIGINAL SITE) */}
      <SectionReveal className="py-16 sm:py-20 lg:py-24 bg-[#FBF6EE] border-b border-[#E7D8C8]">
        <div className="page-container space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <TextReveal as="h2" className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#E86F1D]">
              {lang === "hi" ? "समाज के प्रति हमारा संकल्प" : "OUR COMMITMENT TO SOCIETY"}
            </TextReveal>
            <HeadingDivider className="my-1.5" />
          </div>

          {/* 11 Commitment Cards Grid (Pure Text with Animated Interactive Effects) */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {commitmentAreas.map((area, idx) => (
              <StaggerItem key={idx}>
                <div className="relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#FFF8F0] px-6 py-5 rounded-2xl border border-[#E7D8C8] hover:border-[#E86F1D] shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(232,111,29,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center min-h-[96px] group cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:transition-transform before:duration-700">
                  {/* Animated Text Content */}
                  <div className="relative z-10 w-full">
                    <span className="font-sans text-lg sm:text-[20px] font-bold text-[#1F1712] group-hover:text-[#E86F1D] group-hover:translate-x-1.5 transition-all duration-300 leading-snug inline-block tracking-tight">
                      {lang === "hi" ? area.titleHi : area.title}
                    </span>
                    {/* Animated Saffron Sweep Underline */}
                    <span className="block h-[2.5px] w-0 group-hover:w-20 bg-gradient-to-r from-[#E86F1D] to-[#F59E0B] rounded-full transition-all duration-400 mt-1.5" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Concluding Founder Bio Paragraphs from Live Site */}
          <ParagraphReveal className="bg-[#FFFDF9] rounded-3xl border border-[#E7D8C8] p-6 sm:p-10 md:p-12 space-y-5 text-sm sm:text-base md:text-lg text-[#3E3129] leading-relaxed shadow-xs">
            <p>{lang === "hi" ? "फाउंडेशन समाज के प्रत्येक वर्ग का स्वागत करता है। हम सामाजिक समरसता, पर्यावरण संरक्षण और सेवा की भावना को सुदृढ़ करने के लिए संकल्पित हैं।" : "Our foundation welcomes people from every part of society. Together, we seek to strengthen harmony, environmental care and a shared spirit of seva."}</p>

            <p>{lang === "hi" ? "फाउंडेशन के अनुसार मंदिर परियोजना आरंभ हो चुकी है। पूर्ण होने की तिथि अभी घोषित नहीं हुई है; मंदिर के चित्र इस परियोजना के संकल्प और प्रेरणा को दर्शाते हैं।" : "The foundation reports that temple development has begun. A completion date has not yet been announced; the temple artwork presents the vision and inspiration for the project."}</p>
          </ParagraphReveal>
        </div>
      </SectionReveal>

      {/* 5. BHAGAVAD GITA & KARMA YOGA IN PRACTICE (BACKGROUND IMAGE WITH ENHANCED HIGH-VISIBILITY CARD) */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 border-y border-[#E7D8C8] flex items-center justify-center">
        {/* Background Image: Gurukul / Bhagavad Gita Temple Courtyard with subtle dark/warm overlay */}
        <ParallaxImage offset={30} className="absolute inset-0 z-0">
          <Image
            src="/sksm/9.jpg"
            alt="Bhagavad Gita Wisdom and Vedic Courtyard"
            fill sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Multi-layered soft contrast overlay for optimal background depth & card pop */}
          <div className="absolute inset-0 bg-black/20 backdrop-brightness-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25" />
        </ParallaxImage>

        {/* Enhanced High-Visibility Card Container */}
        <div className="relative z-10 page-container max-w-4xl px-4 sm:px-6 w-full">
          <div className="bg-white/75 sm:bg-[#FFFDF9]/70 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/80 sm:border-[#E86F1D]/35 shadow-[0_20px_50px_rgba(0,0,0,0.22)] p-6 sm:p-10 md:p-12 text-center space-y-6">
            <ParagraphReveal yOffset={15}>
              <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#1F1712] font-medium leading-relaxed">{lang === "hi" ? <>हमारा संकल्प <strong className="text-[#E86F1D] font-bold">श्रीकृष्ण भक्ति</strong> और <strong className="text-[#E86F1D] font-bold">निःस्वार्थ सेवा</strong> के माध्यम से समाज को जोड़ना है। ब्रज संस्कृति, प्रेम, करुणा और सद्भाव इस यात्रा के आधार हैं।</> : <>Our shared commitment brings together <strong className="text-[#E86F1D] font-bold">Krishna bhakti</strong> and <strong className="text-[#E86F1D] font-bold">selfless seva</strong>. Through the traditions of Braj, we encourage love, compassion and harmony in everyday life.</>}</p>
            </ParagraphReveal>

            {/* Sacred Om Divider */}
            <div className="flex items-center justify-center gap-4 my-2 select-none" aria-hidden="true">
              <span className="h-px w-20 sm:w-32 bg-[#E86F1D]/40" />
              <span className="font-editorial text-2xl sm:text-3xl text-[#E86F1D] font-bold leading-none">ॐ</span>
              <span className="h-px w-20 sm:w-32 bg-[#E86F1D]/40" />
            </div>

            <ParagraphReveal yOffset={15}>
              <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#3D2C24] font-medium leading-relaxed max-w-3xl mx-auto">{lang === "hi" ? "हमारा मुख्य उद्देश्य दक्षिण दिल्ली में श्री बांके बिहारी मंदिर का निर्माण है। यह मंदिर पूजा-अर्चना, आध्यात्मिक शिक्षा, संस्कृति और समाज सेवा का केंद्र होगा।" : "Our central mission is a Shri Banke Bihari temple in South Delhi. The temple is envisioned as a place of worship, spiritual learning, cultural connection and community care."}</p>
            </ParagraphReveal>
          </div>
        </div>
      </section>

      {/* 6. HER LIFE MESSAGE */}
      <SectionReveal className="py-16 sm:py-24 bg-[#FAF3EA] border-t border-[#E7D8C8]">
        <div className="page-container max-w-4xl text-center space-y-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#E86F1D]">
            {lang === "hi" ? "उनका जीवन संदेश" : "HER LIFE MESSAGE"}
          </p>

          <ParagraphReveal yOffset={25}>
            <blockquote className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#1F1712] font-semibold leading-relaxed px-4">
              {lang === "hi"
                ? "“भगवान श्री कृष्ण में अपनी अटूट निष्ठा रखो। अपने कर्मों को पवित्र और निःस्वार्थ बनाओ। अपने माता-पिता, गुरुओं और बड़ों का सदैव आदर करो। अपने तन और मन को अनुशासन व ज्ञान से संस्कारित करो। जीवन में जहाँ भी रहो—प्रेम, करुणा, सेवा और आशा का प्रकाश फैलाओ, क्योंकि यही सनातन धर्म का सार है और यही वास्तविक आत्म-साक्षात्कार का मार्ग है।”"
                : "“Place your unwavering faith in Lord Shri Krishna. Let your actions be pure and selfless. Honor your parents, teachers, and elders. Nurture both your body and mind with discipline and wisdom. Wherever life takes you, spread love, kindness, service, and hope—for this is the essence of Dharma, and this is the path of true spiritual realization.”"}
            </blockquote>
          </ParagraphReveal>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => openDonateModal("Founder's Vision Seva")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#E86F1D] hover:bg-[#D25E12] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>{lang === "hi" ? "फाउंडेशन के संकल्प में सहयोग करें" : "Support Her Vision"}</span>
            </button>
            <Link
              href="/membership"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-[#2B201A] font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#E7D8C8] shadow-sm active:scale-95 transition-all text-center"
            >
              <span>{lang === "hi" ? "ट्रस्ट से जुड़ें" : "Join the Mission"}</span>
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

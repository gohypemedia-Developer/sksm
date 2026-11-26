"use client";

import { foundationEvents } from "@/data/events";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Compass,
  Sun,
  ShieldCheck,
  Info,
  MapPin,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { cachedFetch } from "@/lib/client-cache";
import EventDetailsModal, { EventItem } from "@/components/EventDetailsModal";
import GallerySection from "@/components/gallery/GallerySection";
import MemberCarousel from "@/components/MemberCarousel";
import CountUp from "@/components/CountUp";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxPillarCard from "@/components/ParallaxPillarCard";
import HeadingDivider from "@/components/HeadingDivider";
import {
  TextReveal,
  ParagraphReveal,
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
} from "@/components/animation";

export default function HomePage() {
  const { lang, openDonateModal } = useApp();

  const defaultEvents = foundationEvents;

  const [events, setEvents] = useState<EventItem[]>(defaultEvents);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [eventModalOpen, setEventModalOpen] = useState(false);

  useEffect(() => {
    // 1. Immediately check URL params on mount without waiting for network
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const eventParam = params.get("event")?.toLowerCase();
      const hasHash = window.location.hash === "#events";

      if (eventParam) {
        const matched = defaultEvents.find(
          (e) =>
            e.slug.toLowerCase() === eventParam ||
            e.title.toLowerCase().includes(eventParam) ||
            eventParam.includes(e.slug.toLowerCase())
        );
        if (matched) {
          setSelectedEvent(matched);
          setEventModalOpen(true);
        }
      }

      if (eventParam || hasHash) {
        setTimeout(() => {
          const el = document.getElementById("events");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }

    // 2. Fetch live events from API with client cache & deduplication
    cachedFetch<{ events: EventItem[] }>("/api/events")
      .then((data) => {
        if (data?.events && Array.isArray(data.events) && data.events.length > 0) {
          setEvents(data.events);
          if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const eventParam = params.get("event")?.toLowerCase();
            if (eventParam) {
              const matched = data.events.find(
                (e: EventItem) =>
                  e.slug.toLowerCase() === eventParam ||
                  e.title.toLowerCase().includes(eventParam) ||
                  eventParam.includes(e.slug.toLowerCase())
              );
              if (matched) {
                setSelectedEvent(matched);
                setEventModalOpen(true);
              }
            }
          }
        }
      })
      .catch(() => {});
  }, []);

  const formatCardDate = (dateVal: string | Date) => {
    try {
      const d = new Date(dateVal);
      if (isNaN(d.getTime())) return String(dateVal);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).toUpperCase();
    } catch {
      return String(dateVal);
    }
  };

  return (
    <div className="w-full">
      {/* FULL-WIDTH HERO BANNER (ORIGINAL BANNER, ZERO WALL OVERLAYS, BOTTOM ACTION BAR) */}
      <section className="relative w-full overflow-hidden border-b border-[#E7D8C8]">
        {/* ============================================================ */}
        {/* DESKTOP & LAPTOP HERO BANNER (>= 640px / sm) */}
        {/* Full Image Display - Complete uncropped, scrolls naturally */}
        {/* ============================================================ */}
        <div className="hidden sm:block relative w-full">
          {/* Full Original Hero Photo with Next.js high-priority preload & optimization */}
          <Image
            src="/sksm/1A.png"
            alt="Shri Krishnam Sharnam Mamah Foundation - Kapil Aggarwal"
            className="w-full h-auto block select-none"
            priority
            sizes="100vw"
            width={1672}
            height={941}
          />

          {/* Semantic live H1 for SEO */}
          <h1 className="sr-only">Shri Krishnam Sharnam Mamah Foundation</h1>

          {/* Sleek Bottom Floating Action Bar across the bottom of the hero */}
          <div className="absolute bottom-4 sm:bottom-6 right-6 md:right-10 z-20 flex items-center gap-3">
            <Link
              href="/initiatives"
              className="px-5 py-2.5 rounded-xl bg-[#E86F1D] hover:bg-[#D25E12] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer backdrop-blur-xs"
            >
              <span>{lang === "hi" ? "सेवा कार्य देखें" : "Explore Initiatives"}</span>
            </Link>
            <button
              onClick={() => openDonateModal("General Donation")}
              className="px-5 py-2.5 rounded-xl bg-white/95 hover:bg-white text-[#2B201A] font-bold text-xs uppercase tracking-wider transition-all border border-[#E7D8C8] shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
            >
              <Heart className="w-3.5 h-3.5 text-[#E86F1D] fill-current" />
              <span>{lang === "hi" ? "सहयोग करें" : "Support Seva"}</span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE HERO BANNER (< 640px) */}
        {/* Full Image Display - Complete uncropped */}
        {/* ============================================================ */}
        <div className="sm:hidden relative z-10 w-full">
          {/* Full Original Mobile Photo with Next.js high-priority preload & optimization */}
          <Image
            src="/sksm/1A.png"
            alt="Shri Krishnam Sharnam Mamah Foundation - Kapil Aggarwal"
            className="w-full h-auto block select-none"
            priority
            sizes="100vw"
            width={1672}
            height={941}
          />

          {/* Mobile Floating Action Buttons */}
          <div className="absolute bottom-3 inset-x-0 z-20 px-3 flex items-center justify-center gap-2">
            <Link
              href="/initiatives"
              className="flex-1 max-w-[140px] py-2 px-3 rounded-lg bg-[#E86F1D] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg active:scale-95 transition-transform"
            >
              {lang === "hi" ? "सेवा कार्य" : "Initiatives"}
            </Link>
            <button
              onClick={() => openDonateModal("General Donation")}
              className="flex-1 max-w-[140px] py-2 px-3 rounded-lg bg-white/95 text-[#2B201A] font-bold text-xs uppercase tracking-wider text-center shadow-lg flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-transform border border-[#E7D8C8]"
            >
              <Heart className="w-3 h-3 text-[#E86F1D] fill-current" />
              <span>{lang === "hi" ? "सहयोग करें" : "Donate"}</span>
            </button>
          </div>
        </div>
      </section>


      {/* HORIZONTAL AUTO-SCROLL MARQUEE TICKER (JUST BELOW HERO) */}
      <div className="w-full bg-[#FFF5EA] border-y border-[#E86F1D]/25 py-2.5 sm:py-3 overflow-hidden select-none relative z-20 shadow-xs">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-[#FFF5EA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-[#FFF5EA] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {/* Ticker Set 1 - Standardized brand spelling with aria-hidden on duplicate repeats per Tech finding d */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-10 px-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={`ticker-1-${i}`}
                aria-hidden={i > 0 ? "true" : undefined}
                className="inline-flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#E86F1D]"
              >
                <span>Shri Krishnam Sharnam Mamah Foundation</span>
                <span className="text-[#E86F1D] text-sm sm:text-base font-bold select-none opacity-80">ॐ</span>
                <span className="font-hindi">श्री कृष्ण शरणम् ममः फाउंडेशन</span>
                <span className="text-[#E86F1D] text-sm sm:text-base font-bold select-none opacity-80">ॐ</span>
              </div>
            ))}
          </div>

          {/* Ticker Set 2 (Identical for seamless infinite auto-scroll, hidden from screen readers) */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-10 px-4" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <div key={`ticker-2-${i}`} className="inline-flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#E86F1D]">
                <span>Shri Krishnam Sharnam Mamah Foundation</span>
                <span className="text-[#E86F1D] text-sm sm:text-base font-bold select-none opacity-80">ॐ</span>
                <span className="font-hindi">श्री कृष्ण शरणम् ममः फाउंडेशन</span>
                <span className="text-[#E86F1D] text-sm sm:text-base font-bold select-none opacity-80">ॐ</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THREE PILLAR ACTION CARDS (HORIZONTAL SPLIT MATCHING REFERENCE) */}
      <SectionReveal className="py-14 sm:py-18 lg:py-20 bg-[#FFF9F2] border-b border-[#E7D8C8]/60">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            {/* Title */}
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-[#1F1712]">{lang === "hi" ? "हमारे मुख्य " : "Our Core "}</span>
              <span className="text-[#E86F1D]">{lang === "hi" ? "प्रकल्प" : "Initiatives"}</span>
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {/* Card 1: Books */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-[#E7D8C8] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-row h-full group">
{/* Right Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 bg-white">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#E86F1D] uppercase tracking-wider block">
                      {lang === "hi" ? "साहित्य सेवा" : "SACRED TEXTS"}
                    </span>
                    <h3 className="font-editorial font-bold text-base sm:text-lg lg:text-xl text-[#1F1712] leading-snug">
                      {lang === "hi"
                        ? "ज्ञान के लिए पुस्तकें, जीवन में परिवर्तन"
                        : "Books for Knowledge, Life for Change"}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#5C6B73] leading-relaxed line-clamp-4">
                      {lang === "hi"
                        ? "हमारे पावन ग्रंथों, आध्यात्मिक साहित्य और ज्ञान संग्रह के माध्यम से सनातन ज्ञान व जीवन में सकारात्मक परिवर्तन प्राप्त करें।"
                        : "Discover spiritual wisdom and positive life transformation through our curated collection of sacred texts and teachings."}
                    </p>
                  </div>

                  <div className="mt-4 pt-2">
                    <Link
                      href="/books"
                      className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#E86F1D] hover:bg-[#D45A0E] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
                    >
                      <span>{lang === "hi" ? "पुस्तकें देखें" : "EXPLORE BOOKS"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2: Donate for Seva */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-[#E7D8C8] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-row h-full group">
{/* Right Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 bg-white">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#E86F1D] uppercase tracking-wider block">
                      {lang === "hi" ? "पुण्य सेवा" : "SUPPORT SEVA"}
                    </span>
                    <h3 className="font-editorial font-bold text-base sm:text-lg lg:text-xl text-[#1F1712] leading-snug">
                      {lang === "hi"
                        ? "मानवता की सेवा ही सच्चा धर्म"
                        : "Selfless Service is the True Dharma"}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#5C6B73] leading-relaxed line-clamp-4">
                      {lang === "hi"
                        ? "अन्नदान, शिक्षा, चिकित्सा और समाज कल्याण के हमारे पावन संकल्प में अपने उदार सहयोग से सहभागी बनकर पुण्य लाभ प्राप्त करें।"
                        : "Join our sacred mission of humanitarian relief, healthcare, education, and community service through your generous support."}
                    </p>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      onClick={() => openDonateModal("General Donation")}
                      className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#E86F1D] hover:bg-[#D45A0E] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{lang === "hi" ? "दान करें" : "DONATE NOW"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3: Sacred Wisdom / Bhagavad Gita Inspiration */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-[#E7D8C8] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-row h-full group">
{/* Right Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 bg-white">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#E86F1D] uppercase tracking-wider block">
                      {lang === "hi" ? "गीता प्रेरणा" : "GITA WISDOM"}
                    </span>
                    <h3 className="font-editorial font-bold text-base sm:text-lg lg:text-xl text-[#1F1712] leading-snug">
                      {lang === "hi"
                        ? "निष्काम कर्म ही सच्चा धर्म"
                        : "Selfless Action is Dharma"}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#5C6B73] leading-relaxed line-clamp-4">
                      {lang === "hi"
                        ? "“कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।” फल की आसक्ति त्यागकर निष्काम भाव से की गई सेवा ही मानव जीवन को दिव्यता प्रदान करती है।"
                        : '"You have a right to perform your duties, but never to the fruits of action." Selfless service without attachment brings supreme inner peace.'}
                    </p>
                  </div>

                  <div className="mt-4 pt-2">
                    <Link
                      href="/founder"
                      className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#E86F1D] hover:bg-[#D45A0E] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
                    >
                      <span>{lang === "hi" ? "संस्थापक दृष्टिकोण" : "FOUNDER'S VISION"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Dedicated poster display: preserve the complete artwork and printed text. */}
      <section aria-labelledby="foundation-posters-title" className="py-14 sm:py-18 lg:py-20 bg-[#FBF2E7]/60 border-b border-[#E7D8C8]">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 id="foundation-posters-title" className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1712]">
              {lang === "hi" ? "हमारा संकल्प और " : "Our Vision & "}
              <span className="text-[#E86F1D]">{lang === "hi" ? "सांस्कृतिक आयोजन" : "Cultural Celebrations"}</span>
            </h2>
            <HeadingDivider className="mt-3" />
            <p className="mt-3 text-base text-[#5C6B73] leading-relaxed">
              {lang === "hi" ? "पूरा चित्र देखें। बड़ा करके पढ़ने के लिए किसी भी पोस्टर पर क्लिक करें।" : "Explore the complete artwork. Select a poster to open it at full size."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {[
              { file: "7.jpg", title: "Shri Banke Bihari Temple", titleHi: "श्री बांके बिहारी मंदिर", caption: "Our temple vision for South Delhi", captionHi: "दक्षिण दिल्ली में मंदिर निर्माण का संकल्प" },
              { file: "8.jpg", title: "Temple Campus & Seva", titleHi: "मंदिर परिसर एवं सेवा", caption: "Proposed gaushala, hospital and elder-care home", captionHi: "प्रस्तावित गौशाला, चिकित्सालय एवं वृद्धाश्रम" },
              { file: "9.jpg", title: "Cultural Celebrations", titleHi: "सांस्कृतिक आयोजन", caption: "Devotional festivals and the traditions of Braj", captionHi: "भक्ति उत्सव और ब्रज की परंपराएँ" },
            ].map((poster) => (
              <figure key={poster.file} className="bg-white rounded-2xl overflow-hidden border border-[#E7D8C8] shadow-sm">
                <a href={`/sksm/${poster.file}`} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-4 focus-visible:outline-[#E86F1D] focus-visible:outline-offset-[-4px]" aria-label={lang === "hi" ? `${poster.titleHi} — पूरा चित्र नई टैब में खोलें` : `${poster.title} — open full image in a new tab`}>
                  <Image src={`/sksm/${poster.file}`} alt={lang === "hi" ? poster.titleHi : poster.title} width={4419} height={6250} sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1560px) 32vw, 490px" className="block w-full h-auto" />
                </a>
                <figcaption className="p-5 sm:p-6">
                  <h3 className="font-editorial font-bold text-lg text-[#1F1712]">{lang === "hi" ? poster.titleHi : poster.title}</h3>
                  <p className="mt-2 text-sm text-[#5C6B73] leading-relaxed">{lang === "hi" ? poster.captionHi : poster.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS - Reliable section loading without nested viewport delays */}
      <section id="events" className="py-16 sm:py-20 lg:py-24 bg-[#FBF2E7]/60 border-y border-[#E7D8C8]">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E86F1D] tracking-tight sm:whitespace-nowrap">
              {lang === "hi"
                ? "भक्ति कार्यक्रम एवं सांस्कृतिक समारोह"
                : "Devotional Programmes & Gatherings"}
            </h2>
            <HeadingDivider className="mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[...events]
              .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
              .slice(0, 3)
              .map((event) => {
                const hindiTitle =
                  event.titleHi ||
                  (event.title.toLowerCase().includes("bhagwat")
                    ? "श्रीमद् भागवत कथा"
                    : event.title.toLowerCase().includes("yoga")
                      ? "योग एवं स्वास्थ्य शिविर"
                      : "गुरुकुल वार्षिकोत्सव");

                return (
                  <div key={event.id} className="h-full">
                    <div
                      onClick={() => {
                        setSelectedEvent(event);
                        setEventModalOpen(true);
                      }}
                      className="rounded-2xl overflow-hidden bg-white border border-[#E7D8C8] shadow-[0_10px_30px_-8px_rgba(43,32,26,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(232,111,29,0.2)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer h-full"
                    >
                      {/* Top Saffron/Orange Textured Banner with Bold White Devanagari Title (Matching Picture 2, 16px radius) */}
                      <div className="relative w-full h-[190px] sm:h-[210px] rounded-t-2xl bg-gradient-to-br from-[#F97316] via-[#E86F1D] to-[#C2410C] flex items-center justify-center p-6 text-center shadow-inner overflow-hidden">
                        {/* Soft subtle radial ambient glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-black/25 pointer-events-none" />

                        {/* Bold White Hindi Title */}
                        <h3 className="relative z-10 font-sans font-black text-2xl sm:text-3xl lg:text-[30px] text-white leading-tight drop-shadow-md tracking-wide px-3">
                          {hindiTitle}
                        </h3>
                      </div>

                      {/* Overlapping Seam Circular Trust Emblem (Matching Picture 2) */}
                      <div className="relative -mt-6 z-10 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-white p-0.5 border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
                          <Image
                            src="/sksm/logo.png"
                            alt="Trust Logo"
                            width={44}
                            height={44}
                            className="w-full h-full object-cover object-top rounded-full"
                          />
                        </div>
                      </div>

                      {/* Bottom Clean White Card Body (Matching Picture 2) */}
                      <div className="bg-white p-6 pt-3 pb-6 flex-1 flex flex-col justify-between text-center space-y-3">
                        <div className="space-y-2">
                          {/* English Title */}
                          <h4 className="font-sans font-bold text-lg sm:text-xl text-[#1E1612] group-hover:text-[#E86F1D] transition-colors leading-snug">
                            {event.title}
                          </h4>

                          {/* Line-Dot-Line Divider Matching Picture 2 */}
                          <HeadingDivider className="!py-0.5" />

                          {/* Description / Summary */}
                          <p className="text-xs sm:text-sm text-[#4A3E38]/85 leading-relaxed line-clamp-3 font-sans pt-0.5">
                            {lang === "hi" && event.summaryHi ? event.summaryHi : event.summary}
                          </p>
                        </div>

                        {/* Location & Date Details Row */}
                        <div className="pt-3 border-t border-[#F0E4D5] flex items-center justify-between text-xs text-[#8C6B3E] font-medium gap-2">
                          <span className="flex items-center gap-1.5 truncate max-w-[60%]">
                            <MapPin className="w-3.5 h-3.5 text-[#E86F1D] shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </span>
                          <span className="text-[#E86F1D] font-bold shrink-0">
                            {formatCardDate(event.startDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Centered View All Button (Matching Picture 2) */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-lg bg-[#E86F1D] hover:bg-[#D25E12] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>{lang === "hi" ? "सभी कार्यक्रम देखें" : "View All"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT COUNTERS STRIP */}
      <SectionReveal className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F0] border-y border-[#E7D8C8]/60">
        <div className="page-container">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 items-center justify-between text-center">
            {[
              {
                image: "/images/stat-members.png",
                alt: "Members",
                end: 25000,
                duration: 1600,
                labelEn: "Members",
                labelHi: "सदस्य",
              },
              {
                image: "/images/stat-events.png",
                alt: "Events",
                end: 350,
                duration: 1400,
                labelEn: "Events",
                labelHi: "कार्यक्रम",
              },
              {
                image: "/images/stat-cities.png",
                alt: "Cities Served",
                end: 50,
                duration: 1200,
                labelEn: "Cities Served",
                labelHi: "शहरों में सेवा",
              },
              {
                image: "/images/stat-impacted.png",
                alt: "People Impacted",
                end: 100000,
                duration: 1800,
                labelEn: "People Impacted",
                labelHi: "लाभान्वित जन",
              },
              {
                image: "/images/stat-years.png",
                alt: "Years of Seva",
                end: 15,
                duration: 1000,
                labelEn: "Years of Seva",
                labelHi: "सेवा के वर्ष",
              },
            ].map((stat, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
                <StaggerItem
                  key={stat.alt}
                  className={`${
                    isLast
                      ? "col-span-2 md:col-span-1"
                      : "relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-[60%] lg:after:bg-[#E6E6E6]/60"
                  } flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2`}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 relative flex items-center justify-center">
                    <Image
                      src={stat.image}
                      alt={stat.alt}
                      width={48}
                      height={48}
                      priority
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="font-sans font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#E86F1D] leading-tight tracking-tight">
                    <CountUp start={0} end={stat.end} suffix="+" duration={stat.duration} />
                  </div>
                  <div className="font-sans text-xs sm:text-[13px] md:text-sm font-bold text-black uppercase tracking-wider leading-snug">
                    {lang === "hi" ? stat.labelHi : stat.labelEn}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* SACRED GALLERY & GLIMPSES SECTION */}
      <GallerySection />

      {/* OUR MEMBERS SECTION (Contained Box Panel Matching Reference) */}
      <SectionReveal className="py-14 sm:py-18 lg:py-20 bg-[#FFF9F2] border-t border-[#E7D8C8] overflow-hidden">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contained Peach/Cream Panel with White Cards Inside (No Border) */}
          <div className="w-full bg-[#FFF3E7] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_-8px_rgba(43,32,26,0.04)]">
            {/* Header inside the panel */}
            <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
              <TextReveal
                as="h2"
                className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E86F1D] tracking-wider whitespace-nowrap px-2"
                text={lang === "hi" ? "हमारे सदस्य" : "Our Members"}
              />
              <HeadingDivider className="mt-2.5" />
            </div>

            {/* Member Carousel with Pure White Cards inside */}
            <MemberCarousel />
          </div>
        </div>
      </SectionReveal>

      {/* FOUR PURPOSE CARDS (PILLARS OF ACTION) */}
      <SectionReveal className="py-16 sm:py-20 lg:py-24 bg-[#FFF9F2] border-t border-[#E7D8C8]/60">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <TextReveal
              as="h2"
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#E86F1D] tracking-tight"
              text={lang === "hi" ? "हमारे आधारभूत संकल्प" : "Our Foundational Commitments"}
            />
            <HeadingDivider className="mt-2" />
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* 1. Mission */}
            <StaggerItem className="h-full">
              <ParallaxPillarCard
                imageSrc="/sksm/1.jpg"
                imageAlt="Our Mission"
                title={lang === "hi" ? "हमारा ध्येय" : "Our Mission"}
                description={
                  lang === "hi"
                    ? "हमारा मुख्य उद्देश्य दक्षिण दिल्ली में श्री बांके बिहारी मंदिर का निर्माण है। यह मंदिर पूजा-अर्चना, आध्यात्मिक शिक्षा, संस्कृति और समाज सेवा का केंद्र होगा।"
                    : "Our central mission is a Shri Banke Bihari temple in South Delhi. The temple is envisioned as a place of worship, spiritual learning, cultural connection and community care."
                }
                buttonText={lang === "hi" ? "ध्येय के बारे में जानें" : "Learn About Mission"}
                href="/about"
              />
            </StaggerItem>

            {/* 2. Vision */}
            <StaggerItem className="h-full">
              <ParallaxPillarCard
                imageSrc="/images/card-thought-rect.webp"
                imageAlt="Our Vision"
                title={lang === "hi" ? "हमारा दृष्टिकोण" : "Our Vision"}
                description={
                  lang === "hi"
                    ? "आध्यात्मिक मूल्यों, सांस्कृतिक विरासत, शिक्षा और मानवता पर आधारित ऐसे समरस समाज का निर्माण करना, जहां प्रत्येक व्यक्ति गरिमा, शांति और सद्भाव से जी सके।"
                    : "To help build a society rooted in spiritual values, cultural heritage, and humanity, where every individual lives with dignity, peace, and harmony."
                }
                buttonText={lang === "hi" ? "संस्थापक दृष्टि देखें" : "Explore Founder's Vision"}
                href="/founder"
              />
            </StaggerItem>

            {/* 3. Join Us */}
            <StaggerItem className="h-full">
              <ParallaxPillarCard
                imageSrc="/images/membership-hero-unity.jpg"
                imageAlt="Join Us"
                title={lang === "hi" ? "हमसे जुड़ें" : "Join Us"}
                description={
                  lang === "hi"
                    ? "सेवा, संस्कृति और आत्मिक उन्नति के लिए समर्पित एक पावन परिवार का अंग बनें। साथ मिलकर हम गांवों और शहरों में सकारात्मक बदलाव ला सकते हैं।"
                    : "Become part of a sacred community committed to seva, culture, and spiritual growth to create lasting practical change in villages and cities alike."
                }
                buttonText={lang === "hi" ? "सेवा सदस्य बनें" : "Become a Member"}
                href="/membership"
              />
            </StaggerItem>

            {/* 4. Support Us */}
            <StaggerItem className="h-full">
              <ParallaxPillarCard
                imageSrc="/images/card-seva-rect.webp"
                imageAlt="Support Us"
                title={lang === "hi" ? "सहयोग करें" : "Support Us"}
                description={
                  lang === "hi"
                    ? "आपका सहयोग श्रीकृष्ण भक्ति, ब्रज संस्कृति, समाज सेवा और श्री बांके बिहारी मंदिर के संकल्प को सशक्त बनाता है।"
                    : "Your contribution supports Krishna bhakti, Braj culture, community seva and the Shri Banke Bihari temple vision."
                }
                buttonText={lang === "hi" ? "सहयोग राशि दान करें" : "Support Our Seva"}
                isDonateButton={true}
                onClick={() => openDonateModal("General Donation")}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>


      {/* DEVOTEE TESTIMONIALS CAROUSEL (Matching reference design) */}
      <TestimonialsSection lang={lang} />

      {/* EVENT DETAILS POPUP MODAL */}
      <EventDetailsModal
        event={selectedEvent}
        isOpen={eventModalOpen}
        onClose={() => setEventModalOpen(false)}
        onRegister={(title, customAmounts) =>
          openDonateModal(title, undefined, false, undefined, customAmounts)
        }
        lang={lang}
      />
    </div>
  );
}

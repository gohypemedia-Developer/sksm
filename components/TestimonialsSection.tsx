"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionReveal, TextReveal, ParagraphReveal } from "@/components/animation";
import HeadingDivider from "@/components/HeadingDivider";

interface Testimonial {
  name: string;
  nameHi: string;
  initial: string;
  location: string;
  locationHi: string;
  role: string;
  roleHi: string;
  rating: number;
  quote: string;
  quoteHi: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Shri Banke Bihari Temple",
    nameHi: "श्री बांके बिहारी मंदिर",
    initial: "भ",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "A sacred temple vision for South Delhi, dedicated to Shri Krishna and inspired by the devotional heritage of Braj.",
    quoteHi:
      "दक्षिण दिल्ली में श्रीकृष्ण को समर्पित और ब्रज की भक्ति परंपरा से प्रेरित भव्य मंदिर निर्माण का संकल्प।",
  },
  {
    name: "Braj Culture & Heritage",
    nameHi: "ब्रज संस्कृति एवं विरासत",
    initial: "सं",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "Preserving the living traditions of Braj through devotional arts, music, storytelling and cultural gatherings.",
    quoteHi:
      "भक्ति कला, संगीत, कथा और सांस्कृतिक आयोजनों से ब्रज की जीवंत परंपराओं का संरक्षण एवं प्रसार।",
  },
  {
    name: "Community Seva",
    nameHi: "समाज सेवा एवं जनकल्याण",
    initial: "से",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "Bringing compassion into everyday life through community participation, care for elders and respect for nature.",
    quoteHi:
      "सामाजिक सहभागिता, वरिष्ठ नागरिकों के सम्मान और प्रकृति संरक्षण द्वारा करुणा को जीवन से जोड़ना।",
  },
  {
    name: "Krishna Bhakti & Sanskar",
    nameHi: "श्रीकृष्ण भक्ति एवं संस्कार",
    initial: "कृ",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "Sharing Shri Krishna’s teachings and Sanatan values through spiritual programmes, bhajans and kirtan.",
    quoteHi:
      "आध्यात्मिक आयोजनों, भजन और कीर्तन द्वारा श्रीकृष्ण की शिक्षाओं एवं सनातन मूल्यों का प्रसार।",
  },
  {
    name: "Shri Banke Bihari Temple",
    nameHi: "श्री बांके बिहारी मंदिर",
    initial: "भ",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "A sacred temple vision for South Delhi, dedicated to Shri Krishna and inspired by the devotional heritage of Braj.",
    quoteHi:
      "दक्षिण दिल्ली में श्रीकृष्ण को समर्पित और ब्रज की भक्ति परंपरा से प्रेरित भव्य मंदिर निर्माण का संकल्प।",
  },
  {
    name: "Braj Culture & Heritage",
    nameHi: "ब्रज संस्कृति एवं विरासत",
    initial: "सं",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "Preserving the living traditions of Braj through devotional arts, music, storytelling and cultural gatherings.",
    quoteHi:
      "भक्ति कला, संगीत, कथा और सांस्कृतिक आयोजनों से ब्रज की जीवंत परंपराओं का संरक्षण एवं प्रसार।",
  },
  {
    name: "Community Seva",
    nameHi: "समाज सेवा एवं जनकल्याण",
    initial: "से",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "Bringing compassion into everyday life through community participation, care for elders and respect for nature.",
    quoteHi:
      "सामाजिक सहभागिता, वरिष्ठ नागरिकों के सम्मान और प्रकृति संरक्षण द्वारा करुणा को जीवन से जोड़ना।",
  },
  {
    name: "Krishna Bhakti & Sanskar",
    nameHi: "श्रीकृष्ण भक्ति एवं संस्कार",
    initial: "कृ",
    location: "SKSM Foundation",
    locationHi: "एसकेएसएम फाउंडेशन",
    role: "Our shared commitment",
    roleHi: "हमारा साझा संकल्प",
    rating: 5,
    quote:
      "Sharing Shri Krishna’s teachings and Sanatan values through spiritual programmes, bhajans and kirtan.",
    quoteHi:
      "आध्यात्मिक आयोजनों, भजन और कीर्तन द्वारा श्रीकृष्ण की शिक्षाओं एवं सनातन मूल्यों का प्रसार।",
  },
];

interface TestimonialsSectionProps {
  lang?: string;
}

export default function TestimonialsSection({ lang = "en" }: TestimonialsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay functionality (6 seconds, pauses on hover)
  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      if (emblaApi && !isHovered) {
        emblaApi.scrollNext();
      }
    }, 6000);
  }, [emblaApi, isHovered]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [startAutoplay]);

  return (
    <SectionReveal
      className="py-16 sm:py-20 lg:py-24 bg-[#FFF9F2] border-t border-[#E7D8C8]/60 relative select-none"
    >
      <div
        className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <TextReveal
            as="h2"
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#E86F1D] tracking-tight"
            text={lang === "hi" ? "भक्ति और सेवा के हमारे संकल्प" : "Our Spirit of Devotion & Seva"}
          />
          <HeadingDivider className="mt-2" />
        </div>

        {/* Carousel Container with Side Controls for Desktop (Positioned cleanly outside cards) */}
        <div className="relative flex items-center">
          {/* Desktop Left Button */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex shrink-0 mr-2.5 lg:mr-3.5 w-11 h-11 rounded-full border border-[#E7D8C8] bg-white hover:bg-[#E86F1D] text-[#2B201A] hover:text-white items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            aria-label="Previous commitment"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Carousel Viewport (NO overlapping buttons over cards) */}
          <div className="relative overflow-hidden px-1 py-2 flex-1 min-w-0" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-5 touch-pan-y">
              {testimonialsData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4 sm:pl-5 min-w-0"
                >
                  {/* Testimonial Card with authentic styling */}
                  <div className="h-full bg-white rounded-2xl border border-[#E7D8C8] p-5 sm:p-6 shadow-[0_4px_16px_-2px_rgba(43,32,26,0.06)] hover:border-[#E86F1D] hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div className="flex flex-col h-full justify-between space-y-3.5">
                      {/* Devotee Info: Avatar + Name & Location */}
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E86F1D] to-[#B8893E] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                          {item.initial}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-editorial font-bold text-sm sm:text-base text-[#2B201A] group-hover:text-[#E86F1D] transition-colors truncate">
                            {lang === "hi" ? item.nameHi : item.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#7A6B60] font-medium truncate">
                            {lang === "hi" ? item.locationHi : item.location}
                          </p>
                        </div>
                      </div>

                      {/* 5 Golden Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#E86F1D] text-[#E86F1D]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Quote - Fills the card naturally without truncation */}
                      <p className="text-xs sm:text-[13px] text-[#4A3E38] leading-relaxed italic flex-1">
                        &ldquo;{lang === "hi" ? item.quoteHi : item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right Button */}
          <button
            onClick={scrollNext}
            className="hidden md:flex shrink-0 ml-2.5 lg:ml-3.5 w-11 h-11 rounded-full border border-[#E7D8C8] bg-white hover:bg-[#E86F1D] text-[#2B201A] hover:text-white items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            aria-label="Next commitment"
          >
            <ChevronRight className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Carousel Bottom Controls: Mobile Prev/Next + Indicators on all screens */}
        <div className="flex items-center justify-center gap-4 mt-7 sm:mt-9">
          {/* Mobile Prev Button */}
          <button
            onClick={scrollPrev}
            className="md:hidden w-10 h-10 rounded-full border border-[#E7D8C8] bg-white hover:bg-[#E86F1D] text-[#2B201A] hover:text-white flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            aria-label="Previous commitment"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedIndex === idx
                    ? "w-8 bg-[#E86F1D]"
                    : "w-2.5 bg-[#E86F1D]/25 hover:bg-[#E86F1D]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={scrollNext}
            className="md:hidden w-10 h-10 rounded-full border border-[#E7D8C8] bg-white hover:bg-[#E86F1D] text-[#2B201A] hover:text-white flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            aria-label="Next commitment"
          >
            <ChevronRight className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
}



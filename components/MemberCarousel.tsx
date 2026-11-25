"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import {
  membersData,
  patronMembers,
  founderMembers,
  overviewSheets,
  Member,
} from "@/data/members";
import { useApp } from "@/context/AppContext";

type FilterTab = "all" | "patron" | "founder" | "overview";

export default function MemberCarousel() {
  const { lang } = useApp();
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Filter list based on tab
  const activeMembers = useMemo(() => {
    switch (activeTab) {
      case "patron":
        return patronMembers;
      case "founder":
        return founderMembers;
      case "overview":
        return overviewSheets;
      case "all":
      default:
        return membersData;
    }
  }, [activeTab]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect, activeMembers]);

  // Image-wise auto-scroll every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Tabs Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer ${
            activeTab === "all"
              ? "bg-[#E86F1D] text-white shadow-md shadow-[#E86F1D]/20 scale-105"
              : "bg-white/80 hover:bg-white text-[#5D4632] border border-[#E7D8C8] hover:border-[#E86F1D]/50"
          }`}
        >
          {lang === "hi" ? "सभी सदस्य" : "All Members"} ({membersData.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("patron")}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer ${
            activeTab === "patron"
              ? "bg-[#E86F1D] text-white shadow-md shadow-[#E86F1D]/20 scale-105"
              : "bg-white/80 hover:bg-white text-[#5D4632] border border-[#E7D8C8] hover:border-[#E86F1D]/50"
          }`}
        >
          {lang === "hi" ? "संरक्षक मंडल" : "Patrons & Guidance"} ({patronMembers.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("founder")}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer ${
            activeTab === "founder"
              ? "bg-[#E86F1D] text-white shadow-md shadow-[#E86F1D]/20 scale-105"
              : "bg-white/80 hover:bg-white text-[#5D4632] border border-[#E7D8C8] hover:border-[#E86F1D]/50"
          }`}
        >
          {lang === "hi" ? "संस्थापक सदस्य" : "Founder Members"} ({founderMembers.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer ${
            activeTab === "overview"
              ? "bg-[#E86F1D] text-white shadow-md shadow-[#E86F1D]/20 scale-105"
              : "bg-white/80 hover:bg-white text-[#5D4632] border border-[#E7D8C8] hover:border-[#E86F1D]/50"
          }`}
        >
          {lang === "hi" ? "मार्गदर्शक चार्ट" : "Overview Charts"} ({overviewSheets.length})
        </button>
      </div>

      {/* Carousel Container with Side Navigation Buttons */}
      <div className="relative group/carousel">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="hidden md:flex absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-[#E7D8C8] text-[#5D4632] hover:text-[#E86F1D] hover:border-[#E86F1D] shadow-md hover:shadow-lg items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="hidden md:flex absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-[#E7D8C8] text-[#5D4632] hover:text-[#E86F1D] hover:border-[#E86F1D] shadow-md hover:shadow-lg items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden py-2" ref={emblaRef}>
          <div className="flex -ml-3 sm:-ml-4 touch-pan-y">
            {activeMembers.map((member: Member, idx: number) => {
              const isOverview = member.category === "overview";

              return (
                <div
                  key={`${member.name}-${member.category}-${idx}`}
                  className="pl-3 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 min-w-0 shrink-0"
                >
                  {/* White Member Card matching reference */}
                  <div
                    onClick={() => setSelectedMember(member)}
                    className="h-full bg-white border border-[#E7D8C8]/70 hover:border-[#E86F1D] rounded-2xl p-2.5 sm:p-3 shadow-[0_4px_16px_-4px_rgba(43,32,26,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(232,111,29,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative"
                  >
                    {/* Hover Zoom Indicator */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-1 shadow-sm text-[#E86F1D]">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>

                    {/* Image / SVG Container */}
                    <div
                      className={`relative w-full ${
                        isOverview ? "aspect-[4/5] bg-[#FAF3EC]" : "aspect-[3/4] bg-white"
                      } rounded-xl overflow-hidden flex items-center justify-center p-1`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        unoptimized
                        className={`${
                          isOverview
                            ? "object-cover object-top"
                            : "object-contain"
                        } transition-transform duration-500 group-hover:scale-105`}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                      />
                    </div>

                    {/* Badge & Designation */}
                    <div className="pt-2.5 pb-0.5 w-full flex flex-col items-center justify-center min-h-[56px]">
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                          member.category === "patron"
                            ? "bg-[#FAF0E6] text-[#A64B00] border border-[#A64B00]/20"
                            : member.category === "founder"
                            ? "bg-[#F3EFEA] text-[#8C6B3E] border border-[#8C6B3E]/20"
                            : "bg-[#FFF3E7] text-[#E86F1D] border border-[#E86F1D]/20"
                        }`}
                      >
                        {member.category === "patron"
                          ? lang === "hi"
                            ? "संरक्षक"
                            : "PATRON"
                          : member.category === "founder"
                          ? lang === "hi"
                            ? "संस्थापक सदस्य"
                            : "FOUNDER"
                          : lang === "hi"
                          ? "मार्गदर्शक चार्ट"
                          : "OVERVIEW"}
                      </span>

                      <h3 className="font-sans font-bold text-[11px] sm:text-xs md:text-[13px] text-[#1E1612] uppercase tracking-wide leading-tight line-clamp-1 group-hover:text-[#E86F1D] transition-colors">
                        {member.name}
                      </h3>

                      <p className="font-sans text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-[#8C6B3E] uppercase tracking-wider mt-0.5 line-clamp-1 px-0.5 leading-snug">
                        {member.subtitle || member.company || "SKSM FOUNDATION"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {scrollSnaps.slice(0, 8).map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === selectedIndex % Math.min(scrollSnaps.length || 1, 8)
                ? "w-6 h-2 bg-[#E86F1D]"
                : "w-2 h-2 bg-[#E7D8C8] hover:bg-[#E86F1D]/50"
            }`}
          />
        ))}
      </div>

      {/* Lightbox / Modal for enlarged member card */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white rounded-3xl p-5 sm:p-7 max-w-md w-full shadow-2xl border border-[#E7D8C8] text-center flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#FAF3EC] hover:bg-[#E86F1D] hover:text-white text-[#5D4632] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Pill */}
            <span
              className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                selectedMember.category === "patron"
                  ? "bg-[#FAF0E6] text-[#A64B00] border border-[#A64B00]/20"
                  : selectedMember.category === "founder"
                  ? "bg-[#F3EFEA] text-[#8C6B3E] border border-[#8C6B3E]/20"
                  : "bg-[#FFF3E7] text-[#E86F1D] border border-[#E86F1D]/20"
              }`}
            >
              {selectedMember.category === "patron"
                ? lang === "hi"
                  ? "श्री कृष्ण शरणम् ममः फ़ाउंडेशन — संरक्षक"
                  : "SKSM Foundation — Patron & Guidance"
                : selectedMember.category === "founder"
                ? lang === "hi"
                  ? "श्री कृष्ण शरणम् ममः फ़ाउंडेशन — संस्थापक सदस्य"
                  : "SKSM Foundation — Founder Member"
                : "SKSM Foundation — Official Directory"}
            </span>

            {/* Card Graphic */}
            <div className="relative w-full max-w-[280px] aspect-[3/4] bg-white rounded-2xl border border-[#E7D8C8]/60 overflow-hidden p-2 flex items-center justify-center shadow-inner">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                unoptimized
                className={
                  selectedMember.category === "overview"
                    ? "object-contain"
                    : "object-contain"
                }
              />
            </div>

            {/* Info */}
            <div className="space-y-1 w-full">
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#1E1612]">
                {selectedMember.name}
              </h2>
              {selectedMember.role && (
                <p className="text-sm font-semibold text-[#E86F1D]">
                  {selectedMember.role}
                </p>
              )}
              {selectedMember.company && (
                <p className="text-xs text-[#5D4632] font-medium">
                  {selectedMember.company}
                </p>
              )}
              {selectedMember.memberId && (
                <p className="text-[11px] font-mono tracking-wider text-[#8C6B3E] pt-1">
                  ID: {selectedMember.memberId}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

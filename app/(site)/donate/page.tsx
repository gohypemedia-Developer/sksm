"use client";

import React from "react";
import { Heart, BookOpen, Sprout, GraduationCap, Sun, ShieldCheck, QrCode } from "lucide-react";
import { useApp } from "@/context/AppContext";
import {
  TextReveal,
  ParagraphReveal,
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation";
import HeadingDivider from "@/components/HeadingDivider";

export default function DonatePage() {
  const { lang, openDonateModal } = useApp();

  const programs = [
    {
      id: "general",
      title: "General Seva",
      titleHi: "सामान्य सेवा",
      desc: "Shri Krishnam Sharnam Mamah Foundation is a spiritual, cultural and charitable organisation inspired by Shri Krishna. It brings people together through devotion, the heritage of Braj and selfless service.",
      icon: Heart,
      color: "text-[#E86F1D]",
      bg: "bg-[#E86F1D]/10",
    },
    {
      id: "gita",
      title: "Temple Development",
      titleHi: "मंदिर निर्माण",
      desc: "Our central mission is a Shri Banke Bihari temple in South Delhi. The temple is envisioned as a place of worship, spiritual learning, cultural connection and community care.",
      icon: BookOpen,
      color: "text-[#B8893E]",
      bg: "bg-[#B8893E]/10",
    },
    {
      id: "farmers",
      title: "Gau Seva",
      titleHi: "गौ सेवा",
      desc: "Support the foundation’s vision of a gaushala within the proposed temple campus.",
      icon: Sprout,
      color: "text-[#2F5A43]",
      bg: "bg-[#2F5A43]/10",
    },
    {
      id: "girls-education",
      title: "Braj Culture",
      titleHi: "ब्रज संस्कृति",
      desc: "We work to connect younger generations with Braj culture, Krishna leela and Sanatan values through devotional music, storytelling and cultural participation.",
      icon: GraduationCap,
      color: "text-[#E86F1D]",
      bg: "bg-[#E86F1D]/10",
    },
    {
      id: "spirituality",
      title: "Bhajan & Kirtan",
      titleHi: "भजन एवं कीर्तन",
      desc: "Support devotional gatherings, spiritual storytelling and celebrations of Krishna bhakti.",
      icon: Sun,
      color: "text-[#B8893E]",
      bg: "bg-[#B8893E]/10",
    },
  ];

  return (
    <div className="w-full space-y-0">
      {/* HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-[#FBF2E7] border-b border-[#E7D8C8]">
        <div className="page-container text-center space-y-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E86F1D]">SEVA & CHARITY</p>
          <TextReveal as="h1" className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E86F1D]">
            Be the Reason Someone Smiles
          </TextReveal>
          <ParagraphReveal className="text-base sm:text-lg text-[#2B201A]/85 leading-relaxed font-sans max-w-2xl mx-auto">
            Your contribution helps bring hope, dignity, learning, and support to communities through the Trust’s spiritual, educational, and humanitarian initiatives.
          </ParagraphReveal>
        </div>
      </section>

      {/* 5 DONATION PROGRAM CARDS */}
      <section className="section-py">
        <div className="page-container">
          <SectionReveal className="text-center max-w-2xl mx-auto section-header space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8893E]">CHOOSE A CAUSE</p>
            <TextReveal as="h2" className="font-editorial text-3xl sm:text-4xl font-bold text-[#E86F1D]">
              Direct Your Seva Contribution
            </TextReveal>
            <HeadingDivider className="mt-2" />
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {programs.map((prog) => {
              const IconComp = prog.icon;
              return (
                <StaggerItem key={prog.id} className="card-warm">
                  <div className="card-body space-y-4">
                    <div className={`w-12 h-12 rounded-2xl ${prog.bg} ${prog.color} flex items-center justify-center`}>
                      <IconComp className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-[#2B201A]">
                      {lang === "hi" ? prog.titleHi : prog.title}
                    </h3>
                    <p className="text-sm text-[#2B201A]/85 leading-relaxed font-sans">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="card-action">
                    <button
                      onClick={() => openDonateModal(prog.title)}
                      className="btn-primary w-full"
                    >
                      <Heart className="w-4 h-4 fill-current text-white" />
                      <span>Donate Now</span>
                    </button>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CENTERED SCAN & SUPPORT PANEL */}
      <section className="section-py bg-[#FBF2E7]/60 border-t border-[#E7D8C8]">
        <div className="page-container max-w-4xl">
          <SectionReveal className="card-warm border-2 border-[#B8893E]/50 text-center p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFF9F2] border border-[#B8893E]/30 rounded-full text-xs font-bold uppercase tracking-widest text-[#B8893E] mx-auto">
              <QrCode className="w-4 h-4" />
              <span>OFFICIAL BANK DETAILS</span>
            </div>

            <h2 className="font-editorial text-3xl font-bold text-[#E86F1D]">Bank Transfer & Support</h2>
            <HeadingDivider className="my-1.5" />
            <p className="text-sm text-[#2B201A]/85 max-w-lg mx-auto">
              Account name: Shri Krishnam Sharnam Mamah Foundation. Bank: IDFC FIRST BANK. Account: 68750508504. IFSC: IDFB0020107. Branch: OKHLA BRANCH. Contact the foundation with your transfer reference for acknowledgement.
            </p>

            <button onClick={() => openDonateModal("General Donation")} className="btn-primary mx-auto">
              <QrCode className="w-4 h-4" />
              <span>Donation Assistance</span>
            </button>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#2B201A]/75 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#2F5A43]" />
              <span>Please confirm the account name before transferring. For assistance, call +91 8750508506.</span>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

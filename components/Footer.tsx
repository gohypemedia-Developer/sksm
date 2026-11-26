"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { POLICY_LINKS } from "@/lib/legal";

export default function Footer() {
  const { lang, openDonateModal } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FBF2E7] border-t border-[#E7D8C8] text-[#2B201A] relative pt-14 pb-5">
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1.3fr] gap-8 xl:gap-10 pb-8 border-b border-[#E7D8C8]">
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-[68px] h-[62px] xl:w-[74px] xl:h-[68px] shrink-0">
                <Image
                  src="/sksm/logo.svg"
                  alt="Shri Krishnam Sharnam Mamah Foundation Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-editorial text-lg xl:text-xl font-bold text-[#2B201A] leading-tight">
                  {lang === "hi" ? "श्री कृष्ण" : "SHRI KRISHNAM"}
                </h3>
                <p className="text-[10.5px] xl:text-[11.5px] font-extrabold tracking-[0.14em] text-[#B8893E] uppercase">
                  {lang === "hi" ? "शरणम् ममः फाउंडेशन" : "SHARNAM MAMAH FOUNDATION"}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#2B201A]/85 leading-relaxed">
              {lang === "hi"
                ? "भगवद गीता के कालातीत ज्ञान से प्रेरित होकर, श्री कृष्ण शरणम् ममः फाउंडेशन शिक्षा, समाज सेवा और मानवीय सहायता के माध्यम से जीवन को उन्नत करने के लिए समर्पित है।"
                : "Guided by the timeless wisdom of the Bhagavad Gita, Shri Krishnam Sharnam Mamah Foundation works to uplift lives through spiritual education, community service, and compassionate action."}
            </p>
            <div className="pt-2">
              <button
                onClick={() => openDonateModal("General Donation")}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E86F1D] hover:bg-[#D25E12] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-warm-sm transition-all"
              >
                <Heart className="w-4 h-4 fill-current text-white" />
                <span>{lang === "hi" ? "सेवा का समर्थन करें" : "Support Our Seva"}</span>
              </button>
            </div>
          </div>

          {/* Column 1: Links */}
          <div className="space-y-3">
            <h4 className="font-editorial text-lg font-bold text-[#E86F1D] border-b border-[#E7D8C8] pb-1.5 inline-block">
              {lang === "hi" ? "त्वरित लिंक" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "हमारे बारे में" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "संस्थापक दृष्टिकोण" : "Founder's Vision"}
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "सदस्यता" : "Membership"}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "गैलरी" : "Gallery & Moments"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "संपर्क करें" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Work (Strictly Charitable Initiatives, policies stay in bottom bar) */}
          <div className="space-y-3">
            <h4 className="font-editorial text-lg font-bold text-[#E86F1D] border-b border-[#E7D8C8] pb-1.5 inline-block">
              {lang === "hi" ? "हमारा कार्य" : "Our Work"}
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/initiatives" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "सेवा प्रकल्प" : "Our Initiatives"}
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "दान एवं सेवा" : "Donate & Seva"}
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "साहित्य एवं पुस्तकें" : "Books & Publications"}
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "ब्रज संस्कृति एवं विरासत" : "Braj Culture & Heritage"}
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-[#E86F1D] transition-colors">
                  {lang === "hi" ? "समाज सेवा एवं जनकल्याण" : "Community Seva"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <h4 className="font-editorial text-lg font-bold text-[#E86F1D] border-b border-[#E7D8C8] pb-1.5 inline-block">
              {lang === "hi" ? "संपर्क विवरण" : "Contact Details"}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8893E] shrink-0 mt-0.5" />
                <span className="text-[#2B201A]/85 leading-snug">
                  D-6/1, 2nd Floor, Okhla Phase II, New Delhi, Delhi 110020
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B8893E] shrink-0" />
                <a href="tel:+918750508506" className="text-[#2B201A]/85 hover:text-[#E86F1D] font-semibold">
                  +91 8750508506
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8893E] shrink-0" />
                <a href="mailto:sksmfoundation@gmail.com" className="text-[#2B201A]/85 hover:text-[#E86F1D] font-semibold text-xs sm:text-sm whitespace-nowrap">
                  sksmfoundation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2B201A]/75 font-medium text-center sm:text-left">
          <p>
            {lang === "hi"
              ? `© ${new Date().getFullYear()} श्री कृष्ण शरणम् ममः फाउंडेशन। सर्वाधिकार सुरक्षित।`
              : `© ${new Date().getFullYear()} Shri Krishnam Sharnam Mamah Foundation. All rights reserved.`}
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-4">
            {POLICY_LINKS.map((p) => {
              const labelHi =
                p.href === "/privacy-policy"
                  ? "गोपनीयता नीति"
                  : p.href === "/terms"
                    ? "नियम व शर्तें"
                    : p.href === "/refund-policy"
                      ? "रिफंड व रद्दीकरण"
                      : "शिपिंग नीति";
              return (
                <React.Fragment key={p.href}>
                  <Link href={p.href} className="hover:text-[#E86F1D] transition-colors">
                    {lang === "hi" ? labelHi : p.label}
                  </Link>
                  <span>•</span>
                </React.Fragment>
              );
            })}
            <span>{lang === "hi" ? "भक्ति • संस्कृति • सेवा" : "Bhakti • Sanskriti • Seva"}</span>
            <button
              onClick={scrollToTop}
              className="ml-1 p-2.5 bg-[#FFF9F2] hover:bg-[#E86F1D] hover:text-white rounded-xl border border-[#E7D8C8] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

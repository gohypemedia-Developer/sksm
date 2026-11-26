"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, Heart, User } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useSmoothScroll } from "@/components/animation/SmoothScrollProvider";

function BrandWordmark({
  isHindi,
  titleClassName,
  subtitleClassName,
}: {
  isHindi: boolean;
  titleClassName: string;
  subtitleClassName: string;
}) {
  return (
    <div className="flex flex-col min-w-0 justify-center">
      <span
        className={`font-editorial font-bold text-[#2B201A] leading-tight ${
          isHindi ? "tracking-normal" : "tracking-tight"
        } ${titleClassName}`}
      >
        {isHindi ? "श्री कृष्ण" : "SHRI KRISHNAM"}
      </span>
      <span
        className={`font-extrabold text-[#B8893E] ${
          isHindi ? "tracking-normal" : "uppercase"
        } ${subtitleClassName}`}
      >
        {isHindi ? "शरणम् ममः फाउंडेशन" : "SHARNAM MAMAH FOUNDATION"}
      </span>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, openDonateModal, user, isLoadingUser, openAuthModal } = useApp();
  const { lenis } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let unsubscribeLenis: (() => void) | undefined;
    if (lenis) {
      const lenisHandler = (e: any) => {
        const scrollY = e.scroll ?? window.scrollY ?? 0;
        setScrolled(scrollY > 20);
      };
      lenis.on("scroll", lenisHandler);
      unsubscribeLenis = () => {
        lenis.off("scroll", lenisHandler);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (unsubscribeLenis) unsubscribeLenis();
    };
  }, [lenis]);

  // Navigation Links including dedicated Gallery page
  const navLinks = [
    { href: "/", label: lang === "hi" ? "मुख्य पृष्ठ" : "Home" },
    { href: "/about", label: lang === "hi" ? "परिचय" : "About" },
    { href: "/initiatives", label: lang === "hi" ? "सेवा कार्य" : "Initiatives" },
    { href: "/gallery", label: lang === "hi" ? "झलकियाँ" : "Gallery" },
    { href: "/founder", label: lang === "hi" ? "नेतृत्व" : "Leadership" },
    { href: "/membership", label: lang === "hi" ? "सदस्यता" : "Membership" },
    { href: "/books", label: lang === "hi" ? "पुस्तकें" : "Books" },
    { href: "/contact", label: lang === "hi" ? "संपर्क" : "Contact" },
  ];

  const primaryLinks = navLinks.filter((link) => ["/", "/about", "/initiatives", "/gallery", "/contact"].includes(link.href));

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF9F2]/95 backdrop-blur-md shadow-warm-sm border-b border-[#E7D8C8]"
            : "bg-[#FFF9F2] border-b border-[#E7D8C8]/60"
        }`}
      >
      {/* DESKTOP 3-ZONE GRID LAYOUT (visible >= 1024px / lg) */}
      <div className="max-w-[1560px] w-full mx-auto px-3 sm:px-4 lg:px-3 xl:px-6 2xl:px-8 box-border">
        {/* DESKTOP HEADER (visible >= 1024px) */}
        <div className="hidden lg:flex items-center justify-between h-[72px] xl:h-[80px] 2xl:h-[84px] gap-1.5 lg:gap-2 xl:gap-4 2xl:gap-6">
          
          {/* 1. LEFT: Trust Logo + Brand Name */}
          <Link href="/" className="flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0 group whitespace-nowrap">
            <div className="relative w-[48px] h-[44px] lg:w-[56px] lg:h-[52px] xl:w-[68px] xl:h-[62px] 2xl:w-[74px] 2xl:h-[68px] transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/sksm/logo.svg"
                alt="Shri Krishnam Sharnam Mamah Foundation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <BrandWordmark
              isHindi={lang === "hi"}
              titleClassName="text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-xl group-hover:text-[#E86F1D] transition-colors whitespace-nowrap"
              subtitleClassName={`text-[8px] lg:text-[8.5px] xl:text-[10.5px] 2xl:text-xs whitespace-nowrap ${
                lang === "hi" ? "" : "tracking-[0.12em] xl:tracking-[0.14em]"
              }`}
            />
          </Link>

          {/* 2. CENTER: Navigation Menu */}
          <nav className="flex items-center justify-center gap-0.5 xl:gap-1 2xl:gap-2 shrink-0 whitespace-nowrap">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-1.5 lg:px-2 xl:px-2.5 2xl:px-3 py-1 xl:py-1.5 rounded-lg text-[11px] xl:text-[12.5px] 2xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-[#E86F1D] bg-[#FBF2E7] font-bold shadow-xs"
                      : "text-[#2B201A]/85 hover:text-[#E86F1D] hover:bg-[#FBF2E7]/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. RIGHT: Language Selector + Cart + Account + Orange Donate Button */}
          <div className="flex items-center justify-end gap-1 lg:gap-1.5 xl:gap-2.5 2xl:gap-3.5 shrink-0 whitespace-nowrap">
            {/* Language Selector */}
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 xl:py-1.5 rounded-lg xl:rounded-xl border border-[#E7D8C8] text-[11px] xl:text-xs font-bold text-[#2B201A] hover:bg-[#FBF2E7] transition-colors min-h-[36px] xl:min-h-[42px] shrink-0"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#B8893E]" />
              <span>{lang === "en" ? "हिन्दी" : "English"}</span>
            </button>

            {/* Cart Icon */}


            {/* Account Icon (Instant 0ms render, no layout shift or delayed pop-in) */}
            {user ? (
              <Link
                href="/account"
                className="relative p-1.5 xl:p-2 text-[#E86F1D] hover:text-[#D25E12] rounded-lg xl:rounded-xl border border-[#B8893E] bg-[#FBF2E7] hover:bg-[#E7D8C8]/60 transition-colors min-h-[36px] min-w-[36px] xl:min-h-[42px] xl:min-w-[42px] flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="My Account & Orders"
                title={`Signed in as ${user.name}`}
              >
                <User className="w-4 h-4 xl:w-5 xl:h-5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="flex p-1.5 xl:p-2 text-[#2B201A] hover:text-[#E86F1D] rounded-lg xl:rounded-xl border border-[#E7D8C8] hover:bg-[#FBF2E7] transition-colors min-h-[36px] min-w-[36px] xl:min-h-[42px] xl:min-w-[42px] items-center justify-center shrink-0 cursor-pointer"
                aria-label={lang === "hi" ? "साइन इन करें" : "Sign in"}
                title={lang === "hi" ? "साइन इन करें" : "Sign in"}
              >
                <User className="w-4 h-4 xl:w-5 xl:h-5" />
              </button>
            )}

            {/* Orange Donate CTA Button */}
            <button
              onClick={() => openDonateModal("General Donation")}
              className="flex items-center gap-1 xl:gap-1.5 h-[36px] xl:h-[42px] 2xl:h-[46px] px-2.5 xl:px-4 2xl:px-5 bg-[#E86F1D] hover:bg-[#D25E12] text-white text-[10.5px] xl:text-xs font-bold uppercase tracking-wider rounded-xl xl:rounded-[14px] shadow-warm-sm hover:shadow-warm-md transition-all shrink-0 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current text-white" />
              <span>{lang === "hi" ? "दान करें" : "Donate"}</span>
            </button>
          </div>

        </div>

        {/* MOBILE / TABLET HEADER BAR (< 1024px) */}
        <div className="flex lg:hidden items-center justify-between h-[68px] sm:h-[74px] gap-2">
          {/* Mobile Logo + Brand (Enlarged for readability per PM Audit) */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 group shrink">
            <div className="relative w-[56px] h-[52px] sm:w-[62px] sm:h-[58px] shrink-0">
              <Image
                src="/sksm/logo.svg"
                alt="Shri Krishnam Sharnam Mamah Foundation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <BrandWordmark
              isHindi={lang === "hi"}
              titleClassName="text-[11px] sm:text-base truncate"
              subtitleClassName={`text-[7px] sm:text-[9.5px] truncate ${
                lang === "hi" ? "" : "tracking-[0.04em] sm:tracking-[0.12em]"
              }`}
            />
          </Link>

          {/* Mobile Controls: Orange Donate Button (ALWAYS VISIBLE per PM Audit) + Language + Cart + Account + Hamburger */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Always visible orange donate button on mobile/tablet */}
            <button
              onClick={() => openDonateModal("General Donation")}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-[#E86F1D] hover:bg-[#D25E12] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline sm:inline">{lang === "hi" ? "दान" : "Donate"}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-1.5 rounded-lg border border-[#E7D8C8] text-[11px] font-bold text-[#2B201A] hover:bg-[#FBF2E7] transition-colors min-h-[36px]"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#B8893E]" />
              <span>{lang === "en" ? "हिन्दी" : "EN"}</span>
            </button>

            {/* Cart Icon */}


            {/* Account Icon (Instant 0ms render) */}
            {user ? (
              <Link
                href="/account"
                className="p-1.5 sm:p-2 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center border border-[#B8893E] bg-[#FBF2E7] text-[#E86F1D] cursor-pointer"
                aria-label="Account"
                title={user.name}
              >
                <User className="w-4 h-4" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="p-1.5 sm:p-2 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center border border-[#E7D8C8] text-[#2B201A] cursor-pointer"
                aria-label={lang === "hi" ? "साइन इन करें" : "Sign in"}
                title={lang === "hi" ? "साइन इन करें" : "Sign in"}
              >
                <User className="w-4 h-4" />
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-[#2B201A] rounded-lg hover:bg-[#FBF2E7] min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET MENU DRAWER (< 1000px) - PORTAL SLIDE-OVER DRAWER (Fixes PM Finding 8) */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[9999]">
          {/* Dimmed Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Narrow Slide-Over Drawer on Right Edge (Max 340px) */}
          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#FFF9F2] shadow-2xl flex flex-col justify-between p-5 border-l border-[#E7D8C8] animate-in slide-in-from-right duration-250 z-10 overflow-y-auto">
            <div>
              {/* Drawer Top Header: Logo + Close */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E7D8C8]/70 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-12 h-11 shrink-0">
                    <Image
                      src="/sksm/logo.svg"
                      alt="SKSM Foundation Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <BrandWordmark
                    isHindi={lang === "hi"}
                    titleClassName="text-xs sm:text-sm whitespace-nowrap"
                    subtitleClassName={`text-[8px] sm:text-[8.5px] whitespace-nowrap ${
                      lang === "hi" ? "" : "tracking-[0.1em]"
                    }`}
                  />
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg border border-[#E7D8C8] text-[#2B201A] hover:bg-[#FBF2E7] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="grid gap-1 py-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center min-h-[42px] ${
                      pathname === link.href
                        ? "bg-[#FBF2E7] text-[#E86F1D] font-bold border border-[#E86F1D]/20 shadow-xs"
                        : "text-[#2B201A] hover:bg-[#FBF2E7]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {!user && !isLoadingUser && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal();
                    }}
                    className="px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 min-h-[42px] text-[#2B201A] hover:bg-[#FBF2E7] text-left cursor-pointer"
                  >
                    <User className="w-4 h-4 text-[#E86F1D]" />
                    <span>{lang === "hi" ? "साइन इन करें" : "Sign in"}</span>
                  </button>
                )}
                {user && (
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 min-h-[42px] ${
                      pathname === "/account"
                        ? "bg-[#FBF2E7] text-[#E86F1D] font-bold border border-[#E86F1D]/20 shadow-xs"
                        : "text-[#2B201A] hover:bg-[#FBF2E7]"
                    }`}
                  >
                    <User className="w-4 h-4 text-[#E86F1D]" />
                    <span>{lang === "hi" ? "मेरा खाता एवं आर्डर्स" : "My Account & Orders"}</span>
                  </Link>
                )}
              </nav>
            </div>

            {/* Drawer Bottom Actions: Donate CTA */}
            <div className="pt-4 border-t border-[#E7D8C8]/70 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonateModal("General Donation");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#E86F1D] hover:bg-[#D25E12] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-warm-sm active:scale-95 transition-all min-h-[44px] cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>{lang === "hi" ? "दान करें" : "Donate Now"}</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      </header>
      {/* Invisible spacer so fixed header does not collapse the flow of following content */}
      <div
        className="h-[68px] sm:h-[74px] lg:h-[72px] xl:h-[80px] 2xl:h-[84px] w-full shrink-0 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";
const PHONE = "(432) 692-0239";
const PHONE_HREF = "tel:4326920239";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-sage text-white text-xs sm:text-sm py-2.5 px-4 text-center">
        <span className="hidden sm:inline">6 Desta Drive, Suite 2700, Midland, TX 79705 &nbsp;|&nbsp; </span>
        <a href={PHONE_HREF} className="hover:underline font-medium">
          New Patients: {PHONE}
        </a>
        <span className="mx-2">|</span>
        <span>Mon – Thu: 8AM – 3PM</span>
        <span className="mx-2">|</span>
        <LanguageToggle className="text-white text-xs sm:text-sm" />
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-24 lg:h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="The Smile Suite — Dr. Mallory Gonzales"
                width={280}
                height={80}
                className="h-20 sm:h-16 lg:h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-charcoal/80 hover:text-sage transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-base font-medium text-sage hover:text-sage-dark transition-colors"
              >
                <Phone size={18} />
                {PHONE}
              </a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 !px-8 !text-sm">
                Book Now
              </a>
            </div>

            {/* Mobile buttons */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-sage text-white"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/20"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu - ABOVE everything (z-[100]) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            
            {/* Panel - full screen white */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-white"
            >
              {/* Menu header with logo + close */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="The Smile Suite"
                    width={200}
                    height={60}
                    className="h-16 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/20"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Menu content */}
              <div className="flex flex-col px-8 pt-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-xl font-medium text-charcoal hover:text-sage transition-colors border-b border-charcoal/5"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-10 flex flex-col gap-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center text-base py-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book Now
                  </a>
                  <a href={PHONE_HREF} className="btn-secondary text-center text-base py-4">
                    Call {PHONE}
                  </a>
                </div>
                <div className="mt-10 text-center">
                  <LanguageToggle className="text-sage text-base" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Banner */}
      <div className="bg-sage py-12 px-4 text-center">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready for Your Best Smile?
        </h2>
        <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
          Schedule your visit today and experience the difference of personalized, modern dental care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Book Your Visit
          </a>
          <a href="tel:4326920239" className="inline-flex items-center gap-2 text-white font-semibold hover:text-gold-light transition-colors">
            <Phone size={18} />
            (432) 692-0239
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="The Smile Suite"
              width={220}
              height={65}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Gentle, modern dentistry for every stage of life. Led by Dr. Mallory Gonzales in Midland, TX.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thesmilesuite_midland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/TheSmileSuiteMidland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/about", label: "About Dr. Gonzales" },
                { href: "/services", label: "Our Services" },
                { href: "/technology", label: "Our Technology" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy & Website Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light text-sm font-medium transition-colors"
              >
                Book an Appointment →
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Services</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                "Invisalign",
                "Cosmetic Dentistry",
                "Teeth Whitening",
                "Root Canals & Restorative",
                "Emergency Care",
                "Cleanings & Exams",
                "Periodontal Therapy",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Contact</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-sage-light mt-0.5 shrink-0" />
                <div>
                  <a
                    href="https://maps.app.goo.gl/kTuQWY7PNFsQH8fk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    6 Desta Drive, Suite 2700
                    <br />
                    Midland, TX 79705
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-sage-light mt-0.5 shrink-0" />
                <div>
                  <a href="tel:4326920239" className="text-white/80 hover:text-white transition-colors block">
                    New: (432) 692-0239
                  </a>
                  <a href="tel:4326941659" className="text-white/80 hover:text-white transition-colors block">
                    Existing: (432) 694-1659
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-sage-light mt-0.5 shrink-0" />
                <div className="text-white/80">
                  <p>Mon – Thu: 8:00 AM – 3:00 PM</p>
                  <p>Fri – Sun: Closed</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sage-light font-medium text-sm">🌐 Se Habla Español</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} The Smile Suite. All rights reserved.</p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link href="/privacy-policy" className="text-gold/70 hover:text-gold transition-colors">
            Privacy, Cookies & Website Use
          </Link>
          <CookieSettingsButton className="text-gold/70 hover:text-gold transition-colors">
            Cookie Settings
          </CookieSettingsButton>
        </div>
        <p className="mt-1">
          Website by{" "}
          <a
            href="https://automationinnovationlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/60 hover:text-gold transition-colors"
          >
            Automation Innovation Labs
          </a>
        </p>
      </div>
    </footer>
  );
}

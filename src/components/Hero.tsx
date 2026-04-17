"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-claydesta.jpg"
        alt="Claydesta Center atrium — home of The Smile Suite in Midland, TX"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-white/5 blur-sm" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/5 blur-sm" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gold/10 animate-float" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Now Welcoming New Patients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 text-white mb-6"
          >
            Your Family&apos;s Smile{" "}
            <span className="text-gold-light">Starts Here</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/85 leading-relaxed mb-10 max-w-2xl"
          >
            Gentle, modern dentistry for every stage of life. Experience compassionate care with cutting-edge technology in Midland, TX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 active:scale-[0.98] text-sm tracking-wide uppercase group"
            >
              Book Your Visit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:4326920239"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/25 transition-all duration-300 text-sm tracking-wide uppercase"
            >
              <Phone size={16} />
              (432) 692-0239
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-white/60 text-sm"
          >
            ✦ Claydesta Center &nbsp;|&nbsp; ✦ Serving Midland, Odessa & West Texas &nbsp;|&nbsp; ✦ Se Habla Español
          </motion.p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

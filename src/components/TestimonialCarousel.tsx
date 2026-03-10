"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Renee G.",
    text: "The Smile Suite made our first visit amazing! My kids (ages 12 and 4) were so comfortable. The team was on time, friendly, and completely eased my daughter's anxiety. I can't recommend them enough!",
    rating: 5,
  },
  {
    name: "Joan L.",
    text: "Dr. Gonzales and her staff are incredibly kind and thorough. They took the time to explain my treatment plan and followed up to make sure everything went smoothly. I've finally found my dentist!",
    rating: 5,
  },
  {
    name: "Patient Review",
    text: "The most comfortable dental experience I've ever had. The office is beautiful, the technology is impressive, and Dr. Gonzales truly cares about her patients. Five stars across the board!",
    rating: 5,
  },
  {
    name: "Happy Family",
    text: "We drive from Odessa because The Smile Suite is worth it. The bilingual staff made my mother feel right at home, and the kids actually look forward to their appointments!",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-sage-lighter/30 p-8 sm:p-12 min-h-[280px] flex items-center">
        <Quote size={60} className="absolute top-6 left-6 text-sage-lighter/40" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="text-center w-full relative z-10"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-charcoal/80 text-lg sm:text-xl leading-relaxed mb-6 italic font-light">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            {/* Name */}
            <p className="font-semibold text-charcoal text-sm uppercase tracking-wider">
              — {testimonials[current].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-sage-lighter flex items-center justify-center hover:bg-sage-lightest transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} className="text-sage" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-sage w-6" : "bg-sage-lighter hover:bg-sage-light"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-sage-lighter flex items-center justify-center hover:bg-sage-lightest transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} className="text-sage" />
        </button>
      </div>
    </div>
  );
}

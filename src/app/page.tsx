"use client";

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import TechShowcase from "@/components/TechShowcase";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";
import Image from "next/image";
import {
  SmilePlus,
  Sparkles,
  Syringe,
  AlertCircle,
  Sun,
  Users,
  Armchair,
  CreditCard,
  Languages,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

const services = [
  {
    icon: SmilePlus,
    title: "Invisalign",
    description:
      "Straighten your smile discreetly with clear aligners. Custom treatment plans for teens and adults.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Smile design, contouring, and full mouth rehabilitation for the confident smile you deserve.",
  },
  {
    icon: Syringe,
    title: "Botox",
    description:
      "Smooth wrinkles and relieve jaw tension with expert Botox treatments in a comfortable dental setting.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Care",
    description:
      "Same-day urgent dental care when you need it most. Don't wait — call us right away.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description:
      "Professional whitening that delivers dramatic results safely. Brighten your smile in one visit.",
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description:
      "Gentle care for every age, from first visits to senior care. Your whole family under one roof.",
  },
];

const whyUs = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "CBCT, iTero, laser, 3D printer — precision and comfort you can feel.",
  },
  {
    icon: Languages,
    title: "Bilingual Care",
    description: "Our Spanish-speaking team ensures everyone feels understood and welcome.",
  },
  {
    icon: Armchair,
    title: "Comfort First",
    description: "Blankets, music, hot beverages, and a calming environment designed for relaxation.",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "Cherry financing, Apple Pay, and flexible payment options to fit your budget.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Meet Dr. Gonzales */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/photos/dr-mallory-headshot.jpg"
                  alt="Dr. Mallory Gonzales, DDS — The Smile Suite, Midland TX"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 text-center pb-8 px-4">
                  <p className="text-white font-playfair text-2xl font-bold">Dr. Mallory Gonzales</p>
                  <p className="text-white/80 text-sm mt-1">DDS — Family & Cosmetic Dentistry</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-sage text-sm font-semibold uppercase tracking-wider">Your Dentist</span>
              <h2 className="heading-2 text-charcoal mt-2 mb-6">
                Meet Dr. Mallory <span className="text-sage">Gonzales</span>
              </h2>
              <p className="subtitle mb-4">
                A Texas Tech graduate and proud UT Houston DDS, Dr. Gonzales brings advanced training and genuine warmth to every appointment. She&apos;s passionate about Invisalign, smile design, and helping every patient feel confident.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Together with her husband Garner and their two kids, Dr. Gonzales is proud to call Midland home. She built The Smile Suite to be the kind of dental office she&apos;d want for her own family — advanced technology, honest care, and a team that truly listens.
              </p>
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2 group">
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="heading-2 text-charcoal mt-2 mb-4">
              Smiles for Every <span className="text-sage">Stage of Life</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              From routine cleanings to stunning cosmetic transformations, we have the expertise and technology to keep your family smiling.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center mt-10">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2 group">
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Our Technology</span>
            <h2 className="heading-2 text-charcoal mt-2 mb-4">
              Modern Tools, <span className="text-sage">Better Care</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              We invest in the latest dental technology so every visit is faster, more comfortable, and more precise.
            </p>
          </ScrollReveal>

          <TechShowcase />

          <ScrollReveal className="text-center mt-10">
            <Link href="/technology" className="btn-secondary inline-flex items-center gap-2 group">
              Explore Our Technology
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-sage-lightest">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">The Difference</span>
            <h2 className="heading-2 text-charcoal mt-2 mb-4">
              Why Choose <span className="text-sage">The Smile Suite</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <ScrollReveal key={item.title}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-sage" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Patient Love</span>
            <h2 className="heading-2 text-charcoal mt-2 mb-4">
              What Our Patients <span className="text-sage">Are Saying</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* New Patient CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5" />
        <ScrollReveal className="relative text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 bg-gold rounded-full text-white text-sm font-bold shadow-lg shadow-gold/30 mb-6">
            ✨ New Patient Special
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Smile Journey Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            New to The Smile Suite? We&apos;d love to welcome you. Your first visit focuses on comfort, getting to know you, and creating a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book Your First Visit
            </a>
            <a href="tel:4326920239" className="text-white font-semibold hover:text-gold-light transition-colors">
              Or call (432) 692-0239
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

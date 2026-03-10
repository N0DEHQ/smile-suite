import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, Heart, Award, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Mallory Gonzales | The Smile Suite | Midland, TX",
  description:
    "Meet Dr. Mallory Gonzales, DDS. Texas Tech and UT Houston graduate specializing in Invisalign, smile design, and full mouth rehabilitation in Midland, TX.",
};

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

const milestones = [
  { icon: GraduationCap, title: "Texas Tech University", desc: "BS Biology, Magna Cum Laude" },
  { icon: GraduationCap, title: "UT School of Dentistry", desc: "Doctor of Dental Surgery (DDS)" },
  { icon: Award, title: "Continuing Education", desc: "Invisalign, Smile Design, Full Mouth Rehab" },
  { icon: MapPin, title: "Midland, TX", desc: "Proudly serving West Texas communities" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sage-gradient py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-sage/10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <ScrollReveal>
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="heading-1 text-charcoal mt-2 mb-6">
              Caring for Smiles Across <span className="text-sage">West Texas</span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto">
              At The Smile Suite, our mission is simple: gentle, high-quality dental care in a welcoming environment where every patient feels at ease.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dr. Gonzales */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[3/4] rounded-2xl bg-sage-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-playfair text-3xl font-bold">Dr. Mallory Gonzales</p>
                  <p className="text-white/80 mt-1">DDS — Family & Cosmetic Dentistry</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="text-sage text-sm font-semibold uppercase tracking-wider">Your Dentist</span>
              <h2 className="heading-2 text-charcoal mt-2 mb-6">
                Dedicated to <span className="text-sage">Your Care</span>
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Dr. Mallory Gonzales is passionate about helping patients achieve healthy, confident smiles in a comfortable setting. Raised in Boerne, TX, she discovered her love for dentistry early and pursued it with dedication.
                </p>
                <p>
                  After graduating Magna Cum Laude from Texas Tech University with a BS in Biology, she earned her Doctor of Dental Surgery from the University of Texas School of Dentistry at Houston. During dental school, she was active in the American Student Dental Association, Texas Association of Women Dentists, and Psi Omega Dental Fraternity.
                </p>
                <p>
                  Dr. Gonzales is especially passionate about <strong className="text-charcoal">Invisalign, smile design, and full mouth rehabilitation</strong>, investing significant time in continuing education to stay at the forefront of modern dentistry.
                </p>
                <p>
                  Her philosophy is simple: every patient deserves to feel comfortable, heard, and confident in their care. She takes the time to build genuine relationships and create treatment plans tailored to individual needs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Education & Training</span>
            <h2 className="heading-2 text-charcoal mt-2">
              Dr. Gonzales&apos; <span className="text-sage">Journey</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-sage-lighter/30">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{item.title}</h3>
                    <p className="text-charcoal/60 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Side */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-sage text-sm font-semibold uppercase tracking-wider">Beyond the Office</span>
              <h2 className="heading-2 text-charcoal mt-2 mb-6">
                A Midland <span className="text-sage">Family</span>
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Dr. Gonzales and her husband Garner — a Midland native — met at Texas Tech and are proud to call West Texas home. Together with their two children, Leighton and Cooper, and their two dogs, they enjoy family time, traveling, and ranch weekends.
                </p>
                <p>
                  This deep connection to the community drives everything about The Smile Suite. When you visit, you&apos;re not just a patient — you&apos;re a neighbor, and you&apos;ll be treated like family.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="aspect-video rounded-2xl bg-mint-light flex items-center justify-center">
                <Heart size={48} className="text-sage/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-sage-lightest">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Our Promise</span>
            <h2 className="heading-2 text-charcoal mt-2 mb-8">
              Safe, Gentle, and <span className="text-sage">Effective</span>
            </h2>
            <blockquote className="font-playfair text-xl sm:text-2xl text-charcoal/80 italic leading-relaxed mb-8">
              &ldquo;We understand that visiting the dentist can bring anxiety, which is why we focus on comfort, compassion, and clear communication. Every patient is treated with kindness and respect, and we&apos;re committed to delivering results you can trust.&rdquo;
            </blockquote>
            <p className="text-charcoal/60 mb-8">
              Building lasting relationships with our patients is at the heart of everything we do.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 group">
              Start Your Smile Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">The Team</span>
            <h2 className="heading-2 text-charcoal mt-2 mb-4">
              Friendly Faces, <span className="text-sage">Expert Care</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Our bilingual team of dental professionals is dedicated to making every visit comfortable, efficient, and even enjoyable.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Team Member", "Team Member", "Team Member", "Team Member"].map((name, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="aspect-square rounded-2xl bg-sage-lightest flex items-center justify-center">
                  <p className="text-sage/40 text-sm font-medium">Photo Coming Soon</p>
                </div>
                <p className="font-medium text-charcoal text-center mt-3 text-sm">{name}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

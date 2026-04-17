import { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, Award, MapPin, ArrowRight } from "lucide-react";

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
      <section className="relative min-h-[68vh] sm:min-h-[74vh] flex items-center overflow-hidden px-4">
        <Image
          src="/images/about-hero-video-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />

        <video
          className="absolute inset-0 h-full w-full object-cover scale-[1.03] brightness-[0.88] saturate-[0.88] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/about-hero-video-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/about-hero-loop.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,245,0.14),rgba(250,248,245,0.24)_24%,rgba(240,244,239,0.72)_72%,rgba(240,244,239,0.92)_100%)] backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.16),transparent_30%),radial-gradient(circle_at_top_left,rgba(125,155,120,0.16),transparent_36%)]" />
        <div className="absolute top-10 right-10 h-48 w-48 rounded-full bg-sage/10 blur-2xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto w-full py-20 sm:py-28 text-center">
          <ScrollReveal className="mx-auto max-w-4xl">
            <span className="inline-block rounded-full border border-charcoal/10 bg-charcoal px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-charcoal/15 mb-6">
              About Us
            </span>
            <div className="rounded-[2rem] border border-[#e9e1d8] bg-cream p-8 sm:p-10 lg:p-12 shadow-[0_24px_80px_rgba(45,52,54,0.16)]">
              <h1 className="heading-1 text-charcoal mb-6">
                Caring for Smiles Across <span className="text-sage-dark">West Texas</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-charcoal/80 leading-relaxed">
                At The Smile Suite, our mission is simple: gentle, high-quality dental care in a welcoming environment where every patient feels at ease.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Dr. Gonzales */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[3/4] rounded-2xl relative overflow-hidden">
                <Image
                  src="/images/photos/dr-mallory-headshot.jpg"
                  alt="Dr. Mallory Gonzales, DDS — The Smile Suite, Midland TX"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            <ScrollReveal className="lg:col-span-5 h-full">
              <div className="grid h-full gap-5 lg:gap-6 lg:grid-rows-2">
                <div className="min-h-[240px] h-full rounded-[2rem] border border-sage-lighter/35 bg-white p-6 sm:p-7 lg:p-8 shadow-sm flex flex-col justify-center">
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
                </div>

                <div className="min-h-[240px] h-full rounded-[2rem] border border-sage-lighter/40 bg-cream p-6 sm:p-7 lg:p-8 shadow-sm flex flex-col justify-center">
                  <span className="text-sage text-xs font-semibold uppercase tracking-[0.18em]">Thoughtful Details</span>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mt-3 mb-3">
                    A space designed to feel warm, calm, and elevated
                  </h3>
                  <p className="text-charcoal/65 leading-relaxed text-sm sm:text-base">
                    From the welcoming front office to the small branded touches throughout the suite, every detail is meant to make patients feel cared for the moment they walk in.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7 h-full">
              <div className="grid h-full gap-5 lg:gap-6 lg:grid-rows-[minmax(0,1.18fr)_minmax(0,0.92fr)]">
                <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0 rounded-[2rem] overflow-hidden shadow-sm">
                  <Image
                    src="/images/photos/dr-patient-lobby.jpg"
                    alt="Dr. Gonzales chatting with a patient in the lobby at The Smile Suite"
                    fill
                    className="object-cover object-[center_26%]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>

                <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-0 rounded-[2rem] overflow-hidden shadow-sm">
                  <Image
                    src="/images/photos/about-front-desk-office.jpg"
                    alt="Smile Suite front office team working at the reception desk"
                    fill
                    className="object-cover object-[center_42%]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-cream">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/photos/team-lobby.jpg", alt: "Smile Suite dental team members in the lobby" },
              { src: "/images/photos/reception-staff-1.jpg", alt: "Smile Suite front desk staff" },
              { src: "/images/photos/consultation-patient-monitor.jpg", alt: "Smile Suite team member consulting with a patient beside a monitor" },
              { src: "/images/photos/dr-desk.jpg", alt: "Dr. Mallory Gonzales smiling while reviewing patient information at her desk" },
              { src: "/images/photos/reception-staff-2.jpg", alt: "Smile Suite patient coordinator" },
              { src: "/images/photos/front-desk-team.jpg", alt: "Smile Suite front office team welcoming patients" },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
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

    </>
  );
}

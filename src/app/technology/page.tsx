import { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Image from "next/image";
import { Scan, MonitorSmartphone, Zap, Printer, ShieldCheck, Eye, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Technology | CBCT, iTero, Laser Dentistry | The Smile Suite Midland TX",
  description:
    "Experience cutting-edge dental technology at The Smile Suite: CBCT 3D scanner, iTero digital scanner, laser dentistry, 3D printing, and more. Midland, TX.",
};

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

const technologies = [
  {
    icon: Scan,
    name: "CBCT 3D Scanner",
    tagline: "See the Full Picture",
    photo: "/images/photos/cbct-scanner.jpg",
    photoAlt: "CBCT 3D scanner inside The Smile Suite imaging room",
    photoClassName: "object-cover object-[center_38%]",
    description:
      "Our Cone Beam Computed Tomography (CBCT) scanner creates detailed 3D images of your teeth, jaw, and surrounding structures in seconds. This advanced imaging helps Dr. Gonzales plan treatments with pinpoint accuracy — from implant placement to complex oral surgery.",
    benefits: [
      "Complete 3D view of your dental anatomy",
      "Faster, more accurate diagnosis",
      "Precise surgical planning",
      "Lower radiation than hospital CT scans",
    ],
  },
  {
    icon: MonitorSmartphone,
    name: "iTero Digital Scanner",
    tagline: "No More Messy Impressions",
    photo: "/images/photos/operatory-tech.jpg",
    photoAlt: "Modern treatment room with digital scanner and monitor at The Smile Suite",
    photoClassName: "object-cover object-[center_35%]",
    description:
      "Say goodbye to uncomfortable impression trays. The iTero digital scanner captures a perfect 3D model of your teeth in minutes using a small, handheld wand. It's essential for Invisalign treatment, crown fittings, and smile design — and you can even see a preview of your new smile on screen.",
    benefits: [
      "Comfortable and fast scanning",
      "Instant 3D model of your teeth",
      "Invisalign Outcome Simulator",
      "Higher accuracy than traditional impressions",
    ],
  },
  {
    icon: Zap,
    name: "Laser Dentistry",
    tagline: "Gentler, Faster Healing",
    photo: "/images/photos/chairside-tools.jpg",
    photoAlt: "Chairside dental instruments prepared for precise treatment at The Smile Suite",
    photoClassName: "object-cover object-center",
    description:
      "Dental lasers allow us to perform a wide range of procedures with minimal discomfort and faster recovery. From gum therapy to soft tissue treatments, laser dentistry means less swelling, less bleeding, and quicker healing compared to traditional methods.",
    benefits: [
      "Minimally invasive procedures",
      "Reduced need for anesthesia",
      "Faster healing and less swelling",
      "Greater precision and comfort",
    ],
  },
  {
    icon: Printer,
    name: "In-Office 3D Printer",
    tagline: "Same-Day Solutions",
    photo: "/images/photos/staff-lab-work.jpg",
    photoAlt: "Dental staff working with retainer mold at The Smile Suite lab",
    photoClassName: "object-cover object-[center_34%]",
    description:
      "Our in-office 3D printer can create custom dental models, surgical guides, and temporary restorations right here — no waiting weeks for an outside lab. This means faster treatment, fewer appointments, and solutions designed specifically for you.",
    benefits: [
      "Custom models printed on-site",
      "Reduced wait times",
      "Surgical guides for precise treatment",
      "Cost-effective solutions",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Digital X-Rays",
    tagline: "Safer, Clearer Imaging",
    photo: "/images/photos/digital-xray-monitor.jpg",
    photoAlt: "Panoramic dental X-ray displayed on a monitor at The Smile Suite",
    photoClassName: "object-cover object-center",
    description:
      "Our digital X-ray system uses up to 80% less radiation than traditional film X-rays while producing instant, crystal-clear images. Results appear on screen in seconds, so we can review them with you in real time and explain exactly what we see.",
    benefits: [
      "Up to 80% less radiation exposure",
      "Instant, high-resolution results",
      "Easy side-by-side comparison over time",
      "Environmentally friendly (no chemicals)",
    ],
  },
  {
    icon: Eye,
    name: "Intraoral Cameras",
    tagline: "See What We See",
    photo: "/images/photos/patient-chair.jpg",
    photoAlt: "Patient seated comfortably in a treatment room during imaging at The Smile Suite",
    photoClassName: "object-cover object-[58%_32%]",
    description:
      "Our high-definition intraoral cameras capture detailed images of every corner of your mouth and display them on a screen right next to you. This helps you understand exactly what's happening with your dental health and empowers you to make informed decisions about your care.",
    benefits: [
      "HD images of your teeth and gums",
      "Real-time patient education",
      "Better understanding of treatment needs",
      "Complete documentation of your dental health",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[68vh] sm:min-h-[74vh] flex items-center overflow-hidden px-4">
        <Image
          src="/images/photos/technology-hero-tools.jpg"
          alt="Modern dental handpieces and technology equipment at The Smile Suite"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%]"
          quality={90}
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,39,42,0.18),rgba(34,39,42,0.12)_28%,rgba(248,244,238,0.70)_76%,rgba(255,255,255,0.92)_100%)]" />
        <div className="absolute top-10 left-10 h-44 w-44 rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto w-full py-20 sm:py-28 text-center">
          <ScrollReveal className="mx-auto max-w-4xl">
            <span className="inline-block rounded-full border border-charcoal/10 bg-charcoal px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-charcoal/15 mb-6">
              Our Technology
            </span>
            <div className="rounded-[2rem] border border-[#e9e1d8] bg-cream p-8 sm:p-10 lg:p-12 shadow-[0_24px_80px_rgba(45,52,54,0.16)]">
              <h1 className="heading-1 text-charcoal mt-2 mb-6">
                Technology That Puts <span className="text-sage">You First</span>
              </h1>
              <p className="subtitle max-w-2xl mx-auto">
                We invest in the latest dental technology so every visit is faster, more comfortable, and more precise. Here&apos;s what sets The Smile Suite apart.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Tech sections */}
      {technologies.map((tech, i) => (
        <section key={tech.name} className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="aspect-[4/5] sm:aspect-[5/4] rounded-2xl relative overflow-hidden group">
                  <Image
                    src={tech.photo}
                    alt={tech.photoAlt}
                    fill
                    className={`${tech.photoClassName} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/5 transition-colors" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
                    <tech.icon size={20} className="text-sage" />
                  </div>
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">{tech.tagline}</span>
                </div>
                <h2 className="heading-3 text-charcoal mb-4">{tech.name}</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">{tech.description}</p>
                
                <h4 className="text-sm font-semibold text-sage uppercase tracking-wider mb-3">What This Means For You</h4>
                <ul className="space-y-2.5">
                  {tech.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-sage mt-0.5 shrink-0" />
                      <span className="text-charcoal/70 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Summary */}
      <section className="section-padding bg-sage-lightest">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-2 text-charcoal mb-6">
              Why Technology <span className="text-sage">Matters</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto mb-10">
              Most dental offices in West Texas don&apos;t invest in this level of technology. At The Smile Suite, we believe you deserve the best — more accurate diagnoses, more comfortable treatments, and better results.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "80%", label: "Less radiation with digital X-rays" },
              { stat: "3D", label: "Imaging for precision treatment" },
              { stat: "Same Day", label: "Solutions with in-office 3D printing" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-playfair text-4xl font-bold text-sage mb-2">{item.stat}</p>
                  <p className="text-charcoal/60 text-sm">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <ScrollReveal className="relative text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-white/80 text-lg mb-8">
            See our technology in action. Schedule a visit and discover what modern dental care feels like.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2 group">
            Book Your Visit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}

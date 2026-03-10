import { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
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
      <section className="relative bg-sage-gradient py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage/10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <ScrollReveal>
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Our Technology</span>
            <h1 className="heading-1 text-charcoal mt-2 mb-6">
              Technology That Puts <span className="text-sage">You First</span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto">
              We invest in the latest dental technology so every visit is faster, more comfortable, and more precise. Here&apos;s what sets The Smile Suite apart.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech sections */}
      {technologies.map((tech, i) => (
        <section key={tech.name} className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl bg-sage-lightest flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-sage/5 group-hover:bg-sage/10 transition-colors" />
                  <tech.icon size={80} className="text-sage/20 group-hover:text-sage/30 transition-colors" />
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

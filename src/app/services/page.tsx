import { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import {
  SmilePlus,
  Sparkles,
  AlertCircle,
  Sun,
  Stethoscope,
  HeartPulse,
  CircleDot,
  Scissors,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services | Invisalign, Cosmetic Dentistry, Whitening | The Smile Suite Midland TX",
  description:
    "Comprehensive dental services in Midland, TX: Invisalign, cosmetic dentistry, teeth whitening, emergency care, periodontal therapy, and more. Book today!",
};

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

const serviceCategories = [
  {
    category: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic treatments.",
    services: [
      {
        icon: Sun,
        name: "Teeth Whitening",
        description:
          "Achieve a dramatically brighter smile with professional-grade whitening. Our in-office treatments deliver results far beyond anything you can get over the counter — safely and comfortably in just one visit.",
        benefits: ["Immediate results", "Safe for enamel", "Long-lasting brightness", "Custom treatment plans"],
      },

      {
        icon: Sparkles,
        name: "Smile Design & Contouring",
        description:
          "Custom smile makeovers that combine the art of aesthetics with dental science. From subtle reshaping to comprehensive full mouth rehabilitation, we create smiles that look natural and feel amazing.",
        benefits: ["Personalized treatment plans", "Digital smile preview", "Full mouth rehabilitation", "Natural aesthetics"],
      },
    ],
  },
  {
    category: "Orthodontics",
    description: "Straighten your smile with modern, discreet solutions.",
    services: [
      {
        icon: SmilePlus,
        name: "Invisalign Clear Aligners",
        description:
          "Straighten your teeth without the look and hassle of traditional braces. Invisalign uses custom-made, virtually invisible aligners that you can remove to eat, brush, and floss. Dr. Gonzales has extensive training in Invisalign treatment for teens and adults.",
        benefits: ["Virtually invisible", "Removable for eating & cleaning", "Comfortable fit", "Faster results than traditional braces", "Customized with iTero digital scanning"],
      },
    ],
  },
  {
    category: "General & Preventive",
    description: "The foundation of lasting oral health for your whole family.",
    services: [
      {
        icon: Stethoscope,
        name: "Cleanings & Exams",
        description:
          "Regular cleanings and comprehensive exams are the foundation of a healthy smile. Our team uses digital X-rays (80% less radiation), intraoral cameras, and thorough assessments to catch issues early and keep your smile on track.",
        benefits: ["Thorough tartar & plaque removal", "Digital X-rays", "Early detection of issues", "Personalized hygiene education"],
      },
      {
        icon: AlertCircle,
        name: "Emergency Dentistry",
        description:
          "Dental emergencies don't wait — and neither do we. If you're experiencing severe pain, a broken tooth, or any urgent dental issue, call us immediately for same-day care.",
        benefits: ["Same-day appointments", "Pain relief priority", "Comprehensive emergency assessment", "Follow-up care planning"],
      },
    ],
  },
  {
    category: "Restorative",
    description: "Repair, restore, and rebuild your healthiest smile.",
    services: [
      {
        icon: HeartPulse,
        name: "Periodontal Therapy",
        description:
          "Gum disease affects millions of Americans and can lead to serious health issues if untreated. Our targeted periodontal therapy uses advanced techniques including laser dentistry to restore gum health and protect your smile.",
        benefits: ["Laser-assisted treatment", "Deep cleaning & scaling", "Ongoing monitoring", "Connection to overall health"],
      },
      {
        icon: CircleDot,
        name: "Root Canal Therapy",
        description:
          "Modern root canal therapy is nothing like the old days. With advanced technology and gentle technique, we can save your natural tooth and eliminate infection with minimal discomfort.",
        benefits: ["Save your natural tooth", "Advanced pain management", "Fast recovery", "Precise digital imaging"],
      },
      {
        icon: Scissors,
        name: "Oral Surgery",
        description:
          "When surgical intervention is needed, you can trust our team to deliver precise, comfortable care. From extractions to more complex procedures, we use the latest technology for optimal outcomes.",
        benefits: ["CBCT-guided precision", "Comfortable sedation options", "Fast healing protocols", "Comprehensive follow-up"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sage-gradient py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-sage/10 -mb-20 -mr-20" />
        <div className="max-w-7xl mx-auto text-center relative">
          <ScrollReveal>
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="heading-1 text-charcoal mt-2 mb-6">
              Comprehensive Care for <span className="text-sage">Every Smile</span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto mb-8">
              From preventive checkups to stunning cosmetic transformations, The Smile Suite offers the full spectrum of modern dental care — all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 group">
                Book an Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:4326920239" className="inline-flex items-center gap-2 text-sage-dark font-medium hover:text-sage transition-colors">
                <Phone size={16} />
                (432) 692-0239
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((cat, catIdx) => (
        <section
          key={cat.category}
          className={`section-padding ${catIdx % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <span className="text-sage text-sm font-semibold uppercase tracking-wider">{cat.category}</span>
              <h2 className="heading-2 text-charcoal mt-2 mb-3">{cat.category}</h2>
              <p className="subtitle">{cat.description}</p>
            </ScrollReveal>

            <StaggerContainer className="space-y-8">
              {cat.services.map((service) => (
                <StaggerItem key={service.name}>
                  <div className="bg-white rounded-2xl p-8 sm:p-10 border border-sage-lighter/30 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                            <service.icon size={24} className="text-sage" />
                          </div>
                          <h3 className="font-playfair text-2xl font-bold text-charcoal">{service.name}</h3>
                        </div>
                        <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
                      </div>
                      <div className="lg:w-72 shrink-0">
                        <h4 className="text-sm font-semibold text-sage uppercase tracking-wider mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm text-charcoal/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-4 text-sage text-sm font-medium hover:text-sage-dark transition-colors"
                        >
                          Book This Service →
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <ScrollReveal className="relative text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            No worries — book a consultation and Dr. Gonzales will create a personalized treatment plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Schedule a Consultation
            </a>
            <a href="tel:4326920239" className="text-white font-semibold hover:text-gold-light transition-colors">
              Call (432) 692-0239
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

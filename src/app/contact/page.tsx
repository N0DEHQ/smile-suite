import { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | The Smile Suite | Midland, TX Dentist",
  description:
    "Contact The Smile Suite in Midland, TX. New patients call (432) 692-0239. Located at 6 Desta Drive, Suite 2700 in the Claydesta Center. Book your visit today!",
};

const BOOKING_URL = "https://www.smilemidland.com/contact-us/";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sage-gradient py-20 sm:py-28 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <ScrollReveal>
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h1 className="heading-1 text-charcoal mt-2 mb-6">
              We&apos;d Love to <span className="text-sage">Hear From You</span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto">
              Ready to start your smile journey? Have a question? Reach out — our friendly team is here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Office Photo Strip */}
      <section className="bg-white pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/photos/office-lobby.jpg"
                  alt="Welcoming lobby and hallway at The Smile Suite dental office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/photos/reception-staff-3.jpg"
                  alt="Friendly front desk staff at The Smile Suite ready to help"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="heading-3 text-charcoal mb-2">Send Us a Message</h2>
                <p className="text-charcoal/60 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="space-y-8">
                  {/* New Patient */}
                  <div className="bg-sage-lightest rounded-2xl p-8 border border-sage-lighter/50">
                    <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                      🌟 New Patient?
                    </h3>
                    <p className="text-charcoal/70 text-sm mb-4">
                      We welcome new patients and make your first visit comfortable and stress-free. Call us to get started!
                    </p>
                    <a
                      href="tel:4326920239"
                      className="btn-primary w-full flex items-center justify-center gap-2 !text-xs"
                    >
                      <Phone size={14} />
                      (432) 692-0239
                    </a>
                    <div className="mt-3 text-center">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage text-sm font-medium hover:text-sage-dark transition-colors"
                      >
                        Or book online →
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={20} className="text-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal text-sm">Our Location</h4>
                        <p className="text-charcoal/60 text-sm mt-1">
                          6 Desta Drive, Suite 2700
                          <br />
                          Midland, TX 79705
                        </p>
                        <p className="text-charcoal/50 text-xs mt-1">Claydesta Center — easy access with free parking</p>
                        <a
                          href="https://maps.app.goo.gl/kTuQWY7PNFsQH8fk8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sage text-sm font-medium mt-2 hover:text-sage-dark transition-colors"
                        >
                          <Navigation size={14} />
                          Get Directions
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone size={20} className="text-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal text-sm">Phone</h4>
                        <a href="tel:4326920239" className="text-charcoal/70 text-sm hover:text-sage transition-colors block mt-1">
                          New Patients: (432) 692-0239
                        </a>
                        <a href="tel:4326941659" className="text-charcoal/70 text-sm hover:text-sage transition-colors block">
                          Existing Patients: (432) 694-1659
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock size={20} className="text-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal text-sm">Office Hours</h4>
                        <div className="mt-1 space-y-0.5 text-sm text-charcoal/70">
                          <div className="flex justify-between gap-8">
                            <span>Monday</span><span>8:00 AM – 3:00 PM</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Tuesday</span><span>8:00 AM – 3:00 PM</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Wednesday</span><span>8:00 AM – 3:00 PM</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Thursday</span><span>8:00 AM – 3:00 PM</span>
                          </div>
                          <div className="flex justify-between gap-8 text-charcoal/40">
                            <span>Fri – Sun</span><span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="bg-gold/10 rounded-xl p-5 border border-gold/20">
                    <p className="text-charcoal/80 text-sm font-medium">
                      🌐 <strong>Se Habla Español</strong> — Our bilingual team is happy to assist you in Spanish.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-sage-lightest">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-sage-lighter/50 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.5!2d-102.0779!3d31.9973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU5JzUwLjMiTiAxMDLCsDA0JzQwLjQiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Smile Suite Location"
                className="w-full"
              />
            </div>
            <p className="text-center text-charcoal/50 text-sm mt-4">
              Located in the Claydesta Center — 6 Desta Drive, Suite 2700, Midland, TX 79705
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="bg-cream-dark rounded-2xl p-8 sm:p-12 border border-charcoal/5">
              <h2 className="heading-3 text-charcoal mb-3">
                🚨 Dental Emergency?
              </h2>
              <p className="text-charcoal/70 mb-6 max-w-lg mx-auto">
                If you&apos;re experiencing severe pain, a broken tooth, or any urgent dental issue — don&apos;t wait. Call us immediately for same-day care.
              </p>
              <a
                href="tel:4326920239"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Call Now: (432) 692-0239
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

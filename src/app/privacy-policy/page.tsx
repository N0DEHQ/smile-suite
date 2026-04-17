import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Cookie, FileText, Lock, CircleAlert, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const PHONE = "(432) 692-0239";
const PHONE_HREF = "tel:4326920239";
const EMAIL = "hello@smilemidland.com";
const ADDRESS = "6 Desta Drive, Suite 2700, Midland, TX 79705";

export const metadata: Metadata = {
  title: "Privacy Policy | The Smile Suite",
  description:
    "Read The Smile Suite website privacy policy, cookie notice, and website use terms for patients and visitors.",
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Privacy",
    text: "We only collect information you choose to share, plus limited technical data needed to operate and protect the site.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    text: "This website and connected tools may use necessary cookies or similar technologies for security, performance, and functionality.",
  },
  {
    icon: FileText,
    title: "Website Use",
    text: "Site content is for general informational use and does not replace dental advice, diagnosis, or emergency care.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-sage-gradient opacity-60" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage shadow-sm">
              Privacy, Cookies & Website Use
            </span>
            <h1 className="heading-1 text-charcoal mt-6 mb-6">
              Website Policy for <span className="text-sage">The Smile Suite</span>
            </h1>
            <p className="subtitle max-w-2xl">
              This page explains how we handle information submitted through this website, how cookies and similar technologies may be used, and the basic terms for using this site.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-sage/15 bg-cream p-7 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-5">
                    <item.icon className="text-sage" size={26} />
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal mb-3">{item.title}</h2>
                  <p className="text-charcoal/70 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sage-lightest">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="text-sage mt-1" size={24} />
                <div>
                  <h2 className="heading-3 text-charcoal mb-3">1. Information We May Collect</h2>
                  <p className="text-charcoal/70 leading-relaxed mb-4">
                    When you use this website, we may collect information you voluntarily provide, including your name, phone number, email address, preferred contact method, service interest, and any message you send through a contact or appointment request form.
                  </p>
                  <p className="text-charcoal/70 leading-relaxed">
                    We may also receive limited technical information such as device type, browser type, IP address, pages visited, and referral data through basic hosting, security, or performance tools.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <h2 className="heading-3 text-charcoal mb-4">2. How We Use Information</h2>
              <ul className="space-y-3 text-charcoal/70 leading-relaxed list-disc pl-6">
                <li>Respond to questions, appointment requests, and patient inquiries.</li>
                <li>Communicate about scheduling, office information, and requested follow-up.</li>
                <li>Operate, maintain, and improve the website experience.</li>
                <li>Protect the website against spam, misuse, fraud, or security issues.</li>
                <li>Meet legal, regulatory, or business recordkeeping obligations when required.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <h2 className="heading-3 text-charcoal mb-4">3. Cookies and Similar Technologies</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                This website may use cookies or similar technologies that are necessary for site functionality, security, and performance. If enabled by the visitor, functional cookies may also support features such as language preference and embedded map content. Third-party tools connected to the site, such as hosting, maps, embedded content, scheduling tools, or social platforms, may also place their own cookies when you interact with them.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                You can usually control cookies through your browser settings. Blocking some cookies may affect how certain parts of the site work.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                We do not present this website as an advertising tracker. If tracking or analytics features are expanded later, this page should be updated to reflect that. Visitors can revisit cookie preferences later through the Cookie Settings control in the website footer.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <h2 className="heading-3 text-charcoal mb-4">4. Dental Privacy and Health Information</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                This website policy applies to information collected through the website. It does not replace any separate patient Notice of Privacy Practices that may apply to protected health information created or maintained during treatment, payment, or healthcare operations.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                For your privacy, please do not send highly sensitive medical, insurance, or financial information through general website forms unless you have been specifically directed to use a secure channel.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CircleAlert className="text-gold mt-1" size={24} />
                <div>
                  <h2 className="heading-3 text-charcoal mb-3">5. Website Use Terms</h2>
                  <ul className="space-y-3 text-charcoal/70 leading-relaxed list-disc pl-6">
                    <li>This site is provided for general informational and marketing purposes only.</li>
                    <li>Website content does not constitute medical advice and should not be relied upon as a substitute for professional dental evaluation or treatment.</li>
                    <li>If you are experiencing a dental emergency, call the office directly or seek emergency care right away. Do not rely on website forms for urgent situations.</li>
                    <li>You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or copy content for commercial use without permission.</li>
                    <li>All website text, design, branding, and media are owned by The Smile Suite or used with permission unless otherwise stated.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <h2 className="heading-3 text-charcoal mb-4">6. Third-Party Links</h2>
              <p className="text-charcoal/70 leading-relaxed">
                This website may link to third-party services such as maps, booking tools, social media pages, or other external websites. Once you leave this website, those third parties control their own content, privacy practices, and terms.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl bg-white border border-sage/15 p-8 sm:p-10 shadow-sm">
              <h2 className="heading-3 text-charcoal mb-4">7. Policy Updates</h2>
              <p className="text-charcoal/70 leading-relaxed">
                We may update this page from time to time as the website evolves, new tools are added, or legal requirements change. Continued use of the website after updates means you accept the revised terms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-[2rem] bg-charcoal text-white p-8 sm:p-10 lg:p-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-4">Questions About This Policy?</h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
                If you have questions about this website policy or need help contacting the office, reach out using the information below.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href={PHONE_HREF} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 text-gold mb-2">
                    <Phone size={18} />
                    <span className="text-sm uppercase tracking-wider font-semibold">Phone</span>
                  </div>
                  <p className="text-white text-lg font-semibold">{PHONE}</p>
                </a>
                <a href={`mailto:${EMAIL}`} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 text-gold mb-2">
                    <ShieldCheck size={18} />
                    <span className="text-sm uppercase tracking-wider font-semibold">Email</span>
                  </div>
                  <p className="text-white text-lg font-semibold break-all">{EMAIL}</p>
                </a>
              </div>
              <p className="text-white/60 text-sm mt-6">The Smile Suite, {ADDRESS}</p>
              <div className="mt-8">
                <Link href="/contact" className="btn-gold">
                  Contact Our Office
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

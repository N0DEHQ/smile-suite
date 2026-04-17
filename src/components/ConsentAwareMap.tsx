"use client";

import { useEffect, useState } from "react";
import { MapPinned, ShieldCheck } from "lucide-react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  createCookieConsent,
  readStoredCookieConsent,
  writeStoredCookieConsent,
} from "@/lib/cookie-consent";

type ConsentAwareMapProps = {
  src: string;
  title: string;
  directionsHref: string;
};

export default function ConsentAwareMap({
  src,
  title,
  directionsHref,
}: ConsentAwareMapProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(Boolean(readStoredCookieConsent()?.functional));
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);
    };
  }, []);

  const enableMap = () => {
    const currentConsent = readStoredCookieConsent();

    writeStoredCookieConsent(
      createCookieConsent({
        functional: true,
        analytics: currentConsent?.analytics ?? false,
      })
    );
  };

  if (enabled) {
    return (
      <div className="rounded-2xl overflow-hidden border border-sage-lighter/50 bg-white">
        <iframe
          src={src}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-sage-lighter/60 bg-white p-8 sm:p-10 text-center shadow-sm">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sage/10 text-sage">
        <MapPinned size={28} />
      </div>
      <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
        Enable the interactive map
      </h3>
      <p className="mx-auto max-w-2xl text-charcoal/70 leading-relaxed mb-6">
        The map uses third-party content from Google. Enable functional cookies if you want to load it here on the page.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button type="button" onClick={enableMap} className="btn-primary">
          Enable Map
        </button>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Open Directions
        </a>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs text-charcoal/60">
        <ShieldCheck size={14} className="text-sage" />
        Functional cookies can also be managed later from the footer.
      </div>
    </div>
  );
}

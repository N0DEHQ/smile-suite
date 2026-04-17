"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_SETTINGS_EVENT,
  createCookieConsent,
  readStoredCookieConsent,
  writeStoredCookieConsent,
} from "@/lib/cookie-consent";

type PreferenceState = {
  functional: boolean;
  analytics: boolean;
};

const DEFAULT_PREFERENCES: PreferenceState = {
  functional: false,
  analytics: false,
};

const ACCEPT_PREFERENCES: PreferenceState = {
  functional: true,
  analytics: false,
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<PreferenceState>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const syncConsentFromStorage = () => {
      const storedConsent = readStoredCookieConsent();

      if (storedConsent) {
        setPreferences({
          functional: storedConsent.functional,
          analytics: storedConsent.analytics,
        });
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const syncFrame = window.requestAnimationFrame(syncConsentFromStorage);

    const openSettings = () => {
      const latestConsent = readStoredCookieConsent();

      if (latestConsent) {
        setPreferences({
          functional: latestConsent.functional,
          analytics: latestConsent.analytics,
        });
      }

      setIsVisible(true);
      setIsCustomizing(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);

    return () => {
      window.cancelAnimationFrame(syncFrame);
      window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    };
  }, []);

  const saveConsent = (nextPreferences: PreferenceState) => {
    const consent = createCookieConsent(nextPreferences);

    writeStoredCookieConsent(consent);
    setPreferences(nextPreferences);
    setIsVisible(false);
    setIsCustomizing(false);
  };

  const updatePreference = (key: keyof PreferenceState) => {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const closeCustomizer = () => {
    const storedConsent = readStoredCookieConsent();

    if (storedConsent) {
      setPreferences({
        functional: storedConsent.functional,
        analytics: storedConsent.analytics,
      });
      setIsVisible(false);
    }

    setIsCustomizing(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[100] px-3 sm:px-6 lg:px-8" data-cookie-banner="true">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-sage/20 bg-white/95 shadow-[0_24px_80px_rgba(45,52,54,0.16)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(125,155,120,0.12),transparent_36%)]" />
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        {!isCustomizing ? (
          <div
            className="relative max-h-[85svh] overflow-y-auto overscroll-contain touch-pan-y p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:max-h-none sm:p-6"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div className="max-w-3xl">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                  Cookie Notice
                </div>
                <p className="text-[13px] leading-6 text-charcoal/75 sm:text-[15px] sm:leading-7">
                  The Smile Suite uses one necessary cookie to remember your privacy choices. If you tap Accept, we can also enable functional cookies for features like language preference and embedded maps. You can{" "}
                  <Link
                    href="/privacy-policy#cookies"
                    className="font-semibold text-charcoal underline decoration-sage/35 underline-offset-4 transition-colors hover:text-sage"
                  >
                    read more here
                  </Link>
                  .
                </p>
              </div>

              <div className="sticky bottom-[-1px] -mx-4 mt-1 border-t border-sage/10 bg-white/95 px-4 pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:static sm:mx-0 sm:mt-0 sm:min-w-[280px] sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-0 sm:pb-0">
                <div className="grid grid-cols-2 gap-2 sm:w-full sm:grid-cols-1 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => saveConsent(ACCEPT_PREFERENCES)}
                    className="btn-primary w-full !px-5 !py-2.5 !text-[10px] sm:!px-6 sm:!py-3 sm:!text-[11px]"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCustomizing(true)}
                    className="w-full rounded-full border border-sage/20 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-sage/35 hover:bg-sage/5 sm:px-6 sm:py-3 sm:text-[11px]"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            data-cookie-customizer="true"
            className="relative max-h-[85svh] overflow-y-auto overscroll-contain touch-pan-y p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:max-h-[min(85svh,48rem)] sm:p-6"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                  Manage Cookies
                </div>
                <h3 className="font-playfair text-2xl font-bold tracking-[-0.03em] text-charcoal sm:text-[2rem]">
                  Choose what The Smile Suite can use
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/75 sm:text-[15px]">
                  Strictly necessary storage stays on because it remembers your privacy choice and supports basic site behavior. Functional cookies enable optional tools like language preference and embedded maps.
                </p>
                <p className="mt-2 text-xs leading-6 text-charcoal/55 sm:text-sm">
                  This site does not currently use advertising trackers, and analytics stays off unless it is explicitly enabled later.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-sage/15 bg-cream p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Strictly Necessary</div>
                      <h4 className="mt-2 font-playfair text-xl font-bold text-charcoal">Always active</h4>
                      <p className="mt-2 text-sm leading-7 text-charcoal/70">
                        Used to remember your cookie settings and support core website behavior.
                      </p>
                    </div>
                    <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal">
                      Required
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-sage/15 bg-cream p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Functional</div>
                      <h4 className="mt-2 font-playfair text-xl font-bold text-charcoal">Translation and embedded tools</h4>
                      <p className="mt-2 text-sm leading-7 text-charcoal/70">
                        Supports optional features such as Spanish language preference and the embedded Google map on the contact page.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updatePreference("functional")}
                      aria-pressed={preferences.functional}
                      className={`relative inline-flex h-7 w-14 shrink-0 items-center rounded-full border transition-colors ${preferences.functional ? "border-sage/60 bg-sage/25" : "border-sage/15 bg-white"}`}
                    >
                      <span
                        className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${preferences.functional ? "translate-x-8" : "translate-x-1"}`}
                      />
                    </button>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-sage/15 bg-cream p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Analytics</div>
                      <h4 className="mt-2 font-playfair text-xl font-bold text-charcoal">Reserved for future measurement</h4>
                      <p className="mt-2 text-sm leading-7 text-charcoal/70">
                        Kept off by default. This category is only here so the website can stay honest if analytics tools are added later.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updatePreference("analytics")}
                      aria-pressed={preferences.analytics}
                      className={`relative inline-flex h-7 w-14 shrink-0 items-center rounded-full border transition-colors ${preferences.analytics ? "border-sage/60 bg-sage/25" : "border-sage/15 bg-white"}`}
                    >
                      <span
                        className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${preferences.analytics ? "translate-x-8" : "translate-x-1"}`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-[-1px] -mx-5 flex flex-col gap-3 border-t border-sage/10 bg-white/95 px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:static sm:mx-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-0 sm:pb-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs leading-6 text-charcoal/55">
                  You can reopen these settings anytime from the footer.
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={closeCustomizer}
                    className="rounded-full border border-sage/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-sage/35 hover:bg-sage/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => saveConsent(preferences)}
                    className="btn-primary !px-6 !py-3 !text-[11px]"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Languages } from "lucide-react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  createCookieConsent,
  readStoredCookieConsent,
  writeStoredCookieConsent,
} from "@/lib/cookie-consent";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
    __langReady: boolean;
    __langSpanish: boolean;
    __langListeners: Set<() => void>;
  }
}

function initGlobalState() {
  if (typeof window === "undefined") return;
  if (!window.__langListeners) {
    window.__langListeners = new Set();
    window.__langReady = false;
    window.__langSpanish = document.cookie.includes("googtrans=/en/es");
  }
}

function subscribe(cb: () => void) {
  initGlobalState();
  window.__langListeners.add(cb);
  return () => {
    window.__langListeners.delete(cb);
  };
}

function getIsSpanish() {
  if (typeof window === "undefined") return false;
  initGlobalState();
  return window.__langSpanish;
}

function getIsReady() {
  if (typeof window === "undefined") return false;
  initGlobalState();
  return window.__langReady;
}

function notifyAll() {
  window.__langListeners.forEach((cb) => cb());
}

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

let loadPromise: Promise<void> | null = null;

function waitForElement(selector: string, timeoutMs = 3000): Promise<Element | null> {
  const startedAt = Date.now();

  return new Promise((resolve) => {
    const check = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        resolve(null);
        return;
      }

      window.setTimeout(check, 50);
    };

    check();
  });
}

function ensureGoogleTranslate(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  initGlobalState();

  if (window.__langReady) {
    return Promise.resolve();
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve) => {
    const existingScript = document.getElementById("google-translate-script");

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
        "google_translate_element"
      );
      window.__langReady = true;
      notifyAll();
      resolve();
    };

    if (existingScript) {
      const poll = () => {
        if (window.__langReady) {
          resolve();
          return;
        }
        window.setTimeout(poll, 50);
      };
      poll();
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  });

  return loadPromise;
}

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const isSpanish = useSyncExternalStore(subscribe, getIsSpanish, () => false);
  const ready = useSyncExternalStore(subscribe, getIsReady, () => false);
  const [functionalEnabled, setFunctionalEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consent = readStoredCookieConsent();
      const enabled = Boolean(consent?.functional || document.cookie.includes("googtrans=/en/es"));
      setFunctionalEnabled(enabled);

      if (enabled) {
        void ensureGoogleTranslate();
      }
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);
    };
  }, []);

  const handleClick = useCallback(async () => {
    if (!functionalEnabled) {
      const currentConsent = readStoredCookieConsent();

      writeStoredCookieConsent(
        createCookieConsent({
          functional: true,
          analytics: currentConsent?.analytics ?? false,
        })
      );
      setFunctionalEnabled(true);
    }

    await ensureGoogleTranslate();

    if (isSpanish) {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setCookie("googtrans", "/en/en", 1);
      window.__langSpanish = false;
      notifyAll();
      window.location.reload();
      return;
    }

    setCookie("googtrans", "/en/es", 1);
    document.cookie = "googtrans=/en/es; path=/;";

    const select = (await waitForElement(".goog-te-combo")) as HTMLSelectElement | null;

    if (select) {
      select.value = "es";
      select.dispatchEvent(new Event("change"));
    }

    window.__langSpanish = true;
    notifyAll();

    if (!select) {
      window.location.reload();
    }
  }, [functionalEnabled, isSpanish]);

  return (
    <>
      <div id="google_translate_element" className="!hidden" />

      <style jsx global>{`
        .goog-te-banner-frame,
        .skiptranslate,
        #goog-gt-tt,
        .goog-te-balloon-frame,
        .goog-te-menu-frame,
        .goog-te-menu2 {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          overflow: hidden !important;
        }
        body {
          top: 0 !important;
          position: static !important;
        }
        .goog-text-highlight {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
          border: none !important;
        }
        font[style], font,
        span[lang],
        .translated-ltr, .translated-rtl {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        *:hover > font,
        *:hover > span[lang] {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        body > .skiptranslate {
          display: none !important;
          height: 0 !important;
        }
        body > .skiptranslate + iframe {
          display: none !important;
          height: 0 !important;
        }
      `}</style>

      <button
        onClick={() => {
          void handleClick();
        }}
        disabled={functionalEnabled && !ready}
        className={`inline-flex items-center gap-1.5 font-semibold hover:text-gold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
          functionalEnabled && !ready ? "opacity-50 cursor-wait" : ""
        } ${className}`}
        aria-label={isSpanish ? "Switch to English" : "Traducir al Español"}
      >
        <Languages size={16} />
        <span>{isSpanish ? "🇺🇸 English" : "🇲🇽 Español"}</span>
      </button>
    </>
  );
}

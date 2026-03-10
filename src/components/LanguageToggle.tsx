"use client";

import { useEffect, useCallback, useSyncExternalStore } from "react";
import { Languages } from "lucide-react";

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

// ── Shared global state (all LanguageToggle instances sync) ──

function initGlobalState() {
  if (typeof window === "undefined") return;
  if (!window.__langListeners) {
    window.__langListeners = new Set();
    window.__langReady = false;
    // Check cookie on init
    window.__langSpanish = document.cookie.includes("googtrans=/en/es");
  }
}

function subscribe(cb: () => void) {
  initGlobalState();
  window.__langListeners.add(cb);
  return () => { window.__langListeners.delete(cb); };
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

// ── Google Translate loader (runs once) ──

let scriptLoaded = false;

function ensureGoogleTranslate() {
  if (scriptLoaded || typeof window === "undefined") return;
  if (document.getElementById("google-translate-script")) {
    scriptLoaded = true;
    return;
  }

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
      "google_translate_element"
    );
    window.__langReady = true;
    notifyAll();
  };

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
  scriptLoaded = true;
}

// ── Component ──

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const isSpanish = useSyncExternalStore(subscribe, getIsSpanish, () => false);
  const ready = useSyncExternalStore(subscribe, getIsReady, () => false);

  useEffect(() => {
    ensureGoogleTranslate();
  }, []);

  const handleClick = useCallback(() => {
    if (!ready) return;

    if (isSpanish) {
      // Switch to English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setCookie("googtrans", "/en/en", 1);
      window.__langSpanish = false;
      notifyAll();
      window.location.reload();
    } else {
      // Switch to Spanish
      setCookie("googtrans", "/en/es", 1);
      document.cookie = "googtrans=/en/es; path=/;";

      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = "es";
        select.dispatchEvent(new Event("change"));
      }

      window.__langSpanish = true;
      notifyAll();

      // If select didn't work, reload
      if (!select) window.location.reload();
    }
  }, [isSpanish, ready]);

  return (
    <>
      {/* Single hidden element shared by all instances */}
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
        onClick={handleClick}
        disabled={!ready}
        className={`inline-flex items-center gap-1.5 font-semibold hover:text-gold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
          !ready ? "opacity-50 cursor-wait" : ""
        } ${className}`}
        aria-label={isSpanish ? "Switch to English" : "Traducir al Español"}
      >
        <Languages size={16} />
        <span>{isSpanish ? "🇺🇸 English" : "🇲🇽 Español"}</span>
      </button>
    </>
  );
}

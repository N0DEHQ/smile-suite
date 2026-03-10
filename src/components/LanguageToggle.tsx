"use client";

import { useEffect, useState, useCallback } from "react";
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
  }
}

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const [isSpanish, setIsSpanish] = useState(false);
  const [ready, setReady] = useState(false);

  // Check current state on mount
  useEffect(() => {
    const current = getCookie("googtrans");
    if (current && current.includes("/es")) {
      setIsSpanish(true);
    }
  }, []);

  useEffect(() => {
    if (document.getElementById("google-translate-script")) {
      setReady(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setReady(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const switchLanguage = useCallback((toLang: "en" | "es") => {
    if (toLang === "en") {
      // Clear translation - set cookie back to English and reload
      setCookie("googtrans", "/en/en", 1);
      // Also clear the domain-specific cookie
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=/en/en; path=/;";
      setIsSpanish(false);
      // Force clean reload to remove all translation artifacts
      window.location.reload();
    } else {
      // Set to Spanish via cookie + trigger select
      setCookie("googtrans", "/en/es", 1);
      document.cookie = "googtrans=/en/es; path=/;";

      // Try the select approach first (instant)
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = "es";
        select.dispatchEvent(new Event("change"));
        setIsSpanish(true);
      } else {
        // Fallback: reload with cookie set
        setIsSpanish(true);
        window.location.reload();
      }
    }
  }, []);

  const handleClick = () => {
    switchLanguage(isSpanish ? "en" : "es");
  };

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
        /* Kill the iframe Google injects at top */
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

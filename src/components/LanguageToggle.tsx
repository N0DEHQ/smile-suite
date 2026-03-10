"use client";

import { useEffect, useState } from "react";
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

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const [isSpanish, setIsSpanish] = useState(false);
  const [, setLoaded] = useState(false);

  useEffect(() => {
    // Only load once
    if (document.getElementById("google-translate-script")) {
      setLoaded(true);
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
      setLoaded(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const toggleSpanish = () => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (select) {
      const newLang = isSpanish ? "en" : "es";
      select.value = newLang;
      select.dispatchEvent(new Event("change"));
      setIsSpanish(!isSpanish);
    }
  };

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="hidden" />

      {/* Hide Google Translate banner + fix highlight via CSS */}
      <style jsx global>{`
        .goog-te-banner-frame,
        .skiptranslate,
        #goog-gt-tt,
        .goog-te-balloon-frame,
        .goog-te-menu-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-text-highlight {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
          border: none !important;
        }
        font[style],
        font {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        span[lang] {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        .translated-ltr,
        .translated-rtl {
          background: none !important;
          background-color: transparent !important;
        }
        /* Kill all Google Translate hover highlights */
        *:hover > font,
        *:hover > span[lang] {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
      `}</style>

      <button
        onClick={toggleSpanish}
        className={`inline-flex items-center gap-1.5 font-semibold hover:text-gold transition-colors cursor-pointer ${className}`}
        aria-label={isSpanish ? "Switch to English" : "Traducir al Español"}
      >
        <Languages size={16} />
        <span>{isSpanish ? "🇺🇸 English" : "🇲🇽 Español"}</span>
      </button>
    </>
  );
}

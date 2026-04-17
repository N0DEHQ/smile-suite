"use client";

import type { ReactNode } from "react";
import { COOKIE_SETTINGS_EVENT } from "@/lib/cookie-consent";

type CookieSettingsButtonProps = {
  className?: string;
  children?: ReactNode;
};

export default function CookieSettingsButton({
  className,
  children = "Cookie Settings",
}: CookieSettingsButtonProps) {
  const openSettings = () => {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  };

  return (
    <button type="button" onClick={openSettings} className={className}>
      {children}
    </button>
  );
}

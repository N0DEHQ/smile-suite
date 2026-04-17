export const COOKIE_CONSENT_COOKIE_NAME = "smile_suite_cookie_consent";
export const COOKIE_CONSENT_STORAGE_KEY = "smile-suite-cookie-consent";
export const COOKIE_SETTINGS_EVENT = "smile-suite:open-cookie-settings";
export const COOKIE_CONSENT_UPDATED_EVENT = "smile-suite:cookie-consent-updated";

export type CookieConsent = {
  version: 1;
  essential: true;
  functional: boolean;
  analytics: boolean;
  updatedAt: string;
};

export function createCookieConsent(preferences?: {
  functional?: boolean;
  analytics?: boolean;
}): CookieConsent {
  return {
    version: 1,
    essential: true,
    functional: preferences?.functional ?? false,
    analytics: preferences?.analytics ?? false,
    updatedAt: new Date().toISOString(),
  };
}

export function parseCookieConsent(value: string | null | undefined): CookieConsent | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookieConsent>;

    if (
      parsed.version !== 1 ||
      parsed.essential !== true ||
      typeof parsed.functional !== "boolean" ||
      typeof parsed.analytics !== "boolean"
    ) {
      return null;
    }

    return {
      version: 1,
      essential: true,
      functional: parsed.functional,
      analytics: parsed.analytics,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function readCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const prefix = `${name}=`;
  const match = document.cookie.split("; ").find((entry) => entry.startsWith(prefix));

  return match ? match.slice(prefix.length) : null;
}

export function readStoredCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const cookieValue = parseCookieConsent(readCookie(COOKIE_CONSENT_COOKIE_NAME));

  if (cookieValue) {
    return cookieValue;
  }

  try {
    return parseCookieConsent(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function writeStoredCookieConsent(consent: CookieConsent) {
  if (typeof document !== "undefined") {
    document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}; path=/; max-age=31536000; SameSite=Lax`;
  }

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Ignore storage failures and keep the cookie as the source of truth.
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));
  }
}

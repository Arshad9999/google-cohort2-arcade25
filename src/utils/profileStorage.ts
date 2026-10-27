
interface ProfileEntry {
  url: string;
  timestamp: string;
  rememberMe: true;
}

const STORAGE_KEY = 'arcadeProfileEntries';

export const normalizeProfileUrl = (value: string): string | null => {
  try {
    const url = new URL(value.trim());
    if (
      url.protocol !== 'https:' || url.port || url.username || url.password ||
      !['www.cloudskillsboost.google', 'cloudskillsboost.google'].includes(url.hostname) ||
      !/^\/public_profiles\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname)
    ) return null;
    return `https://www.cloudskillsboost.google${url.pathname.replace(/\/$/, '')}`;
  } catch {
    return null;
  }
};

export const clearProfileEntries = (): boolean => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
};

export const saveProfileUrl = (value: string, rememberMe: boolean): boolean => {
  if (!rememberMe) return clearProfileEntries();
  const url = normalizeProfileUrl(value);
  if (!url) return false;
  try {
    const entry: ProfileEntry = { url, timestamp: new Date().toISOString(), rememberMe: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([entry]));
    return true;
  } catch {
    return false;
  }
};

export const getProfileEntries = (): ProfileEntry[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    const entries: ProfileEntry[] = [];
    if (Array.isArray(parsed)) {
      for (const entry of parsed) {
        if (!entry || typeof entry !== 'object') continue;
        const { url, timestamp, rememberMe } = entry;
        const normalized = typeof url === 'string' ? normalizeProfileUrl(url) : null;
        if (rememberMe === true && normalized && typeof timestamp === 'string' && Number.isFinite(Date.parse(timestamp))) {
          entries.push({ url: normalized, timestamp, rememberMe: true });
          break;
        }
      }
    }
    // Purge legacy entries saved without consent and malformed records.
    if (entries.length === 0) localStorage.removeItem(STORAGE_KEY);
    else if (JSON.stringify(entries) !== stored) localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    return entries;
  } catch {
    clearProfileEntries();
    return [];
  }
};

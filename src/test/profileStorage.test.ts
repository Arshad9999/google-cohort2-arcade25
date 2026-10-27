import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { clearProfileEntries, getProfileEntries, normalizeProfileUrl, saveProfileUrl } from '../utils/profileStorage';

const key = 'arcadeProfileEntries';
const url = 'https://www.cloudskillsboost.google/public_profiles/example-id';

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe('profile persistence consent', () => {
  it('does not store a profile without consent', () => {
    saveProfileUrl(url, false);
    expect(localStorage.getItem(key)).toBeNull();
  });
  it('removes an earlier saved profile when consent is withdrawn', () => {
    saveProfileUrl(url, true);
    saveProfileUrl(url, false);
    expect(getProfileEntries()).toEqual([]);
  });
  it('remembers only the latest consenting profile', () => {
    saveProfileUrl(url, true);
    saveProfileUrl(`${url}-new`, true);
    expect(getProfileEntries().map(entry => entry.url)).toEqual([`${url}-new`]);
  });
  it('purges old non-consenting entries on read', () => {
    localStorage.setItem(key, JSON.stringify([{ url, timestamp: new Date().toISOString(), rememberMe: false }]));
    expect(getProfileEntries()).toEqual([]);
    expect(localStorage.getItem(key)).toBeNull();
  });
  it.each(['not-json', '{}', 'null', '[null]', '[{"rememberMe":true,"url":42}]'])('recovers from malformed saved data: %s', value => {
    localStorage.setItem(key, value);
    expect(getProfileEntries()).toEqual([]);
    expect(localStorage.getItem(key)).toBeNull();
  });
  it('handles unavailable browser storage without crashing', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('disabled'); });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('disabled'); });
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => { throw new Error('disabled'); });
    expect(getProfileEntries()).toEqual([]);
    expect(saveProfileUrl(url, true)).toBe(false);
    expect(clearProfileEntries()).toBe(false);
  });
});

describe('profile URL validation', () => {
  it('normalizes the official URL and drops tracking parameters', () => {
    expect(normalizeProfileUrl(' https://cloudskillsboost.google/public_profiles/example-id/?tracking=yes#section ')).toBe(url);
  });
  it.each([
    'https://example.com/public_profiles/example-id',
    'https://www.cloudskillsboost.google.example.com/public_profiles/example-id',
    'http://www.cloudskillsboost.google/public_profiles/example-id',
    'https://user:password@www.cloudskillsboost.google/public_profiles/example-id',
    'https://www.cloudskillsboost.google:8080/public_profiles/example-id',
    'https://www.cloudskillsboost.google/',
    'invalid',
  ])('does not persist an invalid or unrelated URL: %s', value => {
    expect(normalizeProfileUrl(value)).toBeNull();
    expect(saveProfileUrl(value, true)).toBe(false);
    expect(localStorage.getItem(key)).toBeNull();
  });
});

import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { saveProfileUrl } from '../utils/profileStorage';

afterEach(() => {
  cleanup();
  localStorage.clear();
  window.history.replaceState({}, '', '/');
});

describe.each(['/', '/calculator'])('remembered profile on %s', route => {
  it('restores the consenting profile and clears it when unchecked', () => {
    const url = 'https://www.cloudskillsboost.google/public_profiles/example-id';
    saveProfileUrl(url, true);
    window.history.replaceState({}, '', route);
    const { container } = render(<App />);
    const input = container.querySelector('input[type="url"]') as HTMLInputElement;
    const checkbox = screen.getByRole('checkbox', { name: 'Remember me' }) as HTMLInputElement;
    expect(input.value).toBe(url);
    expect(checkbox.checked).toBe(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
    expect(localStorage.getItem('arcadeProfileEntries')).toBeNull();
  });
});

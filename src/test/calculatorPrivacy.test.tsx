import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import { saveProfileUrl } from '../utils/profileStorage';

afterEach(() => {
  cleanup();
  localStorage.clear();
  window.history.replaceState({}, '', '/');
});

describe.each(['/', '/calculator'])('manual calculator on %s', route => {
  it('does not read profile URLs into the calculator interface', () => {
    const url = 'https://www.cloudskillsboost.google/public_profiles/example-id';
    saveProfileUrl(url, true);
    window.history.replaceState({}, '', route);
    render(<App />);

    expect(screen.queryByDisplayValue(url)).toBeNull();
    expect(screen.queryByRole('checkbox', { name: 'Remember me' })).toBeNull();
    expect(screen.getByLabelText('Regular game badges')).not.toBeNull();
    expect(localStorage.getItem('arcadeProfileEntries')).not.toBeNull();
  });
});

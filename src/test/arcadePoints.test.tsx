import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ArcadePointsCalculator from '@/components/ArcadePointsCalculator';
import { calculateArcadePoints } from '@/utils/arcadePoints';

describe('Arcade points formula', () => {
  it('applies the documented 2025 weights and complete skill-badge pairs', () => {
    expect(calculateArcadePoints({
      regularGameBadges: 3,
      monthlySpecialBadges: 2,
      triviaBadges: 4,
      skillBadges: 5,
    })).toBe(13);
  });

  it('rejects invalid badge counts', () => {
    expect(() => calculateArcadePoints({
      regularGameBadges: -1,
      monthlySpecialBadges: 0,
      triviaBadges: 0,
      skillBadges: 0,
    })).toThrow(RangeError);
  });

  it('calculates from accessible form controls', () => {
    render(<ArcadePointsCalculator idPrefix="test" />);
    fireEvent.change(screen.getByLabelText('Regular game badges'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Monthly special badges'), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText('Trivia badges'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Skill badges'), { target: { value: '5' } });
    fireEvent.click(screen.getByRole('button', { name: 'Calculate points' }));

    expect(screen.getByRole('status').textContent).toContain('9 points');
    expect(screen.getByRole('status').textContent).toContain('waiting for a second badge');
  });
});

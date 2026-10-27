import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BadgeCounts, calculateArcadePoints, unpairedSkillBadges } from '@/utils/arcadePoints';

const initialCounts: BadgeCounts = {
  regularGameBadges: 0,
  monthlySpecialBadges: 0,
  triviaBadges: 0,
  skillBadges: 0,
};

const fields: Array<{ key: keyof BadgeCounts; label: string; points: string }> = [
  { key: 'regularGameBadges', label: 'Regular game badges', points: '1 point each' },
  { key: 'monthlySpecialBadges', label: 'Monthly special badges', points: '2 points each' },
  { key: 'triviaBadges', label: 'Trivia badges', points: '1 point each' },
  { key: 'skillBadges', label: 'Skill badges', points: '1 point per complete pair' },
];

type ArcadePointsCalculatorProps = {
  idPrefix: string;
};

const ArcadePointsCalculator = ({ idPrefix }: ArcadePointsCalculatorProps) => {
  const [counts, setCounts] = useState(initialCounts);
  const [total, setTotal] = useState<number | null>(null);

  const updateCount = (key: keyof BadgeCounts, rawValue: string) => {
    const parsed = Number(rawValue);
    const value = Number.isFinite(parsed) ? Math.max(0, Math.floor(parsed)) : 0;
    setCounts((current) => ({ ...current, [key]: value }));
    setTotal(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTotal(calculateArcadePoints(counts));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const inputId = `${idPrefix}-${field.key}`;
          return (
            <div key={field.key} className="space-y-2">
              <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
                {field.label}
              </label>
              <Input
                id={inputId}
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                value={counts[field.key]}
                onChange={(event) => updateCount(field.key, event.target.value)}
                aria-describedby={`${inputId}-help`}
                className="h-12 text-base"
              />
              <p id={`${inputId}-help`} className="text-xs text-gray-500">{field.points}</p>
            </div>
          );
        })}
      </div>

      <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
        Calculate points
      </Button>

      {total !== null && (
        <div role="status" aria-live="polite" className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center">
          <p className="text-sm font-medium text-blue-800">Historical 2025 formula result</p>
          <p className="mt-1 text-4xl font-black text-blue-700">{total} points</p>
          {unpairedSkillBadges(counts.skillBadges) === 1 && (
            <p className="mt-2 text-sm text-blue-700">One skill badge is waiting for a second badge to complete a point.</p>
          )}
        </div>
      )}

      <p className="text-xs leading-relaxed text-gray-500">
        This calculator does not access Google Cloud profiles. Enter only badge counts you have verified yourself. Rules are preserved for the historical 2025 cohort and may not apply to later programs.
      </p>
    </form>
  );
};

export default ArcadePointsCalculator;

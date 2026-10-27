export type BadgeCounts = {
  regularGameBadges: number;
  monthlySpecialBadges: number;
  triviaBadges: number;
  skillBadges: number;
};

const validateCount = (label: string, value: number) => {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new RangeError(`${label} must be a non-negative whole number`);
  }
};

export const calculateArcadePoints = (counts: BadgeCounts) => {
  validateCount('Regular game badges', counts.regularGameBadges);
  validateCount('Monthly special badges', counts.monthlySpecialBadges);
  validateCount('Trivia badges', counts.triviaBadges);
  validateCount('Skill badges', counts.skillBadges);

  return (
    counts.regularGameBadges +
    counts.monthlySpecialBadges * 2 +
    counts.triviaBadges +
    Math.floor(counts.skillBadges / 2)
  );
};

export const unpairedSkillBadges = (skillBadges: number) => {
  validateCount('Skill badges', skillBadges);
  return skillBadges % 2;
};

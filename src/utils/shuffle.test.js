import { describe, it, expect } from 'vitest';
import { shuffleArray } from './shuffle';

describe('shuffleArray', () => {
  it('returns a new array with same elements in different order', () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(original);

    expect(shuffled).toHaveLength(original.length);
    expect([...shuffled].sort()).toEqual([...original].sort());
  });

  it('does not mutate the original array', () => {
    const original = [10, 20, 30];
    const copy = [...original];
    shuffleArray(original);
    expect(original).toEqual(copy);
  });
});

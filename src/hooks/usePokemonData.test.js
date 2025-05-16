import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getPokemonData } from './usePokemonData';

global.fetch = vi.fn();

const fakePokemon = (id) => ({
  id,
  name: `pokemon${id}`,
  sprites: { front_default: `image${id}.png` },
});

beforeEach(() => {
  fetch.mockReset();
});

describe('getPokemonData', () => {
  it('fetches and returns expected Pokémon objects', async () => {
    fetch.mockImplementation((url) => {
      const id = Number(url.split('/').pop());
      return Promise.resolve({
        json: () => Promise.resolve(fakePokemon(id)),
      });
    });

    const data = await getPokemonData(3);

    expect(data).toHaveLength(3);
    for (const item of data) {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('image');
    }
  });
});

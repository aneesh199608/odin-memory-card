export async function getPokemonData(count = 9) {
    const randomIds = getUniqueRandomNumbers(count, 1, 151); // Gen 1 Pokémon only
  
    const promises = randomIds.map(async (id) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      return {
        id: data.id,
        name: capitalize(data.name),
        image: data.sprites.front_default,
      };
    });
  
    return Promise.all(promises);
  }
  
  // Generate unique random IDs
  function getUniqueRandomNumbers(count, min, max) {
    const set = new Set();
    while (set.size < count) {
      const rand = Math.floor(Math.random() * (max - min + 1)) + min;
      set.add(rand);
    }
    return Array.from(set);
  }
  
  // Capitalize name
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
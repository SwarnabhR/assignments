document.getElementById("pokemon-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const number = parseInt(document.getElementById("number").value);
  const type = document.getElementById("type").value;
  const container = document.getElementById("cards-container");

  container.innerHTML = "Loading...";

  try {
    // Step 1: Get list of Pokémon by type
    const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await typeRes.json();
    const pokemonList = typeData.pokemon;

    // Step 2: Shuffle and pick random N Pokémon
    const shuffled = pokemonList.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, number);

    // Step 3: Fetch details and render cards
    const cardsHTML = await Promise.all(
      selected.map(async ({ pokemon }) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return `
          <div class="card">
            <img src="${data.sprites.front_default}" alt="${data.name}" />
            <h3>${data.name}</h3>
            <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
          </div>
        `;
      })
    );

    // Step 4: Render cards
    container.innerHTML = cardsHTML.join("");
  } catch (err) {
    console.error(err);
    container.innerHTML = "Failed to load Pokémon";
  }
});

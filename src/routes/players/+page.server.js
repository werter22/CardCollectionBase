import db from "$lib/db.js";

export async function load() {
  const players = await db.getPlayers(); // Fetch all players
  const decks = await db.getDecks(); // Fetch all decks

  // Map owned deck details to players
  players.forEach((player) => {
    player.Decks = player.OwnedDecks.map((deckId) =>
      decks.find((deck) => deck._id === deckId)
    ).filter((deck) => deck); // Filter out invalid deck IDs
  });

  return { players };
}

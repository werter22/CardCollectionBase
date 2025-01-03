import db from "$lib/db";

export async function load() {
  const decks = await db.getDecks();
  const players = await db.getPlayers(); // Fetch all players

  // Fetch card details and map player information to each deck
  for (const deck of decks) {
    // Add card details
    deck.CardDetails = await Promise.all(
      deck.Cards.map(async (cardId) => {
        const card = await db.getCard(cardId);
        return card
          ? { Name: card.Name, _id: card._id, Type: card.Type.toLowerCase() } // Normalize type to lowercase
          : { Name: "Unknown Card", _id: cardId, Type: "unknown" }; // Fallback
      })
    );

    // Map player information
    const owner = players.find((player) => player.OwnedDecks.includes(deck._id));
    deck.player = owner
      ? { Name: owner.Name, ProfilePic: owner.ProfilePic }
      : null; // Add player info or null if no owner
  }

  return {
    decks, // Pass decks with card details and player info to the Svelte page
  };
}

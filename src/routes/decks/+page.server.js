import db from "$lib/db";

export async function load() {
    const decks = await db.getDecks();

    // Fetch card details (Name, _id, Type) for each card in the deck
    for (const deck of decks) {
      deck.CardDetails = await Promise.all(
          deck.Cards.map(async (cardId) => {
              const card = await db.getCard(cardId);
              return card
                  ? { Name: card.Name, _id: card._id, Type: card.Type.toLowerCase() } // Normalize type to lowercase
                  : { Name: "Unknown Card", _id: cardId, Type: "unknown" }; // Fallback
          })
      );
  }

    return {
        decks, // Pass decks with their card names to the Svelte page
    };
}
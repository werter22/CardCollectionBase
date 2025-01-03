import db from "$lib/db.js";

export async function load({ params }) {
  const deck = await db.getDeck(params.deck_id);
  const cards = await db.getCards();

  if (!deck) {
    throw new Error("Deck not found");
  }

  return { deck, allCards: cards };
}

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const deckId = formData.get("deck_id"); // Retrieve deck ID
      const updatedCardIds = formData.getAll("cards"); // Retrieve updated card IDs

      if (!deckId) {
        throw new Error("Missing deck ID");
      }

      const deck = await db.getDeck(deckId);
      if (!deck) {
        return { success: false, message: "Deck not found" };
      }

      // Update the Cards field in the deck
      deck.Cards = updatedCardIds;

      console.log("Updating Deck:", deck);

      const result = await db.updateDeck(deck);
      if (!result) {
        console.error("Failed to update the deck in the database.");
        return { success: false, message: "Failed to update the deck." };
      }

      return { success: true };
    } catch (error) {
      console.error("Error processing update:", error.message);
      return { success: false, message: error.message };
    }
  },
};

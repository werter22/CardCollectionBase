import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const card = await db.getCard(params.card_id);

  if (!card) {
    throw redirect(303, "/not-found"); // Redirect if the card is not found
  }

  // Fetch all decks and filter the ones containing the card
  const decks = await db.getDecks();
  const containingDecks = decks.filter((deck) => deck.Cards.includes(card._id));

  return {
    card,
    containingDecks, // Add containing decks to the returned data
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteCard(data.get("id"));
    throw redirect(303, "/cards");
  },
};

import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    card: await db.getCard(params.card_id), 
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteCard(data.get("id")); 
    redirect(303, "/cards");
  },
};

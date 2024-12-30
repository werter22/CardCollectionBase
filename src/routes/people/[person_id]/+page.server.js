import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    person: await db.getPerson(params.person_id),  // Fetching a person based on their ID
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deletePerson(data.get("id"));  // Deleting a person by ID
    redirect(303, "/people");  // Redirecting to the /people page after deletion
  },
};

import db from "$lib/db";

export async function load() {
  return {
    people: await db.getPeople() // Return the people data to the component
  }
}

import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let person = {
      name: data.get("name"),  // Person's name
      age: data.get("age"),    // Person's age
      occupation: data.get("occupation"),  // Person's occupation
      status: data.get("status") === 'active',  // Person's status (active or inactive)
    };
    await db.createPerson(person);  // Calling the createPerson function in the db module
    return { success: true };
  },
};

import db from "$lib/db.js";
import { error, redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        // Extract form data
        const name = data.get("name");
        const rarity = data.get("rarity");
        const attackPoints = data.get("attackPoints");
        const defensePoints = data.get("defensePoints");
        const type = data.get("type");
        const cardText = data.get("cardText");
        // Removed cardImg since we're using a placeholder

        // Basic validation (ensure required fields are present)
        if (!name || !rarity || !type || !cardText) {
            throw error(400, "Missing required fields.");
        }

        // Construct the card object with the placeholder image
        const card = {
            Name: name.trim(),
            Rarity: rarity.trim(),
            AttackPoints: attackPoints ? Number(attackPoints) : null,
            DefensePoints: defensePoints ? Number(defensePoints) : null,
            Type: type.trim(),
            CardText: cardText.trim(),
            CardImg: "/images/cardImg_placeholder.png", // Placeholder image URL
            // Optional additional fields
            // ReleaseDate: data.get("releaseDate") ? new Date(data.get("releaseDate")) : null,
            // Set: data.get("set") ? data.get("set").trim() : "Unknown Set",
            // Edition: data.get("edition") ? data.get("edition").trim() : "First Edition",
            // CollectorsNumber: data.get("collectorsNumber") ? data.get("collectorsNumber").trim() : "N/A",
        };
        await db.createCard(card);
        return { success: true };
    }
};

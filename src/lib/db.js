import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("CardCollectionDB"); // select database

//////////////////////////////////////////
// Cards
//////////////////////////////////////////

// Get all cards
async function getCards() {
  let cards = [];
  try {
    const collection = db.collection("cards");

    // Query/filter (optional)
    const query = {};

    // Get all cards that match the query
    cards = await collection.find(query).toArray();
    cards.forEach((card) => {
      card._id = card._id.toString(); // Convert ObjectId to string
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return cards;
}

// Get card by ID
async function getCard(id) {
  let card = null;
  try {
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    card = await collection.findOne(query);

    if (!card) {
      console.log("No card with ID " + id);
      // TODO: error handling
    } else {
      card._id = card._id.toString(); // Convert ObjectId to string
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return card;
}

// Create card
// Example card object:
/* 
{
  Name: "Fire Dragon",
  Rarity: "Legendary",
  AttackPoints: 5000,
  DefensePoints: 3000,
  Type: "Creature",
  CardText: "Unleashes a fiery breath, dealing massive damage to all opponent's creatures.",
  CardImg: "/images/Fire_Dragon_Trading_Card.png"
}
*/
async function createCard(card) {
  try {
    const collection = db.collection("cards");
    const result = await collection.insertOne(card);
    return result.insertedId.toString(); // Convert ObjectId to string
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Update card
// Example card object:
/* 
{
  _id: "2d9b9da002d7f93deb9e638ff2f5abd5",
  Name: "Fire Dragon",
  Rarity: "Legendary",
  AttackPoints: 5000,
  DefensePoints: 3000,
  Type: "Creature",
  CardText: "Unleashes a fiery breath, dealing massive damage to all opponent's creatures.",
  CardImg: "/images/Fire_Dragon_Trading_Card.png"
}
*/
// Returns: ID of the updated card or null if card could not be updated
async function updateCard(card) {
  try {
    let id = card._id;
    delete card._id; // Remove _id from the object, as it cannot be updated
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.updateOne(query, { $set: card });

    if (result.matchedCount === 0) {
      console.log("No card with ID " + id);
      // TODO: error handling
    } else {
      console.log("Card with ID " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Delete card by ID
// Returns: ID of the deleted card or null if card could not be deleted
async function deleteCard(id) {
  try {
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No card with ID " + id);
    } else {
      console.log("Card with ID " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Export all functions so that they can be used in other files
export default {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};

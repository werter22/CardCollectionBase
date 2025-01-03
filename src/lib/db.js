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

//////////////////////////////////////////
// Decks
//////////////////////////////////////////

// Get all decks
async function getDecks() {
  let decks = [];
  try {
    const collection = db.collection("decks");

    // Query/filter (optional)
    const query = {};

    // Get all decks that match the query
    decks = await collection.find(query).toArray();
    decks.forEach((deck) => {
      deck._id = deck._id.toString(); // Convert ObjectId to string
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return decks;
}

// Get deck by ID
async function getDeck(id) {
  let deck = null;
  try {
    const collection = db.collection("decks");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    deck = await collection.findOne(query);

    if (!deck) {
      console.log("No deck with ID " + id);
      // TODO: error handling
    } else {
      deck._id = deck._id.toString(); // Convert ObjectId to string
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return deck;
}

// Create deck
// Example deck object:
/* 
{
  Name: "Arcane Wisdom Deck (Variant)",
  Theme: "Spellcasting focused on mana regeneration.",
  Cards: [
    "899b382e4443be7a49259a900b873140",
    "25957f9ff10726e4001c010aa57667ff",
    "2ff8d66051692ff4d82512f07fca2c32",
    "d407ccf156ebc86e746b900ad9aba019",
    "01b96c269df35f5d1bee3e23b5ec1211",
    "ef1848064b9c0a9084942cd9571cdeb3"
  ]
}
*/
async function createDeck(deck) {
  try {
    const collection = db.collection("decks");
    const result = await collection.insertOne(deck);
    return result.insertedId.toString(); // Convert ObjectId to string
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Update deck
// Example deck object:
/* 
{
  _id: "389bdc6b147b1bde7f664f36673827ef",
  Name: "Arcane Wisdom Deck (Updated)",
  Theme: "Advanced spellcasting with mana regeneration.",
  Cards: [
    "25957f9ff10726e4001c010aa57667ff",
    "2ff8d66051692ff4d82512f07fca2c32",
    "d407ccf156ebc86e746b900ad9aba019"
  ]
}
*/
// Returns: ID of the updated deck or null if deck could not be updated
async function updateDeck(deck) {
  try {
    let id = deck._id;
    delete deck._id; // Remove _id from the object, as it cannot be updated
    const collection = db.collection("decks");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.updateOne(query, { $set: deck });

    if (result.matchedCount === 0) {
      console.log("No deck with ID " + id);
      // TODO: error handling
    } else {
      console.log("Deck with ID " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Delete deck by ID
// Returns: ID of the deleted deck or null if deck could not be deleted
async function deleteDeck(id) {
  try {
    const collection = db.collection("decks");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No deck with ID " + id);
    } else {
      console.log("Deck with ID " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

//////////////////////////////////////////
// Players
//////////////////////////////////////////

// Get all players
async function getPlayers() {
  let players = [];
  try {
    const collection = db.collection("players");

    // Query/filter (optional)
    const query = {};

    // Get all players that match the query
    players = await collection.find(query).toArray();
    players.forEach((player) => {
      player._id = player._id.toString(); // Convert ObjectId to string
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return players;
}

// Get player by ID
async function getPlayer(id) {
  let player = null;
  try {
    const collection = db.collection("players");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    player = await collection.findOne(query);

    if (!player) {
      console.log("No player with ID " + id);
      // TODO: error handling
    } else {
      player._id = player._id.toString(); // Convert ObjectId to string
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return player;
}

// Create player
// Example player object:
/* 
{
  Name: "PhoenixFlame",
  Rank: "Advanced",
  OwnedDecks: [
    "67768bc1b40ab1c49ca80976",
    "67768bc1b40ab1c49ca80977"
  ],
  ProfilePic: "/images/playerProfile/PhoenixFlame.png"
}
*/
async function createPlayer(player) {
  try {
    const collection = db.collection("players");
    const result = await collection.insertOne(player);
    return result.insertedId.toString(); // Convert ObjectId to string
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Update player
// Example player object:
/* 
{
  _id: "6777d75fef2f78ef00b20be4",
  Name: "PhoenixFlame",
  Rank: "Advanced",
  OwnedDecks: [
    "67768bc1b40ab1c49ca80976",
    "67768bc1b40ab1c49ca80977"
  ],
  ProfilePic: "/images/playerProfile/PhoenixFlame.png"
}
*/
// Returns: ID of the updated player or null if player could not be updated
async function updatePlayer(player) {
  try {
    let id = player._id;
    delete player._id; // Remove _id from the object, as it cannot be updated
    const collection = db.collection("players");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.updateOne(query, { $set: player });

    if (result.matchedCount === 0) {
      console.log("No player with ID " + id);
      // TODO: error handling
    } else {
      console.log("Player with ID " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
    // TODO: error handling
  }
  return null;
}

// Delete player by ID
// Returns: ID of the deleted player or null if player could not be deleted
async function deletePlayer(id) {
  try {
    const collection = db.collection("players");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No player with ID " + id);
    } else {
      console.log("Player with ID " + id + " has been successfully deleted.");
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
  getDecks,
  getDeck,
  createDeck,
  updateDeck,
  deleteDeck,
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer
};

import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("PersonDB"); // select database

//////////////////////////////////////////
// People
//////////////////////////////////////////

// Get all people
async function getPeople() {
  let people = [];
  try {
    const collection = db.collection("people");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    people = await collection.find(query).toArray();
    people.forEach((person) => {
      person._id = person._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return people;
}

// Get person by id
async function getPerson(id) {
  let person = null;
  try {
    const collection = db.collection("people");
    const query = { _id: new ObjectId(id) }; // filter by id
    person = await collection.findOne(query);

    if (!person) {
      console.log("No person with id " + id);
      // TODO: errorhandling
    } else {
      person._id = person._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return person;
}

// create person
// Example person object:
/* 
{ 
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
  status: true 
} 
*/
async function createPerson(person) {
  person.profilePicture = "/images/profile.png"; // default profile picture
  try {
    const collection = db.collection("people");
    const result = await collection.insertOne(person);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update person
// Example person object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
  status: true,
  profilePicture: "/images/johndoe.png"
} 
*/
// returns: id of the updated person or null, if person could not be updated
async function updatePerson(person) {
  try {
    let id = person._id;
    delete person._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("people");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: person });

    if (result.matchedCount === 0) {
      console.log("No person with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Person with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete person by id
// returns: id of the deleted person or null, if person could not be deleted
async function deletePerson(id) {
  try {
    const collection = db.collection("people");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No person with id " + id);
    } else {
      console.log("Person with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
// Import the mongoose library to interact with MongoDB.
import mongoose from "mongoose";

// Destructure the Schema 'constructor' from the mongoose object. A constructer is like a setup function for creating a new object
const { Schema } = mongoose;

// Define the schema for a "Joke" with a single field "joke".
// This field is of type String and is required.
const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

// If a model named "Joke" already exists, it will use the existing one.
// Otherwise create a mongoose model named "Joke" using the defined schema from above.
const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

// Last but not least, export the Joke model so it can be used elsewhere in our application ✨.
export default Joke;

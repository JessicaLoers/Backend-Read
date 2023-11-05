// Import the database connection function.
import dbConnect from "@/db/connect.js";
// Import the Joke model.
import Joke from "@/db/models/Joke";

// We need to make the handler function (for incoming HTTP requests) an async function now.
export default async function handler(request, response) {
  // Make a connection to the database before handling the request.
  await dbConnect();

  // Check if the HTTP request method is GET.
  if (request.method === "GET") {
    // Retrieve all jokes from the database.
    const jokes = await Joke.find();
    // Respond with a 200 OK status and the list of jokes in JSON format.
    return response.status(200).json(jokes);
  }

  // If the request method is not GET, respond with a 501 Not Implemented status.
  return response.status(501).json({ status: "Method not found." });
}

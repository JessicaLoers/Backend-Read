// Import the database connection function.
import dbConnect from "@/db/connect";
// Import the Joke model.
import Joke from "@/db/models/Joke";

// We need to make the handler function (for incoming HTTP requests) an async function now.
export default async function handler(request, response) {
  // Make a connection to the database before handling the request.
  await dbConnect();

  // Little Recap from the Backend-API-Routes-Session: extract the 'id' parameter from the query string of the request.
  const { id } = request.query;

  // Check if the HTTP request method is GET.
  if (request.method === "GET") {
    // Find the joke with the provided 'id' in the database.
    const joke = await Joke.findById(id);

    // Little Recap:  If no joke is found, send a 404 Not Found response.
    if (!joke) {
      return response.status(404).json({ status: "Not Found" });
    }

    // Little Recap: If a joke is found, send it back with a 200 OK response.
    return response.status(200).json(joke);
  }

  // If the request method is not GET, respond with a 501 Not Implemented status.
  return response.status(501).json({ status: "Method not found." });
}

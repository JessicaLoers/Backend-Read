import dbConnect from "@/db/connect.js";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }

  return response.status(501).json({ status: "Method not found." });
}

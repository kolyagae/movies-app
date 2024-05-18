import axios from "axios";

export async function GET() {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`
    );

    return Response.json(res.data);
  } catch (error) {
    console.error("Error:", error);
    return Response.error();
  }
}

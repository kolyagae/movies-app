import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = searchParams.toString();

  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&${params}`
    );

    return Response.json(res.data);
  } catch (error) {
    console.error("Error:", error);
    return Response.error();
  }
}

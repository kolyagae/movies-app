import axios from "axios";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&append_to_response=videos`
    );

    return Response.json(res.data);
  } catch (error) {
    console.error("Error:", error);
    return Response.error();
  }
}

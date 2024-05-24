export const defaultFilters = {
  sortBy: "popularity.desc",
  with_genres: [],
  primary_release_year: null,
  vote_average_gte: "",
  vote_average_lte: "",
};

export const sortOptions = [
  { value: "popularity.desc", label: "Most Popular" },
  { value: "popularity.asc", label: "Least Popular" },
  { value: "vote_average.desc", label: "Most Rated" },
  { value: "vote_average.asc", label: "Least Rated" },
  { value: "vote_count.desc", label: "Most Voted" },
  { value: "vote_count.asc", label: "Least Voted" },
  { value: "revenue.desc", label: "Most Revenue" },
  { value: "revenue.asc", label: "Least Revenue" },
  { value: "original_title.desc", label: "Original Title (Desc)" },
  { value: "original_title.asc", label: "Original Title (Asc)" },
  { value: "primary_release_date.desc", label: "Release Date (Desc)" },
  { value: "primary_release_date.asc", label: "Release Date (Asc)" },
  { value: "title.desc", label: "Title (Desc)" },
  { value: "title.asc", label: "Title (Asc)" },
];

const FIRST_MOVIE_RELEASE_YEAR = 1985;
const currentYear = new Date().getFullYear();

export const yearsVariants = new Array(
  currentYear - FIRST_MOVIE_RELEASE_YEAR + 1
)
  .fill(currentYear)
  .map((year, index) => year - index);

export const navLinks = [
  { name: "Movies", href: "/" },
  { name: "Rated movies", href: "/rating" },
];

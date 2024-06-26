export const formatMovieRuntime = (runtime: number | null) => {
  if (!runtime) return "no data";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  const hoursString = hours > 0 ? hours.toString() + "h " : "";
  const minutesString = minutes > 0 ? minutes.toString() + "m" : "";

  return hoursString + " " + minutesString;
};

export const formatDate = (releaseDate: string) => {
  if (!releaseDate) return "no data";
  const date = new Date(releaseDate);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const formatCurrency = (budget: number) => {
  if (!budget) return "no data";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(budget);
};

export const formatVoteCount = (count: number) => {
  if (count >= 1000 && count < 1000000) {
    return (count / 1000).toFixed(1) + "K";
  } else if (count >= 1000000 && count < 1000000000) {
    return (count / 1000000).toFixed(1) + "M";
  }

  return count;
};

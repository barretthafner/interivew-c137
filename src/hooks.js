const FAKE_DATA = [
  {
    type: "Space Station",
    count: 2400,
  },
  {
    type: "Planet",
    count: 2210,
  },
];

const fetchLocationsPage = async (page = 1) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  await (async () => setTimeout(Promise.resolve, 2000))();
  return res.json();
};

/**
 * Exercise 1:
 * Use the fetchLocationsPage function to make a call to the api,
 * then aggregate and shape the data into the format the Recharts BarChart
 * is expecting (see FAKE_DATA for an example).
 *
 * You only need to fetch the first page for this exercise, but once you are done,
 * we'll discuss strategies for getting all the locations available.
 */
export const useLocations = () => {
  return { data: FAKE_DATA, loading: false };
};

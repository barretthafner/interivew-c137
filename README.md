# Rick and Morty Locations

For this challenge, we'll be creating a simple chart using the [Recharts](https://recharts.org/en-US/examples/SimpleBarChart)
charting library to display a count of the different `type` of locations found in the Rick and Morty universe.

To do this, we'll be using the [Rick and Morty API](https://rickandmortyapi.com/), and specifically
the https://rickandmortyapi.com/api/location Rest endpoint (though if you prefer to use the
[GraphQL endpoint](https://rickandmortyapi.com/graphql), that is also an option).

There are two exercies:

- Exercise 1 (line #20 of `hooks.js`):
  Complete the implementaion of the code used for fetching data from the API.

- Exercise 2 (line #11 of `App.jsx`):
  Implement a better loading state while we are fetching data.

Things to think about while completing this challenge:

- The api paginates the response. What would be your strategy for getting all of the pages so that our
  chart aggregates all of the locations available?
- How would you handle errors when the request fails? What sort of feedback would you give the user?

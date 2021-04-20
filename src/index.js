import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "./apollo";
import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);

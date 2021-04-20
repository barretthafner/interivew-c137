import React from "react";
import "./styles.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import { useLocations } from "./hooks";

export const App = () => {
  const { data, loading } = useLocations();

  /**
   * Exercise 2:
   * Implement a better loading state
   */
  return (
    <div className="App">
      <h1>Rick and Morty Locations</h1>
      {loading ? null : (
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Bar dataKey="count" fill="#97ce4c" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
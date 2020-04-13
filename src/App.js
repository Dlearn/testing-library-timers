import React, { useState } from "react";
import { useDebouncedCallback } from "./utils";
import "./styles.css";

const DEBOUNCE_TIMING = 500;

export default function App() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const getSearchListingsDebounced = useDebouncedCallback((q) => {
    setDebouncedQuery(q);
  }, DEBOUNCE_TIMING);

  return (
    <div className="App">
      <h1>Testing Library Timers</h1>
      <span>Input Value: </span>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
          getSearchListingsDebounced(e.target.value);
        }}
        type="text"
        value={query}
      />
      <div>
        <span>Debounced Value: </span>
        <span>{debouncedQuery}</span>
      </div>
    </div>
  );
}

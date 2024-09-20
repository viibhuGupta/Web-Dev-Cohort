import { createContext } from "react";

// Create the CountContext with default values
export const CountContext = createContext({
  count: 0, // Default value for count
  setCount: () => {}, // Default function for setCount (no-op)
});

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { FootballPlayerCard } from "./App";

let container = document.getElementById("app")!;
let root = createRoot(container);
root.render(
  <StrictMode>
    <FootballPlayerCard />
  </StrictMode>,
);

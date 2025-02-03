import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/base.css";

import App from "@/App.tsx";
import NavBar from "@/components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>,
);

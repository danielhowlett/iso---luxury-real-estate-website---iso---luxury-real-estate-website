import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IsoLuxuryReal } from "./screens/IsoLuxuryReal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <IsoLuxuryReal />
  </StrictMode>,
);

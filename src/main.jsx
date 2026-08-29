import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

if (import.meta.env.PROD) {
  import("posthog-js").then(({ default: posthog }) => {
    posthog.init("phc_hPyN9TDpc1LtN1z0xJNywMsA1kw2c8IgPl7vhFr08vh", {
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only",
    });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

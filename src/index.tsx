/**
 * index
 *
 *
 * @returns {JSX.Element}
 */
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import { Providers } from "./bootstrap/Providers";

/**
 * Root
 *
 *
 * @returns {JSX.Element}
 */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/** Render */
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

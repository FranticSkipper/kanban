import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { tasksStore } from "./features/kanban/store/tasks.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider tasksStore={tasksStore}>
      <App />
    </Provider>
  </StrictMode>
);

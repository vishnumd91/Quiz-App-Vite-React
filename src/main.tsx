import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./context/quiz.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </Router>
  </React.StrictMode>
);

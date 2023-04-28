import { Routes, Route } from "react-router-dom";
import QuizHome from "../pages/quiz-home";
import QuizSelect from "../pages/quiz-select";
import QuizPage from "../pages/quiz-page";
import QuizResult from "../pages/quiz-result";
import { ReactElement } from "react";

export const QuizRoutes = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuizHome />} />
        <Route path="/quiz-select" element={<QuizSelect />} />
        <Route path="/quiz-page" element={<QuizPage />} />
        <Route path="/quiz-result" element={<QuizResult />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </div>
  );
};

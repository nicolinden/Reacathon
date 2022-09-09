import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { LaunchDetailPage } from "./LaunchDetailPage/LaunchDetailPage";
import { InfoPage } from "./LaunchDetailPage/InfoPage";
import { NotFound } from "./NotFound/NotFound";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:lauchId" element={<LaunchDetailPage />}>
        <Route path="info" element={<InfoPage />} />
        <Route path="ships" element={<Home />} />
        <Route path="crew" element={<Home />} />
        <Route path="media" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

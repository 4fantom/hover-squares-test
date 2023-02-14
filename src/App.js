import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import RoutePaths from "./components/helpers/RoutePaths";

const HomePage = lazy(() => import("./components/home/Home"));
const GamePage = lazy(() => import("./components/game/Game"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route exact path={RoutePaths.root} element={<HomePage />} />
          <Route exact path={RoutePaths.game} element={<GamePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

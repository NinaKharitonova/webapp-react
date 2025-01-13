import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IndexMoviesPage from "./pages/movies/IndexMoviesPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} path="/">
            {/** Pagine principali */}
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />

            {/** Rotte della lista dei film */}
            <Route path="movies">
              <Route index element={<IndexMoviesPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

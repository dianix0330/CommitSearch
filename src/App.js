import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage, RepositoryPage, MainPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/:user/:repo" element={<RepositoryPage />}></Route>
          <Route exact path="/does/not/exist" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

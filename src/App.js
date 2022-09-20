import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorPage, RepositoryPage, MainPage } from "./pages";
import "./App.css";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route
              exact
              path="/:user/:repo"
              element={<RepositoryPage />}
            ></Route>
            <Route exact path="/does/not/exist" element={<ErrorPage />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;

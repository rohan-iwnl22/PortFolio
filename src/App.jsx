import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechStack from "./Pages/TechStack";
import Projects from "./Pages/Projects";
import Nav from "./Components/Nav";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/techstack" element={<TechStack />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

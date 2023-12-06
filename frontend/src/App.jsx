import { BrowserRouter, Route, Routes } from "react-router-dom";
import Professors from "./views/Professors";
import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";
import SingleProfessor from "./views/SingleProfessor";
import MyEvaluations from "./views/MyEvaluations";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/professors" element={<Professors />} />
          <Route path="/myevaluations" element={<MyEvaluations />} />
          <Route path="/professors/:id" element={<SingleProfessor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

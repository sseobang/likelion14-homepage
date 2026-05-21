import {BrowserRouter, Routes, Route} from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Members from "./pages/Members/Members.jsx";
import Recruit from "./pages/Recruit/Recruit.jsx";
import Project from "./pages/Project/Project.jsx";
import Login from "./pages/Login/Login.jsx";
import Minimembers from "./pages/Minimembers/Minimembers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Members />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/project" element={<Project />} />
          <Route path="/login" element={<Login />} />
          <Route path="/minimembers" element={<Minimembers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
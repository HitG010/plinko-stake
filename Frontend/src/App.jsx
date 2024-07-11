import "./App.css";
import { Routes, Route } from "react-router-dom";
import Simulate from "./pages/simulate";
import Game from "./pages/game";
import SignIn from "./pages/signIn";

function App() {
  return (
    <Routes>
      <Route path="/simulate" element={<Simulate />} />
      <Route path="/game" element={<Game />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;

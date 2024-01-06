import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />}></Route>
          <Route path="/players/:id" element={<SinglePlayer />}></Route>
          <Route path="/addNew" element={<NewPlayerForm />}></Route>
          <Route path="*" element={<AllPlayers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

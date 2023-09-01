import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Appbar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

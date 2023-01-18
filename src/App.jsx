import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import CountryA from "./components/CountryA.jsx";
import CountryB from "./components/CountryB.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="countryA" element={<CountryA />} />
          <Route path="countryB" element={<CountryB />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

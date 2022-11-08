import { Routes, Route, BrowserRouter } from "react-router-dom";
import Control from "../Pages/Control";
import Display from "../Pages/Display";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
        <Route path="/control" element={<Control />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

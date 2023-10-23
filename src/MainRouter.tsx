import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";

function MainRouter() {
  return (
      <Router>
          <Routes>
              <Route path="/" element ={<Landing/>} />
          </Routes>
      </Router>
  );
}

export default MainRouter;

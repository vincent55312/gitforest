import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import UserPage from "./pages/UserPage";

function MainRouter() {
  return (
      <Router>
          <Routes>
              <Route path="/" element ={<Landing/>} />
              <Route path="/" element ={<UserPage/>} />
          </Routes>
      </Router>
  );
}

export default MainRouter;

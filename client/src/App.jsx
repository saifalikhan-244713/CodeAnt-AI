import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import RepositoryPage from "./pages/RepositoryPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/repository" element={<RepositoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

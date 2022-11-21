import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import FooterPage from "./components/Footer";
import MyNavBar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import ProblemDetail from "./pages/Problem/Detail";
import Submission from "./pages/Submission";
import SubmissionDetail from "./pages/Submission/Detail";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Container style={{ minHeight: "78vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/problem/:problemId" element={<ProblemDetail />} />
          <Route path="/submission" element={<Submission />} />
          <Route
            path="/submission/:submissionId"
            element={<SubmissionDetail />}
          />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <hr />
      <FooterPage />
    </div>
  );
}

export default App;

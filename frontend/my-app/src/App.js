import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import { loadCurrentUser, selectUser } from "./store/user/userSlice";
import { store as storeLocation } from "store";
import Protected from "./components/ProtectRouter";
function App() {
  const { isAuthorized } = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      !isAuthorized &&
      location.pathname !== "/login" &&
      location.pathname !== "/signup"
    ) {
      navigate("/login");
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="App">
      <MyNavBar isAuthorized={isAuthorized} />
      <Container style={{ minHeight: "78vh" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Protected isLoggedIn={isAuthorized}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/user"
            element={
              <Protected isLoggedIn={isAuthorized}>
                <User />
              </Protected>
            }
          />
          <Route
            path="/problem"
            element={
              <Protected isLoggedIn={isAuthorized}>
                <Problem />
              </Protected>
            }
          />
          <Route
            path="/problem/:problemId"
            element={
              <Protected isLoggedIn={isAuthorized}>
                <ProblemDetail />
              </Protected>
            }
          />
          <Route
            path="/submission"
            element={
              <Protected isLoggedIn={isAuthorized}>
                <Submission />
              </Protected>
            }
          />
          <Route
            path="/submission/:submissionId"
            element={
              <Protected isLoggedIn={isAuthorized}>
                <SubmissionDetail />
              </Protected>
            }
          />

          {/* auth */}
          <Route
            path="/login"
            element={
              <Protected isLoggedIn={!isAuthorized}>
                <Login />
              </Protected>
            }
          />
          <Route
            path="/signup"
            element={
              <Protected isLoggedIn={!isAuthorized}>
                <Register />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <hr />
      <FooterPage />
    </div>
  );
}

export default App;

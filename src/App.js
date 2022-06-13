import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Userdashboard from "./components/UserDashBoard";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginStatus } from "./slices/userSlice";

function App() {
  let { isSuccess } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const onLogout = () => {
    //remove token from local storage
    localStorage.clear();
    dispatch(clearLoginStatus());
  };
  return (
    <>
      <div className="App">
        {/*Navigation link*/}
        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand href="#home">Web App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="ms-auto">
                {isSucces == false ? (
                  <>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </>
                ) : (
                  <Link className="nav-link" to="/login" onClick={onLogout}>
                    Logout
                  </Link>
                )}
              </Nav> */}
              <Nav className="ms-auto">
                {isSuccess == false ? (
                  <>
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </>
                ) : (
                  <NavLink className="nav-link" to="/login" onClick={onLogout}>
                    Logout
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/*Routing*/}
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/register" element={<Register />}>
          Register
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route
          path="/userdashboard/:username"
          element={<Userdashboard />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

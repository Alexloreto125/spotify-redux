import { Button, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getMusicAction } from "../redux/store/actions";
import { Link } from "react-router-dom";
const SideBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    dispatch(getMusicAction(searchTerm));
  };
  return (
    <aside className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <img
            src={logo}
            alt="Spotify Logo"
            width="131"
            height="40"
            className="mt-2 mb-3"
          />

          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  {/* <Link to={"/fav"}>
                    <a
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </a>
                  </Link> */}
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="input-group-append">
                      <Button
                        className="btn btn-outline-secondary btn-sm h-100"
                        onClick={handleSearch}
                      >
                        GO
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Row className="nav-btn">
          <Col>
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
          </Col>
          <Col>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
          </Col>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </Row>
      </nav>
    </aside>
  );
};
export default SideBar;

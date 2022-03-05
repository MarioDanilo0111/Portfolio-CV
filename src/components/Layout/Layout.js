import { Outlet } from "react-router-dom";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Log from "../img/cv.png";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div
      style={{
        backgroundColor: "lightsalmon",
        color: "white",
      }}
    >
      <Navbar bg="dark" variant={"dark"} expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Log}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            CV Portfile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/intro">Intro</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/imgList">ImgList</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
        <Footer />
      </section>
    </div>
  );
};

export default Layout;

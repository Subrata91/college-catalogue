import React from "react";
import {
  Nav1,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./Navbarelements";

import {Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import Testimonials from "./TestimonialsPage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faCogs,
  faGavel,
  faMoneyBillAlt,
  faNotesMedical
} from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";
import image1 from "./pictures/Bridgewater College.jpg";

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="first-navbar">
          <Navbar
            className="color-nav"
            style={{position: "relative"}}
            collapseOnSelect
            expand="lg"
            variant="light"
          >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="https://www.facebook.com" target="_blank">
                  {" "}
                  <FacebookIcon style={{fill: "#000"}}> </FacebookIcon>
                </Nav.Link>
                <Nav.Link href="https://www.twitter.com" target="_blank">
                  {" "}
                  <TwitterIcon style={{fill: "#000"}}> </TwitterIcon>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com" target="_blank">
                  {" "}
                  <LinkedInIcon style={{fill: "#000"}}> </LinkedInIcon>
                </Nav.Link>
                <Nav.Link href="https://www.youtube.com" target="_blank">
                  {" "}
                  <YouTubeIcon style={{fill: "#000"}}> </YouTubeIcon>
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com" target="_blank">
                  {" "}
                  <InstagramIcon style={{fill: "#000"}}> </InstagramIcon>
                </Nav.Link>
                <NavDropdown
                  title="Select Country"
                  id="collasible-nav-dropdown"
                  style={{paddingLeft: "30px"}}
                >
                  <NavDropdown.Item href="#"> India </NavDropdown.Item>
                  <NavDropdown.Item href="#"> United States </NavDropdown.Item>
                  <NavDropdown.Item href="#"> United Kingdom </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#"> Other Country </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#" style={{paddingRight: "20px"}}>
                  <PersonIcon
                    style={{paddingBottom: "3px", fill: "#000"}}
                  ></PersonIcon>{" "}
                  Register{" "}
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  style={{paddingRight: "10px"}}
                >
                  <FontAwesomeIcon icon={faSignInAlt} style={{color: "#000"}} />{" "}
                  Sign In{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="second-navbar">
          <Nav1>
            <a href="/" style={{textDecoration: "none"}}>
              <h4 className="brand-name">CollegeCatalogue</h4>
            </a>
            <Bars />
            <NavMenu>
              <NavLink to="#categories" activeStyle>
                Categories
              </NavLink>
              <NavLink to="#" activeStyle>
                Featured Colleges
              </NavLink>
              <NavLink to="#testimonials" activeStyle>
                Testimonials
              </NavLink>
              <NavLink to="#" activeStyle>
                Contact Us
              </NavLink>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/CollegeList">List of Colleges</NavBtnLink>
            </NavBtn>
          </Nav1>
        </div>
        <div className="title-image">
          <img
            src={image1}
            style={{
              maxWidth: "100%",
              height: "auto",
              filter: "grayscale(75%)"
            }}
          />
        </div>
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            name=""
            placeholder="Search for colleges, courses, and degrees"
          />
          <a className="search-btn" href="#">
            <SearchIcon style={{fill: "#000", fontSize: "30px"}}></SearchIcon>
          </a>
        </div>
      </section>

      <section id="categories">
        <div>
          <h2
            style={{
              position: "relative",
              display: "block",
              padding: "50px 10px 0px 10px"
            }}
          >
            <strong>Categories</strong>
          </h2>
          <hr />
        </div>
        <div className="container col-lg-12">
          <div className="card">
            <div className="circle">
              <FontAwesomeIcon
                icon={faCogs}
                style={{
                  color: "#fff",
                  height: "5em",
                  width: "5em",
                  marginTop: "40px"
                }}
              />
            </div>
            <div className="content" style={{marginLeft: "15px"}}>
              <h3>Engineering</h3>
            </div>
          </div>

          <div className="card">
            <div className="circle">
              <FontAwesomeIcon
                icon={faNotesMedical}
                style={{
                  color: "#fff",
                  height: "5em",
                  width: "5em",
                  marginTop: "40px"
                }}
              />
            </div>
            <div className="content" style={{marginLeft: "40px"}}>
              <h3>Medical</h3>
            </div>
          </div>

          <div className="card">
            <div className="circle">
              <FontAwesomeIcon
                icon={faGavel}
                style={{
                  color: "#fff",
                  height: "5em",
                  width: "5em",
                  marginTop: "40px"
                }}
              />
            </div>
            <div className="content" style={{marginLeft: "70px"}}>
              <h3>Law</h3>
            </div>
          </div>

          <div className="card">
            <div className="circle">
              <FontAwesomeIcon
                icon={faMoneyBillAlt}
                style={{
                  color: "#fff",
                  height: "5em",
                  width: "5em",
                  marginTop: "40px"
                }}
              />
            </div>
            <div className="content" style={{marginLeft: "20px"}}>
              <h3>Commerce</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div>
          <h2
            style={{
              position: "relative",
              display: "block",
              padding: "4px 10px 5px 10px"
            }}
          >
            <strong>Testimonials</strong>
          </h2>
          <hr />
        </div>
        <div className="testimonial-container col-lg-12">
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Home;

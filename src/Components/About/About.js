import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import trainer from "../../trainer-image.png";
import "./About.css";

const About = () => {
  return (
    <div>
      {/* header section */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand fs-4 text-danger fw-bold" href="/">
              <img
                src={logo}
                alt=""
                width="40"
                height="34"
                className="d-inline-block align-text-top"
              />
              Titan <span className="text-light">Fitness Club</span>
            </a>
            <div className="d-flex justify-content-lg-end fw-bold">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link active"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* about section */}
        <section>
          <div className="jumbotron jumbotron-fluid about-image p-5 text-light">
            <h1 className="fs-2 fw-bold mt-3">
              <span className="text-danger">ABOUT</span>
            </h1>
            <p className="my-3 display-4 fw-bold">
              THE BEST PERSONAL TRAINERS IN <br /> TITAN FITNESS CLUB
            </p>
            <p className="fs-4">
              Put an end to the mid-afternoon slump, or having to bust out the
              WD40 in <br /> order to squeeze into your best suit-trousers or
              dress
            </p>
          </div>

          <div className="row my-5 container-fluid">
            <img className="col-md-6 img-fluid" src={trainer} alt="" />
            <div className="col-md-6 d-flex align-items-center">
              <h1 className="display-5 text-danger me-2">WHO ARE WE?</h1>
              <p className="text-secondary fs-5">
                I’m guessing you’ve either ended up here from a quick google
                search for a personal trainer in Dwayne Johnson, via a
                recommendation from a friend, or navigated your way over from
                one of our hilarious, insightful & poignant social media posts
                So now you’re looking around, trying to figure out if we’re the
                answer you’re looking for (and frankly, we’d love to know if we
                are too) So let’s start simple: who are we? Titan Fitness Club
                is a Small Group (up to six clients to one coach) & Personal
                Training search for a personal trainer in Dwayne Johnson, via a
                Facility in . We provide bespoke training, nutrition guidance
                and a mix of both accountability and community that strives to
                make fitness and health a valued and enjoyable part of your
                life.
              </p>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="bg-secondary p-3 mt-5">
          <div className="d-flex justify-content-between container">
            <div className="col-3 text-left">
              <h1 className="fs-4">Services</h1>
              <Link
                to="/services"
                className="text-decoration-none text-light d-block"
              >
                Small Group Training
              </Link>
              <Link
                to="/services"
                className="text-decoration-none
              text-light d-block"
              >
                One To One Personal Training
              </Link>
              <Link
                to="/services"
                className="text-decoration-none text-light d-block"
              >
                Nutrition Coaching
              </Link>
              <Link
                to="/services"
                className="text-decoration-none text-light d-block"
              >
                Online Training
              </Link>
            </div>
            <div className="col-3 text-center">
              <h1 className="fs-4">Company</h1>
              <Link
                to="/about"
                className="text-decoration-none text-light d-block"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-decoration-none text-light d-block"
              >
                Blog
              </Link>
            </div>

            <div className="col-3 text-center">
              <h1 className="fs-4">Support</h1>
              <Link
                to="/about"
                className="text-decoration-none text-light d-block"
              >
                Contact
              </Link>
            </div>

            <div className="col-3 text-end">
              <h1 className="fs-4">Address</h1>
              <Link to="/home" className="text-decoration-none text-light">
                Titan Fitness Club
              </Link>
              <span className="text-light d-block">House No: 161,R/D: 8/A</span>
              <span className="text-light d-block">Dhanmondi,Dhaka</span>
              <span className="text-light d-block">Bangladesh</span>
            </div>
          </div>
          <p className="text-center m-0">
            All rights reserved &copy;{" "}
            <span className="fw-bold">Titan Fitness Club</span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default About;

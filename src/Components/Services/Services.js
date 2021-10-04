import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import ServicesPage from "../ServicesPage/ServicesPage";

const Services = () => {
  const [services, setServices] = useState([]);

  // load fake data
  useEffect(() => {
    fetch("./fakeapi.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-link active"
                    aria-current="page"
                  >
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
        {/* service pages section */}
        <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid my-3">
          {services.map((service) => (
            <ServicesPage key={service.id} service={service}></ServicesPage>
          ))}
        </div>

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

export default Services;

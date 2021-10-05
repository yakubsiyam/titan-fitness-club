import React from "react";
import { Link } from "react-router-dom";

const HomePageServices = (props) => {
  // destructuring
  const { url, title, description, trainer, price, duration, category } =
    props.service;
  return (
    <div className="col">
      <div className="card d-flex flex-column justify-content-between rounded shadow bg-light h-100">
        <div>
          <img src={url} className="card-img-top img-fluid" alt="..." />

          <div className="card-body text-center">
            <h5 className="card-title fs-3 fw-bold">{title}</h5>
            <p className="card-text fs-5">{description}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-light">
                <span className="card-text fs-5">
                  Trainer:{" "}
                  <span className="text-danger fw-bold">{trainer}</span>
                </span>
              </li>
              <li className="list-group-item bg-light">
                <span className="fs-5">
                  Price:{" "}
                  <span className="text-danger fw-bold">
                    ${price} / <span className="fs-6">Month</span>
                  </span>
                </span>
              </li>
              <li className="list-group-item bg-light">
                <span className="fs-5">
                  Time: <span className="text-danger fw-bold">{duration}</span>
                </span>
              </li>
              <li className="list-group-item bg-light">
                <span className="fs-5">
                  Category:{" "}
                  <span className="text-danger fw-bold">{category}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Link
            to="/services"
            className="col-lg-3 col-5 btn btn-danger d-block mx-auto my-2"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;

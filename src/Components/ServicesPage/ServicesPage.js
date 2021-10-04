import React from "react";

const ServicesPage = (props) => {
  // destructuring
  const {
    url,
    description,
    trainer,
    category,
    price,
    level,
    duration,
    title,
    id,
  } = props.service;
  return (
    <div className="col text-center">
      <div className="card d-flex flex-column justify-content-between rounded shadow bg-light h-100">
        <div>
          <img src={url} className="card-img-top img-fluid w-100" alt="..." />

          <div className="card-body">
            <h5 className="card-title fw-bold">
              {id}. {title}
            </h5>
          </div>

          <div className="p-3">
            <p className="card-text mx-auto">{description}</p>
            <p>
              Duration: <span className="text-danger fw-bold">{duration}</span>
            </p>
            <p>
              Price: <span className="text-danger fw-bold">${price}</span>
              /Month
            </p>
            <p>
              Trainer: <span className="text-danger fw-bold">{trainer}</span>
            </p>
            <p>
              Category: <span className="text-danger fw-bold">{category}</span>
            </p>
            <p>
              Level: <span className="text-danger fw-bold">{level}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

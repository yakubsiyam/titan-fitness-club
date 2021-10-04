import React from "react";
import { Link } from "react-router-dom";

const BlogPages = (props) => {
  // destructuring
  const { title, description, img, date, writer } = props.blog;
  return (
    <div className="w-75 rounded mx-auto border m-4 bg-light shadow border border-danger">
      <img
        src={img}
        className="card-img-top img-fluid d-block rounded"
        alt="..."
      />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Publised: {date}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Author: {writer}</small>
        </p>
        <Link to="/blog" className="nav-link btn btn-danger w-25 w-md-50">
          <span className="text-light">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogPages;

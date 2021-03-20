import React from "react";
import Banner from "../Banner/Banner";

const Blog = () => {
  return (
    <div>
      <div className="container">
        <Banner>
          <h3>Most popular blog posts....</h3>{" "}
        </Banner>
      </div>
      <div>
        {[...Array(4)].map((article, index) => (
          <Article key={index} days={index} />
        ))}
      </div>
    </div>
  );
};

const Article = ({ days }) => {
  return (
    <div className="card text-center w-75 m-auto mt-5">
      <div className="card-header">Featured</div>
      <div className="card m-auto" style={{ maxWidth: "6000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="w-75 p-3"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <p className="card-text">
          <small className="text-muted">
            Last updated {days + 1 * 2} days ago
          </small>
        </p>
      </div>
    </div>
  );
};

export default Blog;

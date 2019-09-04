import React from 'react';

const AboutCard = () => {
  return (
    <div>
      <div className="card card-about">
        <div className="card-body">
          <h2 className="card-h2-about">Start your seamless experience now</h2>
        </div>
        <form className="start-form form-inline my-2 my-lg-0">
          <input
            className="form-about mr-sm-2"
            type="search"
            placeholder="Enter your email address"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success btn-about my-2 my-sm-0"
            type="submit"
          >
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutCard;

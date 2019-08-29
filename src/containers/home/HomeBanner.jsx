import React from 'react';

const HomeBanner = () => {
  return (
    <div>
      <section className="home-banner-area">
        <div className="container-fluid">
          <div
            className="row fullscreen d-flex align-items-center"
            style={{ paddingTop: '40px' }}
          >
            <div
              className="banner-content col-lg-4 col-md-12 justify-content-center "
              style={{ marginLeft: '-43px' }}
            >
              <h1
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                Turning chats into insights
              </h1>
              <div
                className="designation mb-25 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <p className="text-banner">
                  No matter what messaging your customers are comfortable with
                  they would be able to communicate with you seamlessy
                </p>
              </div>
            </div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="search-form mr-sm-2"
                type="search"
                placeholder="Enter your email address"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success btn-search my-2 my-sm-0"
                type="submit"
              >
                Start Free Trial
              </button>
            </form>
            <img
              className="bermuda"
              src="../../public/img/home/bermuda-message-sent.png"
              alt=""
            />
            <img
              className="bermuda-done"
              src="../../public/img/home/bermuda-done.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;

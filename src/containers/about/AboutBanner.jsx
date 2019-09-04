import React from 'react';

const AboutBanner = () => {
  return (
    <div>
      <section className="home-banner-area">
        <div className="container-fluid">
          <div
            className="row fullscreen d-flex align-items-center"
            style={{ marginTop: '-260px' }}
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
                Hello, bro!
              </h1>
              <div
                className="designation mb-25 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <p className="text-about">
                  Meet the team behind Halobro and how we work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;

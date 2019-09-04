import React from 'react';

const AboutHeads = () => {
  return (
    <div>
      <section className="page-client" id="services">
        <div className="container" style={{ marginTop: '-87px' }}>
          <h2 className="p-support text-center mt-0 ">Our Heads</h2>
          <p className="text-head">
            Meet HaloBRO, an interactive marketing platform that will boost your
            marketing team performance
          </p>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5 ">
                <i className="fas fa-4x text-primary mb-4">
                  <img
                    className="foto-1"
                    src="../../public/img/about/1.png"
                    alt=""
                    width="150px"
                  />
                  <h2 className="nama-about">Andree Wijaya</h2>
                </i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5 ">
                <i className="fas fa-4x fa-laptop-code text-primary mb-4">
                  <img
                    className="foto-2"
                    src="../../public/img/about/Intersection 2@2x.png"
                    alt=""
                    width="180px"
                  />
                  <h2 className="nama-about2">Humphrey JP</h2>
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeads;

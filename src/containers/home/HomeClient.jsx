import React from 'react';

const HomeClient = () => {
  return (
    <div>
      <section className="page-client" id="services">
        <div className="container" style={{ marginTop: '-87px' }}>
          <h2 className="p-support text-center mt-0 ">Our Client</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5 ">
                <i className="fas fa-4x text-primary mb-4">
                  <img
                    className="logo-c1"
                    src="../../public/img/home/PXL.png"
                    alt=""
                    width="150px"
                  />
                </i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5 ">
                <i className="fas fa-4x fa-laptop-code text-primary mb-4">
                  <img
                    className="logo-c2"
                    src="../../public/img/home/unnamed-8.png"
                    alt=""
                    width="180px"
                  />
                </i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5 ">
                <i className="fas fa-4x fa-globe text-primary mb-4">
                  <img
                    className="logo-c3"
                    src="../../public/img//home/images-2.png"
                    alt=""
                    width="150px"
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeClient;

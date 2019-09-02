/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const HomeAnalytic = () => {
  return (
    <div>
      <section id="gtco-welcome" className="bg-white section-padding analytic">
        <div className="container ">
          <div className="section-content mb-4">
            <div className="row">
              <div className="col-lg-7 py-5 pl-md-0 pl-4">
                <img
                  className="icon-an"
                  src="../../public/img/home/analytic_2.png"
                  alt=""
                />
                <div className="heading-section pl-lg-5 ml-md-5 how-work-cont3 text-right">
                  <h2 className="text-an">Analytics and Machine Learning</h2>
                </div>
                <div className="pl-lg-5 ml-md-5 text-right texts">
                  <p className="p-an">
                    Update and tag the most accurate profile information for
                    every individual customer. Real-time quality check on the
                    interactions.
                  </p>
                </div>
                <button className="button-an">Free Trial</button>
                <p className="p-an2">
                  To translate the massive and unstructured data into meaningful
                  business insights for our clients
                </p>
              </div>
            </div>
            <video className="v-an" src="../../public/video/halobro-3.m4v" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAnalytic;

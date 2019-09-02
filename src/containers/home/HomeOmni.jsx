/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const HomeOmni = () => {
  return (
    <div>
      <section id="gtco-welcome" className="bg-white section-padding omni">
        <div className="container ">
          <div className="section-content mb-4">
            <div className="row">
              <div className="col-lg-7 py-5 pl-md-0 pl-4">
                <img
                  className="icon-om"
                  src="../../public/img/home/channel-copy.png"
                  alt=""
                />
                <div className="heading-section pl-lg-5 ml-md-5 how-work-cont3 text-right">
                  <h2 className="text-om">Omni-Channel</h2>
                </div>
                <div className="pl-lg-5 ml-md-5 text-right texts">
                  <p className="p-om">
                    HaloBro unify all channels owned by businesses or
                    organizations. All messaging from those channels will be
                    seamlessly-presented in a single window.
                  </p>
                </div>
                <button className="button-om">Free Trial</button>
                <div className="col-lg-3 col-md-5 mt-3 ml-2 mb-4 sosmed-om">
                  <img
                    className="mes"
                    src="../../public/img/home/logo-messenger-01-copy.png"
                    alt=""
                  />
                  <img
                    className="fill-4-"
                    src="../../public/img/home/Fill-4.png"
                    alt=""
                  />
                  <img
                    className="line2"
                    src="../../public/img/home/logo-messenger-04-copy.png"
                    alt=""
                  />
                  <img
                    className="wa-2"
                    src="../../public/img/home/whatsapp-logo-variant.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <video className="v-om" src="../../public/video/halobro-1.m4v" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeOmni;

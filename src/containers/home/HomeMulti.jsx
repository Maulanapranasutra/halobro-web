/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const HomeMulti = () => {
  return (
    <div>
      <section id="gtco-welcome" className="bg-white section-padding multi">
        <div className="container ">
          <div className="section-content mb-4">
            <div className="row">
              <div className="col-lg-7 py-5 pl-md-0 pl-4">
                <img
                  className="icon-mul"
                  src="../../public/img/home/Group 2.png"
                  alt=""
                />
                <div className="heading-section pl-lg-5 ml-md-5 how-work-cont3 text-right">
                  <h2 className="text-mul">Multi Agent</h2>
                </div>
                <div className="pl-lg-5 ml-md-5 text-right texts">
                  <p className="p-mul">
                    HaloBro enables teamwork with multiple agents handling the
                    real-time communication from numerous channels concurrently.
                  </p>
                </div>
                <button className="button-multi">Free Trial</button>
                <p className="p-mul2">
                  We enable custom plugins to enhance the functionality of the
                  chat, hence creating an even more personalized workflow for
                  clients’ agents to better service the customers
                </p>
              </div>
            </div>
            <video className="v-mul" src="../../public/video/halobro-2.m4v" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMulti;

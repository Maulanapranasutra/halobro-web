/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class HomeCards extends Component {
  render() {
    return (
      <div>
        <section className="page-card">
          <div className="container-fluid">
            <div className="row all-card">
              <div
                className="card text-white bg-warning mb-3"
                style={{ marginLeft: '50px' }}
              >
                <div className="card-body body-kun">
                  <img
                    className="icon-card"
                    src="../../public/img/home/channel.png"
                    alt=""
                  />
                  <h5 className="card-title title-kun">Omni-Channel</h5>
                  <p className="card-text">
                    halobro unify ail channels owned by bussines or
                    organizations. All messaging from those channels will be
                    seamlessly-presented in a single window
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-danger mb-3"
                style={{ marginLeft: '29px' }}
              >
                <div className="card-body body-mer">
                  <img
                    className="icon-card2"
                    src="../../public/img/home/hand.png"
                    alt=""
                  />
                  <h5 className="card-title title-mer">Multi-Agent</h5>
                  <p className="card-text-mer">
                    HaloBro enables teamwork with multiple agents handling the
                    real time communication from numerous channels concurrently
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-primary mb-3"
                style={{ marginLeft: '29px' }}
              >
                <div className="card-body body-bir">
                  <img
                    className="icon-card3"
                    src="../../public/img/home/analytic.png"
                    alt=""
                  />
                  <h5 className="card-title title-bir">
                    Analytics and Machine Learning
                  </h5>
                  <p className="card-text-bir">
                    Update and tag the most accurate profile information for
                    every individual customer. Real time quality check on the
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeCards;

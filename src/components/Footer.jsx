import React from 'react';

const HomeFooter = () => {
  return (
    <section className="footer-sec">
      <div className="footer-buttom-1">
        <img
          className="logo-footer"
          src="../../public/img/home/halobro-logo-02_2.png"
          alt=""
        />

        <div className="col-lg-3 col-md-5 mt-3 ml-2 mb-4 sosmed">
          <img className="fb" src="../../public/img/home/facebook.png" alt="" />
          <img
            className="fill-4"
            src="../../public/img/home/Fill-4_2.png"
            alt=""
          />
          <img
            className="line"
            src="../../public/img/home/logo-messenger-04-copy_2.png"
            alt=""
          />
          <img
            className="wa-1"
            src="../../public/img/home/whatsapp-logo-variant_3.png"
            alt=""
          />

          <form className="search-footer form-inline my-2 my-lg-0">
            <input
              className="form-footer mr-sm-2"
              type="search"
              placeholder="Your email address"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-footer my-2 my-sm-0"
              type="submit"
            >
              Start Free Trial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;

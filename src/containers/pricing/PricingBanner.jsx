import React from 'react';

const PricingBanner = () => {
  return (
    <div>
      <div>
        <h1 className="pricing" data-wow-duration="1s" data-wow-delay=".6s">
          Pricing
        </h1>
        <div
          className="designation mb-25 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <p className="text-about">Or get your free trial for 14 days</p>
          <div>
            <img
              className="img-pricing"
              src="public/img/home/bermuda-payment-processed@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;

import React from 'react';

const ContactHome = () => {
  return (
    <div className="contact-bc">
      <br />
      <br />
      <br />
      <h1 className="contact-1">Contact Us</h1>
      <p className="contact-2">
        Let us know how we can help. Our team will get back to you as fast as
        posible.
      </p>
      <div>
        <form className="form-contact">
          <br />
          <br />
          <h1 className="send-contact">Send us a message</h1>
          <label className="fullname" htmlFor="fname">
            Full Name
          </label>
          <input
            className="input-fullname"
            type="text"
            id="fname"
            name="fname"
          />
          <label className="fullname" htmlFor="fname">
            Email
          </label>
          <input
            className="input-fullname"
            type="text"
            id="fname"
            name="fname"
          />
          <label className="fullname" htmlFor="fname">
            Message
          </label>
          <textarea
            className="input-komen"
            type="text"
            id="fname"
            name="fname"
          />
          <button className="send">Send</button>
        </form>
        <div>
          <img
            className="img-contact"
            src="public/img/home/bermuda-page-not-found@2x.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="email-img"
            src="public/img/home/email-filled-closed-envelope.png"
            alt=""
          />
          <p className="email-info" htmlFor="fname">
            info@halobro.com
          </p>
        </div>
        <div>
          <img className="fb-img" src="public/img/home/facebook.png" alt="" />
          <p className="fb-info" htmlFor="fname">
            facebook.com/halobroteam
          </p>
        </div>
        <div>
          <img className="tl-img" src="public/img/home/Fill-4_2.png" alt="" />
          <p className="tl-info" htmlFor="fname">
            telegram.me/halobroteamBot
          </p>
        </div>
        <div>
          <img
            className="ln-img"
            src="public/img/home/logo-messenger-04-copy_2.png"
            alt=""
          />
          <p className="ln-info" htmlFor="fname">
            @halobroteam
          </p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ContactHome;

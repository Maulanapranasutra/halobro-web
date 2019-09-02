import React from 'react';

const LoginHome = () => {
  return (
    <div>
      {/* <img className="img-login" src="/public/img/home/Group 34.png" alt="" /> */}
      <br />
      <br />
      <h1 className="sign">Sign into your account</h1>
      <p className="connect">
        Now you can connect to all of your customers only in one click
      </p>
      <form action="">
        <input
          className="company"
          type="text"
          name=""
          id="name"
          placeholder="Company Name"
        />
        <br />
        <br />
        <input
          type="email"
          name=""
          id="pass"
          className="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          name=""
          id="pass"
          className="pw"
          placeholder="Password"
        />
        <br />
        <img className="bitmap" src="/public/img/home/bitmap.png" alt="" />
        <button className="button-login1 btn">Log In </button>
        <img className="img-login" src="/public/img/home/Group 34.png" alt="" />
      </form>
    </div>
  );
};

export default LoginHome;

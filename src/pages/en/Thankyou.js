import React from "react";

const Thankyou = () => {
  return (
    <div class="jumbotron text-center" style={{height: '100vh'}}>
      <h1 class="display-3">Thank You!</h1>
      <p class="lead">
        <strong>Please check your email</strong> for further instructions on how
        to complete your account setup.
      </p>
      <hr />
      <p>
        Having trouble? <a href="/contact">Contact us</a>
      </p>
      <p class="lead">
        <a
          class="btn btn-primary btn-sm"
          href="/"
          role="button"
        >
          Continue to homepage
        </a>
      </p>
    </div>
  );
};

export default Thankyou;

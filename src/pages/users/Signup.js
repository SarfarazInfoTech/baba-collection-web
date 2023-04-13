import React from "react";

const Signup = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Register - SB Admin</title>
      <link href="css/styles.css" rel="stylesheet" />
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <label htmlFor="inputFirstName">First name</label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <label htmlFor="inputLastName">Last name</label>
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <label htmlFor="inputEmail">Email address</label>
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <label htmlFor="inputPassword">Password</label>
                              <input
                                className="form-control"
                                id="inputPassword"
                                type="password"
                                placeholder="Create a password"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <label htmlFor="inputPasswordConfirm">
                                Confirm Password
                              </label>
                              <input
                                className="form-control"
                                id="inputPasswordConfirm"
                                type="password"
                                placeholder="Confirm password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <a
                              className="btn btn-primary btn-block"
                              href="/login"
                            >
                              Create Account
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/login">Have an account? Go to login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Signup;

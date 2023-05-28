import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, isAuth, user } = useSelector((state) => state.user);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header bg-primary">
                  <h3 className="text-center font-weight-light my-4">
                    Forgot Password
                  </h3>
                </div>
                <div className="card-body">
                  <form onSubmit={() => {}}>
                    <div className="form-floating mb-3">
                      <label htmlFor="inputEmail">Email address</label>
                      <input
                        className="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    {/* <div className="form-floating mb-3">
                      <label htmlFor="inputPassword">Password</label>
                      <input
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div> */}

                    <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                        {/* <a className="small h5" href="/password/forgot">
                        Forgot Password?
                        </a> */}
                      <button type="submit" className="btn btn-primary px-5">
                        SEND EMAIL
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3">
                  <button type="button" className="btn btn-success">
                    <a
                      href="/login"
                      className="text-decoration-none text-light"
                    >
                      Back to Login
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;

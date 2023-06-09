import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearError, signup } from "../../actions/UserAction";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import history, { userSession } from "../../session/history";

const Signup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isAuth } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const Register = (e) => {
    e.preventDefault();
    // const myForm = new FormData();
    // myForm.set("name", name + lname);
    // myForm.set("email", email);
    // myForm.set("mobile", mobile);
    // myForm.set("password", password);
    dispatch(signup(name, email, mobile, password));
  };

  useEffect(() => {
    if (userSession) return window.location.replace("/");
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isAuth) {
      history.push("/login");
      window.location.reload();
    }
  }, [dispatch, error, alert, isAuth, history]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
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
                  <form onSubmit={Register}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <label htmlFor="inputFirstName">Full name</label>
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <label htmlFor="inputMobile">Mobile No</label>
                          <input
                            className="form-control"
                            id="inputMobile"
                            type="number"
                            name="mobile"
                            placeholder="Enter your mobile no"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
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
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                            name="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-block">
                          Create Account
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="card-footer text-center py-3">
                  <button type="button" className="btn btn-success">
                    <a
                      href="/login"
                      className="text-decoration-none text-light"
                    >
                      Go to Login
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

export default Signup;

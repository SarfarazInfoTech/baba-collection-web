import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../actions/UserAction";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import history, { userSession } from "../../session/history";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isAuth, user } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  };

  useEffect(() => {
    if (userSession) return window.location.replace("/");
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isAuth) {
      window.sessionStorage.setItem("User", JSON.stringify(user));
      window.location.replace("/");
    }
  }, [dispatch, error, alert, isAuth, history]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className=" bg-light" style={{ height: "100%" }}>
          <div className="container" style={{ height: 156 }}>
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header bg-primary">
                    <h3 className="text-center font-weight-light my-4">
                      Login
                    </h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={SignIn}>
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
                      <div className="form-floating mb-3">
                        <label htmlFor="inputPassword">Password</label>
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          id="inputRememberPassword"
                          type="checkbox"
                          defaultValue=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inputRememberPassword"
                        >
                          Remember Password
                        </label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small h5" href="/password/forgot">
                          Forgot Password?
                        </a>
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <button type="button" className="btn btn-success">
                      <a
                        href="/signup"
                        className="text-decoration-none text-light"
                      >
                        SIGN UP
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

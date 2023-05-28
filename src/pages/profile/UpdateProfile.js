import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearError, editProfile, getProfile } from "../../actions/UserAction";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Topbar from "../../components/Topbar";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isAuth, user } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const Update = (e) => {
    e.preventDefault();
    dispatch(editProfile(name, email, mobile));
    alert.success("Update Success");
    window.location.reload();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isAuth) {
      setName(user.name);
      setEmail(user.email);
      setMobile(user.mobile);
      setPassword(user.password);
      window.sessionStorage.setItem("User", JSON.stringify(user));
    }
  }, [dispatch, loading, error, isAuth, user]);

  return (
    <>
      <Topbar />
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <h4 className="font-weight-light">Update Profile</h4>
          <div className="card-body">
            <form onSubmit={Update}>
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
                  <button className="btn btn-primary btn-block">SAVE</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;

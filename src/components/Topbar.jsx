import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userSession } from "../session/history";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../actions/UserAction";
import SearchProduct from "./search/SearchProduct";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Person from "@mui/icons-material/Person";
import ExitToAppRounded from "@mui/icons-material/ExitToAppRounded";
import HelpCenter from "@mui/icons-material/SupportAgent";
import Notifications from "@mui/icons-material/NotificationsActive";
import Language from "@mui/icons-material/LanguageOutlined";
import Location from "@mui/icons-material/MyLocation";
import OrderHistory from "@mui/icons-material/Update";
import UpdateProfile from "@mui/icons-material/AccountCircle";
import GeoLocation from "./location/GeoLocation";
import { useGeolocated } from "react-geolocated";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();

  const option = [
    { icon: <ExitToAppRounded />, name: "Logout", func: signout },
    { icon: <UpdateProfile />, name: "Update Profile", func: updateProfile },
    { icon: <OrderHistory />, name: "Order History", func: orderHistory },
    { icon: <Notifications />, name: "Notifications", func: list },
    { icon: <Language />, name: "Choose Language", func: list },
    { icon: <Location />, name: "Select Location", func: Getlocation },
    { icon: <HelpCenter />, name: "Help Center", func: helpCenter },
  ];

  function signout() {
    dispatch(logout());
    alert.success("Logout success");
    window.sessionStorage.clear();
    window.location.replace("/");
  }
  function updateProfile() {
    window.location.replace("edit-profile");
  }
  function orderHistory() {
    window.location.replace("order-history");
  }
  function helpCenter() {
    window.location.replace("help-center");
  }
  function language() {
    window.location.replace("/");
  }

  async function Getlocation() {
    const getDirection = (degrees, isLongitude) =>
      degrees > 0 ? (isLongitude ? "E" : "N") : isLongitude ? "W" : "S";

    // adapted from http://stackoverflow.com/a/5786281/2546338
    const formatDegrees = (degrees, isLongitude) =>
      `${0 | degrees}° ${
        0 | (((degrees < 0 ? (degrees = -degrees) : degrees) % 1) * 60)
      }' ${0 | (((degrees * 60) % 1) * 60)}" ${getDirection(
        degrees,
        isLongitude
      )}`;
    const {
      coords,
      getPosition,
      isGeolocationAvailable,
      isGeolocationEnabled,
      positionError,
    } = await useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
      watchLocationPermissionChange: true,
    });
  }

  function list() {
    window.location.replace("/");
  }

  return (
    <div className="container-fluid">
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-3">
          <a className="text-decoration-none" href="/">
            <span className="h2 text-uppercase text-primary bg-dark px-2">
              Baba{" "}
            </span>
            <span className="h2 text-uppercase text-dark bg-primary px-2 ml-n1">
              Collection
            </span>
          </a>
        </div>
        <div className="col-lg-5 col-6 text-right">
          <SearchProduct />
        </div>

        <div className="col-lg-4 col-6 text-right">
          {userSession ? (
            <SpeedDial
              ariaLabel="Profile"
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              icon={<Person />}
              direction="left"
              FabProps={{
                sx: {
                  bgcolor: "gold",
                  "&:hover": {
                    bgcolor: "gray",
                  },
                  width: 45,
                  height: 45,
                  marginY: 0,
                  paddingY: 0,
                  borderWidth: 0,
                  borderColor: "white",
                },
              }}
            >
              {open ? (
                option.map((item) => (
                  <SpeedDialAction
                    FabProps={{
                      sx: {
                        bgcolor: "gray",
                        color: "white",
                        "&:hover": {
                          bgcolor: "gold",
                          color: "black",
                        },
                        paddingY: 0,
                        marginY: 0,
                        width: 38,
                        height: 38,
                      },
                    }}
                    icon={item.icon}
                    tooltipTitle={item.name}
                    onClick={item.func}
                  />
                ))
              ) : (
                <span>Welcome {JSON.parse(userSession).name}</span>
              )}
            </SpeedDial>
          ) : (
            <Link to="/login">
              <h5 className="m-0">
                Login <i className="fas fa-sign-in-alt"></i>
              </h5>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

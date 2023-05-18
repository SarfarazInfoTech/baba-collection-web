import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LoginIcon from "@mui/icons-material/Login";
import AccountIcon from "@mui/icons-material/PersonAdd";
import { userSession } from "../session/history";

const Header = () => {
  const location = useLocation();
  // const active = location.pathname.split("/")[1];
  const active = location.pathname;
  const [show, setShow] = useState(false);
  const [subMenushow, setsubMenuShow] = useState(false);

  const menus = [
    {
      id: 1,
      item: "Womens",
      route: "/Products/Women",
    },
    {
      id: 2,
      item: "Mens",
      route: "/Products/Men",
    },
    {
      id: 3,
      item: "Kids",
      route: "/Products/Kid",
    },
    {
      id: 4,
      item: "Boys",
      route: "/Products/Boy",
    },
    {
      id: 5,
      item: "Girls",
      route: "/Products/Girl",
    },
    {
      id: 6,
      item: "Baby and Health",
      route: "/Products/Baby-Health",
    },
    {
      id: 7,
      item: "Beauty and Personal",
      route: "/Products/Beauty-Personal",
    },
    {
      id: 8,
      item: "Garments",
      route: "/Products/Garments",
    },
    {
      id: 9,
      item: "Footwear",
      route: "/Products/Footwear",
    },
    {
      id: 10,
      item: "Jewellery",
      route: "/Products/Jewellery",
    },
  ];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="bg-primary">
        <a href="/" className="text-decoration-none d-block d-lg-none m-3">
          <span className="h1 text-uppercase text-dark bg-light px-2">
            Multi
          </span>
          <span className="h1 text-uppercase text-light bg-dark px-2">
            Shop
          </span>
        </a>

        {!userSession && !userSession
          ? ["Create an account", "Login"].map((text, index) => (
              <Link
                key={index}
                to={`/${text === "Login" ? text : "signup"}`}
                className="text-dark text-decoration-none"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} className="text-dark" />
                    <ListItemIcon className="text-dark">
                      {index % 2 === 0 ? <AccountIcon /> : <LoginIcon />}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))
          : null}
      </List>
      <List>
        <h6 className="m-3">Categories</h6>
        <Divider />
        {menus.map(({ id, item, route }) => (
          <Link key={id} to={route} className="text-dark text-decoration-none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div
            className="col-lg-2 d-none d-lg-block"
            style={{ height: "50px" }}
          >
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              style={{ height: "50px", padding: "0 30px" }}
              onClick={() => setShow(!show)}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className={`${
                !show ? "collapse" : null
              } position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light`}
              style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            >
              <div className="navbar-nav w-100">
                <div
                  className={`nav-item dropdown dropright ${
                    subMenushow ? "show" : null
                  }`}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    onClick={() => setsubMenuShow(!subMenushow)}
                  >
                    Dresses <i className="fa fa-angle-right float-right mt-1" />
                  </a>
                  <div
                    className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${
                      subMenushow ? "show" : null
                    }`}
                  >
                    <a className="dropdown-item">Men's Dresses</a>
                    <a className="dropdown-item">Women's Dresses</a>
                    <a className="dropdown-item">Baby's Dresses</a>
                  </div>
                </div>
                <a className="nav-item nav-link">Shirts</a>
                <a className="nav-item nav-link">Jeans</a>
                <a className="nav-item nav-link">Swimwear</a>
                <a className="nav-item nav-link">Sleepwear</a>
                <a className="nav-item nav-link">Sportswear</a>
                <a className="nav-item nav-link">Jumpsuits</a>
                <a className="nav-item nav-link">Blazers</a>
                <a className="nav-item nav-link">Jackets</a>
                <a className="nav-item nav-link">Shoes</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-10">
            <nav
              className="navbar navbar-expand-lg bg-dark navbar-dark py-lg-0 px-0"
              style={{ height: "50px" }}
            >
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <a className="btn ml-5 pr-0 d-lg-none" href="/cart">
                <i className="fas fa-shopping-cart text-primary" />
                <span
                  className="badge text-secondary border border-secondary rounded-circle"
                  style={{ paddingBottom: "2px" }}
                >
                  0
                </span>
              </a>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <a
                    className="navbar-toggler border-0 px-0"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <span className="navbar-toggler-icon" />
                  </a>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
              <div className="collapse navbar-collapse justify-content-between">
                <div className="navbar-nav mr-auto py-0">
                  {menus.map(({ id, item, route }) => (
                    <a
                      key={id}
                      href={route}
                      className={`nav-item nav-link ${
                        active === route ? "active" : null
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </a>
                  <a className="btn px-0 ml-3" href="/cart">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

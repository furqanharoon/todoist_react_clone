import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = ({ Open, close }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger text-white">
      <div className="container-fluid">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={Open}
          edge="start"
          // sx={{
          //   marginRight: 5,
          //   ...(open && { display: "none" }),
          // }}
        >
          <MenuIcon />
        </IconButton>
        <a className="navbar-brand text-white" href="#">
          TodoList
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React from "react";

const Nav = ({ children }) => (
  <div
    style={{ height: 140, clear: "both", paddingTop: 15, textAlign: "center" }}
    className="jumbotron"
  >
    {children}

  </div>
);

export default Nav;

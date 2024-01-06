import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/">All Players</Link>
      <Link to="/addNew">Add New Player</Link>
    </nav>
  );
}

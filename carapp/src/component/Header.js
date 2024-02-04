import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/showcar">
            Show Car
          </Link>
        </li>
      </ul>
    </div>
  );
}

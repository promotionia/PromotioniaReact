import { Link } from "react-router-dom"; // Ensure you're importing from react-router-dom
import React from "react";

export default function MainPoints() {
  return (
    <div className="options">
      <div className="option">
        <i style={{ color: "rgb(33, 189, 241)" }} className="bx bx-notepad"></i>
        <p>
          billings and subscription <em>Coming Soon ✈️</em>
        </p>
      </div>
      <div className="option">
        <Link to="/About-Us">
          <i
            style={{ color: "rgb(11, 11, 110)" }}
            className="bx bxl-microsoft-teams"
          ></i>
          <p>about team</p>
        </Link>
      </div>
      <div className="option">
        <Link to="/Vision">
          <i
            style={{ color: "rgb(4, 67, 4)" }}
            className="bx bx-line-chart"
          ></i>
          <p>about promotionia</p>
        </Link>
      </div>
    </div>
  );
}

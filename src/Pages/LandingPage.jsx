import React, { useEffect, useState } from "react";
// import { gsap } from "gsap"; // Make sure GSAP is imported
import "../styles/landingPageStyle.css";
import { CircularProgress,LinearProgress,Box } from "@mui/material";

function GradientCircularProgress() {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      </React.Fragment>
    );
  }

export default function LandingPage() {
    const [loading ,setLoading] = useState(false)
  useEffect(() => {
    // Animate loading page
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );

    // Animate logo name
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="fullCont">
      <div className="container_landing" style={{display:"flex" , flexDirection:"column"}}>
        <p style={{fontSize:"4rem"}}>Welcome Viewers!</p>
        {/* <GradientCircularProgress /> */}
        <Box sx={{ width: '50%' }}>
      <LinearProgress />
    </Box>
      </div>

      <div className="loading-page">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
        </svg>

        <div className="name-container">
          <div className="logo-name">Promotionia</div>
        </div>
      </div>
    </div>
  );
}

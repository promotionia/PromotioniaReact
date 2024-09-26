import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Importing CSS module
import "../styles/responsive.css";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleQueryChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.image} style={{ cursor: "pointer" }}>
        <Link to="/">
          <img src={Logo} alt="website logo" height="1rem" />
        </Link>
      </div>

      <div className={styles.search}>
        <label htmlFor="name">
          <i className="bx bx-search-alt-2"></i>
        </label>
        <input
          id="name"
          type="text"
          disabled="true"
          placeholder="Search Query --> Coming Soon ✈️"
          value={searchQuery}
          onChange={handleQueryChange}
          className={styles.searchInput} // Scoped input style
        />
        <i className="bx bx-line-chart"></i>
      </div>

      <div className={styles.services}>
        <ul>
          <li>
            <Link to={"/Orders"}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
              }}
              // onClick={() => navigate("https://forms.gle/P2N57KBUT8agcGre9")}
            >
              <lord-icon
                src="https://cdn.lordicon.com/qnwzeeae.json"
                trigger="loop"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              ></lord-icon>
              <h1 style={{ textAlign: "left", cursor: "pointer" , fontSize:"x-large" }}>Orders</h1>
            </div>
            </Link>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
              }}
              // onClick={() => navigate("/")}
            >
              <lord-icon
                src="https://cdn.lordicon.com/zfmcashd.json"
                trigger="loop"
                delay="1000"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              ></lord-icon>
              <div className="apply-cont" style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center"}}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoE-5mlP7E9CVJh4AcNsJodKqwavZ7RFdNyzpCkaTMNWSlQQ/viewform">
              <h3 style={{ textAlign: "left", cursor: "pointer" , fontWeight:"bold" }}>
                {"Apply Now !!"}
              </h3>
              </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

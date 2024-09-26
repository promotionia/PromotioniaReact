import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export function AppBarFunctionalityOrder(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Offset />
      <AppBar
        position="fixed"
        sx={{ height: "4rem", opacity: "0.8", bgcolor: "black" }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate("/")}
          >
            <lord-icon
              src="https://cdn.lordicon.com/zsaomnmb.json"
              trigger="loop"
              delay="1000"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            ></lord-icon>
            <h3 style={{ cursor: "pointer" }}>Promotionia</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "20rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
              }}
              onClick={() => navigate(props.route1)}
            >
              <lord-icon
                src="https://cdn.lordicon.com/tlxagvyb.json"
                trigger="loop"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              ></lord-icon>
              <h3 style={{ textAlign: "left", cursor: "pointer" }}>
                {props.tab1}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
              }}
              onClick={() => navigate(props.route2)}
            >
              <lord-icon
                src="https://cdn.lordicon.com/xjronrda.json"
                trigger="loop"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              ></lord-icon>
              <h3 style={{ textAlign: "left", cursor: "pointer" }}>
                {props.tab2}
              </h3>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div />
    </div>
  );
}

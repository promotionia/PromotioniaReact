import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found w-screen h-screen bg-red-400 flex items-center justify-center bg-[url('https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]  bg-center bg-cover">
      <div className="not text-center flex flex-col gap-6 text-white min-w-10">
        <div className="not-found" style={{ display: "flex", gap: "0.5rem",alignItems:"center" , justifyContent:"center" }}>
          <div className="error-code">
            <h1 className="font-medium text-6xl">404</h1>
          </div>
          <div className="video_section">
            <lord-icon
              src="https://cdn.lordicon.com/cheqjfch.json"
              trigger="loop"
              delay="500"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
        </div>
        <h1 className="text-5xl font-semibold">Page not found</h1>
        <p className="text-stone-200">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div
          className="button_section"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            size="large"
            sx={{ color: "white", display: "flex", gap: "1rem" }}
            startIcon={<ArrowBack />}
            onClick={() => navigate("/", { replace: true })}
            variant="outlined"
            color="#f5f5f5"
          >
            <h3>
              <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                Back to Home
              </span>
            </h3>
            <lord-icon
              src="https://cdn.lordicon.com/heexevev.json"
              trigger="loop"
              delay="1000"
              onClick={() => navigate("/", { replace: true })}
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            ></lord-icon>
          </Button>
        </div>
      </div>
    </div>
  );
}

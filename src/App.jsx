// import ContactPage from "./Pages/Contacts";
// import SignIn from "./Pages/SignIn";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./styles/MainSection.css";
import "./styles/responsive.css";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import CircularIndeterminate from "./Util/FullPageSpinner";

const MainRenderer = lazy(() => import("./Components/Renderer/MainRenderer"));
const PageNotFound = lazy(() =>import("./Components/ErrorPages/NotFoundError"));
const Layout = lazy(() => import("./Pages/Layout"));
const AboutTeamPage = lazy(() => import("./Pages/About"));
const AboutPromotionia = lazy(() => import("./Pages/AboutPromotionia"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const OrderPage = lazy(() => import("./Pages/Order"))
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        localStorage.setItem("hasVisited", "true");
        navigate("/");
      }, 5600);

      return () => {
        clearTimeout(timer);
      }; 
    }
  }, [navigate]);

  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    return <LandingPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainRenderer />} />
        {/* <Route path="Contact" element={<ContactPage />} /> */}
        <Route path="About-Us" element={<AboutTeamPage />} />
        <Route path="Vision" element={<AboutPromotionia />} />
        <Route path="/Orders" element={<OrderPage />} />
        {/* <Route path="SignIn" element={<SignIn />} /> */}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

const AppWithRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<CircularIndeterminate />}>
      <App />
    </Suspense>
  </BrowserRouter>
);

export default AppWithRouter;

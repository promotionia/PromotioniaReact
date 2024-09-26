import { useEffect } from "react";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { IconButton } from "@mui/material";
import "../../styles/Slider1.css";
function Slider1() {
  useEffect(() => {
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");

    function handleNext() {
      console.log("clicked");
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    }

    function handlePrev() {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
    }

    next.addEventListener("click", handleNext);

    prev.addEventListener("click", handlePrev);

    return () => {
      next.removeEventListener("click", handleNext);
      prev.removeEventListener("click", handlePrev);
    };
  }, []);

  return (
    <>
      <div className="container_slider">
        <div className="slide">
          <div
            className="item"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            }}
          >
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg")',
            }}
          >
            <div className="content">
              <div className="name text-stone-700">Finland</div>
              <div className="des text-stone-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/6120218/pexels-photo-6120218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            }}
          >
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/7563658/pexels-photo-7563658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            }}
          >
            <div className="content">
              <div className="name text-stone-600">Australia</div>
              <div className="des text-stone-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/7563680/pexels-photo-7563680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            }}
          >
            <div className="content">
              <div className="name text-stone-600">Netherland</div>
              <div className="des text-stone-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg")',
            }}
          >
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
        </div>

        <div className="button_slider">
          <IconButton className="prev" color="info" size="large" sx={{ color: "black", bgcolor:"gray", border:"none" }}>
            <ArrowLeft />
          </IconButton>
          <IconButton className="next" sx={{ color: "black",bgcolor:"gray" }}>
            <ArrowRight />
          </IconButton>
        </div>
      </div>
    </>
  );
}
export default Slider1;

import { useEffect } from "react";
import FacebookImg from "../../assets/images/newFacebook.png";
import SocialImg from "../../assets/images/WhatsappNew.jpg";
import TwitterImg from "../../assets/images/TwitterNew.jpg";
import LinkedinImg from "../../assets/images/SocialNew.jpg";
import "../../styles/Slider2.css";

function Slider2() {
  const data = [
    { name: "Social Media", description: "Marketing" },
    { name: "Twitter Media", description: "Marketing" },
    { name: "Linkedin Media", description: "Marketing" },
    { name: "Facebook Media", description: "Marketing" },
    { name: "Insta Media", description: "Marketing" },
  ];
  var itemActive = 0;
  useEffect(() => {
    let items = document.querySelectorAll(".slider .list .item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let thumbnails = document.querySelectorAll(".thumbnail .item");

    // config param
    let countItem = items.length;
    // event next click

    function handleNext() {
      itemActive = itemActive + 1;
      if (itemActive >= countItem) {
        itemActive = 0;
      }
      showSlider();
    }
    function handlePrev() {
      itemActive = itemActive - 1;
      if (itemActive < 0) {
        itemActive = countItem - 1;
      }
      showSlider();
    }
    function handleThumbnail() {
      itemActive = index;
      showSlider();
    }

    next.addEventListener("click", handleNext);
    prev.addEventListener("click", handlePrev);
    //event prev click

    // auto run slider
    let refreshInterval = setInterval(() => {
      next.click();
    }, 5000);
    function showSlider() {
      // remove item active old
      let itemActiveOld = document.querySelector(".slider .list .item.active");
      let thumbnailActiveOld = document.querySelector(
        ".thumbnail .item.active"
      );
      itemActiveOld.classList.remove("active");
      thumbnailActiveOld.classList.remove("active");

      // active new item
      items[itemActive].classList.add("active");
      thumbnails[itemActive].classList.add("active");

      // clear auto time run slider
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 5000);
    }

    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
      });
    });
    return () => {
      next.removeEventListener("click", handleNext);
      prev.removeEventListener("click", handlePrev);
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.removeEventListener("click", () => {
          itemActive = index;
          showSlider();
        });
      });
    };
  }, []);

  return (
    <div className="slider">
      <div className="list">
        <div className="item active">
          <div className="our-content">
            <h3 style={{color:"grey"}}>Facebook</h3>
            <h1>Marketing</h1>
          </div>
          <img src={FacebookImg} />
        </div>

        <div className="item">
          <div className="our-content">
            <h3>Twitter</h3>
            <h1>Marketing</h1>
          </div>
          <img src={TwitterImg} />
        </div>

        <div className="item">
          <div className="our-content">
            <h3>Insta</h3>
            <h1>Marketing</h1>
          </div>
          <img src={SocialImg} />
        </div>

        <div className="item">
          <div className="our-content">
            <h3 style={{color:"grey"}} >Social Media</h3>
            <h1>Marketing</h1>
          </div>
          <img src="https://images.pexels.com/photos/3060516/pexels-photo-3060516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>

        <div className="item">
          <div className="our-content">
            <h3>Linkedin</h3>
            <h1>Marketing</h1>
          </div>
          <img src={LinkedinImg} />
        </div>
      </div>

      <div className="arrows">
        <button id="prev">{"<"}</button>
        <button id="next">{">"}</button>
      </div>

      <div className="thumbnail">
        <div className="item active">
          <img src={FacebookImg} />
          <div className="content">Holy Grails</div>
        </div>
        <div className="item">
          <img src={TwitterImg} />
          <div className="content">Promulgation</div>
        </div>
        <div className="item">
          <img src={SocialImg} />
          <div className="content">Permeation</div>
        </div>
        <div className="item">
          <img src="https://images.pexels.com/photos/3060516/pexels-photo-3060516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="content">Fashion</div>
        </div>
        <div className="item">
          <img src={LinkedinImg} />
          <div className="content">Famous</div>
        </div>
      </div>
    </div>
  );
}
export default Slider2;

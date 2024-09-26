import { useState } from "react";

export default function MainData() {
  const [hover, setHover] = useState(false);

  const handleMouseOver = (e) => {
    const displaySection = e.target.closest(".display");
    if (displaySection) {
      console.log(e.target)
      setHover(true);
    }
  };

  return (
    <div className="main_display" onMouseOver={handleMouseOver}>
      <div className="about">
        <div className="info">
          <p>
            Promotionia: Pioneering the Future of Advertising and Marketing "Be
            Heard, Be Seen, Be Promoted With Promotionia"
          </p>
          <p class="second">
            Promotionia is not just another PR agency; it is a dynamic and
            innovative advertising and marketing powerhouse designed to redefine
            how businesses and individuals interact with their audiences.
            Founded in June 2023 by visionary Raj Kamal and co-founded by
            creative genius Gaurav Kumar, Promotionia is at the forefront of the
            marketing revolution. Although in its early stages, Promotionia is
            poised to make a significant impact in the industry.
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className="display">
        <div className="left_img" style={{
          width:hover? "50%" : "100%"
        }}>
          <img
            src="https://images.pexels.com/photos/5146492/pexels-photo-5146492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Service Image 1"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              height:"100%"

            }}
          />
        </div>
        <div
          className="social_media"
          style={{
            color: hover ? "black" : "white",
            transition: "color 0.5s ease, filter 0.5s ease",
            filter: hover ? "blur(0px)" : "blur(3px)",
            // filter: hover ? "blur(0px)" : "blur(3px)",
          }}
        >
          <h1  className="main-heading"
            style={{
              fontWeight: "800",
              marginTop: "1rem",
              lineHeight:"2.2rem" 
            }}
          >
            Services Provided by Promotionia
          </h1>
          <h1>Instagram and Facebook</h1>
          <p>
          Leveraging these platforms, we create and promote content that resonates with the target audience. We foster strong, engaged communities around our clients' brands.
          </p>
          <h1>
              Email Marketing
          
          </h1>
          <p>
            Leveraging these platforms, we create and promote content that
            resonates with the target audience...
          </p>
          <h1>
            
          Traditional Marketing
            
          </h1>
          <p>
            We design and execute targeted email campaigns to reach specific
            audience segments effectively...
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="display">
        <div className="left_img"  style={{
        width:hover? "50%" : "100%"
          // width:hover? "50%" : "100%"
        }}>
          <img
            src="https://images.pexels.com/photos/1595437/pexels-photo-1595437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Service Image 2"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              height:"100%"
             }}
          />
        </div>
        <div
          className="social_media"
          style={{
            color: hover ? "black" : "white",
            transition: "color 0.5s ease, filter 0.5s ease",
            filter: hover ? "blur(0px)" : "blur(3px)",
          }}
        >
          <h1  className="main-heading"
            style={{
              fontWeight: "800",
              marginBottom: "3rem",
              lineHeight:"2.4rem"
              // marginTop: "1rem",
            }}
          >
            Why Contribute to Promotionia?
          </h1>
          <h1>Future Opportunities and Stakeholder Potential</h1>
          <p>
            Joining Promotionia now means being part of the foundational team...
          </p>
          <h1>Recognition and Big Positions</h1>
          <p>
            Promotionia values innovation and creativity. Those who bring forth
            impactful ideas...
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="display">
        <div className="left_img"  style={{
          width:hover? "50%" : "100%"
        }}>
          <img
            src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg"
            alt="Service Image 3"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              height:"100%"
            }}
          />
        </div>
        <div
          className="social_media"
          style={{
            color: hover ? "black" : "white",
            transition: "color 0.5s ease, filter 0.5s ease",
            filter: hover ? "blur(0px)" : "blur(3px)",
          }}
        >
          <h1 class="md:text-md"
            style={{
              fontWeight: "800",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            Services Provided by Promotionia
          </h1>
          <h1>Twitter Management</h1>
          <p>
            We specialize in making incidents and topics trend on Twitter...
          </p>
          <h1>Embrace the Power of Potential</h1>
          <p>
          At Promotionia, we believe in the boundless potential within each individual. By joining our team, you’re not just taking a job; you’re embarking on a journey of self-discovery and growth
          </p>
        </div>
      </div>
    </div>
  );
}

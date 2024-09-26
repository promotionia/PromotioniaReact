import Slider1 from "../Components/Slider/Slider1";
import { AppBarFunctionality } from "../Util/AppBarFunctionality";
// import "../styles/about_team.css";
export default function AboutTeamPage() {
  const arr = ["Promotionia believes in leveraging the best of both worlds—traditional and digital marketing. While they specialize in digital strategies, the company also incorporates time-tested traditional marketing tactics to create a comprehensive approach. Whether it’s through email campaigns or social media, Promotionia ensures a balanced and effective marketing strategy." , ]
  return (
    <>
      <AppBarFunctionality tab="About Promotionia" route="/Vision" />
      <div
        className="flex flex-col about w-[100vw] gap-32 m-0 p-0"
        style={{
          backgroundImage:
            "background-image: linear-gradient(to right top, #a9efef, #bbf1fb, #d0f3ff, #e3f5ff, #f3f8ff, #f4f9ff, #f6faff, #f7fbff, #eef9ff, #e3f7fc, #d9f6f7, #d2f4ee)",
        }}
      >
        <div
          className="hero flex flex-row items-center"
          style={{
            width: "100vw",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <Slider1 />
        </div>

        <div
          className="mission  p-5 rounded-3xl flex flex-row items-center w-[90vw] mx-auto bg-gray-300 gap-8 
        max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:text-center "
        >
          <div className="our-mission">
            <h1 className="text-4xl font-medium  text-gray-950 max-[1000px]:text-center">
              Revolutionizing Modern Marketing Strategies
            </h1>
            <ul className="flex flex-col">
              <li>
                <p className="my-3 text-gray-800">
                  Promotionia is not your typical marketing agency. Launched in
                  June 2023, this innovative company is driven by a mission to
                  transform how businesses and individuals connect with their
                  audiences. Promotionia takes a fresh approach, combining
                  creative thinking with cutting-edge digital tools to deliver
                  marketing strategies that resonate on a deeper level.
                </p>
              </li>
              <li>
                <p className="my-3  text-gray-800">
                The brainchild of Raj Kamal and Gaurav Kumar, Promotionia was built on a foundation of visionary leadership and creative innovation. Raj Kamal brings a strategic perspective to the table, while Gaurav Kumar’s flair for creative solutions has helped shape the company’s identity. Together, they are pushing the boundaries of what marketing can achieve in a fast-evolving industry.

                </p>
              </li>
              <li>
                <p className="my-3  text-gray-800">
                Promotionia excels at building strong connections between brands and their audiences on social media platforms like Instagram, Facebook, and Twitter. By creating compelling and trend-worthy content, the company ensures that clients' messages stand out in a crowded digital landscape, driving real engagement and fostering brand loyalty.
                </p>
              </li>
            </ul>
          </div>
          <div className="text-gray-950 my-[3rem]  w-4/5">
            <h1 className="text-3xl font-medium m-3"></h1>
            <p>Transactions every 24 hours</p>
            <h1 className="text-3xl font-medium m-3"></h1>
            <p>Assets under holding</p>
            <h1 className="text-3xl font-medium m-3"></h1>
            <p>New users annually</p>
          </div>
        </div>

        <div className="full-img">
          <img
            className="rounded-xl w-[90vw] m-auto h-[40rem] object-cover object-center max-[900px]:w-[90vw]  max-[900px]:h-[25rem] "
            src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>

        <div className=" bg-gray-300 p-5 w-[90vw]  mx-auto rounded-2xl max-[900px]:flex  max-[900px]:flex-col ">
          <div className=" m-2">
            <h1 className="font-bold capitalize text-5xl text-gray-950  max-[900px]:text-3xl  text-center">
            . The Visionaries Behind Promotionia: Raj Kamal and Gaurav Kumar
            </h1>
            <p className="my-3  text-gray-800 text-2xl   max-[900px]:text-xl">
            In an era of information overload, Promotionia’s email marketing campaigns cut through the noise. They design targeted, data-driven email strategies that engage specific audience segments with personalized content, ensuring clients not only reach their customers but also encourage meaningful interaction.
            </p>
          </div>

          <div
            className=" grid grid-cols-3 p-5 gap-7 max-[900px]:flex max-[900px]:flex-col  max-[900px]:items-center
      
          "
          >
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  className="card m-2   max-[900px]:bg-stone-400   max-[900px]:rounded-md  max-[900px]:p-6"
                  key={index}
                >
                  <h1 className="font-semibold text-gray-900 text-2xl">
                    Be world-class
                  </h1>
                  <p className="my-3 text-md  text-gray-800">
                  At Promotionia, social media management is more than just posting updates. It's about creating conversations. The company uses platforms like Twitter to spark meaningful dialogues and trends that put brands at the center of attention. Promotionia’s expertise in digital engagement helps clients maintain a consistent and impactful presence online.
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="w-[80vw] mx-auto p-8 max-[1000px]:flex-col ">
          <div className=" m-4 ">
            <h1 className="font-bold capitalize text-center text-3xl text-gray-950 max-[700px]:text-2xl">
            A Culture of Creativity and Collaboration

            </h1>
            <p className="text-xl  text-gray-800  max-[700px]:text-center">
            Promotionia thrives on creativity, and the company’s culture is built around fostering innovative ideas. Employees are encouraged to think outside the box, contributing fresh perspectives that keep the company at the cutting edge of marketing trends. It’s a collaborative environment where innovation and teamwork go hand in hand.
            </p>
          </div>
          <div
            className="profile grid grid-cols-5 gap-6 max-[1200px]:flex-col max-[1200px]:flex max-[1200px]:w-[50vw]
          max-[1200px]:m-auto"
          >
            {[
              {
                name: "Raj Kamal",
                role: "Founder",
                img: "https://promotionia.in/founder.jpg",
              },
              {
                name: "ARCHANA KUMARI",
                role: "CEO",
                img: "https://promotionia.in/CEOo.jpg",
              },
              {
                name: "Gaurav Kumar",
                role: "Co-Founder",
                img: "https://promotionia.in/coFounder.jpg",
              },
              {
                name: "SRAJAN",
                role: "WEB DEVELOPER",
                img: "https://media.licdn.com/dms/image/v2/D5603AQFZ2TGhd4vzgQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722875051483?e=1732752000&v=beta&t=L1ivru45kMpAz5tIkCFZijET9dpvmrhf1u77zLLsH1k",
              },
              {
                name: "SATVIK",
                role: "WEB DEVELOPER",
                img: "../../my_img.jpg",
              },
              {
                name: "Prem Sagar",
                role: "DATA MANAGEMENT",
                img: "https://promotionia.in/prem.jpg",
              },
              {
                name: "NEELESH ATHIYA",
                role: "MEDIA MANAGEMENT",
                img: "https://promotionia.in/nilesh.png",
              },
              {
                name: "VENKATACHALAPATHI",
                role: "MANAGER",
                img: "https://promotionia.in/angothuvent.jpeg",
              },
              {
                name: "Vikash Meena",
                role: "CERTIFICATION ",
                img: "https://promotionia.in/vikash.jpg",
              },
              {
                name: "RAI SHRIJAL ANJINI",
                role: "MEETING & TRAINING",
                img: "https://promotionia.in/shrijal.jpg",
              },
              {
                name: "ROSHNI SAKET",
                role: "MEETING & TRAINING ",
                img: "https://promotionia.in/roshni.jpeg",
              },
              {
                name: "GAURAV PRASAD",
                role: "PROJECT MANAGER",
                img: "https://promotionia.in/gauravprsd.jpg",
              },
            ].map((profile, index) => (
              <div
                className="id-card flex flex-col gap-5 items-center justify-center rounded-xl bg-gray-300 p-4"
                key={index}
              >
                <img
                  className="rounded-full w-20 h-20 object-cover"
                  src={profile.img}
                  alt={profile.name}
                />
                <h1 className="font-semibold text-sm  text-gray-600">
                  {profile.name}
                </h1>
                <p className="text-gray-700">{profile.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

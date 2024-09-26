import { AppBarFunctionality } from "../Util/AppBarFunctionality";

export default function AboutPromotionia() {
  return (
    <>
      <AppBarFunctionality tab="About Team" route="/About-Us" />
      <div
        class="w-screen   flex flex-col gap-10 p-5 text-stone-600"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #ffe8f5, #fdedf9, #fcf1fc, #fbf6fe, #fcfaff, #faf8ff, #f8f5ff, #f6f3ff, #f0eaff, #ebe1ff, #e6d8ff, #e1cfff)",
        }}
      >
        <div class="flex flex-row items-center  p-2 max-[700px]:flex-col">
          <div class="motive flex flex-col gap-10 p-5">
            <div className="header flex">
              <h1 class="text-5xl text-pretty font-semibold max-[750px]:text-3xl max-[600px]:text-[30px] text-center min-[700px]:text-left ">
                Join Promotionia: Shape the Future of Marketing
              </h1>
            </div>
            <p class="text-md font-normal  max-[750px]:text-sm max-[550px]:text-[12px]">
              As Promotionia continues to grow and expand its operations, we are
              on the lookout for passionate and talented individuals to join our
              team. Whether you are a seasoned professional or a fresh graduate,
              Promotionia offers a unique opportunity to be part of an
              innovative and dynamic environment. By joining us now, you have
              the chance to grow with the company, gain invaluable experience,
              and potentially become a key stakeholder in our success.
            </p>
          </div>
          <img
            class="rounded-3xl object-cover object-center  w-[600px] max-[1080px]:w-[400px] max-[1080px]:h-[500px]  max-[700px]:w-[600px] max-[700px]:h-[300px]"
            src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdyb3d0aCUyMGJ1c2luZXNzfGVufDB8fDB8fHww"
            alt="img"
          />
        </div>

        <div class="contribute flex flex-col gap-10 p-6">
          <div class="flex items-center justify-center gap-6 flex-column max-[600px]:flex-col max-[500px]:items-center">
            <div class="bg-red-900 h-[1px] w-96"></div>
            <h1 class="font-semibold text-4xl text-red-950 max-[550px]:text-[25px]">
              Why Contribute Promotionia?
            </h1>
            <lord-icon
              src="https://cdn.lordicon.com/ccrgnftl.json"
              trigger="loop"
              delay="1000"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>

          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">
              Future Opportunities and Stakeholder Potential
            </h1>
            <p>
              Joining Promotionia now means being part of the foundational team.
              While we cannot offer a salary immediately, those who contribute
              significantly from the beginning will have the opportunity to
              climb to higher positions and potentially become stakeholders.
              This is more than just a job; it’s a chance to be a part of
              something monumental from the ground up.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Recognition and Big Positions</h1>
            <p>
              Promotionia values innovation and creativity. Those who bring
              forth impactful ideas and suggestions for our growth will not go
              unnoticed. We are committed to recognizing talent and providing
              substantial positions to those who help shape the future of our
              company.
            </p>
          </div>

          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Learning and Skill Development</h1>
            <p>
              In the fast-paced world of startups, learning is continuous and
              expansive. At Promotionia, you will gain hands-on experience in
              various domains such as:
            </p>
            <ul className="flex flex-col  gap-4 items-start">
              <li>
                <strong>Content Creation:</strong> Master the art of creating
                compelling content that captures attention.
              </li>
              <li>
                <strong> Strategy:</strong> Learn to devise and implement
                strategies that drive engagement and growth.
              </li>
              <li>
                <strong> Understand the psychological principles:</strong> that
                influence consumer behavior and apply them effectively in
                marketing campaigns.
              </li>
            </ul>
          </div>

          <div
            class=" p-8 rounded-2xl flex flex-col gap-10"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Certification and Professional Growth</h1>
            <p>
              We understand the importance of credentials in today’s job market.
              Here’s what you’ll receive:
            </p>
            <ul className="flex flex-col  gap-5 items-start">
              <li>
                <strong> Certificate:</strong> To mark the beginning of your
                journey with Promotionia.
              </li>
              <li>
                <strong> joining Certificate:</strong> After three months,
                recognizing your skill acquisition and development.
              </li>
              <li></li>
              <strong> Contribution Certificate:</strong> To highlight your
              valuable contributions to our projects.
            </ul>
          </div>
        </div>

        <div class="flex flex-col gap-6 p-6 ">
          <div class="flex items-center flex-row justify-center flex-column max-[600px]:flex-col max-[500px]:items-center gap-6">
            <div class="bg-red-900 h-[1px] w-96"></div>
            <div className="lord_icon flex gap-6">
              <h1 class="font-semibold text-4xl text-red-950 max-[550px]:text-[25px]">
                Services Provided by Promotionia
              </h1>
            </div>
            <lord-icon
              src="https://cdn.lordicon.com/ccrgnftl.json"
              trigger="loop"
              delay="1000"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Twitter Management</h1>
            <p>
              We specialize in making incidents and topics trend on Twitter,
              ensuring maximum visibility. We also boost likes and retweets,
              enhancing the engagement of specific content.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Instagram and Facebook</h1>
            <p>
              Leveraging these platforms, we create and promote content that
              resonates with the target audience. We foster strong, engaged
              communities around our clients' brands.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Email Marketing</h1>
            <p>
              We design and execute targeted email campaigns to reach specific
              audience segments effectively. Our team monitors campaign
              performance, making data-driven adjustments to optimize results.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Traditional Advertising</h1>
            <p>
              We employ traditional advertising methods like street holdings to
              capture the attention of local audiences. Our strategies combine
              traditional and digital methods for maximum impact.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Embrace the Power of Potential</h1>
            <p>
              At Promotionia, we believe in the boundless potential within each
              individual. By joining our team, you’re not just taking a job;
              you’re embarking on a journey of self-discovery and growth. We
              operate on the principle of "self-actualization," helping you
              realize your fullest potential through meaningful work and
              continuous learning.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">The Philosophy of Growth</h1>
            <p>
              Our philosophy is rooted in the concept of "Kaizen," a Japanese
              term meaning continuous improvement. Every day at Promotionia is
              an opportunity to learn something new, improve existing skills,
              and contribute to a larger purpose. This philosophy drives our
              commitment to nurturing talent and fostering a culture of
              innovation.
            </p>
          </div>
          <div
            class=" p-8 rounded-2xl flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdef4, #fcdcf6, #f7daf8, #f3d8fa, #edd7fc, #e5ccfd, #dcc2fe, #d2b8ff, #c5a2ff, #b78cfe, #a976fd, #9a5ffb",
            }}
          >
            <h1 class="text-2xl font">Community and Belonging</h1>
            <p>
              Human beings have an intrinsic need to belong and feel connected.
              At Promotionia, we create a supportive community where every voice
              is heard, and every contribution is valued. By joining us, you
              become part of a family that works together towards common goals,
              celebrating each milestone along the way.
            </p>
          </div>
            
        </div>
      </div>
    </>
  );
}

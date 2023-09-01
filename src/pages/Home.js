import React from "react";
import { Carousel } from "antd";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gray-200/50">
      <Carousel dotPosition="bottom">
        {/* first caroussel */}
        <div className=" overflow-hidden bg-center bg-[url('https://unsplash.com/photos/SLIFI67jv5k/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aW5kdXN0cnl8ZW58MHx8fHwxNjkzMTUyMTIxfDA&force=true&w=1920')]">
          <div className="p-2 flex flex-col justify-center items-center  md:pt-10 pt-10 h-full w-full md:px-[20%]  bg-green-500/50 md:bg-white/10 ">
            <p className="font-[700] text-[3.5rem] text-[#54B151]">
              Solution For All Industrial Business
            </p>
            <p className="my-4 text-green-700 text-center md:text-[#fff] font-[500] text-[18px]">
              A well qualified and experienced team of Civil, Mechanical and
              Electrical engineers, coupled with an equally experienced and
              energetic operations team, guarantees value for money solutions of
              the highest standard.
            </p>

            <p className="w-fit px-3 py-2 cursor-pointer bg-green-600 hover:bg-green-600/80 rounded shadow-lg my-4  text-gray-200">
              About Us --{">"}
            </p>
          </div>
          {/* <div className="bg-white/90 hidden md:block absolute top-0 -left-[10%] -skew-x-[30deg] shadow-r w-1/2 h-full"></div> */}
          <div className="bg-green-400 h-[2rem]"></div>
        </div>
        {/* second carousel */}
        <div className="h-[18rem] overflow-hidden relative bg-second">
          <div className="pl-10 absolute top-0 md:pt-2 pt-10 left-0 md:top-4 md:left-4 h-full w-full md:w-[25%] mdLbg-white bg-white/50 z-10">
            <p className="font-[600] text-[18px] text-gray-800">
              Regionally Located Offices
            </p>
            <p>
              With seven locations worldwide, Comacon is better able to serve
              its clients in more than 60 countries on six continents.
            </p>
          </div>
          <div className="bg-white/90 hidden md:block -skew-x-[30deg] shadow-r w-1/2 h-full"></div>
          <div className="bg-amber-400 h-[2rem]"></div>
        </div>
        {/* Third carousel */}
        <div className="h-[18rem] overflow-hidden relative bg-third">
          <div className="pl-10 absolute top-0  md:pt-2 pt-10 left-0 md:top-4 md:left-4 h-full w-full md:w-[25%] mdLbg-white bg-white/50 z-10">
            <p className="font-[600] text-[18px] text-gray-800">
              Regionally Located Offices
            </p>
            <p>
              With seven locations worldwide, Comacon is better able to serve
              its clients in more than 60 countries on six continents.
            </p>
          </div>
          <div className="bg-white/90 md:block hidden -skew-x-[30deg] shadow-r w-2/6 h-full"></div>
          <div className="bg-amber-400 h-[2rem]"></div>
        </div>
      </Carousel>
      <div className="grid lg:grid-cols-2 gap-4 my-8 p-2 md:p-5 animate__animated animate__fadeInRight">
        <div className="rounded shadow-lg p-2 bg-green-600/30 md:p-10">
          <p className="mt-1 font-bold text-lg text-gray-700">
            Why Comacon & Associates?
          </p>
          <p className="mt-4 text-gray-700">
            Comacon differentiates itself from traditional engineering firms by
            providing complete solutions for project implementation by
            emphasizing a modular engineering strategy early in the
            project-planning process.
          </p>
          <p className="mt-4 text-gray-700">
            With more than 1 million sq. ft. of manufacturing space worldwide,
            modules are precisely engineered for ease in transport via truck,
            rail, or sea. Comacon's modular approach can successfully be applied
            to a variety of industries.
          </p>
          <p className="mt-4 text-gray-700">
            With office locations worldwide and projects in more than 60+
            countries across 6 continents, Comacon is ideally suited to provide
            modular solutions to a global client base, while providing
            exceptional value in controlled project risk, cost, schedule, and
            increased overall safety and quality.
          </p>
        </div>
        <div className="w-full p-5">
          <img
            src={require("../assets/images/worldmap.jpg")}
            className="h-full w-auto rounded shadow"
            alt=""
          />
        </div>
      </div>
      <div className="px-4 md:px-28 text-center">
        <h1 className="font-[400] text-2xl text-gray-700">
          With over 30 years of turnkey project execution, Comacon is an
          industry leader in engineering, manufacturing, and installation of
          modular process systems.
        </h1>
      </div>
      <div className="my-4 bg-[url('https://unsplash.com/photos/HpPmiduLDC0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFjdG9yeXxlbnwwfHx8fDE2OTIwNDYyMzZ8MA&force=true&w=1920')]">
        <div className="w-full px-6 lg:px-28 py-20 text-gray-200 h-full bg-blue-950/80">
          <div className="border-b border-gray-200 text-center">
            <p className="text-2xl mb-4">Services and Features</p>
          </div>
          <div className="grid lg:grid-cols-4 mt-5 gap-4 border-b border-gray-200 pb-8">
            <div>
              <img
                src={require("../assets/images/Services.png")}
                alt=""
                className="h-[10rem] w-auto"
              />
              <p className="text-[1.8rem] font-[400] mt-8">
                Creditable Integrity
              </p>
              <p>
                Over the years, we have gained a reputation for integrity and
                trust from our customers.
              </p>
            </div>
            <div>
              <img
                src={require("../assets/images/Parts.png")}
                alt=""
                className="h-[10rem] w-auto"
              />
              <p className="text-[1.8rem] font-[400] mt-8">
                Adaptability & Flexibility
              </p>
              <p>
                Understanding our clients has given us the opportunity to adopt
                various engineering requirements to meet project demand.
              </p>
            </div>
            <div>
              <img
                src={require("../assets/images/Tech-Support.png")}
                alt=""
                className="h-[10rem] w-auto"
              />
              <p className="text-[1.8rem] font-[400] mt-8">
                Customer Satisfaction
              </p>
              <p>
                we believe that the “CUSTOMER is the KING” and our work is never
                complete without the final nod of approval from our clients.
              </p>
            </div>
            <div>
              <img
                src={require("../assets/images/Products.jpg")}
                alt=""
                className="h-[10rem] w-auto"
              />
              <p className="text-[1.8rem] font-[400] mt-8">
                Continuous Learning
              </p>
              <p>
                We believe in integrating the latest in construction and
                engineering technology to ensure that our projects are not
                compromised by disruptions or obsolescence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured */}
      <div className="my-4 text-center">
        <p className="font-[500] text-[24px] text-gray-600">Featured News</p>
      </div>
      {/* Featured body */}
      <div className="px-4 w-full md:px-32 my-4">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <img
              src={require("../assets/images/Tech-Support.png")}
              alt=""
              className="h-[13rem] w-auto"
            />
            <p className="text-[1.5rem] text-gray-600 font-[300] mt-8">
              Expanding Capabilities and Square Footage to Support the Oil and
              Gas Industry
            </p>
            <p className="text-gray-600">
              Comacon's Denver operations, located in Northglenn, Colorado, have
              officially relocated to Louisville, Colorado, to be housed under
              roof with Servtech, Inc., a Comacon company.
            </p>
          </div>

          <div>
            <img
              src={require("../assets/images/Tech-Support.png")}
              alt=""
              className="h-[13rem] w-auto"
            />
            <p className="text-[1.5rem] text-gray-600 font-[300] mt-8">
              Expanding Capabilities and Square Footage to Support the Oil and
              Gas Industry
            </p>
            <p className="text-gray-600">
              Comacon's Denver operations, located in Northglenn, Colorado, have
              officially relocated to Louisville, Colorado, to be housed under
              roof with Servtech, Inc., a Comacon company.
            </p>
          </div>

          <div>
            <img
              src={require("../assets/images/Tech-Support.png")}
              alt=""
              className="h-[13rem] w-auto"
            />
            <p className="text-[1.5rem] text-gray-600 font-[300] mt-8">
              Expanding Capabilities and Square Footage to Support the Oil and
              Gas Industry
            </p>
            <p className="text-gray-600">
              Comacon's Denver operations, located in Northglenn, Colorado, have
              officially relocated to Louisville, Colorado, to be housed under
              roof with Servtech, Inc., a Comacon company.
            </p>
          </div>

          <div>
            <img
              src={require("../assets/images/Tech-Support.png")}
              alt=""
              className="h-[13rem] w-auto"
            />
            <p className="text-[1.5rem] text-gray-600 font-[300] mt-8">
              Expanding Capabilities and Square Footage to Support the Oil and
              Gas Industry
            </p>
            <p className="text-gray-600">
              Comacon's Denver operations, located in Northglenn, Colorado, have
              officially relocated to Louisville, Colorado, to be housed under
              roof with Servtech, Inc., a Comacon company.
            </p>
          </div>
        </div>
      </div>
      {/* Keep upto date */}
      <div className="text-center text-gray-700 my-8 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border border-gray-300 rounded shadow-lg w-[80%] md:w-2/3 p-10 md:p-10">
          <p className="text-gray-500 mb-10">
            Keep up to date with where we are and what we're up to - Follow us
            on social media
          </p>
          <div className="flex space-x-4">
            <a href="/">
              <AiFillLinkedin className="text-gray-600 text-[20px] " />
            </a>
            <a href="/">
              <BiLogoFacebook className="text-gray-600 text-[20px] " />
            </a>
            <a href="/">
              <BsTwitter className="text-gray-600 text-[20px] " />
            </a>
            <a href="/">
              <BsInstagram className="text-gray-600 text-[20px] " />
            </a>
          </div>
          {/* <div className="h-20"></div> */}
        </div>
      </div>
      {/* Why section */}
      <div className="my-4 flex justify-center items-center bg-[url('https://unsplash.com/photos/hkJNx0EDbjE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkyMDgwOTQ3fA&force=true&w=1920')]">
        <div className="w-full px-8 md:px-28 py-20 text-gray-200 h-full bg-blue-950/80">
          <div className=" border-gray-200 text-center">
            <p className="text-2xl mb-4">
              Why Prefabrication, Preassembly, and Modularization?
            </p>
          </div>
          <div className="grid mx-auto md:grid-cols-3 w-3/4 mt-5 gap-4 border-b border-t border-gray-200 py-8">
            <div>
              <img
                src={require("../assets/images/Services.png")}
                alt=""
                className="h-[10rem] w-auto"
              />

              <p className="mt-8 text-gray-200 text-center md:text-left font-[300] md:mr-10">
                The key to success in prefabricated, preassembled, modularized
                project execution lies in thorough front-end planning. Roeslein
                guides clients through the early stages of a project by
                performing capital budgeting, feasibility studies, marketing
                planning, and process flow diagrams to ensure a smooth project
                implementation.
              </p>
            </div>
            <div>
              <img
                src={require("../assets/images/Parts.png")}
                alt=""
                className="h-[10rem] w-auto"
              />
              <p className="mt-8 text-gray-200 text-center md:text-left font-[300] md:mr-10">
                Comacon's unique approach to the modular design-build
                construction process is to provide clients with a
                high-performance, integrated solution that allows for a greater
                return on invested capital by improving design and construction
                phase productivity, enhancing project quality, and speeding up
                systems and plant operations deployment.
              </p>
            </div>
            <div>
              <img
                src={require("../assets/images/Tech-Support.png")}
                alt=""
                className="h-[10rem] w-auto"
              />

              <p className="mt-8 text-gray-200 text-center md:text-left font-[300] md:mr-10">
                Comacon's project management teams guide projects from
                conceptual design all the way through to project start-up and
                commissioning. Acute involvement in all aspects of project
                execution allows Comacon's project management team to cohesively
                manage customer-driven metrics of cost, schedule, and overall
                project quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CEO Quote */}
      <div className="w-full md:w-4/5 mx-auto grid md:grid-cols-2 mt-20 mb-8">
        <div>
          <p className="w-full px-8 py-4 md:p-0 mx-auto text-[20px] font-[300]">
            Because Comacon separates process implementation from facility
            construction the effects of delays and unforeseen circumstances on
            installation timetables are minimized. No matter what the project's
            size or location Comacon's modularized, prefabricated, and
            preassembled approach provides consistency in the quality of the
            design, fabrication, installation and, most importantly, the
            results.
          </p>
        </div>
        <div className="border-t border-gray-600 px-4 pt-8">
          <p className="text-gray-600 text-[20px] font-[300] border-b border-gray-800 pb-10 mb-8">
            “When you practice something over and over again until it's perfect,
            you end up with a team that's capable of so much more than just the
            sum of its parts…”
          </p>
          <p className="text-gray-400 font-[500]">
            <span className="italic mt-4 text-gray-500 font-[500] text-[18px] px-4 mr-4 border-r border-gray-300">
              Cosmas
            </span>
            Chairman & CEO of Comacon Group
          </p>
        </div>
      </div>
      {/* Testimonies */}

      <Reviews />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

function About() {
  const [tab, setTab] = useState(1);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="">
      <div className="bg-[url('https://unsplash.com/photos/2EasWxTpxag/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzODk5ODQ1fA&force=true&w=640')]">
        <div className="h-[7rem] flex items-center justify-center bg-green-950/50 px-[5rem]">
          <p className="text-green-500 text-[2rem] animate__animated animate__fadeInRight md:text-[3rem] font-bold">
            About Us
          </p>
        </div>
      </div>

      {/* Images and info */}
      <div className="grid md:grid-cols-4 gap-2 p-1 md:py-6 md:px-2">
        <div className="h-auto w-auto rounded md:col-span-3 overflow-hidden">
          <img
            src={require("../assets/images/comacon-about.jpg")}
            alt=""
            className="md:h-[100%]"
          />
        </div>
        <div>
          <div className="p-5 bg-green-400 flex justify-center items-center text-gray-100 font-[400] space-x-5">
            <p>PARTNER WITH US</p> <FiUsers className="text-[25px] font-bold" />
          </div>
          <div className="bg-gray-200 px-5 py-2">
            <div className="flex space-x-5 items-center">
              <FaDownload className="text-[20px]" />
              <a
                href={require("../assets/files/S5.-comacon-Company-Profile-2020-min.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-[14px]">Our Company Profile</p>
                <p className="text-gray-500 text-[15px]">Profile.pdf</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-green-500 text-[18px] md:text-[30px] text-center font-bold">
          We Have What It Takes To Delight The Customer.
        </p>
        <div className="my-10">
          <div className="w-full md:w-5/6 mx-auto px-2 md:px-10 flex">
            <p
              onClick={() => setTab(1)}
              className={classNames(
                tab === 1
                  ? "text-green-500 rounded-t shadow-lg shadow-green-300/30 border-l border-t border-r border-green-500"
                  : "",
                "cursor-pointer  text-gray-600 text-[13px] md:text-base font-bold px-3 py-2"
              )}
            >
              Introduction
            </p>
            <p
              onClick={() => setTab(2)}
              className={classNames(
                tab === 2
                  ? "text-green-500 rounded-t shadow-lg shadow-green-300/30 border-l border-t border-r border-green-500"
                  : "",
                "cursor-pointer text-gray-600 text-[13px] font-bold px-3 py-2"
              )}
            >
              Our Mission
            </p>
            <p
              onClick={() => setTab(3)}
              className={classNames(
                tab === 3
                  ? "text-green-500 rounded-t shadow-lg shadow-green-300/30 border-l border-t border-r border-green-500"
                  : "",
                "cursor-pointer text-gray-600 text-[13px] font-bold px-3 py-2"
              )}
            >
              Our Vision
            </p>
          </div>
          {(() => {
            if (tab === 1) {
              return (
                <div
                  className={classNames(
                    tab === 1
                      ? "animate__rotateInUpLeft border-[0.5px] shadow-lg shadow-green-300/30 border-green-500"
                      : "animate__backOutDown",
                    "p-2 text-[14px] md:p-5 w-full md:w-4/5 animate__animated bg-green-50 mx-auto rounded"
                  )}
                >
                  <p>
                    Comacon Limited is a leading specialist Civil, Mechanical &
                    Electrical contractor within East Africa with a history
                    dating back to January 2007. Today, Comacon Limited forms
                    part of Building, Structural & Mass Concrete casting which
                    is ultimately part of the world’s leading building
                    technology and associated services. Comacon Limited has the
                    capability and resources to undertake projects of all sizes
                    and complexity throughout East Africa. A wellqualified and
                    experienced team of Civil, Mechanical and Electrical
                    engineers, coupled with an equally experienced and energetic
                    operations team, guarantees value for money solutions of the
                    highest standard.
                  </p>
                </div>
              );
            } else if (tab === 2) {
              return (
                <div
                  className={classNames(
                    tab === 2
                      ? "animate__fadeInUp border shadow-lg shadow-green-300/30 border-green-500"
                      : "animate__backOutDown",
                    "p-2 text-[14px] w-full md:p-5 md:w-4/5 animate__animated bg-green-50  mx-auto rounded"
                  )}
                >
                  <p>
                    To undertake the engineering and construction business with
                    a focus on becoming the leader in product costing while
                    building excellence in every aspect to meet customers
                    stringent requirements regarding quality, on-time delivery,
                    safety and environmental concerns.
                  </p>
                </div>
              );
            } else if (tab === 3) {
              return (
                <div
                  className={classNames(
                    tab === 3
                      ? "animate__rotateInDownRight border shadow-lg shadow-green-300/30 border-green-500"
                      : "animate__backOutDown",
                    "p-2 text-[14px] w-full md:p-5 md:w-4/5 animate__animated bg-green-50  mx-auto rounded"
                  )}
                >
                  <p>
                    To further develop our corporate strengths, we have
                    established a corporate mandate to maintain strong core
                    values that truly reflect the company’s philosophy. Having
                    stood the test of time, transparency and good corporate
                    governance remain our top agenda. At Comacon the principle
                    supporting this philosophy are permanently ingrained in our
                    corporate values.
                  </p>
                </div>
              );
            }
          })()}
        </div>
        <div className="p-5 md:w-10/12 w-full mx-auto bg-green-50 rounded shadow-lg shadow-green-300/50 my-10">
          <p className="text-[15px] font-[500] text-gray-600">
            Constantly changing market conditions have given rise to the need
            for organizations to be versatile and flexible at all sizes.
            Demountable and relocatable systems enable businesses to adapt
            easily to operational reorganizations and changes; Comacon emerges
            as one of the fast growing Civil, Electromechanical engineering
            contractors of the moment. Our global reach and shared experience,
            we pride in the success of our local relationships. Working with
            clients, we create built and natural environments for future,
            striving to be the excellent supplier of specialist and integrated
            services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

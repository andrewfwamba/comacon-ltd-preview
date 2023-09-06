import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { AiFillLinkedin, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const subscribe = (values) => {
    console.log(values);
  };

  return (
    <div className="">
      <div className="flex w-2/3 mx-auto my-8">
        <div className="">
          <p
            onClick={showModal}
            className="w-fit p-2 mx-auto border border-green-400 rounded-md shadow-lg text-green-700 hover:text-gray-300 hover:bg-green-800 cursor-pointer"
          >
            Signup to our NewsLetter
          </p>
        </div>
      </div>
      <div className="bg-[url('https://unsplash.com/photos/41X6FwTwPh4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGluZHVzdHJ5fGVufDB8fHx8MTY5Mzg0NTc4N3ww&force=true&w=1920')]">
        <div className="bg-green-900/90 p-2 md:p-10">
          <div className="grid gap-4 md:grid-cols-4 w-full px-2 md:px-8 mx-auto text-gray-200">
            <div>
              <p className="text-[18px] text-green-200 border-b border-r pb-2 border-green-600">
                About Comacon
              </p>
              <div>
                <ul>
                  <li className="cursor-pointer line-clamp-[8] my-2 text-[10px]">
                    With roots in East Africa dating back to January 2007,
                    Comacon Limited is a leading professional Civil, Mechanical,
                    and Electrical contractor. Comacon Limited is now an
                    affiliate of Building, Structural & Mass Concrete Casting,
                    which is ultimately a part of the leading building
                    technology and related services in the globe. Projects of
                    any scale or complexity can be taken up by Comacon Limited
                    anywhere in East Africa thanks to its resources and
                    capacity. The best value for money solutions are ensured by
                    a highly qualified and experienced team of civil,
                    mechanical, and electrical engineers working with a team of
                    operations professionals that are equally qualified and
                    motivated.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-[18px] border-b border-r pb-2 border-green-600">
                Also of Interest
              </p>
              <div>
                <ul className="list-disc px-10">
                  <li className="cursor-pointer my-2 text-[14px]">Civil</li>
                  <li className="cursor-pointer my-2 text-[14px]">
                    Mechanical
                  </li>{" "}
                  <li className="cursor-pointer my-2 text-[14px]">
                    Electrical
                  </li>{" "}
                  <li className="cursor-pointer my-2 text-[14px]">Supplies</li>
                </ul>
              </div>
            </div>

            <div className="">
              <p className="text-[18px] border-b border-r pb-2 border-green-600">
                Open Hours
              </p>
              <div>
                <ul className="text-[12px] py-3">
                  <li className="py-2">Mon - Sat 8.00 to 18.00</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-[18px] border-b border-r pb-2 border-green-600">
                Get in Touch
              </p>
              <div>
                <ul>
                  <li className="cursor-pointer flex space-x-2 my-2 text-[14px]">
                    <CiLocationOn className="text-3xl md:text-2xl font-bold" />
                    <div>
                      <p className="text-[12px]">
                        <span className="text-gray-300">Headquaters:</span>
                        Lunga lunga Square, Lunga Lunga Road, Nairobi.
                      </p>
                    </div>
                  </li>
                  <li className="cursor-pointer flex space-x-2 my-2 text-[14px]">
                    <AiOutlinePhone className="text-2xl font-bold" />
                    <div>
                      <p className="text-[12px]">+254- 722 675 477</p>
                      <p className="text-[12px]">+254- 780 675 477</p>
                    </div>
                  </li>
                  <li className="cursor-pointer flex space-x-2 my-2 text-[14px]">
                    <AiOutlineMail className="text-xl font-bold" />
                    <div>
                      <p className="text-[14px]">info@comaconltd.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between mt-6 md:mt-4 w-full px-2 mx-auto pb-2 text-[18px] font-[500]">
        <p className="text-[12px] text-gray-500">
          &copy; {new Date().getFullYear()} The Comacon Group Inc | Terms and
          Conditions
        </p>
        <div className="flex justify-evenly text-gray-600 md:space-x-4 mt-6 md:mt-0">
          <a href="/" className="flex space-x-1 justify-center items-center">
            <AiFillLinkedin className="text-gray-700 text-[15px] " />{" "}
            <p className="text-[14px]">LinkedIn</p>
          </a>
          <a href="/" className="flex space-x-1 justify-center items-center">
            <BiLogoFacebook className="text-gray-700 text-[15px] " />
            <p className="text-[14px]">Facebook</p>
          </a>
          <a href="/" className="flex space-x-1 justify-center items-center">
            <BsTwitter className="text-gray-700 text-[15px] " />
            <p className="text-[14px]">Twitter</p>
          </a>
          <a href="/" className="flex space-x-1 justify-center items-center">
            <BsInstagram className="text-gray-700 text-[15px] " />
            <p className="text-[14px]">Instagram</p>
          </a>
        </div>
      </div>
      <div> </div>
      <Modal
        open={open}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,

          <Button loading={loading} onClick={handleOk}>
            Subscribe
          </Button>,
        ]}
      >
        <div>
          <p>Subscribe to Our News Letter</p>
          <Form onFinish={subscribe}>
            <Form.Item
              label="name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="weekly" valuePropName="checked">
              <Checkbox>Receive weekly Insights</Checkbox>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default Footer;

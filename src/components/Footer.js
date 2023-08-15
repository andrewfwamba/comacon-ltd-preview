import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";

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
            className="w-fit p-2 mx-auto border border-gray-400 rounded-md shadow-lg text-gray-700 hover:text-gray-300 hover:bg-gray-800 cursor-pointer"
          >
            Signup to our NewsLetter
          </p>
        </div>
      </div>
      <div className="bg-black/80 p-2 md:p-10">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 w-full px-8 md:w-2/3 mx-auto text-gray-200">
          <div>
            <p className="text-[18px] underline">Link Group 1</p>
            <div>
              <ul>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 1
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 2
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 3
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  {" "}
                  Sample Link 4
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 5
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[18px] underline">Link Group 2</p>
            <div>
              <ul>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 1
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  SampleLink 2
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 3
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 4
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 5
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[18px] underline">Link Group 3</p>
            <div>
              <ul>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 1
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 2
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 3
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 4
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 5
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[18px] underline">Link Group 4</p>
            <div>
              <ul>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 1
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 2
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 3
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 4
                </li>
                <li className="cursor-pointer my-2 text-[14px]">
                  Sample Link 5
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between mt-6 md:mt-4 w-full px-2 mx-auto my-4 text-[18px] font-[500]">
        <p className="text-[12px] text-gray-500">
          &copy; {new Date().getFullYear()} The Comacon Group Inc | Terms and
          Conditions | Privacy Policy
        </p>{" "}
        <div className="flex w-fit space-x-2 text-gray-400 md:space-x-4 mt-6 md:mt-0">
          <a href="/" className="flex space-x-2 justify-center items-center">
            <AiFillLinkedin className="text-gray-600 text-[15px] " />{" "}
            <p className="text-[14px]">LinkedIn</p>
          </a>
          <a href="/" className="flex space-x-2 justify-center items-center">
            <BiLogoFacebook className="text-gray-600 text-[15px] " />
            <p className="text-[14px]">Facebook</p>
          </a>
          <a href="/" className="flex space-x-2 justify-center items-center">
            <BsTwitter className="text-gray-600 text-[15px] " />
            <p className="text-[14px]">Twitter</p>
          </a>
          <a href="/" className="flex space-x-2 justify-center items-center">
            <BsInstagram className="text-gray-600 text-[15px] " />
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
            <Form.Item
              name="weekly"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Receive weekly Insights</Checkbox>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default Footer;

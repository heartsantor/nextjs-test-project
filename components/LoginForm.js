import React from "react";
import { ArrowRightIcon } from "../components/assets/icons";
import axios from "axios";

const LoginForm = () => {
  const handleSubmit = async (v) => {
    v.preventDefault();
    const bodyData = {
      name: "Test Name",
      email: "visitor@connectnow.dev",
      company: 1,
    };

    await axios
      .post("https://api.connectnow.dev/api/widget/visitors", bodyData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(
          "🚀 ~ file: LoginForm.js ~ line 18 ~ handleSubmit ~ res",
          res
        );
        return res;
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: LoginForm.js ~ line 26 ~ handleSubmit ~ err",
          err
        );
        return;
      });
  };
  // const handleSubmit = async (v) => {
  //   v.preventDefault();
  //   try {
  //     const bodyData = {
  //       name: "Test Name",
  //       email: "visitor@connectnow.dev",
  //       company: 1,
  //     };

  //     const response = await fetch(
  //       "https://api.connectnow.dev/api/widget/visitors",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(bodyData),
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: LoginForm.js ~ line 29 ~ handleSubmit ~ error",
  //       error
  //     );
  //   }
  // };

  return (
    <form className="mt-[47px]" onSubmit={handleSubmit}>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 input-gradient-border focus:outline-none"
          placeholder="Email Address"
          // required
        />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 input-gradient-border focus:outline-none"
          placeholder="Password "
          // required
        />
      </div>

      <button
        type="submit"
        // onClick={(e) => e.preventDefault()}
        className="mb-1.5 w-full text-center text-white btn-gradient px-4 py-[19px] block"
      >
        <span className="inline ">
          <span className="font-normal text-[14px] tracking-[0.2rem]">
            CONTINUE
          </span>
          <ArrowRightIcon />
        </span>
      </button>
    </form>
  );
};

export default LoginForm;

import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post('/api/send', data);
      if (res.data.success) {
        toast.success("Email sent successfully!");
        e.target.reset(); // Clear form after success
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="contact bg-[#efecdb] h-screen w-full flex flex-col items-center justify-center">
        <ToastContainer position="top-center" autoClose={3000} />

        <div className="absolute top-[100px] sm:w-[50vw] w-full ">
          <form className="flex flex-col gap-y-2 p-4" onSubmit={handleSubmit}>
            <div className="name flex justify-center items-center gap-x-2">
              <label
                htmlFor="name"
                className="amatic w-[100px] text-right font-extrabold text-2xl"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none"
                required
                placeholder="John Doe"
              />
            </div>

            <div className="contact flex justify-center items-center gap-x-2">
              <label
                htmlFor="contact"
                className="amatic w-[100px] text-right font-extrabold text-2xl"
              >
                Contact:
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                className="no-spinner border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none"
                required
                placeholder="9876XXXX99"
              />
            </div>

            <div className="email flex justify-center items-center gap-x-2">
              <label
                htmlFor="email"
                className="amatic w-[100px] text-right font-extrabold text-2xl"
              >
                E-Mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none"
                required
                placeholder="johnXXX@xyz.com"
              />
            </div>

            <div className="message flex justify-center items-start gap-x-2">
              <label
                htmlFor="message"
                className="amatic w-[100px] text-right font-extrabold text-2xl"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none"
                placeholder="(Optional)"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-center items-center gap-x-2 ">
              <div className="w-[100px]"></div>
              <div className="sm:w-[25vw] w-full">
                <div className="amatic relative px-5 py-1 text-2xl rounded-[10px] border-2 border-[#BBCE96] hover:border-0 cursor-pointer text-[#555451] overflow-hidden group z-10 text-center">
                  <span className="absolute w-full  h-full bg-[#BBCE96] top-full left-0 group-hover:top-0 transition-all ease-in-out z-0"></span>
                  <span className="relative z-10">
                    <input type="submit" value="Send" />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="absolute bottom-0 w-full py-5 bg-[#BBCE96] flex flex-col justify-between items-center text-center text-[13px]">
          <h1>
            <b>Email:</b> srijantechnologies22@gmail.com
          </h1>
          <h1>
            <b>Contact:</b> +91 9599194890/92
          </h1>
          <h1>
            <b>Address:</b> S-207, 2nd Floor, Anjara Bhawan, D-Block Market,
            <br />
            Vivek Vihar, Ph-1, Delhi-110095
          </h1>
        </div>
      </div>
    </>
  );
}

export default Contact;

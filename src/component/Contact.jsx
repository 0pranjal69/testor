import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


function Contact() {
  const formRef = useRef();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: formRef.current.name.value,
    email: formRef.current.email.value,
    contact: formRef.current.contact.value,
    message: formRef.current.message.value,
  };

  try {
const res = await axios.post('/api/send', formData);

    if (res.data.success) {
      toast.success("Email sent successfully!");
      formRef.current.reset();
    } else {
      toast.error("Failed to send email.");
    }
  } catch (err) {
    toast.error("An error occurred.");
    console.error(err);
  }
};

  return (
    <>
      <div className="contact bg-[#efecdb] h-screen w-full flex flex-col items-center justify-center">
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />

        <div className="absolute top-[100px] sm:w-[50vw] w-full ">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-y-2 p-4">
            {/* Name */}
            <div className="name flex justify-center items-center gap-x-2">
              <label htmlFor="name" className="amatic w-[100px] text-right font-extrabold text-2xl">Name:</label>
              <input type="text" id="name" name="name" required placeholder="John Doe"
                className="border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none" />
            </div>

            {/* Contact */}
            <div className="contact flex justify-center items-center gap-x-2">
              <label htmlFor="contact" className="amatic w-[100px] text-right font-extrabold text-2xl">Contact:</label>
              <input type="number" id="contact" name="contact" required placeholder="9876XXXX99"
                className="no-spinner border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none" />
            </div>

            {/* Email */}
            <div className="email flex justify-center items-center gap-x-2">
              <label htmlFor="email" className="amatic w-[100px] text-right font-extrabold text-2xl">E-Mail:</label>
              <input type="email" id="email" name="email" required placeholder="johnXXX@xyz.com"
                className="border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none" />
            </div>

            {/* Message */}
            <div className="message flex justify-center items-start gap-x-2">
              <label htmlFor="message" className="amatic w-[100px] text-right font-extrabold text-2xl">Message:</label>
              <textarea id="message" name="message" required placeholder="(Optional)" rows="5"
                className="border-2 sm:w-[25vw] w-full border-[#BBCE96] rounded-[10px] py-1 px-4 focus:outline-none"></textarea>
            </div>

            {/* Submit */}
            <div className="flex justify-center items-center gap-x-2 ">
              <div className="w-[100px]"></div>
              <div className="sm:w-[25vw] w-full">
                <button
                  type="submit"
                  className="amatic relative w-full px-5 py-1 text-2xl rounded-[10px] border-2 border-[#BBCE96] hover:border-0 cursor-pointer text-[#555451] overflow-hidden group z-10 text-center"
                >
                  <span className="absolute w-full h-full bg-[#BBCE96] top-full left-0 group-hover:top-0 transition-all ease-in-out z-0"></span>
                  <span className="relative z-10">Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="absolute bottom-0 w-full py-5 bg-[#BBCE96] flex flex-col justify-between items-center text-center text-[13px]">
          <h1><b>Email:</b> srijantechnologies22@gmail.com</h1>
          <h1><b>Contact:</b> +91 9599194890/92</h1>
          <h1><b>Address:</b> S-207, 2nd Floor, Anjara Bhawan, D-Block Market,<br />Vivek Vihar, Ph-1, Delhi-110095</h1>
        </div>
      </div>
    </>
  );
}

export default Contact;

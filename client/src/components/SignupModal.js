import React, { useState } from "react";
import { supabase } from "../utils/supabase";

const SignupModal = ({ setIsModalSignOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setForm] = useState({
    name: "",
    email: "",
    pwd: "",
  });
  const handlechange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalSignOpen(false);
  };
  const handleSubmit = async (e) => {
    console.log("jjjjjjjjj");
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        name: formData.name,
        pwd: formData.pwd,
      });
      setIsModalSignOpen(false);
    } catch (e) {}
  };
  return (
    <div className="flex justify-center ">
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-blue-600 hover:bg-blue-500 relative text-white rounded-lg transition"
      >
        Register
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-stone-200 bg-opacity-30 flex justify-center items-center opacity-100 transition-opacity duration-300 ease-out z-[9999] "
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg w-9/12 sm:w-7/12 md:w-5/12 lg:w-[100%] scale-100 transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="pt-4 px-4 flex justify-between items-start">
              <div className="flex flex-col">
                <h1 className="text-xl text-stone-800 font-semibold">
                  Create an Account
                </h1>
                <p className="text-stone-500">
                  Fill in your details to register.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-stone-500 hover:text-stone-800"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="username"
                  className="font-sans text-sm text-stone-800 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="username"
                  placeholder="Your name"
                  type="text"
                  className="w-full outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 select-none text-sm py-2 px-2.5 shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 focus:border-stone-400"
                />
                <label
                  htmlFor="email"
                  className="font-sans text-sm text-stone-800 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  placeholder="someone@example.com"
                  type="email"
                  className="w-full outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 select-none text-sm py-2 px-2.5 shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 focus:border-stone-400"
                />
                <label
                  htmlFor="password"
                  className="font-sans text-sm text-stone-800 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  placeholder="*******"
                  type="password"
                  className="w-full outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 select-none text-sm py-2 px-2.5 shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 focus:border-stone-400"
                />

                <button
                  type="submit"
                  className="inline-flex mt-5 w-full items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in text-sm py-2 px-4 shadow-sm hover:shadow-md bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
                >
                  Register
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4 flex flex-col justify-end gap-2">
              <small className="font-sans text-sm mb-2 mt-3 flex items-center justify-center gap-1 text-stone-500">
                Already have an account?
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-sans text-sm text-primary font-semibold"
                >
                  Sign in
                </a>
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupModal;

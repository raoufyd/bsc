import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import SignupModal from "./SignupModal";

const SignInModal = () => {
  const [isModalSignOpen, setIsModalSignOpen] = useState(false);
  useEffect(() => {
    if (isModalSignOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isModalSignOpen]);
  const openModal = () => setIsModalSignOpen(true);
  const closeModal = () => setIsModalSignOpen(false);

  return (
    <div className="flex justify-center">
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#0C1E3E] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out cursor-pointer "
      >
        Sign In
        <BiUser className="text-[22px]" />
      </button>

      {/* Modal */}
      {isModalSignOpen && (
        <div
          className="fixed antialiased inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-100 transition-opacity duration-300 ease-out z-[9999]"
          aria-hidden="true"
        >
          <div className=" bg-white mr-8 mb-5 rounded-lg w-9/12 sm:w-5/12 md:w-5/12 lg:w-3/12 scale-100 transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="pt-4 px-4 flex justify-between items-start">
              <div className="flex flex-col">
                <h1 className="text-xl text-stone-800 font-semibold">
                  Sign In
                </h1>
                <p className="text-stone-500">
                  Enter your email and password to Sign In.
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
              <div className="mb-4 mt-2 space-y-1.5">
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
              </div>
              <div className="mb-4 mt-2 space-y-1.5">
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
              </div>
              <div className="inline-flex items-center mt-1">
                <label
                  htmlFor="rememberMe"
                  className="flex items-center cursor-pointer relative"
                >
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-stone-200 checked:bg-stone-800 checked:border-stone-800"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    ✓
                  </span>
                </label>
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-stone-800 text-sm"
                >
                  Remember Me
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4 flex flex-col justify-end gap-2">
              <button
                onClick={() => alert("Sign In functionality")}
                className="inline-flex w-full items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 text-stone-50 rounded-lg transition"
              >
                Sign In
              </button>
              <SignupModal setIsModalSignOpen={setIsModalSignOpen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInModal;

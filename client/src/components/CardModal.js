import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";

const CardWithModal = ({
  image,
  title,
  capacite,
  telephone,
  disponibilite,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center">
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="flex items-center border px-3 py-2 rounded-xl gap-2 bg-[#0C1E3E] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out cursor-pointer"
      >
        <div className="">
          <div className="relative">
            <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
            <div className="flex">
              {/* Background Image */}
              <img
                src={image}
                alt="Card"
                className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[13rem] w-full"
              />
              {/* Title and Price */}
              <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
                {title}
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="pt-3 flex justify-between items-start">
            {/* Left Section */}
            <div className="">
              <p className="max-w-[17rem] text-[16px] -mt-1 text-gray-500">
                {telephone}
              </p>
              <p className="max-w-[17rem] font-semibold text-[17px]">
                {capacite}
              </p>
            </div>
            {/* Right Section */}
            <div className="flex items-center space-x-1">
              <BsStarFill />
              <p className="text-[15px]">5.0</p>
            </div>
          </div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <a href="#">
              <img className="rounded-t-lg" src={image} alt="Modal Content" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-00 dark:text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                capacité : {capacite}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                disponibilité : {disponibilite}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                telephone : {telephone}
              </p>
              <button
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={closeModal}
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardWithModal;

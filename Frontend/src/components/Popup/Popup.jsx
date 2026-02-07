import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-center p-12 m-12 cursor-pointer">Login</strong>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Username"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="Password"
                  placeholder="Password"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 required:"
                />
                  {/* <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    SignUp
                </button> */}
                <button type="submit" class="bg-gradient-to-r from-primary to-secondary w-full  mb-3 bg-indigo-500 py-2.5 rounded-full text-white">SignUp</button>
              </div>
              <p class="text-center mt-4">Don’t have an account? <a href="#" class="text-blue-500 underline">Signup</a></p>
              <button type="button" class="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
                <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo"/>
                  Log in with Apple
              </button>
              <button type="button" class="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon"/>
                  Log in with Google
              </button>
              </div>
            </div>
          </div>
        
      )}
    </>
  );
};

export default Popup;

import React from "react";
import { GlobeIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

const AirnbnbFooter = () => {
  return (
    <footer className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-black">

       
      {/* Footer Bottom */}
      <div className="border-t">
      <img className='w-50  cursor-pointer' src="/webphotos/logo-full.webp" alt="logo" />
      <div className=" pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white  gap-4">
        <div className="text-center md:text-left">
          © 2025 Uniodessy. All rights reserved.·{" "}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-4">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="w-5 h-5" />
            <span>English (US)</span>
          </div>
          <div>
            <span>USD</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="text-gray-600"
              >
                <path d="M18.896 0H1.104A1.104 1.104 0 0 0 0 1.104v17.792C0 19.617.384 20 1.104 20H10.76V12.46h-2.36v-2.96h2.36V7.05c0-2.36 1.44-3.65 3.56-3.65.7 0 1.5.05 1.8.1v2.08h-1.22c-1.2 0-1.5.7-1.5 1.46v1.76h3.02l-.36 2.96h-2.66V20h5.18c.72 0 1.1-.384 1.1-1.104V1.104A1.104 1.104 0 0 0 18.896 0z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:underline">
              <TwitterLogoIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:underline">
              <InstagramLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default AirnbnbFooter;

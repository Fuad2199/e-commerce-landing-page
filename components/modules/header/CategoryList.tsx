import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CategoryList = () => {
  return (
    <div className="absolute h-[420px] w-60 shadow-xl top-[50px] border bg-white">
      <ul>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 cursor-pointer">
            Computer & Laptop
          </span>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 cursor-pointer">
            Computer Accessories
          </span>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 cursor-pointer">
            SmartPhone
          </span>
          <ChevronRight
            size={12}
            className="group-hover:text-gray-900"
          />
          {/* sub category menu */}
          <div className="absolute h-full lg:w-175 xl:w-[868px] bg-white shadow-xl border top-0 left-62.5 p-3 grid gap-5 grid-cols-[164px_1fr_1fr]">
            {/* column 1 */}
            <div className="border"></div>
            {/* column 2 */}
            <div className="border">
              <div className="flex flex-col gap-4">
                <span className="text-body-md-600 uppercase">
                  featured phones
                </span>
                <div className="flex items-center gap-3 border p-3">
                  {/* image */}
                  <Image
                    src="https://res.cloudinary.com/dhzekqgvu/image/upload/v1750350026/playstation5_owzvg9.png"
                    alt="card image"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-body-sm-400">
                      Playstation 5 Slim
                    </span>
                    <span className="text-body-sm-600 text-secondary-500">
                      160$
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border p-3">
                  {/* image */}
                  <Image
                    src="https://res.cloudinary.com/dhzekqgvu/image/upload/v1750352373/security-cam_e0tn8c.png"
                    alt="card image"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-body-sm-400">
                      Security Cam
                    </span>
                    <span className="text-body-sm-600 text-secondary-500">
                      160$
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border p-3">
                  {/* image */}
                  <Image
                    src="https://res.cloudinary.com/dhzekqgvu/image/upload/v1750352455/galaxy-a71_evxnpp.png"
                    alt="card image"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-body-sm-400">
                      Samsung Galaxy A 71
                    </span>
                    <span className="text-body-sm-600 text-secondary-500">
                      160$
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* column 3 */}
            <div className="border background-image-url"></div>
          </div>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 cursor-pointer">
            Headphones
          </span>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 group-hover:bg-gray-50">
            Mobile Accessories
          </span>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 group-hover:bg-gray-50">
            Gaming Console
          </span>
          <ChevronRight
            size={12}
            className="group-hover:text-gray-900"
          />
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 group-hover:bg-gray-50">
            Camera & Photo
          </span>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 group-hover:bg-gray-50">
            TV & Homes Applications
          </span>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 group-hover:bg-gray-50">
            Watchs & Accessories
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;

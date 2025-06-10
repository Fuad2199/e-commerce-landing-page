import { ChevronRight } from 'lucide-react';
import React from 'react';

const CategoryList = () => {
  return (
    <div className="absolute h-[420px] w-60 shadow-xl top-[50px] border bg-white">
      <ul>
        <li className="h-9 w-full flex items-center justify-between px-4">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Computer & Laptop
          </span>
            <ChevronRight size={12}/>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Computer Accessories
          </span>
            <ChevronRight size={12}/>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            SmartPhone
          </span>
            <ChevronRight size={12}/>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Headphone
          </span>
            <ChevronRight size={12}/>
        </li>
        <li className="h-9 w-full flex items-center justify-between px-4 group">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 cursor-pointer">
            Mobile Accessories
          </span>
            <ChevronRight size={12}/>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;

import Container from '@/components/custom/Container';
import { RectangleButton } from '@/components/custom/RectangleButton';
import { IoIosArrowDown } from 'react-icons/io';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CategoryList from './CategoryList';
import {
  TypeCategoryModel,
  TypePageModel,
  TypeProductModel,
  TypeSlideModel,
} from '@/types/models';

const Menus = ({
  className,
  pages,
  categories,
  products,
  campaigns,
}: {
  className?: string;
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
  pages: TypePageModel[];
}) => {
  return (
    <div
      className={cn(className, 'h-20 bg-white border-b')}
    >
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* left side */}
          <div className="flex items-center gap-6">
            {/* categories */}
            <div className="relative">
              <RectangleButton
                className="text-black capitalize cursor-pointer w-full h-12 bg-gray-50"
                icon="none"
              >
                all category
                <IoIosArrowDown />
              </RectangleButton>
              <CategoryList
                categories={categories}
                products={products}
                campaigns={campaigns}
              />
            </div>
            {/* pages */}
            <div className="flex items-center gap-6">
              {pages?.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/${item.slug}`}
                  className="flex gap-[6px] items-center"
                >
                  <Image
                    src={item.image}
                    alt="logo"
                    width="24"
                    height="24"
                  />
                  <span className="flex items-center text-gray-600 text-body-sm-400">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2 text-gray-900">
            <Image
              src="/images/Info.svg"
              alt="logo"
              width="28"
              height="28"
            />
            <p className="text-body-lg-400">
              +1-202-555-0104
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menus;

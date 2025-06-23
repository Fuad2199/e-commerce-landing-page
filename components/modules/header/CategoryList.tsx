"use client"

import { addToCart } from '@/store/cartSlice';
import {
  TypeCategoryModel,
  TypeProductModel,
  TypeSlideModel,
  TypeSubCategoryModel,
} from '@/types/models';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

const CategoryList = ({
  categories,
  products,
  campaigns,
}: {
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
}) => {
  const router = useRouter();
  const filterProducts = products.filter(
    item => item.featured == true
  );
  const dispatch = useDispatch()
  const handleAddCampaignProduct = (product: TypeProductModel) => {
    // add product campaign to cart
    dispatch(
      // set reducer action
      addToCart({
        store: product.store,
            variant: product.productVariants[0],
            productName: product.name,
            productImage: product.images[0].url,
            qty: 1
      })
    )
    toast("Product added")
  }
  return (
    <div className="absolute h-109 w-60 shadow-xl top-16 border bg-white">
      <ul>
        {categories?.map((item, idx) => (
          <li
            key={idx}
            className="h-9 w-full flex items-center justify-between px-4 group hover:bg-gray-50 cursor-pointer"
          >
            <Link href={`/categories/${item.slug}/products`}>
            <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900 cursor-pointer">
              {item.name}
            </span>
            </Link>
            {item.subCategory.length > 0 && (
              <>
                <ChevronRight
                  size={12}
                  className="group-hover:text-gray-900"
                />
                {/* sub category menu */}
                <div className="hidden group-hover:grid absolute h-full lg:w-175 xl:w-[868px] bg-white shadow-xl border top-0 left-60 p-5 gap-5 grid-cols-[100px_1fr_1fr] xl:grid-cols-[164px_1fr_1fr]">
                  {/* column 1 */}
                  <div className="border">
                    <ul>
                      {item.subCategory.map(
                        (
                          itemSub: TypeSubCategoryModel,
                          idx_sub: number
                        ) => (
                          <li
                            onClick={() =>
                              router.push(
                                `/categories/${item.slug}/products`
                              )
                            }
                            key={idx_sub}
                            className="group hover:bg-gray-50 h-9 px-4 flex items-center"
                          >
                            <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                              {itemSub.name}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  {/* column 2 */}
                  <div className="">
                    <div className="flex flex-col gap-4">
                      <span className="text-body-md-600 uppercase">
                        featured products
                      </span>
                      { filterProducts.slice(0,3).map((itemFilter, idxFilter) => (

                      
                        <div key={idxFilter} className="flex items-center gap-3 border p-3">
                          {/* image */}
                          <Image
                            src={itemFilter.images[0].url ?? ""}
                            alt="card image"
                            width={80}
                            height={0}
                            className='h-[80px] object-scale-down'
                          />
                          <div className="flex flex-col gap-2">
                            <span className="text-body-sm-400">
                              {itemFilter.name}
                            </span>
                            <span className="text-body-sm-600 text-secondary-500">
                              {itemFilter.price}
                            </span>
                          </div>
                        </div>
                        ))
                      }
                    </div>
                  </div>

                  {/* campaigns */}
                  {
                    campaigns.length > 0 ? (
                      <div 
                        onClick={() => handleAddCampaignProduct(campaigns[0].slideItem[0].product)}
                        className="border bg-center" 
                        style={{
                        backgroundImage: `url(${campaigns[0].image})`
                      }}></div>
                    ) : (
                      <div className="border background-image-url bg-center"></div>
                    )
                  }
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

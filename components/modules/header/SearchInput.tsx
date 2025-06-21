'use client';

import { Badge } from '@/components/custom/Badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import axios from 'axios';
import { TypeProductModel } from '@/types/models';

const SearchInput = ({
  className,
}: {
  className?: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [data, setData] = useState<TypeProductModel[]>();

const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  if (value.length < 2) return;

  try {
    const res = await axios.get('/api/search', {
      params: { search: value },
    });
    setData(res.data.data); // uyğun struktura görə dəyiş
  } catch (err) {
    console.error('Search error:', err);
  }
};

  return (
    <div className={cn('px-2 relative', className)}>
      <Input
        className="border-none"
        placeholder="Search for anthing..."
        onMouseDown={() => setOpenDropdown(!openDropdown)}
        onChange={handleSearch}
      />
      <div>
        <Button className="text-black shadow-none cursor-pointer">
          <Search />
        </Button>
        {/* search dropdown */}
        <m.div
          onMouseLeave={() => setOpenDropdown(false)}
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'h-[618px] absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 shadow-md left-0',
            openDropdown ? 'flex' : 'hidden'
          )}
        >
          <div className="flex flex-col gap-y-6 w-full">
            {data?.map((item: TypeProductModel, idx) => (
              <Link
                key={idx}
                href="/"
                className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
              >
                {item.images?.[0] && (
                  <Image
                    src={item.images[0].url}
                    width={100}
                    height={100}
                    alt={item.name}
                    className='object-cover, w-auto h-auto'
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3> {item.name} </h3>

                  {item.discount > 0 && (
                    <Badge className="" variant="warning">
                      {item.discount}%
                    </Badge>
                  )}
                  <h3>{item.price}$</h3>
                </div>
              </Link>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default SearchInput;

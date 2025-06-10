import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaFacebook,
  FaPinterest,
  FaRedditAlien,
  FaYoutube,
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const SocialIcons = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn('flex items-center gap-4', className)}
    >
      <span className='capitalize'>follow us:</span>
      <div className="flex items-center gap-4">
        <Link href="/" target="_blank">
          <FaXTwitter size={16}/>
        </Link>
        <Link href="/" target="_blank">
          <FaFacebook size={16}/>
        </Link>
        <Link href="/" target="_blank">
          <FaPinterest size={16}/>
        </Link>
        <Link href="/" target="_blank">
          <FaRedditAlien size={16}/>
        </Link>
        <Link href="/" target="_blank">
          <FaYoutube size={16}/>
        </Link>
        <Link href="/" target="_blank">
          <AiFillInstagram size={16}/>
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;

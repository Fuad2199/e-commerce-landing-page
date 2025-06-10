"use client"

import Container from '@/components/custom/Container';
import Logo from '@/components/custom/Logo';
import React from 'react';
import SearchInput from './SearchInput';
import IconsGroup from './IconsGroup';
import Sidebar from './Sidebar';
import MobileSocialMenu from './MobileSocialMenu';

const MainMenu = () => {
  return (
    <nav className="bg-secondary-700 h-[88px] border-t-[1px] border-white/20">
      <Container>
        <div className='flex items-center justify-between h-full'>
          {/* sidebar menu */}
          <Sidebar className='block lg:hidden'/>
          {/* logo */}
          <Logo className='hidden lg:block'/>
          {/* search input */}
          <SearchInput className='hidden lg:flex items-center w-full max-w-[646px] bg-white h-12'/>
          {/* icons group */}
          <IconsGroup className='flex'/>
          <MobileSocialMenu className='lg:hidden'/>
        </div>
      </Container>
    </nav>
  );
};

export default MainMenu;

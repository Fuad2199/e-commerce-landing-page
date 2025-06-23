import React from 'react';
import SocialMenu from './SocialMenu';
import MainMenu from './MainMenu';
import Menus from './Menus';
import { getCategories } from '@/actions/category';
import { getProducts } from '@/actions/product';
import { getCampaigns } from '@/actions/campaign';
import { getPages } from '@/actions/page';

const Header = async () => {
  const categories = await getCategories();
  const products = await getProducts();
  const campaigns = await getCampaigns(
    'homepage-product-best-deals-section'
  );
  const pages = await getPages();
  return (
    <header>
      <SocialMenu className="hidden lg:block" />
      <MainMenu />
      <Menus
        className="hidden lg:block"
        categories={categories}
        products={products}
        campaigns={campaigns}
        pages={pages}
      />
    </header>
  );
};

export default Header;

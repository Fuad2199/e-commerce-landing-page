'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  MenuIcon,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = ({ className }: { className?: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size="32" className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <Tabs>
            <TabsList>
              <TabsTrigger value="categories">
                Categories
              </TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="category">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <div>
                <div className="flex items-center justify-between">
                  <span className="capitalize hover:text-primary-500 cursor-pointer">
                    category name
                  </span>
                  <ArrowRight
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setShow(!show)}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pages">pages</TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div>
              <Button
                onClick={() => setShow(!show)}
                className="h-5 w-5 cursor-pointer text-black"
              >
                <ArrowLeft />
              </Button>
              <div>
                <Link href="">sub category</Link>
              </div>
            </div>
          </SheetContent>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};

export default Sidebar;

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'
import React from 'react'
import LanguageCurrency from './LanguageCurrency'
import SocialIcons from './SocialIcons'

const MobileSocialMenu = ({className}: {className:string}) => {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
            <Globe size="32" className='text-white'/>
        </SheetTrigger>
        <SheetContent side='bottom' className='rounded-t-3xl'>
            <SheetHeader className='space-y-2 flex flex-col items-center'>
                <SheetTitle>Social/Language/Currency</SheetTitle>
                <SheetDescription>
                    <LanguageCurrency className='text-black bg-white border-0 w-25'/>
                    <SocialIcons/>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSocialMenu

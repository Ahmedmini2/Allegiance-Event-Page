import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" bg-opacity-20 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <nav aria-label="Global" className="flex mx-auto lg:mx-40   items-center justify-between p-6 lg:px-4">
        <div className="flex lg:flex-1">
          <a href="https://aredxb.com" className="-m-1.5 p-1.5">
            <span className="sr-only">Allegiance Real Estate</span>
            <img
              alt="Allegiance Real Estate"
              src="/src/assets/images/logogold.png"
              className="h-16 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          

          <a href="https://aredxb.com" className="text-lg font-semibold text-white transition ease-in-out duration-500 hover:text-main-gold hover:bg-main-green hover px-4 py-3 pt-2 rounded-md">
            Home Page
          </a>
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a> */}
        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Allegiance Real Estate</span>
              <img
                alt=""
                src="https://aredxb.com"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="https://aredxb.com"
                  className="-mx-3 block rounded-lg px-3 py-12 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home Page
                </a>
               </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
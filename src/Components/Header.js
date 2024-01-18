import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { Images } from '../Constants/Images'


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const path = useLocation().pathname
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <header className="bg-white fixed z-30 top-0 w-full shadow-md">
            <nav className="mx-auto  flex max-w-7xl items-center font-nunito justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 flex-row justify-start items-end space-x-2 ">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="w-auto h-8 " src={Images.logo1} alt="" />
                    </a>
                    <div className='flex flex-col'>
                    <p className='text-lg font-nunito m-0 p-0 font-bold text-[#145e45] text-start tracking-widest'>Make <span className='text-sm font-normal'>My</span> Properties</p>
                    <p className='text-[6px] font-nunito m-0 p-0 font-bold text-[#145e45] text-center tracking-widest'>One Stop Solution For All Your Requirements </p>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <Link
                        to={'/'}
                        href="#" className= {classNames(path==='/'?"text-sm font-bold underline underline-offset-8 leading-6 tracking-widest text-[#145e45]":"text-sm font-semibold leading-6 text-gray-900")}>
                        Home
                    </Link>
                    <Link
                        to={'/properties'}
                        href="#" className= {classNames(path==='/properties'?"text-sm font-bold underline underline-offset-8 leading-6 tracking-widest text-[#145e45]":"text-sm font-semibold leading-6 text-gray-900")}>
                        Properties
                    </Link>
                    <Link
                        to={'/about'}
                        href="#" className= {classNames(path==='/about'?"text-sm font-bold underline underline-offset-8 leading-6 tracking-widest text-[#145e45]":"text-sm font-semibold leading-6 text-gray-900")}>
                        About Us
                    </Link>
                    <Link
                        to={'/blog'}
                        href="#" className= {classNames(path==='/blog'?"text-sm font-bold underline underline-offset-8 leading-6 tracking-widest text-[#145e45]":"text-sm font-semibold leading-6 text-gray-900")}>
                        Blog
                    </Link>
                    <Link
                        to={'/contact'}
                        href="#" className= {classNames(path==='/contact'?"text-sm font-bold underline underline-offset-8 leading-6 tracking-widest text-[#145e45]":"text-sm font-semibold leading-6 text-gray-900")}>
                        Contact Us
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a 
                    href="tel:+91 9029263511"
                    className="text-sm font-black leading-6 text-[#145e45]">
                        Call Now <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src={Images.logo2}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to={'/'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <Link
                                    to={'/properties'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Properties
                                </Link>
                                <Link
                                    to={'/about'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to={'/blog'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Blog
                                </Link>
                                <Link
                                    to={'/contact'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="tel:+91 9029263511"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-black leading-7 text-[#145e45] hover:bg-gray-50"
                                >
                                    Call Now <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

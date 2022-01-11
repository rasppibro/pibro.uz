/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Asosiy', href: '/', current: true },
  { name: 'Jamoa', href: '/team', current: false },
  { name: 'Loyihalar', href: '/projects', current: false },
  { name: 'Bog\'lanish', href: '/contact', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  
  return (
    <Disclosure as="nav" className="sticky w-full bg-white backdrop-blur">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-10 backdrop-blur">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="transition ease-in-out delay-150 duration-300 inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                  <Image
                    className="block lg:hidden"
                    src="/logo.png"
                    alt="Pi Bro Logo"
                    width="32px"
                    height="32px"
                  />
                  </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {props.navigation !== undefined ? props?.navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        
                      >
                        <a className={classNames(
                          item.current ? 'bg-rose-900 text-white' : 'text-white-300 transition ease-in-out delay-150 hover:bg-rose-700 hover:text-white duration-300',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                        </a>
                      </Link>
                    )):navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        
                      >
                        <a className={classNames(
                          item.current ? 'bg-rose-900 text-white' : 'text-white-300 transition ease-in-out delay-150 hover:bg-rose-700 hover:text-white duration-300',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden transition ease-in-out delay-150 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {props.navigation !== undefined ? props?.navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-rose-900 text-white' : 'text-white-300 transition ease-in-out delay-150 hover:bg-rose-700 hover:text-white duration-300',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              )):navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-rose-900 text-white' : 'text-white-300 transition ease-in-out delay-150 hover:bg-rose-700 hover:text-white duration-300',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

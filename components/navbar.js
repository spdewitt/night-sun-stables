"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/logo.webp";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Birthday Parties",
      href: "/events"
    },
    {
      label: "Competitions",
      href: "/competitions"
    }
  ];

  const mobilemenu = [...leftmenu];

  return (
    <Container className="bottom-border">
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex items-center justify-between">
                {/* Logo or Branding */}
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </Link>
                <div className="phoneNumber">(812) 499-3403</div>
                {/* Mobile Toggle Button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden">
                  <span className="sr-only">Open main menu</span>
                  {/* Icon for the button - a hamburger menu icon */}
                  <svg
                    className="h-6 w-6 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Disclosure.Button>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                  {leftmenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Panel */}
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {mobilemenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

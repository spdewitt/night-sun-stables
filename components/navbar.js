"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/logo.webp";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// Grouped navigation. Kept in code (rather than the CMS) so the
// dropdown structure stays stable.
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    items: [
      { title: "Riding Lessons", path: "/lessons" },
      { title: "Youth Camps", path: "/youth-camps" },
      { title: "Competitions", path: "/competition" },
      { title: "Birthday Parties", path: "/birthday-parties" }
    ]
  },
  {
    label: "About",
    items: [
      { title: "About Us", path: "/about" },
      { title: "Behind the Scenes", path: "/archive" },
      { title: "Services", path: "/services" }
    ]
  },
  { label: "Boarding", href: "/boarding" },
  { label: "Contact", href: "/#contact-form" }
];

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-cream-100 hover:text-forest-700 dark:text-gray-400 dark:hover:bg-stone-800";

export default function Navbar() {
  return (
    <Container className="bottom-border">
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex items-center justify-between py-3">
                {/* Logo or Branding */}
                <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src={logo}
                      alt="Night Sun Stables logo"
                      width={52}
                      height={52}
                    />
                    <span className="hidden font-serif text-xl font-semibold leading-tight text-barn-800 dark:text-cream-100 sm:block">
                      Night Sun
                      <br />
                      Stables
                    </span>
                  </Link>
                  <a
                    href="tel:+18124993403"
                    className="ml-5 hidden border-l border-cream-300 pl-5 text-sm font-medium text-gray-600 hover:text-forest-600 dark:border-gray-700 dark:text-gray-400 md:block">
                    (812) 499-3403
                  </a>
                </div>
                {/* Mobile Toggle Button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-600 md:hidden">
                  <span className="sr-only">Open main menu</span>
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
                <div className="headerLinks hidden md:flex md:items-center md:space-x-1">
                  {NAV.map((item, index) =>
                    item.items ? (
                      <DropdownMenu
                        key={index}
                        menu={item}
                        items={item.items}
                      />
                    ) : (
                      <Link
                        key={index}
                        href={item.href}
                        className={linkClass}>
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Mobile Menu Panel */}
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {NAV.map((item, index) =>
                    item.items ? (
                      <div key={index} className="py-1">
                        <p className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-barn-600">
                          {item.label}
                        </p>
                        {item.items.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.path}
                            className="block px-6 py-2 text-gray-700 hover:bg-cream-100 hover:text-forest-700 dark:text-gray-300">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 font-medium text-gray-700 hover:bg-cream-100 hover:text-forest-700 dark:text-gray-300">
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors hover:bg-cream-100 focus:outline-none dark:hover:bg-stone-800",
              open
                ? "text-forest-700"
                : "text-gray-600 dark:text-gray-400"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute left-0 z-20 mt-1 w-56 origin-top-left rounded-xl border border-cream-300 bg-white py-2 shadow-lg focus:outline-none dark:border-stone-800 dark:bg-stone-900">
              {items.map((item, index) => (
                <Menu.Item as="div" key={`${item.title}${index}`}>
                  {({ active }) => (
                    <Link
                      href={item?.path ? item.path : "#"}
                      className={cx(
                        "block px-5 py-2 text-sm transition-colors",
                        active
                          ? "bg-cream-100 text-forest-700 dark:bg-stone-800"
                          : "text-gray-700 dark:text-gray-300"
                      )}>
                      {item.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

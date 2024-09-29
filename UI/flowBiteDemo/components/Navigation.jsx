"use client";

import { Navbar , DarkThemeToggle } from "flowbite-react";
import Image from "next/image";


function Navigation () {
  return (
    <>
        <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        {/* <img
          src="https://flowbite.com/docs/images/logo.svg"
          classNameName="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        /> */}
        <span classNameName="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
        <DarkThemeToggle />

      </Navbar.Collapse>
    </Navbar>



    </>

  );
}

export default Navigation;

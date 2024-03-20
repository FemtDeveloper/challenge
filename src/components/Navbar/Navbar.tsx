"use client";
import { MenuIcon } from "../Icons";

const Navbar = () => {
  return (
    <header className="w-full max-w-lg-wrapper fixed px-5 top-6 z-50">
      <nav className="w-full flex justify-end">
        <button name="menu" onClick={console.log}>
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

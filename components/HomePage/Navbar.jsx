import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center container pt-1">
      <Link className="font-medium text-2xl" href="/">
        Logo
      </Link>
      <div className="flex gap-9">
        <Link className="font-medium" href="/">
          Pricing
        </Link>
        <Link href="/">FAQ's</Link>
        <Link href="/">Contact</Link>
      </div>
      <Link
        className="rounded-lg text-white bg-[#14B082] py-2 px-5"
        href="/login"
      >
        Login
      </Link>
    </header>
  );
}

export default Navbar;

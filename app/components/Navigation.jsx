/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <header className="grid grid-cols-2">
      <div className="">Main Logo</div>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link  href="/about">About</Link>
          </li>
          <li>
            <Link  href="/service">Services</Link>
          </li>
          <li>
            <Link  href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

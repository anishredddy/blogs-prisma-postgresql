import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-white text-2xl font-bold">
          BLOGS WEBSITE
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blogs" className="text-white hover:underline">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

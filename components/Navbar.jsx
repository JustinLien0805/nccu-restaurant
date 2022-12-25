import React from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => {
            router.push("/");
          }}
        >
          NCCU
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="active:bg-black"
              onClick={() => router.push("/order")}
            >
              Pre-Order
            </a>
          </li>
          <li>
            <a className="active:bg-black" onClick={() => router.push("/rating")}>
              Rating
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

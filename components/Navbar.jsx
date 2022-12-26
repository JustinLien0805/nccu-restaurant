import React from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  const handlePush = (path) => {
    // check if user is login or not when press the button
    const user = localStorage.getItem("token");
    if (user) {
      router.push(path);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => {
            router.push("/");
            // remove token
            localStorage.removeItem("token");
          }}
        >
          NCCU
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="active:bg-black" onClick={() => handlePush("/Order")}>
              Pre-Order
            </a>
          </li>
          <li>
            <a
              className="active:bg-black"
              onClick={() => handlePush("/rating")}
            >
              Rating
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

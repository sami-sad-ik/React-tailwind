import { useState } from "react";
import Link from "./Link";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Dashboard", path: "/dashboard" },
    { id: 4, name: "Profile", path: "/profile" },
    { id: 5, name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="text-black p-6 bg-amber-400">
      <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose></IoClose> : <IoMenuSharp></IoMenuSharp>}
      </div>
      <ul
        className={`md:flex duration-300  absolute lg:static lg:bg-amber-400 rounded-lg
        ${open ? "top-14" : "-top-96"}
        bg-orange-500 px-6`}>
        {Routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

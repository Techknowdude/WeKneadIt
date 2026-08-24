import { useContext } from "react";
import { Link } from "@tanstack/react-router";
// import { CartContext } from "./contexts";
import Background from "./images/WeKneadIt-Customer-Header.png";
import Logo from "./images/WeKneadIt-logo-white.png";

export default function Header() {
  //   const [cart] = useContext(CartContext);
  return (
    <nav className="bg-header-color relative w-full h-100">
      <img src={Background} className="w-full h-full object-fill" />
      <Link
        to={"/"}
        className="absolute inset-0 flex items-start justify-center object-cover"
      >
        <img src={Logo} className="absolute flex w-1/4" />
      </Link>
      <div className="absolute inset-0 flex items-start justify-end mr-auto text-xl text-black">
        🛒
      </div>
      {/* Search bar */}
    </nav>
  );
}

import { useContext } from "react";
import { Link } from "@tanstack/react-router";
// import { CartContext } from "./contexts";
import Background from "./images/WeKneadIt-Customer-Header.png";
import Logo from "./images/WeKneadIt-logo-white.png";
import SearchBar from "./SearchBar";

export default function Header() {
  //   const [cart] = useContext(CartContext);
  return (
    <nav className="relative w-full h-100 items-start">
      <img
        src={Background}
        className="w-full h-auto object-cover max-h-72 object-top -z-10"
      />
      <Link
        to={"/"}
        className="absolute inset-0 flex justify-self-center z-10 w-1/4 h-20"
      >
        <img src={Logo} className="object-contain" />
      </Link>
      <div className="absolute inset-0 flex justify-end mr-auto text-xl text-black">
        🛒
      </div>
      <SearchBar />
    </nav>
  );
}

import { useContext } from "react";
import { Link } from "@tanstack/react-router";
// import { CartContext } from "./contexts";
import Background from "./images/WeKneadIt-Customer-Header.png";
import Logo from "./images/WeKneadIt-logo-white.png";
import SearchBar from "./SearchBar";

export default function Header() {
  //   const [cart] = useContext(CartContext);
  return (
    <nav className="relative w-full min-w-72 inline-block">
      <img
        src={Background}
        className="block w-full h-fill min-h-60 object-cover max-h-64 object-top -z-10"
      />
      <div className="absolute inset-0 w-full block">
        <Link
          to={"/"}
          className="flex justify-self-center z-10 w-40 sm:w-1/4 h-20"
        >
          <img src={Logo} className="object-contain w-full" />
        </Link>
        {/* <div className="absolute inset-0 flex justify-end mr-auto text-xl text-black">
        🛒
      </div> */}
        <h1 className="flex justify-self-center text-white text-3xl font-semibold">
          What are you craving?
        </h1>
        <SearchBar />
      </div>
    </nav>
  );
}

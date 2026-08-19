import { useContext } from "react";
import { Link } from "@tanstack/react-router";
// import { CartContext } from "./contexts";

export default function Header() {
  //   const [cart] = useContext(CartContext);
  return (
    <nav className="flex bg-header-color">
      <Link to={"/"} className="">
        <h1 className="text-4xl">WeKneadIt</h1>
      </Link>
      <div className="ml-auto text-3xl text-black">🛒</div>
    </nav>
  );
}

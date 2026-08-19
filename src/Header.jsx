import { useContext } from "react";
import { Link } from "@tanstack/react-router";
// import { CartContext } from "./contexts";

export default function Header() {
  //   const [cart] = useContext(CartContext);
  return (
    <nav>
      <Link to={"/"}>
        <h1>WeKeadIt</h1>
      </Link>
      <div>
        🛒
        <span>{/* {cart.length} */}</span>
      </div>
    </nav>
  );
}

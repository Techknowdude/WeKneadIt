import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../Header";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        {/* <CartContext.Provider value={cartHook}> Keep this for future cart options*/}
        <div>
          <Header />
          <Outlet />
        </div>
        {/* </CartContext.Provider> */}
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});

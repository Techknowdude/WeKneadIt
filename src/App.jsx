import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import DevAlert from "./DevAlert";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

const App = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {showAlert && <DevAlert onDismiss={() => setShowAlert(false)} />}
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Analytics />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

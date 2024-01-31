import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import CartProvider from "./Provider/CartProvider.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </QueryClientProvider>
  </AuthProvider>
  // </React.StrictMode>
);

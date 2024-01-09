import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
AOS.init({
  once: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

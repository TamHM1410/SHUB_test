import { routes } from "./pages/routes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/app/Header";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()


function App() {
  return (
    <>
    <QueryClientProvider  client={queryClient}>
      <BrowserRouter>
        <Header />

        <Routes>
          {routes?.map((item, index) => (
            <Route key={index} path={item?.path} element={<item.component />} />
          ))}
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

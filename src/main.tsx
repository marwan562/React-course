import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient } from "react-query";
import Loader from "./components/Loader"
import { Provider  } from 'react-redux'
import "./index.css";
import { store } from "./features/Toolkit/Store/Store";
// import App from "./App";
const DetailsPets = lazy(() => import("./pages/Details.jsx"));
const SearchParams = lazy(() => import("./pages/SearchParams.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
       <Provider store={store}>
       <Suspense fallback={<Loader data={undefined} />}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<DetailsPets />} />
            {/* <Route path="/dezeer" element={<App/>}/> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
       </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);

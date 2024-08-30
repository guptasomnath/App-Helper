import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./components/Errorpage.tsx";
// import Home from "./pages/Home.tsx";
import Loading from "./components/Loading.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Projects from "./pages/Projects.tsx";
const ProjectDetails = lazy(() => import("./pages/ProjectDetails.tsx"));
const Courses = lazy(() => import("./pages/Courses.tsx"));
const Upload = lazy(() => import("./pages/Upload.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      {
        path: "/projects/:projectId",
        element: (
          <Suspense fallback={<Loading />}>
            <ProjectDetails />
          </Suspense>
        ),
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<Loading />}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "/upload",
        element: (
          <Suspense fallback={<Loading />}>
            <Upload />
          </Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/about-me",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <HelmetProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </HelmetProvider>
  // </React.StrictMode>
);

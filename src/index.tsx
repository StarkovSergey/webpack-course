import {createRoot} from 'react-dom/client';
import {App} from "./components/App/App"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {LazyAbout} from "@/pages/about"
import {LazyShop} from "@/pages/shop"
import {Suspense} from "react"

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={<p>Loading...</p>}><LazyAbout /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback={<p>Loading...</p>}><LazyShop /></Suspense>
      }
    ]
  },
]);


root.render(<RouterProvider router={router} />)

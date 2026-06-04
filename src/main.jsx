import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Home.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Ecology from "./pages/Ecology.jsx";

const router = createBrowserRouter([
  { path: "/sd-soundscape/", element: <Home /> },
  { path: "/sd-soundscape/history", element: <History /> },
  { path: "/sd-soundscape/ecology", element: <Ecology /> },
]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

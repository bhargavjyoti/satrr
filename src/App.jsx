// Importing React Router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from './layouts/RootLayout'
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Features from "./pages/Features"


// route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="features" element={<Features />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
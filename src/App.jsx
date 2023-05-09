// Importing React Router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from './layouts/RootLayout'
// pages
import Home from "./pages/Home"


// route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
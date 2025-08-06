import Login from "./Login"
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from "react-router";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/Browse",
      Component: Browse,
    },
  
  ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body

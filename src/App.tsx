import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"

import { createBrowserRouter, RouterProvider } from "react-router"
import UsersPage from "./pages/UsersPage"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      Component: DefaultLayout,
      children: [
        {
          index: true, 
          Component: HomePage,
        },
        {
          path: 'users',
          Component: UsersPage,
        }
      ]
    },
    
  ])
 
  return (
    <RouterProvider router={router}/>
  )
}

export default App

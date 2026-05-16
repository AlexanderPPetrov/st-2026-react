import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"

import { createBrowserRouter, RouterProvider } from "react-router"
import UsersPage from "./pages/UsersPage"
import UsersPageDetails from "./pages/UsersPageDetails"

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
          children: [
            {
              index: true, 
              Component: UsersPage,
            },
            {
              path: ":id",
              Component: UsersPageDetails
            }
          ]
        }
      ]
    },
    
  ])
 
  return (
    <RouterProvider router={router}/>
  )
}

export default App

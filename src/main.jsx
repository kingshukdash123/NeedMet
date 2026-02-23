import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Home, ListingDetails } from './pages'

const router = createBrowserRouter(
  // [
    // <ScrollToTop />, 
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    // {
    //   path: "/Listing/:id",
    //   element: <ListingDetails />,
    // },
  // ]

  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} /> 
      <Route path='/listing/:id' element={<ListingDetails />} />
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <RouterProvider router={router}/>
  </>
  // </StrictMode>,
)

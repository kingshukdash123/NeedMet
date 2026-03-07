import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { 
  Home, 
  ListingDetails, 
  NewlyAddedListings, 
  RecommendedListings, 
  SimilarListings, 
} from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} /> 
      <Route path='listing/:id' element={<ListingDetails />} />
      <Route path='newlyAddedListings' element={<NewlyAddedListings/>}/>
      <Route path='recommendedListings' element={<RecommendedListings/>}/>
      <Route path='similarListings' element={<SimilarListings/>}/>
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

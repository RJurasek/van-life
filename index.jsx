import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,  
  Route,
  RouterProvider, 
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader} from "./pages/Van/Vans"
import VanDetail from "./pages/Van/VanDetail"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanLayout from './components/HostVanLayout'
import HostVanDetails from './pages/Host/VanDetailsPages/HostVanDetails'
import HostVanPricing from './pages/Host/VanDetailsPages/HostVanPricing'
import HostVanPhotos from './pages/Host/VanDetailsPages/HostVanPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error';

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='*' element={<NotFound />} />
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} />
    <Route path="host" element={<HostLayout/>}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income/>} />
      <Route path="reviews" element={<Reviews/>} />
      <Route path="vans" element={<HostVans />} errorElement={<Error />} loader={hostVansLoader} />
      <Route path="vans/:id" element={<HostVanLayout />}>
        <Route index element={<HostVanDetails/>}/>
        <Route path="pricing" element={<HostVanPricing/>}/>
        <Route path="photos" element={<HostVanPhotos/>}/>
      </Route>
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
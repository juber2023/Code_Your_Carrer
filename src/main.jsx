import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import AppliedJobs from './Components/AppliedJobs';
import Blog from './Components/Blog';
import JobDetails from './Components/JobDetails';
import { productsAndCartData } from './fakedb';
import Error from './Components/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('FakeFeaturedJobs.json')
        // loader: productsAndCartData,
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader:({params})=>fetch('/FakeFeaturedJobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
<RouterProvider router={router} />
 </React.StrictMode>
    
)

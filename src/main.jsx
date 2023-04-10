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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<div>not found</div>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('FakeFeaturedJobs.json')
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        // loader: async () => {
        //   return fakeDb.from("jobDetails").select("FakeFeaturedJobs.json");
        // },
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

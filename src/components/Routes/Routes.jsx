import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Blogs from '../../pages/Blogs/Blogs';
import Banner from '../Banner/Banner';
import Error from '../Error/Error';
import ChefsCard from '../ChefsCard/ChefsCard';
import Chef from '../Chef/Chef';
import Contact from '../Contact/Contact';
import About from '../About/About';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import BlogPost from '../../pages/BlogPost/BlogPost';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/',
          element: <Contact></Contact>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
          path: '/banner',
          element: <Banner></Banner>
        },
        {
          path: "*",
          element: <Error></Error>,
        },
        {
          path: '/',
          element: <ChefsCard></ChefsCard>,
        },
        {
          path: '/chefs/:id',
          element: <PrivateRoute><Chef></Chef></PrivateRoute>,
          loader: ({params}) => fetch(`https://flavor-lab-server-noushin-tabassum-elina.vercel.app/chefs/${params.id}`)
        },
        {
          path: '/',
          element: <About></About>
        },
        {
          path: '/blogs',
          element: <BlogPost></BlogPost>
        }
      
        
      ]
    }
  ]);

  export default router;
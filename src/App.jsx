import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import DataAuth from './Components/DataAuth/DataAuth';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import ProtectedRouter from './Components/ProtectedRouter/ProtectedRouter';
import Video from './Components/Video/Video';
import AboutEngineer from './Components/AboutEngineer/AboutEngineer';


function App() {

  let Routing = createHashRouter([
    {
      path: "/", element: <LayOut />, children: [
        { index: true, element:  <ProtectedRouter><Home /></ProtectedRouter> },
        { path: "/AboutEngineer", element:   <ProtectedRouter> <AboutEngineer /></ProtectedRouter>  },
        { path: '/Profile', element:  <ProtectedRouter><Profile /></ProtectedRouter>  },
        { path: '/News', element:  <ProtectedRouter><News /></ProtectedRouter> },
        { path: '/Video', element:  <ProtectedRouter><Video /></ProtectedRouter> },
        {
          path: "/Auth", element: <DataAuth />, children: [
            { index: true, element: <SignIn /> },
            { path: "/Auth/SignUp", element: <SignUp /> }
          ]
        },
        { path: "*", element: <PageNotFound /> },
      ]
    }
  ])

  return <>
    <RouterProvider router={Routing} /></>
}

export default App;

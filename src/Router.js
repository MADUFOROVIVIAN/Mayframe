import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Consultancy from './Pages/Consultancy/Consultancy'
import Investment from './Pages/Investment/Investment'
import Property from './Pages/Property/Property'
import Driving from './Pages/Driving/Driving'

const Router = () => {
  return useRoutes(
    [
      { path: '/', 
      element: <Home/>
    },

      { path: '/about', 
      element: <About/>
    },

      { path: '/contact', 
      element: <Contact/>
    },
      { path: '/consultancy', 
      element: <Consultancy/>
    },

      { path: '/investment', 
      element: <Investment/>
    },

    { path: 'property', 
      element: <Property/>
    },

      { path: 'driving',  
      element: <Driving/>
    },
    ]
  )
}

export default Router
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { HomeHogar } from '../pages/HomeHogar/HomeHogar'
import { Index } from '../pages/Index/Index'
import { HomeCorporativo } from '../pages/HomeCorporativo/HomeCorporativo'

const App = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/hogar",
        element: <HomeHogar />,
      },
      {
        path: "/corporativo",
        element: <HomeCorporativo />,
      },
    ]
  }
])

export { App }
// createRoutesFromElements(
//   <Routes>
//     <Route path='/' element={ <Index /> } />
//     <Route element={ <Layout /> }>
//       <Route path='/hogar' element={ <Home /> } />
//       <Route path='/corporativo' element={ <Home /> } />
//     </Route>
//   </Routes>

// )
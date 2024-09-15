import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/Home/Home'
import { Index } from '../pages/Index/Index'

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
        element: <Home />,
      },
      {
        path: "/corporativo",
        element: <Home />,
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
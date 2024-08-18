import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/Home/Home'

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={ <Layout /> }>
      <Route path='/' element={ <Home /> } />
    </Route>
  )
)

export { App }
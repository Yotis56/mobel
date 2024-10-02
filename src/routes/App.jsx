import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { HomeHogar } from '../pages/HomeHogar/HomeHogar'
import { Index } from '../pages/Index/Index'
import { HomeCorporativo } from '../pages/HomeCorporativo/HomeCorporativo'
import { Construction } from '../pages/Construction/Construction'
import {NotFound } from '../pages/NotFound/NotFound'
import { ProjectsHogar } from '../pages/ProjectsHogar/ProjectsHogar'


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index />} />
      <Route element={<Layout />} >
        <Route path='/hogar' element={<HomeHogar />} />
        <Route path='/hogar/proyectos' element={<ProjectsHogar />} />       
        <Route path='/corporativo' element={<HomeCorporativo />} />    
      </Route>
      <Route path='/in-construction' element={<Construction />} />
      <Route path='*' element={<NotFound />} />
    </>
))

export { App }
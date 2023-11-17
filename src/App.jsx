import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'
import Details from './components/Details.jsx'
import Loader from './components/users/Loader.jsx'
import Edit from './components/users/Edit.jsx'

export default function App() {
  return (
   
    <Routes>
       <Route path='/user/index' element={<Loader/>}/>
     <Route path='/user/index' element={<Index/>}/>
    <Route path='/' element={<Index/>}/>
    <Route path='/user/index' element={<Index/>}/>
   <Route path='/user/create'  element={<Create/>}/>
   <Route path='user/:id' element={<Details/>}/>
   <Route path='user/edit/:id' element={<Edit/>}/>
    </Routes>
  )
}

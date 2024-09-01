import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Create from './routes/Create';
import Docs from './routes/Docs';
import Pending from './routes/Pending';


const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/docs' element={<Docs/>} />
    <Route path='/uhoh' element={<Pending/>} />
   </Routes>
  )
}

export default App;
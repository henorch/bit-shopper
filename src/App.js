import './categories.style.scss'
import Home from './routes/home/home.component';
import { Route, Routes} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './components/authentication/authentication';


const SHOP = () => {
  return (
    <p>We are shopper</p>
  )
}


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<SHOP/>}/>
          <Route path='auth' element={ <Authentication/>}/>
        </Route>
      </Routes>
  );
}

export default App;

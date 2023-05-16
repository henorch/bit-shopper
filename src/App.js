import './categories.style.scss'
import { lazy, Suspense } from 'react';
import Home from './routes/home/home.component';
import { Route, Routes} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop.component';
import CheckOutPage from './routes/check-out-page/check-out.component';

const Home = lazy(() => import('./routes/home/home.component'));



const App = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='auth' element={ <Authentication/>}/>
          <Route path='checkout' element={<CheckOutPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

import './categories.style.scss'
import { lazy, Suspense } from 'react';
import Home from './routes/home/home.component';
import { Route, Routes} from 'react-router-dom'



const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const CheckOutPage = lazy(() => import('./routes/check-out-page/check-out.component'));

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

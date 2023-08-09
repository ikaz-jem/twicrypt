import logo from './logo.svg';
import './App.css';
import { HashLoader } from 'react-spinners';

import { lazy, Suspense } from 'react';

const Home = lazy(()=>import ( './containers/Home'))

function App() {
  return (
    <div className="index ">
<Suspense fallback={ <>  <HashLoader size={100} color="#000" style={{text:'center'}}/>  </>} >
<Home/>
</Suspense>
    </div>
  );
}

export default App;

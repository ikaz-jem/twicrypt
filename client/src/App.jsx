import { HashLoader } from 'react-spinners';

import { lazy, Suspense } from 'react';

const Routes = lazy(()=>import ( './router/index'))

function App() {
  return (
    <div className="index ">

        <Suspense fallback={ <>  <HashLoader size={100} color="#000" style={{text:'center'}}/>  </>} >
          
        <Routes/>

        </Suspense>

    </div>
  );
}

export default App;

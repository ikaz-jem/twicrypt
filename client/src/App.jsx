import { HashLoader } from 'react-spinners';

import { lazy, Suspense } from 'react';

const AppRoutes = lazy(()=>import ( './router/index'))

function App() {
  return (
    <div className="index h-screen">

        <Suspense fallback={
           <>
           <div className="hero h-screen light-ball flex justify-center items-center " >

             <HashLoader size={100} color="#fff" style={{text:'center'}} />  
           
             
           </div>
             </>} >

               <AppRoutes/>

        </Suspense>

    </div>
  );
}

export default App;

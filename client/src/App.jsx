import { HashLoader } from 'react-spinners';

import { lazy, Suspense, useState } from 'react';
const AppRoutes = lazy(() => import('./router/index'))

function App() {


  return (
    <div className=" h-auto min-h-screen  hero  ">
      <Suspense fallback={
        <>
          <div className=" h-80  flex justify-center items-center " >
            <HashLoader size={100} color="#fff" style={{ text: 'center' }} />
          </div>
        </>} >

        <AppRoutes />

      </Suspense>
    </div>
  );
}

export default App;

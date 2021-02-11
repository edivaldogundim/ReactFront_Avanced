import React from 'react';

//import Header from '../Header';
//import Main from '../Main';
//import Footer from '../Footer';

import {lazy, Suspense} from 'react';

const Header = lazy(() => import('../Header'));
const Main =  lazy(() => import('../Main'));
const Footer = lazy(() => import('../Footer'));

const App = () => {
    return(
        <>
        <Suspense fallback= {<p>Carregando...</p>}>
        <Header/>
        </Suspense>
        <Suspense fallback= {<p>Carregando...</p>}>
        <Main/>
        </Suspense>
        <Suspense fallback= {<p>Carregando...</p>}>
        <Footer/>
        </Suspense>
        </>
    )
};
export default App;
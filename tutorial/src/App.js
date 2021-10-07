import React from 'react';
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';

const App = () => {    

    return (
        <div>
            <Route path="/:category?" component={NewsPage} />;
        </div>        
    );
};

export default App;
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    return <Route path='/:category?' component={NewsPage} />;
};

export default App;

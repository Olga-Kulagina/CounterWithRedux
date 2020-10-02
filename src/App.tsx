import React from 'react';
import './App.css';
import {CounterContainer} from './Counter/CounterContainer';
import {CustomizationContainer} from './Counter/Customization/СustomizationContainer';

const App = () => {

    return (
        <div className="App">
            <CounterContainer />
            <CustomizationContainer />
        </div>
    );
}

export default App;

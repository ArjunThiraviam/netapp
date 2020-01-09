import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FormComponent from './FormComponent';
import ResultComponent from './ResultComponent'



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={FormComponent} />
                <Route path="/result" exact component={ResultComponent} />
            </BrowserRouter>
        </div>
    )
}

export default App;
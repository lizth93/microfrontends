import React from 'react';
import { StylesProvider } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/pricing" exact component={Pricing} />
                        <Route path="/" exact component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}
export default App;
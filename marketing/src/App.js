import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const generateClassName = createGenerateClassName({
    productionPrefix: "mark",
});

function App() {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
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
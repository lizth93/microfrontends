import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { Router, Switch, Route } from "react-router-dom";

const generateClassName = createGenerateClassName({
    productionPrefix: "mark",
});

function App({ history }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/pricing" exact component={Pricing} />
                        <Route path="/" exact component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}
export default App;
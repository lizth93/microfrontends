import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router, Switch, Route } from "react-router-dom";
import SignIn from './components/Signin';
import SignUp from './components/Signup';
const generateClassName = createGenerateClassName({
    productionPrefix: "auth",
});

function App({ history }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" exact component={SignIn} />
                        <Route path="/auth/signup" exact component={SignUp} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}
export default App;
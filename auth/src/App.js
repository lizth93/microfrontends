import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router, Switch, Route } from "react-router-dom";
import SignIn from './components/Signin';
import SignUp from './components/Signup';
const generateClassName = createGenerateClassName({
    productionPrefix: "auth",
});

function App({ history, onSignIn }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <SignIn onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup" exact>
                            <SignUp onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}
export default App;
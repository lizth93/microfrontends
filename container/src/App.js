import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const MarketingApp = lazy(() => import("../components/MarketingApp"));
const AuthApp = lazy(() => import("../components/AuthApp"));

export default function App() {
    const generateClassName = createGenerateClassName({
        productionPrefix: "cont",
    });
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        if (isSignedIn) {
        }
    }, [isSignedIn]);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                    <Footer />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}



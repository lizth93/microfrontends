import React from "react";
import MarketingApp from "../components/MarketingApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthApp from "../components/AuthApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

export default function App() {
    const generateClassName = createGenerateClassName({
        productionPrefix: "cont",
    });

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}



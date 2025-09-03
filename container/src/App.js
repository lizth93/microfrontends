import React from "react";
import MarketingApp from "../components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
                    <MarketingApp />
                    <Footer />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}



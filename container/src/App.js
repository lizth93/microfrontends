import React from "react";
import MarketingApp from "../components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App() {

    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
                <Footer />
            </div>
        </BrowserRouter>
    );
}


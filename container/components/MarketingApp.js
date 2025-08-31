import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default function MarketingApp() {

    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    }, []);
    return <div id="marketing-app" ref={ref}></div>;
}

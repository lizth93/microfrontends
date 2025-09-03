import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function MarketingApp() {

    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: (location) => {
                const { pathname: nextPathname } = location;
                const { pathname: currentPathname } = history.location;
                if (currentPathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });
        history.listen(onParentNavigate);
    }, []);
    return <div id="marketing-app" ref={ref}></div>;
}

import React from "react";
import { NavLink } from "react-router-dom";

import "./assets/fonts/arbutus-slab.scss";
import fontAwesomeStyles from "font-awesome/scss/font-awesome.scss";
import bulmaStyles from "bulma";
import layoutStyles from "./assets/styles.scss";

function Layout(props) {
    return (
        <div
            className={`${bulmaStyles.hero} ${bulmaStyles.isFullheight} ${
                layoutStyles.isFullheight
            }`}
        >
            <main
                className={`${bulmaStyles.section} ${bulmaStyles.heroBody} ${
                    layoutStyles.heroBody
                }`}
            >
                <div className={bulmaStyles.container}>
                    <div className={bulmaStyles.content}>{props.children}</div>
                </div>
            </main>
            <footer
                className={`${bulmaStyles.footer} ${bulmaStyles.heroFoot} ${
                    layoutStyles.heroFoot
                }`}
            />
        </div>
    );
}

export { Layout as default };

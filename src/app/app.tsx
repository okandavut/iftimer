import React from "react";
import { Route, Switch } from "react-router";

import Layout from "./layouts/default/layout";
import Home from "./pages/home/home";
import Iftimer from "./pages/iftimer/iftimer";
import NotFound from "./pages/notFound/notFound";

function App() {
    return (
        <Switch>
            <Route
                path="/"
                exact={true}
                strict={true}
                render={() => (
                    <Layout>
                        <Iftimer />
                    </Layout>
                )}
            />

            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export { App as default };

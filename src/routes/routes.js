import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {lazy, Suspense} from 'react'

const Header = lazy(() => import('../components/header/header'));
const Footer = lazy(() => import('../components/footer/footer'));
const NotFound = lazy(() => import('../modules/not-found/not-found'));
const Main = lazy(() => import('../modules/main/main'));
const ViewRepository = lazy(() => import('../modules/view-element/view-element'));

export const paths = {
    root: '/',
    viewRepository: '/view-element/:id',
    viewRepositoryBase: '/view-element',
};

export const Routes = () => (
    <Router basename={process.env.REACT_APP_APP_BASE_URL}>
        <Suspense fallback='Loading component...'>
            <Header/>
            <Switch>
                <Route
                    exact
                    path={paths.root}
                    render={props => <Main {...props} />}
                />
                <Route
                    exact
                    path={paths.viewRepository}
                    render={props => <ViewRepository {...props} />}
                />
                <Route render={props => <NotFound {...props} />}/>
            </Switch>
            <Footer/>
        </Suspense>
    </Router>
);
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from '../HomePage/HomePage';
import MissionPage from '../MissionPage/MissionPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import ResourceLocator from '../../containers/ResourceLocator/ResourceLocator';

const Layout = (props) =>  {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Homepage}/>
                    <Route path='/mission' exact component={MissionPage}/>
                    <Route path='/contact' exact component={ContactUsPage}/>
                    <Route path='/locator' exact component={ResourceLocator}/>
                    <Route path='/' render={() => <div>Error 404</div>} />
                </Switch>
             </BrowserRouter>
        </div>
    );
}

export default Layout;
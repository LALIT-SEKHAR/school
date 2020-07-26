import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './user/Home';
import NotFound from './Notfound';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import Staffs from './user/Staffs';
import Students from './user/Students';
import Gallery from './user/Gallery';
import About from './user/About';
import Contact from './user/Contact';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/staffs' component={Staffs} />
                <Route exact path='/students' component={Students} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
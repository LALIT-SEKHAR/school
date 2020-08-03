import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './user/Home';
import NotFound from './Notfound';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import AddTeacher from './Auth/AddTeacher';
import AddStudent from './Auth/AddStudent';
import Staffs from './user/Staffs';
import Students from './user/Students';
import Gallery from './user/Gallery';
import About from './user/About';
import Contact from './user/Contact';
import StaffData from './user/StaffData';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/addteacher' component={AddTeacher} />
                <Route exact path='/addstudent' component={AddStudent} />
                <Route exact path='/staffs' component={Staffs} />
                <Route exact path='/students' component={Students} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/:id' component={StaffData} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
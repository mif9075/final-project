import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Components/Navbar/Navbar'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
// import Footer from './Components/Footer/Footer'

import './App.css';

const Login = React.lazy(() => import('./Components/Login/Login'))
const Register = React.lazy(() => import('./Components/Register/Register'))
const Home = React.lazy(() => import('./Components/Home/Home'))
const NotFound = React.lazy(() => import('./Components/NotFound/NotFound'))
const SeePlayer = React.lazy(() => import('./Components/SeePlayer/SeePlayer'))
const UserProfile = React.lazy(() => import('./Components/UserProfile/UserProfile'))

class App extends Component {

    render(){
        return(
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

                <PrivateRoute exact path="/see-player/:id" component={SeePlayer} />
                <PrivateRoute exact path="/user-profile" component={UserProfile} />
                <Route path="" component={NotFound} />
            </Switch>
            {/* <Footer /> */}
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

export default withRouter(connect(mapStateToProps, null)(App));

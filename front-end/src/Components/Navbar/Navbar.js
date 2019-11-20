import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/authUserAction'

const styles = {
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  navLinkStyle: {
    textDecoration: 'none',
    color: 'white'
  },
  signupAndSignin: {
    marginLeft: '10px'
  }
};
 class Navbar extends Component {
  render() {

    let navigation = null;

    if (this.props.authUser.isAuthenticated) {
      
      navigation = (
        <>

            {/* <NavLink 
              exact
              to='/create-talk'
              className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
              activeStyle={{ color: 'white', textDecoration: 'underline white' }}
              > Create Talk
            </NavLink> */}


           <NavLink 
            exact
            to='/user-profile'
            className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
            activeStyle={{ color: 'white', textDecoration: 'underline white' }}
            > Welcome {this.props.authUser.user.username}
            </NavLink>




            <NavLink 
               to='/'
               className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
               onClick={() => this.props.logout()}
            > Logout
            </NavLink>
        </>
      )

    } else {
      navigation = (
          <>

          <NavLink 
            exact
            to='/register'
            className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
            activeStyle={{ color: 'white', textDecoration: 'underline white' }}
            >Register</NavLink>

          <NavLink
            exact
            to='/login'
            className={[this.props.classes.navLinkStyle, this.props.classes.signupAndSignin].join(' ')}
            activeStyle={{ color: 'white', textDecoration: 'underline white' }}
            >Login</NavLink>

          </>

   
          )
    }

    return (
      <AppBar position="static">
      <Toolbar>
        <NavLink 
          exact
          to='/'
          className={this.props.classes.navLinkStyle}
          activeStyle={{ color: 'white', textDecoration: 'underline white' }}
        >Welcome to BeisbolDom.Com</NavLink>
  
        <section className={this.props.classes.rightToolbar}>
          {navigation}
        </section>
      </Toolbar>
    </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};


export default connect(mapStateToProps, { logout })(withStyles(styles)(Navbar));
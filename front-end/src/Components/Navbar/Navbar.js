import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authUserAction';
import { submitSearch } from '../../redux/actions/searchAction';

import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = theme => ({
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
      },
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: 200,
        },
    }
    });

class PrimarySearchAppBar extends React.Component {

    state = {
        searchField: '',
        setSearchInput: ''
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.props)
        this.props.submitSearch({
            type: 'SUBMIT_SEARCH',
            payload: this.state.searchField
        })
        .then(() => {
            // this.setState({ searchField: '' });
            // this.props.history.push('/') 
          })
          .catch(error => {
              console.log(error.response)
            // this.props.RegisterErrorMessage(error.response.data.message)
            // this.setState({
            //   submitted: false
            // })
          })
        // setSearchInput({ searchInput: "" });
        // history.push("/");
      };


    handleChange = (e) => {
        // event.preventDefault();
      
        this.setState({ searchField: e.target.value });
        
    }

  render() {
    const { classes } = this.props;
    // console.log(this.state)
    let navigation = null;
    // console.log(this.props)
  
      if (this.props.authUser.isAuthenticated) {
        
        navigation = (
          <>
  
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
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
        <Typography className={classes.title} variant='h6' color='inherit' noWrap>
        <NavLink 
            exact
            to='/'
            className={this.props.classes.navLinkStyle}
            activeStyle={{ color: 'white', textDecoration: 'underline white' }}
          >Dominicans in the MLB
        </NavLink>
        </Typography>

    <div className={classes.search}>
     <div className={classes.searchIcon}>
        <SearchIcon />
    </div>
    <form onSubmit={this.handleSubmit}>
        <InputBase
                
                // value={searchInput.searchInput}
        onChange={this.handleChange}
                
        placeholder="Search..."
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
        />
    </form>
    </div>
    <div className={classes.grow} />
    


            
            <div className={classes.sectionDesktop} className={classes.title}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                // aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
    
    <section className={this.props.classes.rightToolbar}>
        
        {navigation}
    </section>
    

        </Toolbar>
        </AppBar>
        
    </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    // console.log(state)
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps, { logout, submitSearch }) (withStyles(styles)(PrimarySearchAppBar));
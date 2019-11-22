import React, { Component } from 'react'
import { connect } from 'react-redux';
import ShowAllPlayers from '../ShowAllPlayers/ShowAllPlayers';

class Home extends Component {

  render() {
    return (
      <div className='App'>
       {this.props.authUser.isAuthenticated ? <ShowAllPlayers user={this.props.authUser.user}/> : <h1>Sign up to join!</h1>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};


export default connect(mapStateToProps, null)(Home);
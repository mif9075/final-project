import React, { Component } from 'react'
import { connect } from 'react-redux';
// import ShowAllTalks from '../ShowAllTalks/ShowAllTalks';

class Home extends Component {

  render() {
    return (
      <div className='App'>
       {/* {this.props.authUser.isAuthenticated ? <ShowAllTalks user={this.props.authUser.user}/> : <h1>Sign up to join the Talks show!</h1>} */}
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
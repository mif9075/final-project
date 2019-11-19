import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserProfileInfo from '../UserProfileInfo/UserProfileInfo';
// import ShowAllUserTalks from '../ShowAllUserTalks/ShowAllUserTalks';

 class UserProfile extends Component {
  render() {
    return (
      <div className='App'>
        <UserProfileInfo />
        <br />
        <hr style={{width: '50%'}}/>
        {/* <ShowAllUserTalks /> */}
      </div>
    )
  }
}


export default connect(null, null)(UserProfile);
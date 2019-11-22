import React, { Component } from 'react'
import Players from '../Players/Players'
import { connect } from 'react-redux';
import { getAllPlayers } from '../../redux/actions/playerAction';
import Spinner from '../../Factory/Spinner/Spinner';

 class ShowAllPlayers extends Component {

  state = {
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    this.props.getAllPlayers()
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .catch(error => {
          this.setState({
            loading: false
          })
        })
  }

  render() {
    // console.log(this.props);
    return (
        
      <div>
        Welcome {this.props.user.username} !
        <br />
        {
                this.state.loading ? <Spinner /> : <Players />
        }
      </div>
    )
  }
}

export default connect(null, {getAllPlayers})(ShowAllPlayers)
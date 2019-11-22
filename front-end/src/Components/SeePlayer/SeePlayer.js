import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerByID } from '../../redux/actions/playerAction';
import Spinner from '../../Factory/Spinner/Spinner';

class SeePlayer extends Component {

  state = {
    title: '',
    image: '',
    player: '',
    isFetching: null
  }

  componentDidMount() {

    if (this.props.location.state !== undefined) {
      this.setState({
        title: this.props.location.state.title,
        image: this.props.location.state.image,
        player: this.props.location.state.player
      })
    } else {

      this.setState({
        isFetching: true
      })
      this.props.getPlayerByID(this.props.match.params.id)
                .then( player => {
             
                  this.setState({
                    title: player.title,
                    image: player.image,
                    player: player.player,
                    isFetching: false
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  }

  render() {
   
    const { title, player, image, isFetching } = this.state

    let playerInfo = (
        <div className='App'>
        <h1>title {title}</h1>
        <div><img src={image} alt="hamster"/></div>
        <p>{player}</p>
      </div>
    )

    return (
     isFetching ? <Spinner /> : playerInfo
    )
  }
}

export default connect(null, { getPlayerByID })(SeePlayer);
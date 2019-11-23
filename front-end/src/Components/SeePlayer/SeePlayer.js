import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerByID } from '../../redux/actions/playerAction';
import Spinner from '../../Factory/Spinner/Spinner';

class SeePlayer extends Component {

  state = {
    player: '',
    isFetching: false
  }

  componentDidMount() {

      this.setState({
        isFetching: true
      })
    //   console.log(this.props)
      this.props.getPlayerByID(this.props.match.params.id)
                .then((player)=> {

                console.log(player)

                  this.setState({
                    isFetching: false,
                    player: player.lahman_id
                    
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  

  render() {
   
    const { player, isFetching } = this.state
    console.log(player)

    console.log(this.props)

    let playerInfo = (
        <div className='App'>
        {/* <h1>title {title}</h1>
        <div><img src={image} alt="hamster"/></div>  */}
        <p>{player}</p>
      </div>
    )

    return (
     isFetching ? <Spinner /> : playerInfo
    )
  }
}

export default connect(null, { getPlayerByID })(SeePlayer);
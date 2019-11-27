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
                .then((data)=> {

                // console.log(data)

                  this.setState({
                    isFetching: false,
                    player: data
                    
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  

  render() {
   
    const { player, isFetching } = this.state
    console.log(player)

    // console.log(this.state)

    let playerInfo = (
        <div className='App'>
	        <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
	    <p><strong>Position:</strong> Pending</p>
        <p><strong>Bats: </strong>{player.bats}
        &nbsp;•&nbsp;
	    <strong>Throws: </strong>{player.throws}</p>
        <p><strong>Height: </strong>{player.height}  in.,&nbsp;
        <strong>Weight:</strong>{player.weight} lbs. &nbsp; </p>
        <p>
        <strong>Born: </strong> 
         {player.birthMonth + '/' + player.birthDay + '/' + player.birthYear}
        <span itemProp="birthPlace"> in {player.birthCity},
        </span>
        <span className="f-i f-pr"> {player.birthCountry}</span>
        </p>
    
        <p><strong>Debut:</strong>{player.debut}</p>

        <p><strong>Last Game:</strong>{player.finalGame}</p>

</div>   
      
    )

    return (
     isFetching ? <Spinner /> : playerInfo
    )
  }
}

export default connect(null, { getPlayerByID })(SeePlayer);
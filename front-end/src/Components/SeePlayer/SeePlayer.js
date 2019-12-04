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
                    mlbid: data[0].mlb_id[0].mlb_id,
                    player: data[0]
                    
                    
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  

  render() {
   
    const { player, isFetching, mlbid } = this.state
    
    console.log(player)
    console.log(mlbid)

    let date = new Date(player.finalGame);

    let getDate = date.getFullYear();

    console.log(getDate);

    let playerInfo = '';

    if (getDate !== 2019) {
    
    playerInfo = (
        <div className='App'>
            
	        <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
  <p><strong>Position:</strong></p>
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
    }
    else {

        playerInfo = (
            <div className='App'>
                <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
        <h1>Need 2019 Information</h1>
        <h2>MLB ID: {mlbid}</h2>
        </div>
        )

    }

    return (
     isFetching ? <Spinner /> : playerInfo
    )
  }
}

export default connect(null, { getPlayerByID })(SeePlayer);
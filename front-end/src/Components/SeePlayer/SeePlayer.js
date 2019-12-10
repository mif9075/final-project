import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerByID } from '../../redux/actions/playerAction';
import Spinner from '../../Factory/Spinner/Spinner';

class SeePlayer extends Component {

  state = {
    player: '',
    isFetching: false,
    mlb: '',
    baseball: '',
    position: '',
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
                    player: data[0], 
                    mlb: data[0].mlb_id[0],
                    baseball: data[0].baseball_id[0],
                    position: data[0].baseball_id[0].Pos,
                    
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  

  render() {
   
    const { player, isFetching, mlb, baseball, position } = this.state

    console.log(baseball)

    console.log(position)

    let date = new Date(player.finalGame);

    let getDate = date.getFullYear();

    // console.log(getDate);

    let playerInfo = '';

    if (getDate === 2019) {

        if (mlb.mlb_pos === 'P'){
            
            playerInfo = (
                <div className='App'>
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
            <p>Active Player : Need 2019 Pitcher Information</p>
            <p>MLB ID: {mlb.mlb_id}</p>
        <p><strong>Position:{mlb.mlb_pos}</strong></p>
        <p><strong>MLB Team:{mlb.mlb_team_long}</strong></p>
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
    
            <p><strong>Last Game:</strong>Active Player</p>
            </div>
            )

        } else {


            playerInfo = (
                <div className='App'>
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
            <p>Active Player : Need 2019 Batter Information</p>
            <p>MLB ID: {mlb.mlb_id}</p>
        <p><strong>Position:{mlb.mlb_pos}</strong></p>
        <p><strong>MLB Team:{mlb.mlb_team_long}</strong></p>
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
    
            <p><strong>Last Game:</strong>Active Player</p>

            <table align="center">
                    <thead>
                    <tr>
                        <th>SUMMARY</th>
                        <th>WAR</th>
                        <th>AB</th>
                        <th>H</th>
                        <th>HR</th>
                        <th>BA</th>
                        <th>R</th>
                        <th>RBI</th>
                        <th>SB</th>
                        <th>OBP</th>
                        <th>SLG</th>
                        <th>OPS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2019</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Career</td>
                        <td>{baseball.WAR}</td>
                        <td>{baseball.AB}</td>
                        <td>{baseball.H}</td>
                        <td>{baseball.HR}</td>
                        <td>{baseball.BA}</td>
                        <td>{baseball.R}</td>
                        <td>{baseball.RBI}</td>
                        <td>{baseball.SB}</td>
                        <td>{baseball.OBP}</td>
                        <td>{baseball.SLG}</td>
                        <td>{baseball.OPS}</td>
                    </tr>
                    </tbody>
                </table>


            </div>
            )

        }
        
        


    }

    else {

        // let pos = baseball.Pos;
        // console.log(baseball)
        
        if (position.includes('1')) {

            playerInfo = (
                <div className='App'>
                    
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
                <p><strong>Position: Pitcher</strong></p>
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

        } else {

            playerInfo = (
                <div className='App'>
                    
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
                <p><strong>Position:Batter</strong></p>
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
    
                <table align="center">
                    <thead>
                    <tr>
                        <th>SUMMARY</th>
                        <th>WAR</th>
                        <th>AB</th>
                        <th>H</th>
                        <th>HR</th>
                        <th>BA</th>
                        <th>R</th>
                        <th>RBI</th>
                        <th>SB</th>
                        <th>OBP</th>
                        <th>SLG</th>
                        <th>OPS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Career</td>
                        <td>{baseball.WAR}</td>
                        <td>{baseball.AB}</td>
                        <td>{baseball.H}</td>
                        <td>{baseball.HR}</td>
                        <td>{baseball.BA}</td>
                        <td>{baseball.R}</td>
                        <td>{baseball.RBI}</td>
                        <td>{baseball.SB}</td>
                        <td>{baseball.OBP}</td>
                        <td>{baseball.SLG}</td>
                        <td>{baseball.OPS}</td>
                    </tr>
                    </tbody>
                </table>
        </div>   
              
            )

        }
    
    
    }

    return (
     isFetching ? <Spinner /> : playerInfo
    )
  }
}

export default connect(null, { getPlayerByID })(SeePlayer);
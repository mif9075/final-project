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
    pitching: '',
    batting2019: '',
    pitching2019: '',
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
                    pitching: data[0].pitching_id[0],
                    pitching2019: data[0].pitching2019[0],
                    batting2019: data[0].batting2019[0]
                    
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  

  render() {
   
    const { player, isFetching, mlb, baseball, position, pitching, batting2019, pitching2019 } = this.state

    // console.log(baseball)

    // console.log(position)

    let pos2 = position.search(/\d/)

    // console.log(position[pos2])

    let pos = "";

    switch (position[pos2]) {

        case '1': 
            pos = "P";
            break;
        case '2':
            pos = "C";
            break;
        case '3':
            pos = "1B";
            break;
        case '4': 
            pos = "2B";
            break;
        case '5': 
            pos = "3B"
            break;
        case '6':
            pos = "SS";
            break;
        case '7':
            pos = "LF";
            break;
        case '8':
            pos = "CF";
            break;
        case '9':
            pos = "RF";
            break;
        default: 
            pos = "DH"
            break;
    }

    // console.log(pos)


    // console.log(pitching)

   
    // console.log(batting2019)
    // console.log(pitching2019)

    let date = new Date(player.finalGame);

    let getDate = date.getFullYear();

    // console.log(getDate);

    let playerInfo = '';

    if (getDate === 2019) {

        if (mlb.mlb_pos === 'P'){
            
            playerInfo = (
                <div className='App'>
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
                    <p><strong>Active Player</strong></p>
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
                        
                        <th>W</th>
                        <th>L</th>
                        <th>ERA</th>
                        <th>G</th>
                        <th>GS</th>
                        <th>SV</th>
                        <th>IP</th>
                        <th>SO</th>
                        <th>WAR</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2019</td>
                        <td>{pitching2019.W}</td>
                        <td>{pitching2019.L}</td>
                        <td>{pitching2019.ERA}</td>
                        <td>{pitching2019.GP}</td>
                        <td>{pitching2019.GS}</td>
                        <td>{pitching2019.SV}</td>
                        <td>{pitching2019.IP}</td>
                        <td>{pitching2019.SOA}</td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td>Career</td>
                        
                        <td>{pitching.W}</td>
                        <td>{pitching.L}</td>
                        <td>{pitching.ERA}</td>
                        <td>{pitching.G}</td>
                        <td>{pitching.GS}</td>
                        <td>{pitching.SV}</td>
                        <td>{pitching.IP}</td>
                        <td>{pitching.SO}</td>
                        <td>{pitching.WAR}</td>

                    </tr>
                    </tbody>
                </table>

            </div>
            )

        } else {


            playerInfo = (
                <div className='App'>
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
            <p><strong>Active Player</strong></p>
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
                        <th>WAR</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2019</td>
                        <td>{batting2019.AB}</td>
                        <td>{batting2019.H}</td>
                        <td>{batting2019.HR}</td>
                        <td>{batting2019.avg.toFixed(3)}</td>
                        <td>{batting2019.R}</td>
                        <td>{batting2019.RBI}</td>
                        <td>{batting2019.SB}</td>
                        <td>{batting2019.obp.toFixed(3)}</td>
                        <td>{batting2019.slg.toFixed(3)}</td>
                        <td>{(batting2019.obp + batting2019.slg).toFixed(3)}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Career</td>
                        
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
                        <td>{baseball.WAR}</td>

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
        
        if (position.includes('*1') || position.includes('/1') || position === 1) {

            playerInfo = (
                <div className='App'>
                    
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
                    <p><strong>Retired Player</strong></p>
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

                <table align="center">
                    <thead>
                    <tr>
                        <th>SUMMARY</th>
                        
                        <th>W</th>
                        <th>L</th>
                        <th>ERA</th>
                        <th>G</th>
                        <th>GS</th>
                        <th>SV</th>
                        <th>IP</th>
                        <th>SO</th>
                        <th>WAR</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Career</td>
                        
                        <td>{pitching.W}</td>
                        <td>{pitching.L}</td>
                        <td>{pitching.ERA}</td>
                        <td>{pitching.G}</td>
                        <td>{pitching.GS}</td>
                        <td>{pitching.SV}</td>
                        <td>{pitching.IP}</td>
                        <td>{pitching.SO}</td>
                        <td>{pitching.WAR}</td>

                    </tr>
                    </tbody>
                </table>

        
        </div>   
              
            )

        } else {

            playerInfo = (
                <div className='App'>
                    
                    <h1 itemProp="name">{player.nameFirst + ' ' + player.nameLast}</h1>
                    <p><strong>Active Player</strong></p>
            <p><strong>Position:{pos}</strong></p>
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
                        <th>WAR</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Career</td>
                        
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
                        <td>{baseball.WAR}</td>

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
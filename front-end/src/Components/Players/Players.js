import React, { Component } from 'react'
import Player from '../Player/Player'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getAllPlayersNow, getAllActivePlayers, getAllRetiredPLayers } from '../../redux/actions/playersAction';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15,
  }
}


class Players extends Component {

    

  render() {

    // console.log(this.props.players.players)
    //All Players 1956-2019
    const { players } = this.props.players; 

    // console.log(players)

    return (
        <React.Fragment>
        <Button onClick={this.props.getAllPlayersNow}>All Players</Button>
      <Button color="primary" onClick={this.props.getAllActivePlayers}>
        Active Players
      </Button>
      <Button color="secondary" onClick={this.props.getAllRetiredPLayers}>
        Retired Players
      </Button>

      <div className={this.props.classes.root}>
             <Grid container justify="center"  spacing={1}>
          {
            players.map((player) => {
              return (
                <Grid key={player.lahman_id}  item>
                  <Player {...player} />
                </Grid>
              )
            })
          }
      </Grid>
      </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    
  }
}

export default connect(mapStateToProps, {getAllPlayersNow, getAllActivePlayers, getAllRetiredPLayers})(withStyles(styles)(Players));
import React, { Component } from 'react'
import Player from '../Player/Player'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15,
  }
}


class Players extends Component {



  render() {

    // console.log(this.props.players.players)

    const { players } = this.props.players; 

    console.log(players)

    //Filter by MLB ID

    // const filtered = players.filter(function(player) {
        
    //     return player.mlb_id.length !== 0;
    // }) 

    // console.log(filtered)


    //Filter By MLB 2019
    
    const filtered = players.filter(function(player) {

            let date = new Date(player.finalGame);

            let getDate = date.getFullYear();

            return getDate === 2019;
    })

    console.log(filtered)

    return (
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Players));
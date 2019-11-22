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

    // console.log(this.props)

    const { players } = this.props.player; 

    return (
      <div className={this.props.classes.root}>
             <Grid container justify="center"  spacing={1}>
          {
            players.map((player) => {
              return (
                <Grid key={player._id}  item>
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
    player: state.player,
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Players));
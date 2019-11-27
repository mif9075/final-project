import React, { Component } from "react";
import Player from '../Player/Player';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import { connect } from "react-redux";

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 15,
    }
}

class SearchResult extends Component {

  render() {

    // console.log(this.props)
    // console.log(playersResults)

    let notFound = <div></div>
    let playersResults  = this.props.searchResults;

    

    if (this.props.searchResults === 404) {
        playersResults = [{notFound}]
    }

     

    return (
        <div className={this.props.classes.root}>
            
               <Grid container justify="center"  spacing={1}>
            {
                (playersResults.map((player) => {
                    return (
                      <Grid key={player.lahman_id}  item>
                        <Player {...player} />
                      </Grid>
                    )
                  }))
              
            }
            {notFound}
        </Grid>
    
        </div>
      )
    }
  }
    

const mapStateToProps = state => {
  return state.search;
};
export default connect(mapStateToProps, null)(withStyles(styles)(SearchResult));
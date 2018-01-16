import React from 'react';
import {connect} from 'react-redux';
import Gameslist from './Gameslist';
import {PropTypes} from 'prop-types';
import fetchGames from './actions';

export class Gamespage extends React.Component
{
    componentDidMount() {
        this.props.fetchGames();
    }
    render()
    {
        return(
            <div>
                <h2> Games List </h2>
            <Gameslist games =  {this.props.games} />
            </div>
        );
    }
}

Gamespage.propTypes = {
    games : PropTypes.array.isRequired,
    fetchGames : PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        games : state.games
    }
}

export default connect(mapStateToProps, {fetchGames})(Gamespage);
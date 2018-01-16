import React from 'react';
import {PropTypes} from 'prop-types';

export default function Gameslist({games}) 
{
    const emptyMsg = (
        <p>There are no messages yet.. ;-( </p>
    );

    const gamesList =(
        <p>Games List</p>
    );

    return(
        <div>
            {games.length === 0 ? emptyMsg : gamesList}
        </div>
    )
}

Gameslist.propTypes = {
    games : PropTypes.array.isRequired 
}
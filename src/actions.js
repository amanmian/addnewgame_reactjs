
export const  SET_GAMES = 'SET_GAMES'; 

export function setGames(games)
{
    type : SET_GAMES,
    games
}

export default function fetchGames()  {
    return dispatch => {
        fetch('/api/games')
        .then(res=>res.json())
        .then(data=>dispatch(setGames(data.games)));
    }
}
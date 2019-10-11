
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../states/actionCreators';

export default connect(
  
  state => state,
  actionCreators,
)(PokemonList);


export function PokemonList(props) {

  useEffect(() => {

    props.getPokemon();
  }, []);
  return (
    <>
      <h2>Welcome to Pokémon World!</h2>
      {props.rootReducer.isFetching && <p>Fetching your Pokémon</p>}
      <div>
        {props.rootReducer.pokemon.map(pokemon => (
          <h4 key={pokemon.url}>{pokemon.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.rootReducer.error}</p>}
      <button onClick={props.fetchPokemon}>Fetch Pokemon!</button>
    </>
  );
}

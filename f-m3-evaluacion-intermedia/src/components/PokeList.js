import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokeList.css';

class PokeList extends React.Component {
  render () {
    const {pokemon} = this.props;

    return (
      <ul className="PokeList">
        {pokemon.map(item => {
          return (
            <li className="ListItem" key={`poke${item.id}`}>
              <Pokemon
                image={item.url}
                name={item.name}
                types={item.types}
                evolution={item.evolution}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

PokeList.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  evolution: PropTypes.string,
}

export default PokeList;

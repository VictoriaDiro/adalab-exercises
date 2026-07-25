import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, types, evolution, image} = this.props;

    return (
      <div className="Pokemon">
        <img className="PokemonImage" src={image} alt={name}></img>
        <h2 className="PokemonName">{name}</h2>
        <ul className="PokeTypeList">
        {types.map((type, index) => {
        return (
          <li className="PokeTypeItem" key={`type${index}`}>
            {type}
          </li>
        )
        })}
      </ul>
        <h3 className="PokemonEvolution">{`Evolution: ${evolution}`}</h3>
      </div>
    );
  };
};

export default Pokemon;

Pokemon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string)
}

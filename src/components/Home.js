import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount(){
    this.getCharacters();
  }

  getCharacters(){
    const url = "https://sheetsu.com/apis/v1.0su/698c61a3ad16";
    axios.get(url).then((response => {
      this.setState({
        characters: response.data
      })
    }))
  }

  render() {
    return (
      <div>
        Homepage
        <p>this next part is brought in</p>
        {this.state.characters.map((character, index) => {
          return(
            <p index={index}><a href={character.url}>{character.name}</a> - {character.equiptment}</p>
          )
        })}
      </div>
    )
  }
}

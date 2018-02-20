import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Container from './theme/grid/Container'
import Description from './description'
import Navigation from './navigation'
import ChoixLikesDislikes from './choixLikesDislikes'
import fetch from 'node-fetch';

class DisplayLikes extends Component {

  constructor(props) {
    super(props);
  }

  

  render() {



    var rows = [];
    if (this.props.listedefavoris) {
    


      this.props.listedefavoris.forEach(function(element) {
        rows.push(<tr>  <td>{element.original_title}</td>
  		 <td>{element.overview}</td>
  		<td>{element.vote}</td><td>{element.production[0].name}</td>  </tr>)

      })
    }

    return (

      <table class="table" id="favMedia">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Tagline</th>
      <th scope="col">Note</th>
      <th scope="col">Production company</th>
    </tr>
  </thead>
  <tbody>{rows}
  
    
   
  </tbody>
</table>

      );
  }
}

export default DisplayLikes;
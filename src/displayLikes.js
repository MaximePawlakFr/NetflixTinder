import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Container from './theme/grid/Container'
import Description from './description'
import Navigation from './navigation'
import ChoixLikesDislikes from './choixLikesDislikes'
import fetch from 'node-fetch';

class displayLikes extends Component{

	 constructor(props) {
    super(props);
}


	render(){

		var rows=[];
		if (this.props.listedefavoris){
  this.props.listedefavoris.forEach(function(element){
  	rows.push(<tr>  <td>{element.original_title}</td></tr>)
  	
  })
}

		return (

			<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>{rows}
  
    
   
  </tbody>
</table>

			);
	}
}

export default displayLikes;
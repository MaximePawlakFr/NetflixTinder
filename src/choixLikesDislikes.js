import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Container from './theme/grid/Container'




class ChoixLikesDislikes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loopActive: false,
      shuffleActive: false,
    };

  }



  ajoutListeLikes() {

  	//création d'une nouvelle array pour les médias likés par l'utilisateur
    let likes = new Array();

    //s'il y a déjà des éléments dans le localStorage correspondant à des médias likés, on les récupère dans une liste
    if (localStorage.getItem("likes")) {
      let likes1 = JSON.parse(localStorage.getItem("likes"));
      likes1.forEach(function(element) {

        likes.push(element);



      })
    }
    //on envoie le médias dans la liste des médias likés
    likes.push(this.props.listedemedias[0]);
    //on retire le médias de la liste de médias 
    this.props.listedemedias.splice(0, 1);
    //crée dans le localStorage une liste de film likés
    localStorage.setItem("likes", JSON.stringify(likes));
    this.render();
    this.forceUpdate()
  }

  dislikeMedia(){

  	//le médias disliké est retiré de la liste afin de ne pas être proposé une seconde fois à l'utilisateur 
  	this.props.listedemedias.splice(0, 1);
  	this.render();
    this.forceUpdate();

  }

  render() {

    return (
      <Container>
			<div className="container">
				<div class="card mb-4 box-shadow">
	          <div class="card-header">
	            <h4 class="my-0 font-weight-normal">{this.props.listedemedias[0].original_title}</h4>
	          </div>
	          <div class="card-body">
	            <h1 class="card-title pricing-card-title">{this.props.listedemedias[0].original_title}</h1>
	            <ul class="list-unstyled mt-3 mb-4">
	              
	              <li><h3>Tagline:</h3>{this.props.listedemedias[0].tagline}</li>
	              <li><h3>Synopsis:</h3>{this.props.listedemedias[0].overview}</li>
	              <li><h3>Genre:</h3> {this.props.listedemedias[0].genre[0].name}</li>
	              <li><h3>Release:</h3>{this.props.listedemedias[0].genre[0].release}</li>
	              
	              

	              
	              
	            </ul>
	            
					    	
					    	 
					<button type="button" class="btn btn-success btn-lg btn-block" onClick={this.ajoutListeLikes.bind(this)}>Like</button>
					<button type="button" class="btn btn-danger btn-lg btn-block" onClick={this.dislikeMedia.bind(this)}>Dislike</button>
					
	        </div>
	        </div>
		</div>
		</Container>
      );
  }

}

export default ChoixLikesDislikes;
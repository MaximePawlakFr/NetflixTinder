import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Container from './theme/grid/Container'




class ChoixLikesDislikes extends Component{
	render(){

		return(
			<Container>
			<div className="container">
				<div class="card mb-4 box-shadow">
	          <div class="card-header">
	            <h4 class="my-0 font-weight-normal">Media name</h4>
	          </div>
	          <div class="card-body">
	            <h1 class="card-title pricing-card-title">Name</h1>
	            <ul class="list-unstyled mt-3 mb-4">
	              <li>medias</li>
	              <li>date de sortie</li>
	              <li>producteur</li>
	             
	            </ul>
	            
					    	
					    	 
					<button type="button" class="btn btn-success btn-lg btn-block">Like</button>
					<button type="button" class="btn btn-danger btn-lg btn-block">Dislike</button>
					
	        </div>
	        </div>
		</div>
		</Container>
		);
	}

}

export default ChoixLikesDislikes;
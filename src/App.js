import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Container from './theme/grid/Container'
import Description from './description'
import Navigation from './navigation'
import ChoixLikesDislikes from './choixLikesDislikes'
import fetch from 'node-fetch';
import DisplayLikes from './displayLikes'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;


const Wrapper = styled.section`
  padding: 4em;
  background: #f8f9fa;
`;


class App extends Component {
  static listMedia;

  constructor(props) {
    super(props);
    this.listMedia = new Array();
    this.fetchAllMedias();
  }

  // the api request function
  fetchApi(url) {

    //.push donc .add à la liste
    fetch(url).then((res) => res.json()).then((data) => {

      let likes = new Array();
      let ids = new Array();
      let dislikes = new Array();
      // update state with API data
      if (localStorage.getItem("likes")) {
        likes = JSON.parse(localStorage.getItem("likes"));
        likes.forEach(function(element) {

          ids.push(element.movieID);

        })
      }

      if (localStorage.getItem("dislikes")) {
        dislikes = localStorage.getItem("dislikes")
        dislikes.forEach(function(element) {

          ids.push(element.movieID);
        })
      }

      //on vérifie que l'objet récuoéré soit défini, et qu'il n'appartienne pas à la liste des objets déjà consultés 
      if (data.id && !ids.includes(data.id)) {
        this.listMedia.push({
          movieID: data.id,
          original_title: data.original_title,
          tagline: data.tagline,
          overview: data.overview,
          homepage: data.homepage,
          poster: data.poster_path,
          production: data.production_companies,
          production_countries: data.production_countries,
          genre: data.genres,
          release: data.release_date,
          vote: data.vote_average,
          runtime: data.runtime,
          revenue: data.revenue,
          backdrop: data.backdrop_path

        })
      }

    })
  }

  //rechercher un id de film
  fetchMovieID(movieID) {
    let url = "https://api.themoviedb.org/3/movie/" + movieID + "?&api_key=841a0ffb9ac822865af18456e63076c4";
    this.fetchApi(url)
  } // end function

  fetchAllMedias() {

    for (let i = 2; i < 50; i++) {

      this.fetchMovieID(i);
      //localStorage.setItem("film", JSON.stringify(this.fetechMovieID(i)));

    }
    let self = this;
    setTimeout(function() {

      localStorage.setItem("film", JSON.stringify(self.listMedia));
    }, 10000);
    this.render();
  }


  render() {
    // if(this.listMedia.length != 0) {
    let listMediaLS = JSON.parse(localStorage.getItem("film"));
    let likes = new Array();
    if (localStorage.getItem("likes")) {
      likes = JSON.parse(localStorage.getItem("likes"));

    }
    return (
      <div>
      <Container>
      <Navigation>
      </Navigation>
      
     <Wrapper>
    <Title>

    <h1>  Like your favs series and movies online! </h1>

    </Title>

    
    
  </Wrapper>
 
    <Description/>
      <ChoixLikesDislikes listedemedias={listMediaLS} />
      <h2> My favs medias </h2>

      <DisplayLikes listedefavoris={likes}/>
      


  </Container>

  </div>

      );
 
  }

}

export default App;

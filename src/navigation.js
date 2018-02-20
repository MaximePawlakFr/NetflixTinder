import React, { Component } from 'react';
import styled from 'styled-components';
import DisplayLikes from './displayLikes';


//component permettant d'afficher un cours menu de navigation sur l'application
class Navigation extends Component {
  render() {

    return (


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="#">Netflix Tinder</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                 <li class="nav-item active">
                    <a class="nav-link" href="#">Top Page <span class="sr-only">(current)</span></a>
                 </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#favMedia">My List</a>
                 </li>
              </ul>
              <li class="form-inline my-2 my-lg-0">
                 <p> powered by Chloé Lewandowski</p>
              </li>
           </div>
        </nav>

      );
  }

}


export default Navigation;
import React, { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { PixabayApi } from "./Fetch/fetchApi";

const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    imageName: ''
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      pixabayApi.fetchFotos(this.state.imageName);
    }
  }

  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={ this.handleFormSubmit} />
        {this.state.imageName && (<div>Привіт</div> )}
    </div>
  );}
};

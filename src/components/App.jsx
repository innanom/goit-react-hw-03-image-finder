import React, { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {
  state = {
    images: null,
  };

  componentDidMount() {
    fetch('https://pixabay.com/api/?key=35099720-4d8fe0d7f5adc4f66994afd08&q=yellow+flowers&image_type=photo')
      .then(res => res.json()
      .then(images => this.setState({images})));
  }

  render() {
    return (
      <div>
        <Searchbar/>
        {this.state.images && (<div>{this.state.images.totalHits}</div> )}
    </div>
  );}
};

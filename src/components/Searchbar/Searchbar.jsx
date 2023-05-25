import React, { Component } from 'react';

export class Searchbar extends Component {
    state = {
        imageName: ''
    }

    
  handlenameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  }

  handleSubmit = event => {
    event.preventDefault();

      if (this.state.imageName.trim() === '') {
          alert("Enter data to search");
          return;
      }

    this.props.onSubmit(this.state.imageName)
    this.setState({ imageName: '' });
  }

    render() {
        return (
            <header class="searchbar">
            <form onSubmit={this.handleSubmit} class="form">
                <button type="submit" class="button">
                <span class="button-label">Search</span>
                </button>

                <input
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search imageName and photos"
                value={this.state.imageName}
                onChange={this.handlenameChange}
                />
            </form>
</header>
        )
    }
}

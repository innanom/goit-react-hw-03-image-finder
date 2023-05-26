import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class  Searchbar extends Component {
    state = {
        searchImage: '',
    }

    
  handlenameChange = event => {
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  }

  handleSubmit = event => {
    event.preventDefault();

      if (this.state.searchImage.trim() === '') {
        toast.error("Enter data to search")
          return
      }

    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  }

    render() {
        return (
            <header className="searchbar">
            <form onSubmit={this.handleSubmit} className="form">
                <button type="submit" className="button">
               <ImSearch />
                </button>

                <input
                className="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search image and photos"
                value={this.state.searchImage}
                onChange={this.handlenameChange}
                />
            </form>
</header>
        )
    }
}

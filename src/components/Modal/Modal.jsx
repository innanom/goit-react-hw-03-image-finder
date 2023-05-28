import React, { Component } from 'react';
import css from './Modal.module.css';


export class Modal extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
        <div className={css.overlay}>
            <div class={css.modal}>
                <img src="" alt="" />
            </div>
            </div>
        )
    }
        
    
}
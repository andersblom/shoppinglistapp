import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return(
            <div>
                <h1>Homepage component here here.</h1>
                <Link to="/login">Link to /login</Link>
            </div>
        )
    }
}
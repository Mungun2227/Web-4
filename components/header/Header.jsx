import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="https://ibb.co/9HBF6jH" alt="hello"/>
                <a href="https://youtu.be/I2UBjN5ER4s" className="hidden-msg">
                    <h1>Click Me</h1>
                </a>
            </div>
        )
    }
}

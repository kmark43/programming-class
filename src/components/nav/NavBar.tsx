import './NavBar.css';
import { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/101">Python 101</a></li>
          <li><a href="/102">Python 102</a></li>
          <li><a href="/103">Python 103</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    )
  }
}

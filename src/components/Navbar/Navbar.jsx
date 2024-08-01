import { Component } from 'react'
import Logo from "./../../assets/Logo/news-80.png"
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"sticky"}}>
            <div className="container-fluid">
                <img className='mx-3' src={Logo}/>
                <Link className="navbar-brand" to="/">News Monkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to="/News-Monkey">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/News-Monkey/trending_news">Top-Trending-News</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/News-Monkey/news">News</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/News-Monkey/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

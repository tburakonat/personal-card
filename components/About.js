import React from "react"
import ReactDOM from "react-dom"

export default function About() {
    return (
        <header>
            <img className="header--image" src="https://scrimba.com/blobs/sha1:299a377034af74f7585e97ad0b56b6bc8e0def38.jpg"/>
            <h1 className="header--title">Talha Burak Onat</h1>
            <h3 className="header-subtitle">Ambitious Frontend Learner</h3>
            <div className="buttons">
                <a href="mailto:tburakonat@gmail.com" className="button-mail">
                    <img src="https://scrimba.com/blobs/sha1:c4fcaa45cfbb472c97ed494b6ef5a6df8b1ec494.png"/>
                    <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/tburakonat/" className="button-linkedin">
                    <img src="https://scrimba.com/blobs/sha1:ae5c1c066beeab74d3fe97d61be32d8f417c12c1.png"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>
    )
}
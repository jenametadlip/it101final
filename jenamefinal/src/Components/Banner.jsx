import React, { Component } from 'react'
import logo from '../Components/public/image/nami.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">
                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> JENAME TADLIP </h1>
                    <p id="paragarph1"> Student </p>
                    <p id="paragarph1"> bachelor of science in computer science </p>
                    
            </section>
        )
    }
}

export default Banner



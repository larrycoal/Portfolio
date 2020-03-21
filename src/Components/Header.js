import React from 'react'
import anime from 'animejs/lib/anime.es.js';
import '../Stylesheets/main.css'

anime({
    targets: "div .left-flex",
    translateX: 250, rotate: '1turn',
    duration: 800
});

class Header extends React.Component {

    render() {
        return (
            <div className="header-flex">
                <div className="left-flex">Olayiwola O.</div>
                <div className="right-flex">
                    <div className="top-icon">
                        <a href="https://www.twitter.com/larry_coal" className="fa fa-twitter" title="twitter"> </a>
                        <a href="https://www.linkedin.com/in/olanrewaju-olayiwola-a8055812a" className="fa fa-linkedin"> </a>
                        <a href="https://www.github.com/larrycoal" className="fa fa-github"> </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
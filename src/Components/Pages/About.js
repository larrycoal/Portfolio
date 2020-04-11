import React from 'react'
import Projects from './Projects'
import Introduction from './Introduction'

class aboutPage extends React.Component {
    state = { content: "Introduction", }

    renderContent() {
        if (this.state.content === "Introduction") {
            return <Introduction />
        } else  if (this.state.content === "Projects") {
            return <Projects />
        }
    }
    renderColor(active){
        if (this.state.content ===active ) {
            return "yellow"
        } else {
            return "white"
        }
    }

    render() {
        return (
            <div className="about-div">
                <div className="abt-navigation">
                    <div onClick={() => { this.setState({content:"Introduction"}) }} style={{ color: `${this.renderColor("Introduction")}` }}>ABOUT ME</div>
                    <div onClick={() => { this.setState({content:"Projects"}) }} style={{ color: `${this.renderColor("Projects")}` }}>PROJECTS</div>
                    <div>CONTACT</div>
                </div>
                {this.renderContent()}
            </div>
        )
    }
}
export default aboutPage
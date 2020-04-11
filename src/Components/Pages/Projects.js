import React from 'react'


const Projects = () => {
    return (
        <div className="projects-main">
            <div className="projects-head ">
                <h1>My Projects</h1>
            </div>
            <div className="projects-body ">
                <div>
                    <h1>#OKADA-BAN mailing list</h1>
                    <p>A mailing list of essential personnel from the Lagos State Governor's Office. The purpose of this app is to help 
                        individuals who wants to petition the Governor's office to reconsider the ban seamless. This app was built with React.
                    </p>
                    <div style={{fontSize:"larger"}}>
                   Visit:  <a href="https://okadaban-mailing-list.herokuapp.com/" target="parent" className="fa fa-external-link" style={{ textDecoration: "none", color: "white" }}> </a>
                   </div>
                </div>
                <div>
                <h1>#Quick-Test</h1>
                    <p>A platform for an examiner to create test,providing question and answers to the app and get a link for test takers.
                        This application isnt delpoyed yet but a link to my repository can be found below.Built with React and mongodB
                    </p>
                    <div style={{fontSize:"larger"}}>
                   Visit:  <a href="https://github.com/larrycoal/Quicktest" target="parent" className="fa fa-external-link" style={{ textDecoration: "none", color: "white" }}> </a>
                   </div>
                </div>
                <div>
                 <h1>#CALCULATOR</h1>
                    <p>A Calculator built with React
                    </p>
                    <div style={{fontSize:"larger"}}>
                   Visit:  <a href="https://claculator-lanre.herokuapp.com/" target="parent" className="fa fa-external-link" style={{ textDecoration: "none", color: "white" }}> </a>
                   </div>
                </div>
                <div>
                <h1>#Youtube-API</h1>
                    <p>A React app consuming youtube-api
                    </p>
                    <div style={{fontSize:"larger"}}>
                   Visit:  <a href="https://github.com/larrycoal/youtube_player" target="parent" className="fa fa-external-link" style={{ textDecoration: "none", color: "white" }}> </a>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
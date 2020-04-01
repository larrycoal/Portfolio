import React from 'react'


const Projects = () => {
    return (
        <div className="projects-main">
            <div className="projects-head">
                <h1>My Projects</h1>
            </div>
            <div className="projects-body">
                <div>
                    <details>
                        <summary>MailingList</summary>
                        <p>
                            A simple mailing list app built with react <br />during the proposed okadaban.
                            This app aim was to petition our goverment to re-consider the okadaban in lagos <br /></p>
                        <a target="self" href="https://okadaban-mailing-list.herokuapp.com/" class="fa fa-external-link"> </a>

                    </details>
                </div>
                <div>
                    <details>
                        <summary>Calculator</summary>
                            A calculator built with react
                            <p>
                            <a href="https://calculator-lanre.herokuapp.com/" target="self" class="fa fa-external-link"> </a>
                        </p>
                    </details>
                </div>
                <div>
                    <details>
                        <summary>QuickTest</summary>
                           Not launched yet
                            <p>
                            <i class="fa fa-external-link"></i>
                        </p>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Projects
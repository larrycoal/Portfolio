import React from 'react'
import '../Stylesheets/main.css'

const Left = () => {
    return (
        <div className="main-left">
            <div className="content">
                <h1>Hello,My Name Is Olayiwola Olanrewaju</h1>
                <h3>I Am <span className="animate"></span></h3>
                <div className="button">
                    <a className="btn btn-primary cv-btn" href="https://res.cloudinary.com/dbdrtuscd/image/upload/v1584465373/Olayiwola_cv_txtmin.pdf">
                        Download cv</a>
                    <a className="btn btn-danger" href="mailto:larry_coal@outlook.com">Mail me</a>
                </div>
            </div>
            <div class="left-footer">
                Find me at <a href="https://www.twitter.com/larry_coal">twitter</a> <a href="https://www.Github.com/larry_coal">Github</a> and <a href="https://www.Linkedln.com/larry_coal">Linkedln</a>
            </div>
        </div>
    )
}
export default Left
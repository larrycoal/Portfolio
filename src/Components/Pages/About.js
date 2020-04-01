import React from 'react'
import Projects from './Projects'

const aboutPage = () => {
    return (
        <div className="about-div">
            <div className="abt-text">
                <div className="abt-header">
                    <img src="https://res.cloudinary.com/dbdrtuscd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1584964296/Screenshot_2020-03-23_at_12.51.02_PM_uqpkvb.png" alt="avatar" />
                    <h1>ABOUT ME</h1>
                </div>
                <div className="approach">
                    <h3>Approach</h3>
                    <p>I like to work closely with design
                        teams to transform their design right down
                        to the last pixels. Daily you will find me using modern
                        frontend technologies that bring creative design to life,just as
                        designers intended them to be..
                </p>
                </div>
                <div className="technical">
                    <h3>Technical</h3>
                    <p>
                        Right now i am mastering my React skills,i work with HTML/CSS,
                        vanilla Js,jQuery,Nodejs,Express,MongoDb and React framework
                    </p>
                </div>
                <div className="personal">
                    <h3>Personal</h3>
                    <p>
                        I am Nigerian and reside in Lagos, i studied Computer science in
                        Oduduwa university and acquired my developer skills after i graduated,
                        "props to Udemy on that one". 2nd born of 4 children. Nice to meet yall!
                   </p>
                </div>
                <div className="hire">
                <a href="mailto:larry_coal@outlook.com">hire me</a>

                </div>
            </div>
            <Projects/>
        </div>
    )
}
export default aboutPage
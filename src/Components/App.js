import React from 'react'
import Header from './Header'
import LandingPage from './Pages/LandingPage'
import Footer from './Pages/Footer'
import AboutPage from './Pages/About'
import '../Stylesheets/main.css'

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="header">
                    <Header />
                </div>
                <div className="main-content">
                    <LandingPage />
                    <AboutPage/>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App
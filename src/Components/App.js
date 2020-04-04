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
                <nav className="header">
                    <Header />
                </nav>
                <div className="main-content">
                    <LandingPage />
                    <AboutPage/>
                </div>
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default App
import React from 'react'
import Header from './Header'
import LandingPage from './Pages/LandingPage'
import Footer from './Pages/Footer'
import AboutPage from './Pages/About'
import '../Stylesheets/main.css'

class App extends React.Component {
    state = { loaded: false }
    componentDidMount() {
        window.onload = () => {
            this.setState({ loaded: true })
        }
    }

    renderPage() {
        if (!this.state.loaded) {
            return <div>loading</div>
        }
        return (
            <div className="main">
                <div>
                    <nav className="header">
                        <Header />
                    </nav>
                </div>
                <div className="main-content">
                    <LandingPage />
                    <AboutPage />
                </div>
                <div>
                    <footer className="footer">
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
    render() {
        return (
        <div>{this.renderPage()}</div>
        )
           
    }
}

export default App
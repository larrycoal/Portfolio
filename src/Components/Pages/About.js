import React from 'react'
import Projects from './Projects'
import Introduction from './Introduction'

class aboutPage extends React.Component {
    state = { content: "Introduction",page:1 }

    renderContent() {
        if (this.state.page === 1) {
            return <Introduction />
        } else  if (this.state.page === 2) {
            return <Projects />
        }
    }
   nextPage(){
       this.state.page < 2 ? this.setState({page:this.state.page + 1}):this.setState({page:this.state.page})
   }
   previousPage(){
    this.state.page > 1 ? this.setState({page:this.state.page - 1}):this.setState({page:this.state.page})
   }

    render() {
        return (
            <div className="about-div">
                <div className="arrow" onClick={() => {this.previousPage()}}><i class="fa fa-angle-double-left"></i></div>
                <div>
                {this.renderContent()}
                </div>
                <div>
                <div  className="arrow"onClick={() => {this.nextPage()}}><i class="fa fa-angle-double-right"></i></div>
                </div>
            </div>
        )
    }
}
export default aboutPage
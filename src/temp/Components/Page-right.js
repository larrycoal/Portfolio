import React from 'react'
import Page1 from './profiles/page1'
import Page2 from './profiles/page2'

import '../Stylesheets/main.css'

class Right extends React.Component {
    state = {page:1}

    changePage=(num)=>{
       this.setState({page:num})
    }

    nextPage(num){
        if(num===2){
            return
        }
        this.setState({page:num+1})
    }
    previousPage(num){
        if(num===1){
            return
        }
        this.setState({page:num-1})
    }
    renderPage() {
        if(this.state.page===1){
            return (
                <Page1/>
            )
        }else if(this.state.page=== 2){
            return (
                <Page2/>
            )
        }
    }


    render() {
        return (
            <div className="main-right">
                <div>{this.renderPage()}</div>
                <div class="pagination">
                    <button onClick={()=>this.previousPage(this.state.page)}>&laquo;</button>
                    <button onClick={()=>this.changePage(1)}>1</button>
                    <button onClick={()=>this.changePage(2)}>2</button>
                    <button>3</button>
                    <button onClick={()=>this.nextPage(this.state.page)}>&raquo;</button>
                </div>
            </div>
        )
    }
}
export default Right
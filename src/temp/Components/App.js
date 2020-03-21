import React from 'react'
import Right from './Page-right'
import Left from './Page-left'
import '../Stylesheets/main.css'
const App =()=>{
    return(
        <div className="main">
            <Left/>
            <Right/>
        </div>
    )
}
export default App
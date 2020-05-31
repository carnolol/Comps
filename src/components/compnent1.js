import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import './component1.css'

function compnent1(props){


    return(
        <div className='main-comp-div'> 
           <h1>Sudo selecter example here</h1>
            <div className='purple-circle'>

            </div>
        </div>
    )
}

export default withRouter(compnent1)
import React, {Component} from 'react'
import Zone from './Zone'

class Zones extends Component {
    constructor(){
        super()

        this.state = {
            list:[
                {name:"Zone 1", zipCode:"10012", numComments:"2"},
                {name:"Zone 2", zipCode:"23456", numComments:"7"},
                {name:"Zone 3", zipCode:"20345", numComments:"6"},
                {name:"Zone 4", zipCode:"20345", numComments:"54"},
                {name:"Zone 5", zipCode:"34534", numComments:"66"},
                {name:"Zone 5", zipCode:"34534", numComments:"66"}
            ]
        }
    }

    render(){
        const listItems = this.state.list.map((zone,i) => {
            return(
                <li><Zone zone={zone}/></li>
            )
        })
        return(
            <div>
                <ul>
                    {listItems}
                </ul>
                
            </div>
        )
    }
}

export default Zones;
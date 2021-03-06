import React, {Component} from 'react'
import styles from './styles'

class Zone extends Component {
 
    render(){
        const style= styles.zone;
        return(
            <div style={style.container}>
                <h2 style={style.header}><a style={style.title} href="#">{this.props.zone.name}</a></h2>
                <span>{this.props.zone.zipCode}</span> <br/>
                <span>{this.props.zone.comments} Comments </span>
            </div>
        )
    }
}
export default Zone;
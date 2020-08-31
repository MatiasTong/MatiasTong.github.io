import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'


class Like extends React.Component {

    render(){
        let heart = faHeart;
        if (this.props.liked === true) {heart = faHeartSolid}; 

        return(
                <FontAwesomeIcon style = {{cursor:"pointer"}}onClick = {this.props.onToggle} icon={heart} />
        )
    }
    
}

export default Like;
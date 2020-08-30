import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'


class Like extends React.Component {

    render(){
        return(
            <div>
                <FontAwesomeIcon icon={faHeartSolid} />
            </div>
        )
    }
    
}

export default Like;
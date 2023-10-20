import React from "react";

import '../styles/popup_styles.css'

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="close-icon colors" onClick={props.handleClose}>X</button>
                {props.content}
            </div>
        </div>
    )
}

export default Popup;
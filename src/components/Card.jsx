import React from "react"
import Avatar from "./Avater";

function Card(props) {
    return (
        <div className="card-body">
            <div className="header">
                <h1 className='name'>{props.name}</h1>
            </div>
            <div className="content">
                <p className="phone-num">
                    {props.phone}
                </p>
                <p className="mai">
                    {props.mail}
                </p>
            </div>
            <div className="image">
                <Avatar image={props.image}/>
            </div>
        </div>
    );
}

export default Card;
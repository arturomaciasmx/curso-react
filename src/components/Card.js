import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImage from '../images/empty.png'
import './styles/Card.css'

const Card = ({ title, description, img, leftColor, rightColor }) => (

    <div className="card mx-auto my-4 Fitness-Card"
        style={{
            backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#090979'}, ${rightColor || '#00d4ff'})`
        }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={img || emptyImage} className="float-right" />
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>

)

export default Card
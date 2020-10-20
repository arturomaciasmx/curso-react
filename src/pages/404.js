import React from 'react'
import '../components/styles/Errors.css'
import NotFoundErrorImg from '../images/404.png'

const NotFoundError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 404 Unexpected Error</h1>
        <img src={NotFoundErrorImg} alt="404 Unexpected Error" className="Error_Image" />
    </div>
)

export default NotFoundError
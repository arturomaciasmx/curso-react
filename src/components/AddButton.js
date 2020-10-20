import React from 'react'
import AddImg from '../images/add.png'
import { Link } from 'react-router-dom'
import './styles/AddExercise.css'

const AddButton = () => (
    <div>
        <Link to="/exercise/new">
            <img src={AddImg}  className="Fitness-Add "/>
        </Link>
    </div>
)

export default AddButton
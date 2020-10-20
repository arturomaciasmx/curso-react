import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'

const Exercises = ({ data }) => {
    return (
        <React.Fragment>
            <Welcome
                userName="Joel"
            />

            <ExerciseList
                exercises={data}
            />

        </React.Fragment >
    )
}

export default Exercises
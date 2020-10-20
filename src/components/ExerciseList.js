import React from 'react'
import Card from './Card'
import AddButton from './AddButton'

const ExerciseList = ({ exercises }) => (
    <React.Fragment>
        {
            exercises.map((exercise) => (
                <Card
                    key={exercise.id}
                    {...exercise}
                />
            )
            )
        }
        <AddButton />
    </React.Fragment>

)


export default ExerciseList
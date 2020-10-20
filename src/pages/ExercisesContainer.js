import React from 'react'
import Loading from '../components/Loading'
import url from '../config'
import useFetch from '../hooks/useFetch'
import FatalError from '../pages/500'
import Exercises from '../pages/Exercises'

const ExercisesContainer = () => {

    const { data, loading, error } = useFetch(`${url}/exercises`)

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <Exercises
            data={data} />
    )
}

// class ExercisesContainer extends React.Component {
//     state = {
//         data: [],
//         loading: true,
//         error: null
//     }

//     async componentDidMount() {
//         await this.fetchExercises()
//     }

//     async fetchExercises() {
//         try {
//             let res = await fetch('http://localhost:8000/api/exercises')
//             let data = await res.json()

//             this.setState({
//                 data,
//                 loading: false,
//                 error: null
//             })
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }
//     }

//     render() {
//         if (this.state.loading)
//             return <Loading />

//         return (
//             <Exercises
//                 data={this.state.data} />
//         )
//     }
// }

export default ExercisesContainer
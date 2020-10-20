import React from 'react'
import Loading from '../components/Loading'
import url from '../config'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'

class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        loading: false
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()

        this.setState({
            loading: true
        })

        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${url}/exercises`, config)
            let json = await res.json()

            this.setState({
                loading: false
            })

            this.props.history.push('/exercise')

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading)
            return <Loading />
        if (this.state.error)
            return <FatalError />
        return (
            <ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default ExerciseNewContainer
//Use of props.
import PropTypes from 'prop-types'

function NewStudents(props) {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>School : {props.school}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

NewStudents.propTypes = {
    name : PropTypes.string,
    school : PropTypes.string,
    age : PropTypes.number
}

export default NewStudents

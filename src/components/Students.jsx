// Use of the props.
import PropTypes from 'prop-types'

function Students(props) {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>School : {props.school}</p>
            <p>County : {props.county}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

Students.propTypes = {
    name : PropTypes.string,
    school : PropTypes.string,
    county : PropTypes.string,
    age : PropTypes.number
}

export default Students

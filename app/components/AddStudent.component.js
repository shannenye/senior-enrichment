import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postStudent, fetchStudents} from '../reducers/studentListReducer';
import { fetchCampuses } from '../reducers/campuslistReducer';


class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
            campusId: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleGPA = this.handleGPA.bind(this);
        this.handleCampus = this.handleCampus.bind(this);
    }
    componentDidMount() {
        this.props.loadCampuses();
    }

    handleSubmit(event) {
        console.log("this is handleSubmit")
        event.preventDefault();
        this.props.postAStudent(event, this.state)
    }

    handleFirstName(event) {
        this.setState({firstName: event.target.value})
    }

    handleLastName(event) {
        this.setState({lastName: event.target.value})
    }

    handleEmail(event) {
        this.setState({email: event.target.value})
    }

    handleGPA(event) {
        this.setState({gpa: event.target.value})
    }

    handleCampus(event) {
        this.setState({campusId: event.target.value})
    }

    render() {
        return (
            <form id="form2" onSubmit={this.handleSubmit}>
                <h2>Add Student</h2>
                <div>
                <label>First Name: </label>
                <input
                type="text"
                onChange={this.handleFirstName}
                name="firstName"
                placeholder="First Name"
                />
                </div>

                <div>
                <label>Last Name: </label>
                <input
                type="text"
                onChange={this.handleLastName}
                name="lastName"
                placeholder="Last Name"
                />
                </div>

                <div>
                <label>Email: </label>
                <input
                type="text"
                onChange={this.handleEmail}
                name="email"
                placeholder="email-name-here@random.com"
                />
                </div>

                <div>
                <label>GPA: </label>
                <input
                type="text"
                onChange={this.handleGPA}
                name="gpa"
                placeholder="GPA"
                />
                </div>

                <div>
                <label>Campus Name: </label>
                <select
                name="campus"
                required
                onChange={this.handleCampus}
                >
                {
                    this.props.campuses.map(campus => (
                        <option key={campus.id} value={campus.id}>{campus.name}</option>
                    ))
                }
                </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


function mapStateToProps(storeState) {
    return {
        studentToAdd: {},
        campuses: storeState.campuses.campusList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postAStudent: function(event, student) {
            console.log("this is postAStudent")
            dispatch(postStudent(student))
        },
        loadStudents: function() {
            dispatch(fetchStudents())
        },
        loadCampuses: function() {
            dispatch(fetchCampuses())
        }
    }
}

const addStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent)

export default addStudentContainer;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateStudent, fetchSingleStudent} from '../reducers/studentListReducer';
import {fetchCampuses} from '../reducers/campuslistReducer';

class UpdateStudent extends Component {
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
        event.preventDefault();
        let updatedStudent = {
            firstName: (this.state.firstName) ? this.state.firstName : this.props.singleStudent.firstName,
            lastName: (this.state.lastName) ? this.state.lastName : this.props.singleStudent.lastName,
            email: (this.state.email) ? this.state.email : this.props.singleStudent.email,
            gpa: (this.state.gpa) ? this.state.gpa : this.props.singleStudent.gpa,
            campusId: (this.state.campusId) ? this.state.campusId : this.props.singleStudent.campusId,
        }
        console.log("im in handleSubmit")
        this.props.updatedStudent(updatedStudent, this.props.singleStudent.id)
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
                <h2>Edit Student Profile</h2>

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
                placeholder="Select Campus"
                >
                {
                    this.props.campusList.map(campus => (
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
        campusList: storeState.campuses.campusList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatedStudent: function(info, id) {
            // console.log("this is info: ", info)
            // console.log("this is id: ", ownProps.history)
            dispatch(updateStudent(info, id))
        },
        loadCampuses: function() {
            dispatch(fetchCampuses())
        },
        loadStudent: function(id) {
            dispatch(fetchSingleStudent(id))
        }
    }
}

const updateStudentContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);

export default updateStudentContainer;

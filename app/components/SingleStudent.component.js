import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {fetchSingleStudent} from '../reducers/studentListReducer';

class SingleStudent extends Component{

    componentDidMount() {
        this.props.loadSingleStudent(this.props.match.params.id);
    }

    render () {
        const person = this.props.singleStudent;
            return (
                <ul>
                    <li>{person.firstName}</li>
                    <li>{person.lastName}</li>
                    <li>{person.email}</li>
                    <li>{person.gpa}</li>
                    <li>
                    <NavLink to={`/campuses/${person.campusId}`}>CAMPUS NAME SHOULD BE HERE</NavLink>
                    </li>
                </ul>
            )
        }
}

function mapStateToProps(storeState) {
    return {
        singleStudent: storeState.students.singleStudent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadSingleStudent: function(id) {
            dispatch(fetchSingleStudent(id))
        }
    }
}


const singleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default singleStudentContainer;


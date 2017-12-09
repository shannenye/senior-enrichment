import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchStudents} from '../reducers/studentListReducer';


class StudentList extends Component {

  componentWillMount() {
    this.props.loadStudents();
  }

  render() {
        // console.log(this.props.students[0])
        return (
            <div>
                <h3 id='students-name'>Students</h3>
                <ul>
                {
                    this.props.students.map(student => (
                        <li key={student.id}>
                            <span> {student.id} </span>
                        <NavLink to={`/students/${student.id}`} >
                            <span> {student.name} </span>
                        </NavLink>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(storeState) {
    return {
        students: storeState.students.studentList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadStudents: function() {
            dispatch(fetchStudents())
        }
    }
}

const studentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)

export default studentListContainer;
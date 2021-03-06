import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchStudents, deleteStudent } from '../reducers/studentListReducer';
import AddStudent from './AddStudent.component';

class StudentList extends Component {

    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

  componentDidMount() {
    this.props.loadStudents();
  }

  handleDelete(id) {
    this.props.removeStudent(id);
  }

  render() {

        return (
            <div className="students-list-comp">
                <h4 id="students-name">Students</h4>
                <ul>
                {
                    this.props.students.map(student => (
                        <li key={student.id}>
                        <NavLink to={`/students/${student.id}`} >
                        <span> {student.name} </span>
                        </NavLink>

                        <NavLink to={`/campuses/${student.campus.id}`}>
                            <span> {student.campus.name} </span>
                        </NavLink>

                        <span> {student.id} </span>




                        <button onClick={() => (this.handleDelete(student.id))}>X</button>

                        </li>
                    ))
                }
                </ul>
                <AddStudent />
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
        },
        removeStudent: function(id) {
            dispatch(deleteStudent(id))
        }
    }
}

const studentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)

export default studentListContainer;
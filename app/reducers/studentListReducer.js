import axios from 'axios';

const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

export const gotStudents = (studentList) => {
    return {type: GOT_STUDENTS, studentList}
}

export const gotSingleStudent = (singleStudent) => {
    return {type: GOT_SINGLE_STUDENT, singleStudent}
}

export const deleteSelectedStudent = (studentId) => {
    return {type: DELETE_STUDENT, studentId}
}

export const createStudent = (student) => {
    return {type: CREATE_STUDENT, student}
}

export const fetchStudents = () => {
    return function (dispatch) {
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => dispatch(gotStudents(students)))
    }
}

export const fetchSingleStudent = (id) => {
    return function (dispatch) {
        axios.get(`/api/students/${id}`)
        .then(res => res.data)
        .then(singleStudent => dispatch(gotSingleStudent(singleStudent)))
    }
}

export const deleteStudent = (id) => {
    return function(dispatch) {
        // console.log('you are in axios')
        axios.delete(`/api/students/${id}`)
        .then(res => res.data)
        .then(() => dispatch(deleteSelectedStudent(id)))
        // .then(() => console.log('Student was deleted!'))
    }
}

export const postStudent = (student) => {
    console.log("this is running in axios.post: ", student)
    return function(dispatch) {
        axios.post(`/api/students`, student)
        .then(res => res.data)
        .then(newStudent => dispatch(gotSingleStudent(newStudent)))
    }
}

const initialState = {
    studentList: [],
    singleStudent: []
};

export default function studentListReduer(state = initialState, action) {
    switch (action.type) {
        case GOT_STUDENTS:
            // return action.allStudents
            return Object.assign({}, state, {studentList: action.studentList})
        case GOT_SINGLE_STUDENT:
            // return action.singleStudent
            return Object.assign({}, state, {singleStudent: action.singleStudent})
        case DELETE_STUDENT:
            return Object.assign({}, state, {studentList: state.studentList.filter(student => student.id !== action.studentId)})
        case CREATE_STUDENT:
            return Object.assign({}, state, {studentList: state.studentList.concat(action.singleStudent)})
        default:
            return state;
    }
}

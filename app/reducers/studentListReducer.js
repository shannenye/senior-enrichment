import axios from 'axios';

const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT';
const initialState = {
    studentList: [],
    singleStudent: {}
};

export const gotStudents = (studentList) => {
    return {type: GOT_STUDENTS, studentList}
}

export const gotSingleStudent = (singleStudent) => {
    return {type: GOT_SINGLE_STUDENT, singleStudent}
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


export default function studentListReduer(state = initialState, action) {
    switch (action.type) {
        case GOT_STUDENTS:
            // return action.allStudents
            return Object.assign({}, state, {studentList: action.studentList})
        case GOT_SINGLE_STUDENT:
            // return action.singleStudent
            return Object.assign({}, state, {singleStudent: action.singleStudent})
        default:
            return state;
    }
}

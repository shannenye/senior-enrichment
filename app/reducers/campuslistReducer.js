// import CampusList from '../components/CampusList.component';
import axios from 'axios';

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_SINGLE_CAMPUS = 'GOT_SINGLE_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


export const gotCampuses = (campusList) => {
    return {type: GOT_CAMPUSES, campusList}
}

export const gotSingleCampus = (singleCampus) => {
    return {type: GOT_SINGLE_CAMPUS, singleCampus}
}

export const deleteSelectedCampus = (campusId) => {
    return {type: DELETE_CAMPUS, campusId}
}

export const createCampus = (campus) => {
    return {type: CREATE_CAMPUS, campus}
}
export const updateSelectedCampus = (updatedCampus) => {
    return {type: UPDATE_CAMPUS, updatedCampus}
}

export const fetchCampuses = () => {
    return function(dispatch) {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => dispatch(gotCampuses(campuses)))
    }
}

export const fetchSingleCampus = (id) => {
    return function(dispatch) {
        axios.get(`/api/campuses/${id}`)
        .then(res => res.data)
        .then(singleCampus => dispatch(gotSingleCampus(singleCampus)))
    }
}

export const deleteCampus = (id) => {
    return function(dispatch) {
        axios.delete(`/api/campuses/${id}`)
        .then(res => res.data)
        .then(() => dispatch(deleteSelectedCampus(id)))
    }
}

export const postCampus = (campus) => {
    return function(dispatch) {
        // console.log("this is campus: ", campus)
        axios.post(`/api/campuses`, campus)
        .then(res => res.data)
        .then(newCampus => dispatch(gotSingleCampus(newCampus)))
    }
}
export const updateCampus = (info, id) => {
    console.log("entering thunky: ", id, info)
    return function(dispatch) {
        axios.put(`/api/campuses/${id}`, info)
        .then(res => {
            console.log("exiting thunk: ", res.data)
            dispatch(updateSelectedCampus(res.data))
        })
    }
}


const initialState = {
    campusList: [],
    singleCampus: []
}

export default function campusListReducer(state = initialState, action) {
    switch (action.type) {
        case GOT_CAMPUSES:
            return Object.assign({}, state, {campusList: action.campusList})
        case GOT_SINGLE_CAMPUS:
            return Object.assign({}, state, {singleCampus: action.singleCampus})
        case DELETE_CAMPUS:
            return Object.assign({}, state, {campusList: state.campusList.filter(campus => campus.id !== action.campusId)})
        case CREATE_CAMPUS:
            return Object.assign({}, state, {campusList: state.campusList.concat(action.campus)})
        case UPDATE_CAMPUS:
            console.log('action: ',action)
            return Object.assign({}, state, {campusList: state.campusList.map(campus => (campus.id === action.updatedCampus.id) ? action.updatedCampus: campus)}, {singleCampus: action.updatedCampus})
        default:
            return state;
    }
}


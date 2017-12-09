// import CampusList from '../components/CampusList.component';
import axios from 'axios';

const GOT_CAMPUSES = "GOT_CAMPUSES";
// const GOT_SINGLE_CAMPUS = "GOT_SINGLE_CAMPUS";

export const gotCampuses = (campuses) => {
    return {type: GOT_CAMPUSES, campuses}
}

export const fetchCampuses = () => {
    return function(dispatch) {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => dispatch(gotCampuses(campuses)) )
    }
}


export default function campusListReducer(state = [], action) {
    switch (action.type) {
        case GOT_CAMPUSES:
            return action.campuses;
        default:
            return state;
    }
}

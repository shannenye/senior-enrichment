import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCampuses, deleteCampus } from '../reducers/campuslistReducer';
import AddCampus from './AddCampus.component';

class CampusList extends Component {

    componentDidMount() {
        this.props.loadCampuses();
    }

    handleDelete(id) {
        this.props.removeCampus(id)
    }

    render() {
        return (
            <div>
                <AddCampus />
                <ol>
                {
                    this.props.campuses.map(campus => (
                        <div key={campus.id}>
                            <li>
                                <NavLink to={`/campuses/${campus.id}`}>{campus.name}
                                    <img src={campus.imageUrl} />
                                </NavLink>
                            <button onClick={() => this.handleDelete(campus.id)}>X</button>
                            </li>
                        </div>
                    ))
                }
                </ol>
            </div>
        )
    }
}

function mapStateToProps (storeState) {
    return {
        campuses: storeState.campuses.campusList
    };
}
function mapDispatchToProps (dispatch) {
    return {
        loadCampuses: function () {
            dispatch(fetchCampuses())
        },
        removeCampus: function (id) {
            dispatch(deleteCampus(id))
        }
    }
}

const campusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);

export default campusListContainer;




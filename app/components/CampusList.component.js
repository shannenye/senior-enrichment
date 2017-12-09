import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {fetchCampuses} from '../reducers/campuslistReducer';
import {connect} from 'react-redux';

class CampusList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       campuses: []
//     }
//   }

//   componentDidMount() {
//     axios.get('/api/campuses')
//     .then(res => res.data)
//     .then(campuses => this.setState({campuses}))
//   }
    componentDidMount() {
        this.props.loadCampuses(this.props.match.params.id);
    }

  render() {
    //   console.log("this is running", this.props)
    if (this.props.campuses) {
        // console.log(this.props.campuses)
        return (

            <div>
                <ol>
                {
                    this.props.campuses.map(campus => (
                        <li key={campus.id}>
                        <NavLink to={`/campuses/${campus.id}`}>{campus.name}
                        <img src={campus.imageUrl} />
                        </NavLink>
                        </li>
                    ))
                }
                </ol>
            </div>
        )}
    return null
    }
}

function mapStateToProps (storeState) {
    return {
        campuses: storeState.campuses
    };
}
function mapDispatchToProps (dispatch) {
    return {
        loadCampuses: function (id) {
            dispatch(fetchCampuses(id))
        }
    }
}

const campusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);

export default campusListContainer;



